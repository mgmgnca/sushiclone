import { ChainId } from '../../chain/index.js';
import { Type } from '../../currency/index.js';
import { DataFetcher } from '../data-fetcher.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
export declare function quote1InchV5(chainId: ChainId, fromTokenAddress: string, toTokenAddress: string, amount: string, gasPrice: number, providers?: LiquidityProviders[]): Promise<string>;
interface Environment {
    chainId: ChainId;
    dataFetcher: DataFetcher;
}
export declare function test(env: Environment, from: Type, to: Type, amount: string, gasPrice: number, providers?: LiquidityProviders[]): Promise<number[]>;
export {};
//# sourceMappingURL=check.d.ts.map