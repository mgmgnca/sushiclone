"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TridentProvider = exports.convertToNumbers = void 0;
const date_fns_1 = require("date-fns");
const index_js_1 = require("../../abi/index.js");
const index_js_2 = require("../../config/index.js");
const index_js_3 = require("../../tines/index.js");
const api_js_1 = require("../lib/api.js");
const index_js_4 = require("../pool-codes/index.js");
const Trident_js_1 = require("../static-pool-fetcher/Trident.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
function convertToNumbers(arr) {
    return arr.map((a) => {
        if (a === undefined)
            return undefined;
        return parseInt(a.toString(16), 16);
    });
}
exports.convertToNumbers = convertToNumbers;
class TridentProvider extends LiquidityProvider_js_1.LiquidityProvider {
    // Need to override for type narrowing
    //chainId: Extract<ChainId, BentoBoxChainId & TridentChainId>
    TOP_POOL_SIZE = 155;
    TOP_POOL_LIQUIDITY_THRESHOLD = 1000;
    ON_DEMAND_POOL_SIZE = 20;
    REFRESH_INITIAL_POOLS_INTERVAL = 60; // SECONDS
    isInitialized = false;
    topClassicPools = new Map();
    topStablePools = new Map();
    onDemandClassicPools = new Map();
    onDemandStablePools = new Map();
    poolsByTrade = new Map();
    availablePools = new Map();
    bridges = new Map();
    bentoBox = index_js_2.BENTOBOX_ADDRESS;
    constantProductPoolFactory = index_js_2.TRIDENT_CONSTANT_POOL_FACTORY_ADDRESS;
    stablePoolFactory = index_js_2.TRIDENT_STABLE_POOL_FACTORY_ADDRESS;
    latestPoolCreatedAtTimestamp = new Date();
    discoverNewPoolsTimestamp = (0, date_fns_1.getUnixTime)((0, date_fns_1.add)(Date.now(), { seconds: this.REFRESH_INITIAL_POOLS_INTERVAL }));
    refreshAvailablePoolsTimestamp = (0, date_fns_1.getUnixTime)((0, date_fns_1.add)(Date.now(), { seconds: this.FETCH_AVAILABLE_POOLS_AFTER_SECONDS }));
    blockListener;
    unwatchBlockNumber;
    constructor(chainId, web3Client, isTest = false) {
        super(chainId, web3Client, isTest);
        this.chainId = chainId;
        if (!(chainId in this.bentoBox) ||
            !(chainId in this.constantProductPoolFactory) ||
            !(chainId in this.stablePoolFactory)) {
            throw new Error(`${this.getType()} cannot be instantiated for chainId ${chainId}, no bentobox address found`);
        }
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.Trident;
    }
    getPoolProviderName() {
        return 'Trident';
    }
    async initialize() {
        // TODO: retry logic, every X seconds? dont flag as true until the end of the function ideally. add isInitalizing? to avoid it being called twice before completed.
        this.isInitialized = true;
        const availablePools = await this.getInitialPools();
        //console.debug(`${this.getLogPrefix()} - TOTAL POOLS: ${availablePools.size}`)
        this.availablePools = availablePools;
        // TODO: generate pools from a list of tokens, exclude if they are included in the list above, multicall to see if the rest exist, keep the pools that exist.
        const topPools = (0, api_js_1.filterTopPools)(Array.from(availablePools.values()), this.TOP_POOL_SIZE);
        if (topPools.length > 0) {
            //console.debug(`${this.getLogPrefix()} - INIT: top pools found: ${topPools.length}`)
        }
        else {
            //console.debug(`${this.getLogPrefix()} - INIT: NO pools found.`)
            //return []
        }
        await this.initPools(topPools);
        // console.debug(
        //   `${this.getLogPrefix()} - INIT, WATCHING ${this.topClassicPools.size} CLASSIC AND ${
        //     this.topStablePools.size
        //   } STABLE POOLS`
        // )
    }
    async getInitialPools() {
        return new Map();
    }
    async initPools(pools) {
        const classicPools = pools.filter((p) => p.type === 'CONSTANT_PRODUCT_POOL');
        const stablePools = pools.filter((p) => p.type === 'STABLE_POOL');
        const sortedTokens = this.poolResponseToSortedTokens(pools);
        const classicReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: pools.map((pool) => ({
                address: pool.address,
                chainId: this.chainId,
                abi: index_js_1.getReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - INIT: multicall failed, message: ${e.message}`);
        });
        const stableReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: stablePools.map((p) => ({
                address: p.address,
                chainId: this.chainId,
                abi: index_js_1.getStableReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - INIT: multicall failed, message: ${e.message}`);
        });
        const totalsPromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: sortedTokens.map((t) => ({
                args: [t.address],
                address: this.bentoBox[this.chainId],
                chainId: this.chainId,
                abi: index_js_1.totalsAbi,
                functionName: 'totals',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - INIT: multicall failed, message: ${e.message}`);
        });
        const balancesPromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: sortedTokens.map((t) => ({
                args: [this.bentoBox[this.chainId]],
                address: t.address,
                chainId: this.chainId,
                abi: index_js_1.balanceOfAbi,
                functionName: 'balanceOf',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - INIT: multicall failed, message: ${e.message}`);
        });
        const [classicReserves, stableReserves, totals, balances] = await Promise.all([
            classicReservePromise,
            stableReservePromise,
            totalsPromise,
            balancesPromise,
        ]);
        classicPools.forEach((pool, i) => {
            const reserves = classicReserves;
            const res0 = reserves[i]?.result?.[0];
            const res1 = reserves[i]?.result?.[1];
            if (!res0 || !res1)
                return;
            const tokens = [
                (0, index_js_3.convertTokenToBento)((0, api_js_1.mapToken)(this.chainId, pool.token0)),
                (0, index_js_3.convertTokenToBento)((0, api_js_1.mapToken)(this.chainId, pool.token1)),
            ];
            const rPool = new index_js_3.ConstantProductRPool(pool.address, tokens[0], tokens[1], pool.swapFee, res0, res1);
            const pc = new index_js_4.BentoPoolCode(rPool, this.getType(), this.getPoolProviderName());
            this.topClassicPools.set(pool.address, pc);
        });
        const rebases = new Map();
        sortedTokens.forEach((t, i) => {
            const total = totals;
            const bal = balances;
            const elastic = total[i]?.result?.[0];
            const base = total[i]?.result?.[1];
            const balance = bal[i]?.result;
            if (!elastic || !base || !balance)
                return;
            const pool = new index_js_3.BridgeBento(this.bentoBox[this.chainId], t, (0, index_js_3.convertTokenToBento)(t), elastic, base, balance);
            this.bridges.set(t.address.toLowerCase(), new index_js_4.BentoBridgePoolCode(pool, this.getType(), this.getPoolProviderName(), this.bentoBox[this.chainId]));
            rebases.set(t.address.toLowerCase(), {
                elastic: elastic,
                base: base,
            });
        });
        stablePools.forEach((pool, i) => {
            const sRes = stableReserves;
            const res0 = sRes[i]?.result?.[0];
            const res1 = sRes[i]?.result?.[1];
            const totals0 = rebases.get(pool.token0.address);
            const totals1 = rebases.get(pool.token1.address);
            if (!res0 || !res1 || totals0 === undefined || totals1 === undefined)
                return;
            const tokens = [
                (0, index_js_3.convertTokenToBento)((0, api_js_1.mapToken)(this.chainId, pool.token0)),
                (0, index_js_3.convertTokenToBento)((0, api_js_1.mapToken)(this.chainId, pool.token1)),
            ];
            const stablePool = new index_js_3.StableSwapRPool(pool.address, tokens[0], tokens[1], pool.swapFee, (0, index_js_3.toShareBI)(res0, totals0), (0, index_js_3.toShareBI)(res1, totals1), pool.token0.decimals, pool.token1.decimals, totals0, totals1);
            this.topStablePools.set(pool.address, new index_js_4.BentoPoolCode(stablePool, this.getType(), this.getPoolProviderName()));
        });
    }
    async updatePools() {
        this.removeStalePools();
        // The two calls below are Async functions, but we do not want them to block. If they find any pools they will be updated next interval
        this.discoverNewPools();
        this.updateAvailablePools();
        const initialClassicPools = Array.from(this.topClassicPools.values());
        const initialStablePools = Array.from(this.topStablePools.values());
        const onDemandClassicPools = Array.from(this.onDemandClassicPools.values()).map((p) => p.poolCode);
        const onDemandStablePools = Array.from(this.onDemandStablePools.values()).map((p) => p.poolCode);
        if (initialClassicPools.length === 0 &&
            initialStablePools.length === 0 &&
            onDemandClassicPools.length === 0 &&
            onDemandStablePools.length === 0) {
            return;
        }
        const bridges = Array.from(this.bridges.values());
        const initClassicReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: initialClassicPools.map((pc) => ({
                address: pc.pool.address,
                chainId: this.chainId,
                abi: index_js_1.getReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const onDemandClassicReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: onDemandClassicPools.map((pc) => ({
                address: pc.pool.address,
                chainId: this.chainId,
                abi: index_js_1.getReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const initStableReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: initialStablePools.map((pc) => ({
                address: pc.pool.address,
                chainId: this.chainId,
                abi: index_js_1.getStableReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const onDemandStableReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: onDemandStablePools.map((pc) => ({
                address: pc.pool.address,
                chainId: this.chainId,
                abi: index_js_1.getStableReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const totalsPromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: bridges.map((b) => ({
                args: [b.pool.token0.address],
                address: this.bentoBox[this.chainId],
                chainId: this.chainId,
                abi: index_js_1.totalsAbi,
                functionName: 'totals',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const balancesPromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: bridges.map((b) => ({
                args: [this.bentoBox[this.chainId]],
                address: b.pool.token0.address,
                chainId: this.chainId,
                abi: index_js_1.balanceOfAbi,
                functionName: 'balanceOf',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const [initClassicReserves, onDemandClassicReserves, initStableReserves, onDemandStableReserves, totals, balances,] = await Promise.all([
            initClassicReservePromise,
            onDemandClassicReservePromise,
            initStableReservePromise,
            onDemandStableReservePromise,
            totalsPromise,
            balancesPromise,
        ]);
        this.updateClassicReserves(initialClassicPools, initClassicReserves);
        this.updateClassicReserves(onDemandClassicPools, onDemandClassicReserves);
        const rebases = new Map();
        bridges.forEach((b, i) => {
            const bridge = b.pool;
            const t = bridge.token0;
            const elastic = totals?.[i]?.result?.[0];
            const base = totals?.[i]?.result?.[1];
            const balance = balances?.[i]?.result;
            if (!elastic || !base || !balance) {
                return;
            }
            rebases.set(t.address.toLowerCase(), {
                elastic,
                base,
            });
            if (bridge.reserve0 !== elastic || bridge.reserve1 === base) {
                bridge.updateReserves(elastic, base);
                // console.debug(
                //   `${this.getLogPrefix()} - BRIDGE REBASE UPDATE: ${bridge.token0.symbol} ${bridge.reserve0} ${bridge.reserve1}`
                // )
            }
            if (bridge.freeLiquidity !== Number(balance)) {
                bridge.freeLiquidity = Number(balance);
                //console.debug(`${this.getLogPrefix()} - BRIDGE BALANCE UPDATE: ${bridge.token0.symbol} ${bridge.freeLiquidity}`)
            }
        });
        this.updateStablePools(initialStablePools, rebases, initStableReserves);
        this.updateStablePools(onDemandStablePools, rebases, onDemandStableReserves);
        //console.debug(`${this.getLogPrefix()} - UPDATED POOLS`)
    }
    async getOnDemandPools(t0, t1, excludePools) {
        const topPoolAddresses = [
            ...Array.from(this.topClassicPools.keys()),
            ...Array.from(this.topStablePools.keys()),
        ];
        let pools = (0, api_js_1.filterOnDemandPools)(Array.from(this.availablePools.values()), t0.address, t1.address, topPoolAddresses, this.ON_DEMAND_POOL_SIZE);
        if (excludePools)
            pools = pools.filter((p) => !excludePools.has(p.address));
        let [onDemandClassicPools, onDemandStablePools] = pools.length > 0
            ? [
                pools.filter((p) => p.type === 'CONSTANT_PRODUCT_POOL' &&
                    !this.topClassicPools.has(p.address)),
                pools.filter((p) => p.type === 'STABLE_POOL' && !this.topStablePools.has(p.address)),
            ]
            : await Trident_js_1.TridentStaticPoolFetcher.getStaticPools(this.client, this.chainId, t0, t1);
        if (excludePools)
            onDemandClassicPools = onDemandClassicPools.filter((p) => !excludePools.has(p.address));
        if (excludePools)
            onDemandStablePools = onDemandStablePools.filter((p) => !excludePools.has(p.address));
        this.poolsByTrade.set(this.getTradeId(t0, t1), [onDemandClassicPools, onDemandStablePools]
            .flat()
            .map((pool) => pool.address));
        // const onDemandClassicPools = pools.filter(
        //   (p) => p.type === 'CONSTANT_PRODUCT_POOL' && !this.topClassicPools.has(p.address)
        // )
        // const onDemandStablePools = pools.filter((p) => p.type === 'STABLE_POOL' && this.topStablePools.has(p.address))
        const validUntilTimestamp = (0, date_fns_1.getUnixTime)((0, date_fns_1.add)(Date.now(), { seconds: this.ON_DEMAND_POOLS_LIFETIME_IN_SECONDS }));
        const sortedTokens = this.poolResponseToSortedTokens([...onDemandClassicPools, ...onDemandStablePools].flat());
        // let newBridges = 0
        // let updated = 0
        // let created = 0
        const classicPoolCodesToCreate = [];
        const stablePoolCodesToCreate = [];
        const bridgesToCreate = [];
        sortedTokens.forEach((t) => {
            if (!this.bridges.has(t.address)) {
                const pool = new index_js_3.BridgeBento(this.bentoBox[this.chainId], t, (0, index_js_3.convertTokenToBento)(t), 0n, 0n, 0n);
                if (excludePools?.has(pool.uniqueID()))
                    return;
                bridgesToCreate.push(new index_js_4.BentoBridgePoolCode(pool, this.getType(), this.getPoolProviderName(), this.bentoBox[this.chainId]));
                // ++newBridges
            }
        });
        onDemandClassicPools.forEach((pr) => {
            const existingPool = this.onDemandClassicPools.get(pr.address);
            if (existingPool === undefined) {
                if (!pr.swapFee)
                    return;
                const rPool = new index_js_3.ConstantProductRPool(pr.address, (0, index_js_3.convertTokenToBento)(pr.token0), (0, index_js_3.convertTokenToBento)(pr.token1), pr.swapFee, 0n, 0n);
                const pc = new index_js_4.BentoPoolCode(rPool, this.getType(), this.getPoolProviderName());
                classicPoolCodesToCreate.push(pc);
            }
            else {
                existingPool.validUntilTimestamp = validUntilTimestamp;
                // ++updated
            }
        });
        onDemandStablePools.forEach((pr) => {
            const existingPool = this.onDemandStablePools.get(pr.address);
            if (existingPool === undefined) {
                if (!pr.swapFee)
                    return;
                const stablePool = new index_js_3.StableSwapRPool(pr.address, (0, index_js_3.convertTokenToBento)(pr.token0), (0, index_js_3.convertTokenToBento)(pr.token1), pr.swapFee, 0n, 0n, pr.token0.decimals, pr.token1.decimals, { elastic: 0n, base: 0n }, { elastic: 0n, base: 0n });
                const pc = new index_js_4.BentoPoolCode(stablePool, this.getType(), this.getPoolProviderName());
                stablePoolCodesToCreate.push(pc);
            }
            else {
                existingPool.validUntilTimestamp = validUntilTimestamp;
                // ++updated
            }
        });
        const classicReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: classicPoolCodesToCreate.map((pc) => ({
                address: pc.pool.address,
                chainId: this.chainId,
                abi: index_js_1.getReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const stableReservePromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: stablePoolCodesToCreate.map((pc) => ({
                address: pc.pool.address,
                chainId: this.chainId,
                abi: index_js_1.getStableReservesAbi,
                functionName: 'getReserves',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const totalsPromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: bridgesToCreate.map((b) => ({
                args: [b.pool.token0.address],
                address: this.bentoBox[this.chainId],
                chainId: this.chainId,
                abi: index_js_1.totalsAbi,
                functionName: 'totals',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const balancesPromise = this.client
            .multicall({
            multicallAddress: this.client.chain?.contracts?.multicall3
                ?.address,
            allowFailure: true,
            contracts: bridgesToCreate.map((b) => ({
                args: [this.bentoBox[this.chainId]],
                address: b.pool.token0.address,
                chainId: this.chainId,
                abi: index_js_1.balanceOfAbi,
                functionName: 'balanceOf',
            })),
        })
            .catch((e) => {
            console.warn(`${this.getLogPrefix()} - UPDATE: multicall failed, message: ${e.message}`);
            return undefined;
        });
        const [classicReserves, stableReserves, totals, balances] = await Promise.all([
            classicReservePromise,
            stableReservePromise,
            totalsPromise,
            balancesPromise,
        ]);
        classicPoolCodesToCreate.forEach((poolCode, i) => {
            const pool = poolCode.pool;
            const res0 = classicReserves?.[i]?.result?.[0];
            const res1 = classicReserves?.[i]?.result?.[1];
            if (res0 !== undefined && res1 !== undefined) {
                pool.updateReserves(res0, res1);
                this.onDemandClassicPools.set(pool.address, {
                    poolCode,
                    validUntilTimestamp,
                });
                // ++created
                // console.debug(
                //   `${this.getLogPrefix()} - ON DEMAND CREATION: ${pool.address} classic (${pool.token0.symbol}/${
                //     pool.token1.symbol
                //   })`
                // )
            }
            else {
                console.error(`${this.getLogPrefix()} - ERROR FETCHING RESERVES: ${pool.address}, pool does not exist?`);
                // TODO: some pools seem to be initialized with 0 in reserves, they should just be ignored, shouldn't log error
            }
        });
        const rebases = new Map();
        bridgesToCreate.forEach((bc, i) => {
            const bridge = bc.pool;
            const t = bridge.token0;
            const elastic = totals?.[i]?.result?.[0];
            const base = totals?.[i]?.result?.[1];
            const balance = balances?.[i]?.result;
            if (!elastic || !base || !balance) {
                return;
            }
            rebases.set(t.address.toLowerCase(), {
                elastic: elastic,
                base: base,
            });
            bridge.updateReserves(elastic, base);
            bridge.freeLiquidity = Number(balance);
            this.bridges.set(bridge.uniqueID(), bc);
        });
        stablePoolCodesToCreate.forEach((poolCode, i) => {
            const pool = poolCode.pool;
            const total0 = rebases.get(pool.token0.address.toLowerCase());
            if (total0) {
                const current = pool.getTotal0();
                if (total0.elastic !== current.elastic ||
                    total0.base !== current.base) {
                    pool.updateTotal0(total0);
                }
            }
            const total1 = rebases.get(pool.token1.address.toLowerCase());
            if (total1) {
                const current = pool.getTotal1();
                if (total1.elastic !== current.elastic ||
                    total1.base !== current.base) {
                    pool.updateTotal1(total1);
                }
            }
            const res0 = stableReserves?.[i]?.result?.[0];
            const res1 = stableReserves?.[i]?.result?.[1];
            if (!res0 || !res1) {
                return;
            }
            //pool.updateReserves(toShareBI(res0BN, pool.getTotal0()), toShareBI(res1BN, pool.getTotal1()))
            pool.updateReservesAmounts(res0, res1);
            this.onDemandStablePools.set(pool.address, {
                poolCode,
                validUntilTimestamp,
            });
            // console.debug(
            //   `${this.getLogPrefix()} - ON DEMAND CREATION: ${pool.address} stable (${pool.token0.symbol}/${
            //     pool.token1.symbol
            //   })`
            // )
            // ++created
        });
        // console.debug(
        //   `${this.getLogPrefix()} - ON DEMAND: Created and fetched reserves for ${created} pools, extended 'lifetime' for ${updated} pools and added ${newBridges} bridges`
        // )
    }
    async discoverNewPools() {
        return;
    }
    async updateAvailablePools() {
        if (this.refreshAvailablePoolsTimestamp > (0, date_fns_1.getUnixTime)(Date.now())) {
            return;
        }
        this.refreshAvailablePoolsTimestamp = (0, date_fns_1.getUnixTime)((0, date_fns_1.add)(Date.now(), { seconds: this.FETCH_AVAILABLE_POOLS_AFTER_SECONDS }));
        const freshInitPools = await this.getInitialPools();
        freshInitPools.forEach((updatedPool) => {
            // Don't do `this.availablePools = freshInitPools`, in case the db requests for any reason fail, it shouldn't be completely overwritten.
            this.availablePools.set(updatedPool.address, updatedPool);
        });
        this.prioritizeTopPools();
    }
    prioritizeTopPools() {
        const allNewPools = (0, api_js_1.filterTopPools)(Array.from(this.availablePools.values()), this.TOP_POOL_SIZE);
        const currentClassicPoolAddresses = Array.from(this.topClassicPools.keys());
        const newClassicAddresses = Array.from(allNewPools
            .filter((p) => p.type === 'CONSTANT_PRODUCT_POOL')
            .map((pool) => pool.address));
        const classicPoolsToRemove = currentClassicPoolAddresses.filter((x) => !newClassicAddresses.includes(x));
        const classicPoolsToAdd = newClassicAddresses.filter((x) => !currentClassicPoolAddresses.includes(x));
        classicPoolsToRemove.forEach((address) => {
            this.topClassicPools.delete(address);
            //console.log(`${this.getLogPrefix()} - PRIORITIZE POOLS: Removed ${address} from classic top pools`)
        });
        classicPoolsToAdd.forEach((address) => {
            const poolsToCreate = this.availablePools.get(address);
            if (poolsToCreate) {
                const tokens = [
                    (0, index_js_3.convertTokenToBento)((0, api_js_1.mapToken)(this.chainId, poolsToCreate.token0)),
                    (0, index_js_3.convertTokenToBento)((0, api_js_1.mapToken)(this.chainId, poolsToCreate.token1)),
                ];
                const rPool = new index_js_3.ConstantProductRPool(poolsToCreate.address, tokens[0], tokens[1], poolsToCreate.swapFee, 0n, 0n);
                this.topClassicPools.set(poolsToCreate.address, new index_js_4.BentoPoolCode(rPool, this.getType(), this.getPoolProviderName()));
                //console.log(`${this.getLogPrefix()} - PRIORITIZE POOLS: Added ${address} to classic top pools`)
            }
            else {
                console.warn(`${this.getLogPrefix()} - PRIORITIZE POOLS: Could not find classic pool, unexpected state.`);
            }
        });
        const currentStablePoolAddresses = Array.from(this.topStablePools.keys());
        const newStablePools = Array.from(allNewPools.filter((p) => p.type === 'STABLE_POOL'));
        const newStablePoolAddresses = newStablePools.map((pool) => pool.address);
        const stablePoolsToRemove = currentStablePoolAddresses.filter((x) => !newStablePoolAddresses.includes(x));
        const stablePoolsToAdd = newStablePoolAddresses.filter((x) => !currentStablePoolAddresses.includes(x));
        stablePoolsToRemove.forEach((address) => {
            this.topStablePools.delete(address);
            //console.log(`${this.getLogPrefix()} - PRIORITIZE POOLS: Removed ${address} from stable top pools`)
        });
        stablePoolsToAdd.forEach((address) => {
            const poolsToCreate = this.availablePools.get(address);
            if (poolsToCreate) {
                const token0 = (0, api_js_1.mapToken)(this.chainId, poolsToCreate.token0);
                const token1 = (0, api_js_1.mapToken)(this.chainId, poolsToCreate.token1);
                const stablePool = new index_js_3.StableSwapRPool(poolsToCreate.address, (0, index_js_3.convertTokenToBento)(token0), (0, index_js_3.convertTokenToBento)(token1), poolsToCreate.swapFee, 0n, 0n, poolsToCreate.token0.decimals, poolsToCreate.token1.decimals, { elastic: 0n, base: 0n }, { elastic: 0n, base: 0n });
                this.topStablePools.set(poolsToCreate.address, new index_js_4.BentoPoolCode(stablePool, this.getType(), this.getPoolProviderName()));
                //console.log(`${this.getLogPrefix()} - PRIORITIZE POOLS: Added ${address} to stable top pools`)
            }
            else {
                console.warn(`${this.getLogPrefix()} - PRIORITIZE POOLS: Could not find stable pool, unexpected state.`);
            }
        });
        const allPoolsToCreate = allNewPools.filter((p) => stablePoolsToAdd.includes(p.address) ||
            classicPoolsToAdd.includes(p.address));
        const sortedTokens = this.poolResponseToSortedTokens(allPoolsToCreate);
        sortedTokens.forEach((t) => {
            if (!this.bridges.has(t.address)) {
                const bridge = new index_js_3.BridgeBento(this.bentoBox[this.chainId], t, (0, index_js_3.convertTokenToBento)(t), 0n, 0n, 0n);
                this.bridges.set(t.address.toLowerCase(), new index_js_4.BentoBridgePoolCode(bridge, this.getType(), this.getPoolProviderName(), this.bentoBox[this.chainId]));
                //console.log(`${this.getLogPrefix()} - PRIORITIZE POOLS: Added bridge ${bridge.address}`)
            }
        });
    }
    startFetchPoolsData() {
        this.stopFetchPoolsData();
        this.topClassicPools = new Map();
        this.topStablePools = new Map();
        this.bridges = new Map();
        this.unwatchBlockNumber = this.client.watchBlockNumber({
            onBlockNumber: (blockNumber) => {
                this.lastUpdateBlock = Number(blockNumber);
                if (!this.isInitialized) {
                    this.initialize();
                }
                else {
                    this.updatePools();
                }
            },
            onError: (error) => {
                console.error(`${this.getLogPrefix()} - Error watching block number: ${error.message}`);
            },
        });
    }
    removeStalePools() {
        let removed = 0;
        const now = (0, date_fns_1.getUnixTime)(Date.now());
        for (const poolInfo of this.onDemandClassicPools.values()) {
            if (poolInfo.validUntilTimestamp < now) {
                this.onDemandClassicPools.delete(poolInfo.poolCode.pool.address);
                removed++;
            }
        }
        for (const poolInfo of this.onDemandStablePools.values()) {
            if (poolInfo.validUntilTimestamp < now) {
                this.onDemandStablePools.delete(poolInfo.poolCode.pool.address);
                removed++;
            }
        }
        if (removed > 0) {
            //console.log(`${this.getLogPrefix()} -Removed ${removed} stale pools`)
        }
    }
    async fetchPoolsForToken(t0, t1, excludePools) {
        await this.getOnDemandPools(t0, t1, excludePools);
    }
    getCurrentPoolList(t0, t1) {
        const tradeId = this.getTradeId(t0, t1);
        const poolsByTrade = this.poolsByTrade.get(tradeId) ?? [];
        const onDemandPoolCodes = poolsByTrade
            ? [
                Array.from(this.onDemandClassicPools),
                Array.from(this.onDemandStablePools),
            ]
                .flat()
                .filter(([poolAddress]) => poolsByTrade.includes(poolAddress))
                .map(([, p]) => p.poolCode)
            : [];
        return [
            ...this.topClassicPools.values(),
            ...this.topStablePools.values(),
            ...onDemandPoolCodes,
            ...this.bridges.values(),
        ];
    }
    stopFetchPoolsData() {
        if (this.unwatchBlockNumber)
            this.unwatchBlockNumber();
        this.blockListener = undefined;
    }
    updateClassicReserves(poolCodes, reserves) {
        if (!reserves)
            return;
        poolCodes.forEach((pc, i) => {
            const pool = pc.pool;
            const res0 = reserves?.[i]?.result?.[0];
            const res1 = reserves?.[i]?.result?.[1];
            if (!res0 || !res1) {
                return;
            }
            if (pool.reserve0 === res0 && pool.reserve1 === res1) {
                return;
            }
            pool.updateReserves(res0, res1);
            // console.info(
            //   `${this.getLogPrefix()} - SYNC, classic pool: ${pool.address} ${pool.token0.symbol}/${
            //     pool.token1.symbol
            //   } ${res0BN.toString()} ${res1BN.toString()}`
            // )
        });
    }
    updateStablePools(poolCodes, rebases, reserves) {
        if (!reserves)
            return;
        poolCodes.forEach((pc, i) => {
            const pool = pc.pool;
            const total0 = rebases.get(pool.token0.address.toLowerCase());
            if (total0) {
                const current = pool.getTotal0();
                if (total0.elastic !== current.elastic ||
                    total0.base !== current.base) {
                    pool.updateTotal0(total0);
                }
            }
            const total1 = rebases.get(pool.token1.address.toLowerCase());
            if (total1) {
                const current = pool.getTotal1();
                if (total1.elastic !== current.elastic ||
                    total1.base !== current.base) {
                    pool.updateTotal1(total1);
                }
            }
            const res0 = reserves?.[i]?.result?.[0];
            const res1 = reserves?.[i]?.result?.[1];
            if (!res0 || !res1) {
                return;
            }
            pool.updateReservesAmounts(res0, res1);
            // Always updating because reserve0 and 1 is being converted to amount and adjusted to wei using realReservesToAdjusted()
            // but the res0 and res1 are not adjusted.
        });
    }
    poolResponseToSortedTokens(poolResults) {
        const tokenMap = new Map();
        poolResults.forEach((pool) => {
            tokenMap.set(pool.token0.address, pool.token0);
            tokenMap.set(pool.token1.address, pool.token1);
        });
        const tokensDedup = Array.from(tokenMap.values());
        // tokens sorting
        const tok0 = tokensDedup.map((t) => [
            t.address.toLocaleLowerCase().substring(2).padStart(40, '0'),
            t,
        ]);
        return tok0.sort((a, b) => (b[0] > a[0] ? -1 : 1)).map(([, t]) => t);
    }
}
exports.TridentProvider = TridentProvider;
//# sourceMappingURL=Trident.js.map