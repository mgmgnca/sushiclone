import { Address, Hex } from 'viem';
import { ChainId } from '../chain/index.js';
import { Type } from '../currency/index.js';
import { MultiRoute, RPool } from '../tines/index.js';
import { LiquidityProviders } from './liquidity-providers/index.js';
import { PoolCode } from './pool-codes/index.js';
import { PermitData, RouterLiquiditySource } from './tines-to-route-processor-2.js';
export interface RPParams {
    tokenIn: Address;
    amountIn: bigint;
    tokenOut: Address;
    amountOutMin: bigint;
    to: Address;
    routeCode: Hex;
    data: string;
    value?: bigint | undefined;
}
export type PoolFilter = (list: RPool) => boolean;
export declare class Router {
    static findSushiRoute(poolCodesMap: Map<string, PoolCode>, chainId: ChainId, fromToken: Type, amountIn: bigint, toToken: Type, gasPrice: number): MultiRoute;
    static findSpecialRoute(poolCodesMap: Map<string, PoolCode>, chainId: ChainId, fromToken: Type, amountIn: bigint, toToken: Type, gasPrice: number, maxPriceImpact?: number): MultiRoute;
    static findBestRoute(poolCodes: Map<string, PoolCode> | PoolCode[], chainId: ChainId, fromToken: Type, amountIn: bigint, toToken: Type, gasPrice: number, providers?: LiquidityProviders[], // all providers if undefined
    poolFilter?: PoolFilter): MultiRoute;
    static routeProcessorParams(poolCodesMap: Map<string, PoolCode>, route: MultiRoute, fromToken: Type, toToken: Type, to: Address, RPAddr: Address, maxPriceImpact?: number): RPParams;
    static routeProcessor2Params(poolCodesMap: Map<string, PoolCode>, route: MultiRoute, fromToken: Type, toToken: Type, to: Address, RPAddr: Address, permits?: PermitData[], maxPriceImpact?: number, source?: RouterLiquiditySource): RPParams;
    static routeProcessor3Params: typeof Router.routeProcessor2Params;
    static routeProcessor3_1Params: typeof Router.routeProcessor2Params;
    static routeProcessor3_2Params: typeof Router.routeProcessor2Params;
    static routeProcessor4Params(poolCodesMap: Map<string, PoolCode>, route: MultiRoute, fromToken: Type, toToken: Type, to: Address, RPAddr: Address, permits?: PermitData[], maxPriceImpact?: number, source?: RouterLiquiditySource): RPParams;
    static routeToHumanString(poolCodesMap: Map<string, PoolCode>, route: MultiRoute, fromToken: Type, toToken: Type, shiftPrimary?: string, shiftSub?: string): string;
}
export declare function tokenQuantityString(token: Type, amount: bigint): string;
//# sourceMappingURL=router.d.ts.map