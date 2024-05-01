import { Address, PublicClient } from 'viem';
import { ChainId } from '../../chain/index.js';
import { SushiSwapV3FeeAmount } from '../../config/index.js';
import { Token } from '../../currency/index.js';
import { type PoolCode } from '../pool-codes/index.js';
import { LiquidityProvider } from './LiquidityProvider.js';
interface StaticPool {
    address: Address;
    token0: Token;
    token1: Token;
    fee: SushiSwapV3FeeAmount;
}
export declare const NUMBER_OF_SURROUNDING_TICKS = 1000;
type PoolFilter = {
    has: (arg: string) => boolean;
};
export declare abstract class UniswapV3BaseProvider extends LiquidityProvider {
    poolsByTrade: Map<string, string[]>;
    pools: Map<string, PoolCode>;
    blockListener?: (() => void) | undefined;
    unwatchBlockNumber?: () => void;
    isInitialized: boolean;
    factory: Record<number, Address>;
    initCodeHash: Record<number, string>;
    tickLens: Record<number, string>;
    constructor(chainId: ChainId, web3Client: PublicClient, factory: Record<number, Address>, initCodeHash: Record<number, string>, tickLens: Record<number, string>, isTest?: boolean);
    fetchPoolsForToken(t0: Token, t1: Token, excludePools?: Set<string> | PoolFilter): Promise<void>;
    getStaticPools(t1: Token, t2: Token): StaticPool[];
    startFetchPoolsData(): void;
    getCurrentPoolList(): PoolCode[];
    stopFetchPoolsData(): void;
}
export {};
//# sourceMappingURL=UniswapV3Base.d.ts.map