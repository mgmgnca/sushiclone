"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BentoPoolCode = void 0;
const viem_1 = require("viem");
const index_js_1 = require("../../tines/index.js");
const HEXer_js_1 = require("../HEXer.js");
const PoolCode_js_1 = require("./PoolCode.js");
function getPoolTypeTicker(pool) {
    if (pool instanceof index_js_1.ConstantProductRPool)
        return 'Classic';
    if (pool instanceof index_js_1.StableSwapRPool)
        return 'Stable';
    return '';
}
class BentoPoolCode extends PoolCode_js_1.PoolCode {
    constructor(pool, liquidityProvider, providerName) {
        super(pool, liquidityProvider, `${providerName} ${getPoolTypeTicker(pool)} ${(pool?.fee || 0) * 100}%`);
    }
    getSwapCodeForRouteProcessor(leg, _route, to) {
        // TODO: add unwrap bento = true variant
        // address tokenIn, address recipient, bool unwrapBento
        const poolData = (0, viem_1.encodeAbiParameters)([
            { name: 'tokenIn', type: 'address' },
            { name: 'recipient', type: 'address' },
            { name: 'unwrapBento', type: 'bool' },
        ], [leg.tokenFrom.address, to, false]);
        const code = new HEXer_js_1.HEXer()
            .uint8(21) // swapTrident
            .address(leg.poolAddress)
            .bytes(poolData)
            .toString();
        return code;
    }
    getSwapCodeForRouteProcessor2(leg, _route, to) {
        // TODO: add unwrap bento = true optimization
        // address tokenIn, address recipient, bool unwrapBento
        const poolData = (0, viem_1.encodeAbiParameters)([
            { name: 'tokenIn', type: 'address' },
            { name: 'recipient', type: 'address' },
            { name: 'unwrapBento', type: 'bool' },
        ], [leg.tokenFrom.address, to, false]);
        const code = new HEXer_js_1.HEXer()
            .uint8(4) // swapTrident
            .address(leg.poolAddress)
            .bytes(poolData)
            .toString();
        return code;
    }
}
exports.BentoPoolCode = BentoPoolCode;
//# sourceMappingURL=BentoPool.js.map