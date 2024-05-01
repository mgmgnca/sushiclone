import type { MultiRoute, RPool, RouteLeg } from '../../tines/index.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
export declare abstract class PoolCode {
    pool: RPool;
    liquidityProvider: LiquidityProviders;
    poolName: string;
    constructor(pool: RPool, liquidityProvider: LiquidityProviders, poolName: string);
    static RouteProcessorAddress: string;
    getStartPoint(_leg: RouteLeg, _route: MultiRoute): string;
    abstract getSwapCodeForRouteProcessor(leg: RouteLeg, route: MultiRoute, to: string, exactAmount?: bigint): string;
    getSwapCodeForRouteProcessor2(_leg: RouteLeg, _route: MultiRoute, _to: string): string;
    getSwapCodeForRouteProcessor4(leg: RouteLeg, route: MultiRoute, to: string): string;
}
//# sourceMappingURL=PoolCode.d.ts.map