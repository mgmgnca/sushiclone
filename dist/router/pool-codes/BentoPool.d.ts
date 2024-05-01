import { MultiRoute, RPool, RouteLeg } from '../../tines/index.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
import { PoolCode } from './PoolCode.js';
export declare class BentoPoolCode extends PoolCode {
    constructor(pool: RPool, liquidityProvider: LiquidityProviders, providerName: string);
    getSwapCodeForRouteProcessor(leg: RouteLeg, _route: MultiRoute, to: string): string;
    getSwapCodeForRouteProcessor2(leg: RouteLeg, _route: MultiRoute, to: string): string;
}
//# sourceMappingURL=BentoPool.d.ts.map