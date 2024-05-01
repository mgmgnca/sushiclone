"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFetcher = void 0;
const viem_1 = require("viem");
const index_js_1 = require("../config/index.js");
const ApeSwap_js_1 = require("./liquidity-providers/ApeSwap.js");
const Biswap_js_1 = require("./liquidity-providers/Biswap.js");
const CurveProvider_js_1 = require("./liquidity-providers/CurveProvider.js");
const Dfyn_js_1 = require("./liquidity-providers/Dfyn.js");
const DovishV3_js_1 = require("./liquidity-providers/DovishV3.js");
const Elk_js_1 = require("./liquidity-providers/Elk.js");
const HoneySwap_js_1 = require("./liquidity-providers/HoneySwap.js");
const JetSwap_js_1 = require("./liquidity-providers/JetSwap.js");
const LaserSwap_js_1 = require("./liquidity-providers/LaserSwap.js");
const LiquidityProvider_js_1 = require("./liquidity-providers/LiquidityProvider.js");
const NativeWrapProvider_js_1 = require("./liquidity-providers/NativeWrapProvider.js");
const NetSwap_js_1 = require("./liquidity-providers/NetSwap.js");
const PancakeSwap_js_1 = require("./liquidity-providers/PancakeSwap.js");
const QuickSwap_js_1 = require("./liquidity-providers/QuickSwap.js");
const SpookySwap_js_1 = require("./liquidity-providers/SpookySwap.js");
const SushiSwapV2_js_1 = require("./liquidity-providers/SushiSwapV2.js");
const SushiSwapV3_js_1 = require("./liquidity-providers/SushiSwapV3.js");
const TraderJoe_js_1 = require("./liquidity-providers/TraderJoe.js");
const Trident_js_1 = require("./liquidity-providers/Trident.js");
const UbeSwap_js_1 = require("./liquidity-providers/UbeSwap.js");
const UniswapV2_js_1 = require("./liquidity-providers/UniswapV2.js");
const UniswapV3_js_1 = require("./liquidity-providers/UniswapV3.js");
// TODO: Should be a mode on the config for DataFetcher
const isTest = process.env['APP_ENV'] === 'test' ||
    process.env['NEXT_PUBLIC_APP_ENV'] === 'test';
