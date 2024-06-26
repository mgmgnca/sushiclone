import type { ConstantProductRPool, MultiRoute, RouteLeg } from '../../tines/index.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
import { PoolCode } from './PoolCode.js';
export declare class ConstantProductPoolCode extends PoolCode {
    constructor(pool: ConstantProductRPool, liquidityProvider: LiquidityProviders, providerName: string);
    getSwapCodeForRouteProcessor(leg: RouteLeg, _route: MultiRoute, to: string): string;
    getSwapCodeForRouteProcessor2(leg: RouteLeg, _route: MultiRoute, to: string): string;
    getSwapCodeForRouteProcessor4(leg: RouteLeg, _route: MultiRoute, to: string): string;
}
//# sourceMappingURL=ConstantProductPool.d.ts.map