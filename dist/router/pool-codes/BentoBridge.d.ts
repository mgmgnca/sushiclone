import type { BridgeBento, MultiRoute, RouteLeg } from '../../tines/index.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
import { PoolCode } from './PoolCode.js';
export declare class BentoBridgePoolCode extends PoolCode {
    bentoBoxAddress: string;
    constructor(pool: BridgeBento, liquidityProvider: LiquidityProviders, _providerName: string, bentoBoxAddress: `0x${string}`);
    getStartPoint(leg: RouteLeg): string;
    getSwapCodeForRouteProcessor(leg: RouteLeg, route: MultiRoute, to: string, exactAmount?: bigint): string;
    getSwapCodeForRouteProcessor2(leg: RouteLeg, _route: MultiRoute, to: string): string;
}
//# sourceMappingURL=BentoBridge.d.ts.map