// Gathers pools info, creates routing in 'incremental' mode
// This means that new routing recalculates each time new pool fetching data comes
class DataFetcher {
    chainId;
    providers = [];
    // Provider to poolAddress to PoolCode
    poolCodes = new Map();
    stateId = 0;
    web3Client;
    // TODO: maybe use an actual map
    // private static cache = new Map<number, DataFetcher>()
    static cache = {};
    static onChain(chainId) {
        const cache = this.cache[chainId];
        if (cache) {
            return cache;
        }
        const dataFetcher = new DataFetcher(chainId);
        this.cache[chainId] = dataFetcher;
        return dataFetcher;
    }
    // constructor({
    //   chainId,
    //   publicClient,
    // }: {
    //   chainId: ChainId
    //   publicClient?: PublicClient
    //   providers: LiquidityProviders[]
    //   // providers?: (new (
    //   //   chainId: ChainId,
    //   //   publicClient: PublicClient,
    //   // ) => LiquidityProvider)[]
    // }) {
    constructor(chainId, publicClient) {
        this.chainId = chainId;
        if (!publicClient && !index_js_1.publicClientConfig[this.chainId]) {
            throw new Error(`No public client given and no viem config found for chainId ${chainId}`);
        }
        if (publicClient) {
            this.web3Client = publicClient;
        }
        else if (isTest) {
            this.web3Client = (0, viem_1.createPublicClient)({
                ...index_js_1.publicClientConfig[this.chainId],
                transport: (0, viem_1.http)('http://127.0.0.1:8545'),
                batch: {
                    multicall: {
                        batchSize: 512,
                    },
                },
            });
        }
        else {
            this.web3Client = (0, viem_1.createPublicClient)(index_js_1.publicClientConfig[this.chainId]);
        }
    }
    _providerIsIncluded(lp, liquidity) {
        if (!liquidity)
            return true;
        if (lp === LiquidityProvider_js_1.LiquidityProviders.NativeWrap)
            return true;
        return liquidity.some((l) => l === lp);
    }
    _setProviders(providers) {
        // concrete providers
        this.providers = [new NativeWrapProvider_js_1.NativeWrapProvider(this.chainId, this.web3Client)];
        [
            ApeSwap_js_1.ApeSwapProvider,
            Biswap_js_1.BiswapProvider,
            CurveProvider_js_1.CurveProvider,
            Dfyn_js_1.DfynProvider,
            DovishV3_js_1.DovishV3Provider,
            Elk_js_1.ElkProvider,
            HoneySwap_js_1.HoneySwapProvider,
            JetSwap_js_1.JetSwapProvider,
            LaserSwap_js_1.LaserSwapV2Provider,
            NetSwap_js_1.NetSwapProvider,
            PancakeSwap_js_1.PancakeSwapProvider,
            SpookySwap_js_1.SpookySwapProvider,
            SushiSwapV2_js_1.SushiSwapV2Provider,
            SushiSwapV3_js_1.SushiSwapV3Provider,
            TraderJoe_js_1.TraderJoeProvider,
            QuickSwap_js_1.QuickSwapProvider,
            Trident_js_1.TridentProvider,
            UbeSwap_js_1.UbeSwapProvider,
            UniswapV2_js_1.UniswapV2Provider,
            UniswapV3_js_1.UniswapV3Provider,
        ].forEach((p) => {
            try {
                const provider = new p(this.chainId, this.web3Client);
                if (
                // If none passed, include all
                !providers ||
                    this._providerIsIncluded(provider.getType(), providers)) {
                    this.providers.push(provider);
                }
            }
            catch (_e) {
                // console.warn(e)
            }
        });
    }
    // Starts pool data fetching
    startDataFetching(providers) {
        this.stopDataFetching();
        this._setProviders(providers);
        // console.log(
        //   `${chainShortName[this.chainId]}/${this.chainId} - Included providers: ${this.providers
        //     .map((p) => p.getType())
        //     .join(', ')}`
        // )
        this.providers.forEach((p) => p.startFetchPoolsData());
    }
    // To stop fetch pool data
    stopDataFetching() {
        this.providers.forEach((p) => p.stopFetchPoolsData());
    }
    async fetchPoolsForToken(currency0, currency1, excludePools) {
        // console.log('PROVIDER COUNT', this.providers.length)
        // ensure that we only fetch the native wrap pools if the token is the native currency and wrapped native currency
        if (currency0.wrapped.equals(currency1.wrapped)) {
            const provider = this.providers.find((p) => p.getType() === LiquidityProvider_js_1.LiquidityProviders.NativeWrap);
            if (provider) {
                await provider.fetchPoolsForToken(currency0.wrapped, currency1.wrapped, excludePools);
            }
        }
        else {
            const [token0, token1] = currency0.wrapped.equals(currency1.wrapped) ||
                currency0.wrapped.sortsBefore(currency1.wrapped)
                ? [currency0.wrapped, currency1.wrapped]
                : [currency1.wrapped, currency0.wrapped];
            await Promise.all(this.providers.map((p) => p.fetchPoolsForToken(token0, token1, excludePools)));
        }
    }
    getCurrentPoolCodeMap(currency0, currency1) {
        const result = new Map();
        this.providers.forEach((p) => {
            const poolCodes = p.getCurrentPoolList(currency0.wrapped, currency1.wrapped);
            poolCodes.forEach((pc) => result.set(pc.pool.uniqueID(), pc));
        });
        return result;
    }
    getCurrentPoolCodeList(currency0, currency1) {
        const pcMap = this.getCurrentPoolCodeMap(currency0.wrapped, currency1.wrapped);
        return Array.from(pcMap.values());
    }
    // returns the last processed by all LP block number
    getLastUpdateBlock(providers) {
        let lastUpdateBlock;
        this.providers.forEach((p) => {
            if (this._providerIsIncluded(p.getType(), providers)) {
                const last = p.getLastUpdateBlock();
                if (last < 0)
                    return;
                if (lastUpdateBlock === undefined)
                    lastUpdateBlock = last;
                else
                    lastUpdateBlock = Math.min(lastUpdateBlock, last);
            }
        });
        return lastUpdateBlock === undefined ? 0 : lastUpdateBlock;
    }
}
exports.DataFetcher = DataFetcher;
//# sourceMappingURL=data-fetcher.js.map