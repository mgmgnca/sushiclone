"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurvePoolCode = void 0;
const index_js_1 = require("../../tines/index.js");
const HEXer_js_1 = require("../HEXer.js");
const index_js_2 = require("../liquidity-providers/index.js");
const PoolCode_js_1 = require("./PoolCode.js");
class CurvePoolCode extends PoolCode_js_1.PoolCode {
    constructor(pool, liquidityProvider, providerName) {
        super(pool, liquidityProvider, `${providerName} ${(pool?.fee || 0) * 100}%`);
    }
    getStartPoint() {
        return PoolCode_js_1.PoolCode.RouteProcessorAddress;
    }
    getSwapCodeForRouteProcessor() {
        return 'CurvePool is not supported by RP1';
    }
    getSwapCodeForRouteProcessor2() {
        return 'CurvePool is not supported by RP2';
    }
    getSwapCodeForRouteProcessor4(leg, _, to) {
        // supports only 2-token pools currently
        let poolType = 0;
        if (leg.tokenFrom.chainId !== undefined) {
            const index = index_js_2.CURVE_NON_FACTORY_POOLS[leg.tokenFrom.chainId].findIndex(([addr]) => addr === this.pool.address);
            if (index >= 0 &&
                index_js_2.CURVE_NON_FACTORY_POOLS[leg.tokenFrom.chainId][index][1] !== index_js_2.CurvePoolType.Legacy)
                poolType = 1;
        }
        const [index0, index1] = this.pool instanceof index_js_1.CurveMultitokenPool
            ? [this.pool.index0, this.pool.index1]
            : [0, 1];
        const [fromIndex, toIndex] = this.pool.token0.tokenId === leg.tokenFrom.tokenId
            ? [index0, index1]
            : [index1, index0];
        const code = new HEXer_js_1.HEXer()
            .uint8(5) // Curve pool
            .address(this.pool.address)
            .uint8(poolType)
            .uint8(fromIndex)
            .uint8(toIndex)
            .address(to)
            .address(leg.tokenTo.address || '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
            .toString();
        return code;
    }
}
exports.CurvePoolCode = CurvePoolCode;
//# sourceMappingURL=CurvePool.js.map