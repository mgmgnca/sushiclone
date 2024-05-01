import { Hex } from 'viem';
import { ChainId } from '../chain/index.js';
import { MultiRoute, RToken, RouteLeg } from '../tines/index.js';
import { PoolCode } from './pool-codes/PoolCode.js';
export declare class TinesToRouteProcessor {
    routeProcessorAddress: string;
    chainId: ChainId;
    pools: Map<string, PoolCode>;
    tokenOutputLegs: Map<string, RouteLeg[]>;
    constructor(routeProcessorAddress: string, chainId: ChainId, pools: Map<string, PoolCode>);
    getRouteProcessorCode(route: MultiRoute, toAddress: string): Hex | '';
    getRPCodeForsimpleWrapRoute(route: MultiRoute, toAddress: string): Hex;
    getPoolOutputAddress(l: RouteLeg, route: MultiRoute, toAddress: string): string;
    getPoolCode(l: RouteLeg): PoolCode;
    codeSwap(leg: RouteLeg, route: MultiRoute, to: string, exactAmount?: bigint): string;
    codeDistributeInitial(route: MultiRoute): [string, Map<string, bigint>];
    codeDistributeTokenShares(token: RToken, route: MultiRoute): string;
    calcTokenOutputLegs(route: MultiRoute): void;
}
export declare function getRouteProcessorCode(route: MultiRoute, routeProcessorAddress: string, toAddress: string, pools: Map<string, PoolCode>): string;
//# sourceMappingURL=tines-to-route-processor.d.ts.map