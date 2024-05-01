"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeUnlimited = void 0;
const RPool_js_1 = require("./RPool.js");
class BridgeUnlimited extends RPool_js_1.RPool {
    constructor(address, token0, token1, fee, swapGasCost = 150000) {
        super(address, token0, token1, fee, -1n, -1n, 0, swapGasCost);
    }
    calcOutByIn(amountIn, _direction) {
        return { out: amountIn * (1 - this.fee), gasSpent: this.swapGasCost };
    }
    calcInByOut(amountOut, _direction) {
        return { inp: amountOut / (1 - this.fee), gasSpent: this.swapGasCost };
    }
    calcCurrentPriceWithoutFee(_direction) {
        return 1;
    }
    alwaysAppropriateForPricing() {
        return true;
    }
    poolType() {
        return RPool_js_1.PoolType.Bridge;
    }
}
exports.BridgeUnlimited = BridgeUnlimited;
//# sourceMappingURL=BridgeBidirectionalUnlimited.js.map