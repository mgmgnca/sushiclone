import { PublicClient } from 'viem';
import { ChainId } from '../../chain/index.js';
import type { Token } from '../../currency/index.js';
import type { PoolCode } from '../pool-codes/index.js';
export declare enum LiquidityProviders {
    SushiSwapV2 = "SushiSwapV2",
    SushiSwapV3 = "SushiSwapV3",
    UniswapV2 = "UniswapV2",
    UniswapV3 = "UniswapV3",
    Trident = "Trident",
    QuickSwap = "QuickSwap",
    ApeSwap = "ApeSwap",
    PancakeSwap = "PancakeSwap",
    PancakeSwapV3 = "PancakeSwapV3",
    TraderJoe = "TraderJoe",
    Dfyn = "Dfyn",
    Elk = "Elk",
    JetSwap = "JetSwap",
    SpookySwap = "SpookySwap",
    NetSwap = "NetSwap",
    NativeWrap = "NativeWrap",
    HoneySwap = "HoneySwap",
    UbeSwap = "UbeSwap",
    Biswap = "Biswap",
    CurveSwap = "CurveSwap",
    DovishV3 = "DovishV3",
    Wagmi = "Wagmi",
    LaserSwap = "LaserSwap",
    BaseSwap = "BaseSwap",
    AlgebraIntegral = "AlgebraIntegral",
    Solarbeam = "Solarbeam",
    Swapsicle = "Swapsicle",
    VVSStandard = "VVSStandard",
    Fraxswap = "Fraxswap",
    SwapBlast = "SwapBlast",
    BlastDEX = "BlastDEX",
    MonoswapV2 = "MonoswapV2",
    MonoswapV3 = "MonoswapV3",
    ThrusterV2 = "ThrusterV2",
    ThrusterV3 = "ThrusterV3",
    DyorV2 = "DyorV2",
    HyperBlast = "HyperBlast",
    KinetixV3 = "KinetixV3"
}
export declare abstract class LiquidityProvider {
    chainId: ChainId;
    client: PublicClient;
    lastUpdateBlock: number;
    isTest: boolean;
    readonly ON_DEMAND_POOLS_LIFETIME_IN_SECONDS = 60;
    readonly FETCH_AVAILABLE_POOLS_AFTER_SECONDS = 900;
    constructor(chainId: ChainId, client: PublicClient, isTest?: boolean);
    abstract getType(): LiquidityProviders;
    /**
     * The name of liquidity provider to be used for pool naming. For example, 'SushiSwap'
     */
    abstract getPoolProviderName(): string;
    /**
     * Initiates event listeners for top pools
     */
    abstract startFetchPoolsData(): void;
    /**
     * Fetches relevant pools for the given tokens
     * @param t0 Token
     * @param t1 Token
     */
    abstract fetchPoolsForToken(t0: Token, t1: Token, excludePools?: Set<string>): Promise<void>;
    /**
     * Returns a list of PoolCode
     * @param t0 Token
     * @param t1 Token
     * @returns PoolCode[]
     */
    abstract getCurrentPoolList(t0: Token, t1: Token): PoolCode[];
    abstract stopFetchPoolsData(): void;
    /**
     * Returns last processed block number
     * @returns last processed block number
     */
    getLastUpdateBlock(): number;
    /**
     * Logs a message with the following format:
     * <chainId>~<lastUpdateBlock>~<providerName>
     * Example: 1~123456~SushiSwap
     * @returns string
     */
    getLogPrefix(): string;
    getTradeId: (t0: Token, t1: Token) => string;
}
//# sourceMappingURL=LiquidityProvider.d.ts.map