import { PublicClient } from 'viem';
import type { ChainId } from '../../chain/index.js';
import { type PoolCode } from '../pool-codes/index.js';
import { LiquidityProvider, LiquidityProviders } from './LiquidityProvider.js';
export declare class NativeWrapProvider extends LiquidityProvider {
    poolCodes: PoolCode[];
    constructor(chainId: ChainId, client: PublicClient);
    getType(): LiquidityProviders;
    getPoolProviderName(): string;
    startFetchPoolsData(): void;
    fetchPoolsForToken(): Promise<void>;
    getCurrentPoolList(): PoolCode[];
    stopFetchPoolsData(): void;
}
//# sourceMappingURL=NativeWrapProvider.d.ts.map