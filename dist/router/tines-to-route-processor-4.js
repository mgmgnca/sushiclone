"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouteProcessor4Code = void 0;
const index_js_1 = require("../tines/index.js");
const tines_to_route_processor_2_js_1 = require("./tines-to-route-processor-2.js");
class TinesToRouteProcessor4 extends tines_to_route_processor_2_js_1.TinesToRouteProcessor2 {
    // constructor(
    //   routeProcessorAddress: string,
    //   chainId: ChainId,
    //   pools: Map<string, PoolCode>,
    // ) {
    //   super(routeProcessorAddress, chainId, pools)
    // }
    getPoolCode(l) {
        const pc = this.pools.get(l.uniqueId);
        if (pc === undefined) {
            throw new Error(`unknown pool: ${l.uniqueId}`);
        }
        return pc;
    }
    getRouteProcessorCode(route, toAddress, permits = [], source = tines_to_route_processor_2_js_1.RouterLiquiditySource.Sender) {
        // 0. Check for no route
        if (route.status === index_js_1.RouteStatus.NoWay || route.legs.length === 0)
            return '';
        //this.presendedLegs = new Set()
        this.calcTokenOutputLegs(route);
        let res = '0x';
        res += this.processPermits(permits);
        const processedTokens = new Set();
        route.legs.forEach((l, i) => {
            const token = l.tokenFrom;
            if (processedTokens.has(token.tokenId))
                return;
            processedTokens.add(token.tokenId);
            if (this.isOnePoolOptimization(token, route))
                res += this.processOnePoolCode(token, route, toAddress);
            else {
                switch ((0, tines_to_route_processor_2_js_1.getTokenType)(token)) {
                    case tines_to_route_processor_2_js_1.TokenType.NATIVE:
                        res += this.processNativeCode(token, route, toAddress);
                        break;
                    case tines_to_route_processor_2_js_1.TokenType.ERC20:
                        res += this.processERC20Code(i > 0 || source === tines_to_route_processor_2_js_1.RouterLiquiditySource.XSwap, token, route, toAddress);
                        break;
                    case tines_to_route_processor_2_js_1.TokenType.BENTO:
                        res += this.processBentoCode(token, route, toAddress);
                        break;
                    default:
                        throw new Error(`Unknown token type of token ${token.symbol}`);
                }
            }
        });
        return res;
    }
    isOnePoolOptimization(token, route) {
        if ((0, tines_to_route_processor_2_js_1.getTokenType)(token) === tines_to_route_processor_2_js_1.TokenType.NATIVE)
            return false;
        const outputDistribution = this.tokenOutputLegs.get(token.tokenId) || [];
        if (outputDistribution.length !== 1)
            return false;
        if (token.tokenId === route.fromToken.tokenId)
            return false;
        const startPoint = this.getPoolCode(outputDistribution[0]).getStartPoint(outputDistribution[0], route);
        return startPoint === outputDistribution[0].poolAddress;
    }
    swapCode(leg, route, toAddress) {
        const pc = this.getPoolCode(leg);
        const to = this.getPoolOutputAddress(leg, route, toAddress);
        return pc.getSwapCodeForRouteProcessor4(leg, route, to);
    }
}
function getRouteProcessor4Code(route, routeProcessorAddress, toAddress, pools, permits = [], source = tines_to_route_processor_2_js_1.RouterLiquiditySource.Sender) {
    const rpc = new TinesToRouteProcessor4(routeProcessorAddress, route.fromToken.chainId, pools);
    return rpc.getRouteProcessorCode(route, toAddress, permits, source);
}
exports.getRouteProcessor4Code = getRouteProcessor4Code;
//# sourceMappingURL=tines-to-route-processor-4.js.map