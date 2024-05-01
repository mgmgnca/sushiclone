import type { MultiRoute, RouteLeg, UniV3Pool } from '../../tines/index.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
import { PoolCode } from './PoolCode.js';
export declare class UniV3PoolCode extends PoolCode {
    constructor(pool: UniV3Pool, liquidityProvider: LiquidityProviders, providerName: string);
    getStartPoint(): string;
    getSwapCodeForRouteProcessor(): string;
    getSwapCodeForRouteProcessor2(leg: RouteLeg, _route: MultiRoute, to: string): string;
}
//# sourceMappingURL=UniV3Pool.d.ts.map