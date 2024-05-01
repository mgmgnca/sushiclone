import { PublicClient } from 'viem';
import { ChainId, TestnetChainId } from '../chain/index.js';
import { Type } from '../currency/index.js';
import { LiquidityProvider, LiquidityProviders } from './liquidity-providers/LiquidityProvider.js';
import type { PoolCode } from './pool-codes/index.js';
export declare class DataFetcher {
    chainId: Exclude<ChainId, TestnetChainId>;
    providers: LiquidityProvider[];
    poolCodes: Map<LiquidityProviders, Map<string, PoolCode>>;
    stateId: number;
    web3Client: PublicClient;
    private static cache;
    static onChain(chainId: ChainId): DataFetcher;
    constructor(chainId: ChainId, publicClient?: PublicClient);
    _providerIsIncluded(lp: LiquidityProviders, liquidity?: LiquidityProviders[]): boolean;
    _setProviders(providers?: LiquidityProviders[]): void;
    startDataFetching(providers?: LiquidityProviders[]): void;
    stopDataFetching(): void;
    fetchPoolsForToken(currency0: Type, currency1: Type, excludePools?: Set<string>): Promise<void>;
    getCurrentPoolCodeMap(currency0: Type, currency1: Type): Map<string, PoolCode>;
    getCurrentPoolCodeList(currency0: Type, currency1: Type): PoolCode[];
    getLastUpdateBlock(providers?: LiquidityProviders[]): number;
}
//# sourceMappingURL=data-fetcher.d.ts.map