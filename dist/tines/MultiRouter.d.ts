import { Address } from 'viem';
import { MultiRoute, NetworkInfo } from './Graph.js';
import { RPool, RToken } from './RPool.js';
export declare function findMultiRouteExactIn(from: RToken, to: RToken, amountIn: bigint | number, pools: RPool[], baseTokenOrNetworks: RToken | NetworkInfo[], gasPrice?: number, flows?: number | number[]): MultiRoute;
export declare function findMultiRouteExactOut(from: RToken, to: RToken, amountOut: bigint | number, pools: RPool[], baseTokenOrNetworks: RToken | NetworkInfo[], gasPrice?: number, flows?: number | number[]): MultiRoute;
export declare function findSingleRouteExactIn(from: RToken, to: RToken, amountIn: bigint | number, pools: RPool[], baseTokenOrNetworks: RToken | NetworkInfo[], gasPrice?: number): MultiRoute;
export declare function findSingleRouteExactOut(from: RToken, to: RToken, amountOut: bigint | number, pools: RPool[], baseTokenOrNetworks: RToken | NetworkInfo[], gasPrice?: number): MultiRoute;
export declare function calcTokenPrices(pools: RPool[], baseToken: RToken, minPriceLiquidity?: number, priceLogging?: boolean): Map<RToken, number>;
export declare function getTokenPriceReasoning(pools: RPool[], baseToken: RToken, token: Address, minPriceLiquidity?: number, priceLogging?: boolean): string[];
export declare function calcTokenAddressPrices(pools: RPool[], baseToken: RToken, minPriceLiquidity?: number, priceLogging?: boolean): Record<string, number>;
//# sourceMappingURL=MultiRouter.d.ts.map