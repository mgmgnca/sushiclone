import { Address, PublicClient } from 'viem';
import { Token, Type } from '../../currency/index.js';
import { PoolCode } from '../pool-codes/PoolCode.js';
import { LiquidityProvider, LiquidityProviders } from './LiquidityProvider.js';
export declare const sETH: Token;
export declare enum CurvePoolType {
    Legacy = "Legacy",
    LegacyV2 = "LegacyV2",
    LegacyV3 = "LegacyV3",
    Factory = "Factory"
}
export declare const CURVE_NON_FACTORY_POOLS: Record<number, [
    Address,
    CurvePoolType,
    Type[]
][]>;
export declare const CURVE_FACTORY_ADDRESSES: Record<number, `0x${string}`[]>;
export declare function getAllSupportedCurvePools(publicClient: PublicClient): Promise<Map<string, CurvePoolType>>;
export declare class CurveProvider extends LiquidityProvider {
    foundPools: PoolCode[];
    getType(): LiquidityProviders;
    /**
     * The name of liquidity provider to be used for pool naming. For example, 'SushiSwap'
     */
    getPoolProviderName(): string;
    /**
     * Initiates event listeners for top pools
     */
    startFetchPoolsData(): void;
    getPoolsForTokens(t0: Token, t1: Token, excludePools?: Set<string>): Promise<Map<Address, [CurvePoolType, Type[]]>>;
    getPoolRatio(pools: [string, [CurvePoolType, Type[]]][]): Promise<(number[] | undefined)[]>;
    getCurvePoolCodes(pools: Map<Address, [CurvePoolType, Type[]]>): Promise<PoolCode[]>;
    /**
     * Fetches relevant pools for the given tokens
     * @param t0 Token
     * @param t1 Token
     */
    fetchPoolsForToken(t0: Token, t1: Token, excludePools?: Set<string>): Promise<void>;
    /**
     * Returns a list of PoolCode
     * @returns PoolCode[]
     */
    getCurrentPoolList(): PoolCode[];
    stopFetchPoolsData(): void;
}
//# sourceMappingURL=CurveProvider.d.ts.map