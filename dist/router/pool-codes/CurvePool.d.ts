import { CurveMultitokenPool, CurvePool, MultiRoute, RouteLeg } from '../../tines/index.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
import { PoolCode } from './PoolCode.js';
export declare class CurvePoolCode extends PoolCode {
    constructor(pool: CurvePool | CurveMultitokenPool, liquidityProvider: LiquidityProviders, providerName: string);
    getStartPoint(): string;
    getSwapCodeForRouteProcessor(): string;
    getSwapCodeForRouteProcessor2(): string;
    getSwapCodeForRouteProcessor4(leg: RouteLeg, _: MultiRoute, to: string): string;
}
//# sourceMappingURL=CurvePool.d.ts.map