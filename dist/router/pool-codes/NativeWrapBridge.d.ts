import type { BridgeUnlimited, MultiRoute, RouteLeg } from '../../tines/index.js';
import { LiquidityProviders } from '../liquidity-providers/index.js';
import { PoolCode } from './PoolCode.js';
export declare class NativeWrapBridgePoolCode extends PoolCode {
    constructor(pool: BridgeUnlimited, liquidityProvider: LiquidityProviders);
    getStartPoint(): string;
    getSwapCodeForRouteProcessor(leg: RouteLeg): string;
    getSwapCodeForRouteProcessor2(leg: RouteLeg, _route: MultiRoute, to: string): string;
}
//# sourceMappingURL=NativeWrapBridge.d.ts.map