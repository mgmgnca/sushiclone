"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3BaseProvider = exports.NUMBER_OF_SURROUNDING_TICKS = void 0;
const index_js_1 = require("../../abi/index.js");
const index_js_2 = require("../../config/index.js");
const index_js_3 = require("../../pool/index.js");
const index_js_4 = require("../../tines/index.js");
const get_currency_combinations_js_1 = require("../get-currency-combinations.js");
const index_js_5 = require("../pool-codes/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
exports.NUMBER_OF_SURROUNDING_TICKS = 1000; // 10% price impact
const getActiveTick = (tickCurrent, feeAmount) => typeof tickCurrent === 'number' && feeAmount
    ? Math.floor(tickCurrent / index_js_2.TICK_SPACINGS[feeAmount]) *
        index_js_2.TICK_SPACINGS[feeAmount]
    : undefined;
const bitmapIndex = (tick, tickSpacing) => {
    return Math.floor(tick / tickSpacing / 256);
};
class UniswapV3BaseProvider extends LiquidityProvider_js_1.LiquidityProvider {
    poolsByTrade = new Map();
    pools = new Map();
    blockListener;
    unwatchBlockNumber;
    isInitialized = false;
    factory = {};
    initCodeHash = {};
    tickLens = {};
    constructor(chainId, web3Client, factory, initCodeHash, tickLens, isTest = false) {
        super(chainId, web3Client, isTest);
        this.factory = factory;
        this.initCodeHash = initCodeHash;
        this.tickLens = tickLens;
        if (!(chainId in this.factory) ||
            !(chainId in this.initCodeHash) ||
            !(chainId in tickLens)) {
            throw new Error(`${this.getType()} cannot be instantiated for chainid ${chainId}, no factory or initCodeHash`);
        }
    }
    async fetchPoolsForToken(t0, t1, excludePools) {
        let staticPools = this.getStaticPools(t0, t1);
        if (excludePools)
            staticPools = staticPools.filter((p) => !excludePools.has(p.address));
        const slot0 = await this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: staticPools.map((pool) => ({
                address: pool.address,
                chainId: this.chainId,
                abi: [
                    {
                        inputs: [],
                        name: 'slot0',
                        outputs: [
                            {
                                internalType: 'uint160',
                                name: 'sqrtPriceX96',
                                type: 'uint160',
                            },
                            { internalType: 'int24', name: 'tick', type: 'int24' },
                            {
                                internalType: 'uint16',
                                name: 'observationIndex',
                                type: 'uint16',
                            },
                            {
                                internalType: 'uint16',
                                name: 'observationCardinality',
                                type: 'uint16',
                            },
                            {
                                internalType: 'uint16',
                                name: 'observationCardinalityNext',
                                type: 'uint16',
                            },
                            {
                                internalType: 'uint8',
                                name: 'feeProtocol',
                                type: 'uint8',
                            },
                            { internalType: 'bool', name: 'unlocked', type: 'bool' },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                    },
                ],
                functionName: 'slot0',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - INIT: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const existingPools = [];
        staticPools.forEach((pool, i) => {
            if (slot0 === undefined || !slot0[i])
                return;
            const sqrtPriceX96 = slot0[i].result?.[0];
            const tick = slot0[i].result?.[1];
            if (!sqrtPriceX96 || sqrtPriceX96 === 0n || typeof tick !== 'number')
                return;
            const activeTick = getActiveTick(tick, pool.fee);
            if (typeof activeTick !== 'number')
                return;
            existingPools.push({
                ...pool,
                sqrtPriceX96,
                activeTick,
            });
        });
        if (existingPools.length === 0)
            return;
        const liquidityContracts = this.client.multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: existingPools.map((pool) => ({
                chainId: this.chainId,
                address: pool.address,
                abi: [
                    {
                        inputs: [],
                        name: 'liquidity',
                        outputs: [
                            { internalType: 'uint128', name: '', type: 'uint128' },
                        ],
                        stateMutability: 'view',
                        type: 'function',
                    },
                ],
                functionName: 'liquidity',
            })),
        });
        const token0Contracts = this.client.multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: existingPools.map((pool) => ({
                chainId: this.chainId,
                address: pool.token0.wrapped.address,
                args: [pool.address],
                abi: index_js_1.erc20Abi,
                functionName: 'balanceOf',
            })),
        });
        const token1Contracts = this.client.multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: existingPools.map((pool) => ({
                chainId: this.chainId,
                address: pool.token1.wrapped.address,
                args: [pool.address],
                abi: index_js_1.erc20Abi,
                functionName: 'balanceOf',
            })),
        });
        const minIndexes = existingPools.map((pool) => bitmapIndex(pool.activeTick - exports.NUMBER_OF_SURROUNDING_TICKS, index_js_2.TICK_SPACINGS[pool.fee]));
        const maxIndexes = existingPools.map((pool) => bitmapIndex(pool.activeTick + exports.NUMBER_OF_SURROUNDING_TICKS, index_js_2.TICK_SPACINGS[pool.fee]));
        const wordList = existingPools.flatMap((pool, i) => {
            const minIndex = minIndexes[i];
            const maxIndex = maxIndexes[i];
            return Array.from({ length: maxIndex - minIndex + 1 }, (_, i) => minIndex + i).flatMap((j) => ({
                chainId: this.chainId,
                address: this.tickLens[this.chainId],
                args: [pool.address, j],
                abi: index_js_1.tickLensAbi,
                functionName: 'getPopulatedTicksInWord',
                index: i,
            }));
        });
        const ticksContracts = this.client.multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: wordList,
        });
        const [liquidityResults, token0Balances, token1Balances, tickResults] = await Promise.all([
            liquidityContracts,
            token0Contracts,
            token1Contracts,
            ticksContracts,
        ]);
        const ticks = [];
        tickResults.forEach((t, i) => {
            const index = wordList[i].index;
            ticks[index] = (ticks[index] || []).concat(t.result || []);
        });
        const transformedV3Pools = [];
        existingPools.forEach((pool, i) => {
            if (!liquidityResults?.[i] ||
                !token0Balances?.[i].result ||
                !token1Balances?.[i].result)
                return;
            const balance0 = token0Balances[i].result;
            const balance1 = token1Balances[i].result;
            const liquidity = liquidityResults[i].result;
            if (balance0 === undefined ||
                balance1 === undefined ||
                liquidity === undefined)
                return;
            const poolTicks = ticks[i].map((tick) => ({
                index: tick.tick,
                DLiquidity: tick.liquidityNet,
            })).sort((a, b) => a.index - b.index);
            const lowerUnknownTick = minIndexes[i] * index_js_2.TICK_SPACINGS[pool.fee] * 256 - index_js_2.TICK_SPACINGS[pool.fee];
            console.assert(poolTicks.length === 0 || lowerUnknownTick < poolTicks[0].index, 'Error 236: unexpected min tick index');
            poolTicks.unshift({
                index: lowerUnknownTick,
                DLiquidity: 0n,
            });
            const upperUnknownTick = (maxIndexes[i] + 1) * index_js_2.TICK_SPACINGS[pool.fee] * 256;
            console.assert(poolTicks[poolTicks.length - 1].index < upperUnknownTick, 'Error 244: unexpected max tick index');
            poolTicks.push({
                index: upperUnknownTick,
                DLiquidity: 0n,
            });
            //console.log(pool.fee, TICK_SPACINGS[pool.fee], pool.activeTick, minIndexes[i], maxIndexes[i], poolTicks)
            const v3Pool = new index_js_4.UniV3Pool(pool.address, pool.token0, pool.token1, pool.fee / 1000000, balance0, balance1, pool.activeTick, liquidity, pool.sqrtPriceX96, poolTicks);
            const pc = new index_js_5.UniV3PoolCode(v3Pool, this.getType(), this.getPoolProviderName());
            transformedV3Pools.push(pc);
            this.pools.set(pool.address.toLowerCase(), pc);
        });
        this.poolsByTrade.set(this.getTradeId(t0, t1), transformedV3Pools.map((pc) => pc.pool.address.toLowerCase()));
    }
    getStaticPools(t1, t2) {
        const currencyCombinations = (0, get_currency_combinations_js_1.getCurrencyCombinations)(this.chainId, t1, t2);
        const allCurrencyCombinationsWithAllFees = currencyCombinations.reduce((list, [tokenA, tokenB]) => {
            if (tokenA !== undefined && tokenB !== undefined) {
                return list.concat([
                    [tokenA, tokenB, index_js_2.SushiSwapV3FeeAmount.LOWEST],
                    [tokenA, tokenB, index_js_2.SushiSwapV3FeeAmount.LOW],
                    [tokenA, tokenB, index_js_2.SushiSwapV3FeeAmount.MEDIUM],
                    [tokenA, tokenB, index_js_2.SushiSwapV3FeeAmount.HIGH],
                ]);
            }
            return [];
        }, []);
        const filtered = [];
        allCurrencyCombinationsWithAllFees.forEach(([currencyA, currencyB, feeAmount]) => {
            if (currencyA && currencyB && feeAmount) {
                const tokenA = currencyA.wrapped;
                const tokenB = currencyB.wrapped;
                if (tokenA.equals(tokenB))
                    return;
                filtered.push(tokenA.sortsBefore(tokenB)
                    ? [tokenA, tokenB, feeAmount]
                    : [tokenB, tokenA, feeAmount]);
            }
        });
        return filtered.map(([currencyA, currencyB, fee]) => ({
            address: (0, index_js_3.computeSushiSwapV3PoolAddress)({
                factoryAddress: this.factory[this.chainId],
                tokenA: currencyA.wrapped,
                tokenB: currencyB.wrapped,
                fee,
                initCodeHashManualOverride: this.initCodeHash[this.chainId],
            }),
            token0: currencyA,
            token1: currencyB,
            fee,
        }));
    }
    startFetchPoolsData() {
        this.stopFetchPoolsData();
        // this.topPools = new Map()
        this.unwatchBlockNumber = this.client.watchBlockNumber({
            onBlockNumber: (blockNumber) => {
                this.lastUpdateBlock = Number(blockNumber);
                // if (!this.isInitialized) {
                //   this.initialize()
                // } else {
                //   this.updatePools()
                // }
            },
            onError: (error) => {
                console.error(`${this.getLogPrefix()} - Error watching block number: ${error.message}`);
            },
        });
    }
    getCurrentPoolList() {
        // const tradeId = this.getTradeId(t0, t1)
        // const poolsByTrade = this.poolsByTrade.get(tradeId) ?? []
        // return poolsByTrade
        //   ? Array.from(this.pools)
        //       .filter(([poolAddress]) => poolsByTrade.includes(poolAddress))
        //       .map(([, p]) => p)
        //   : []
        return Array.from(this.pools.values());
    }
    stopFetchPoolsData() {
        if (this.unwatchBlockNumber)
            this.unwatchBlockNumber();
        this.blockListener = undefined;
    }
}
exports.UniswapV3BaseProvider = UniswapV3BaseProvider;
//# sourceMappingURL=UniswapV3Base.js.map