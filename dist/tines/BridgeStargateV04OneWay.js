"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeStargateV04OneWay = void 0;
const RPool_js_1 = require("./RPool.js");
const StarGateFeesV04_js_1 = require("./StarGateFeesV04.js");
const Utils_js_1 = require("./Utils.js");
class BridgeStargateV04OneWay extends RPool_js_1.RPool {
    bridgeState;
    whitelisted;
    constructor(id, // some kind of bridge ID. Used for tines output
    token0, // from token
    token1, // to token
    bridgeState, whitelisted, swapGasCost = 150000) {
        super(id, token0, token1, Number.NaN, 0n, 0n, 0, swapGasCost);
        this.bridgeState = bridgeState;
        this.whitelisted = whitelisted;
    }
    calcFeeAmount(amountIn) {
        const fees = (0, StarGateFeesV04_js_1.getStarGateFeesV04)(this.bridgeState, this.whitelisted, (0, Utils_js_1.getBigInt)(amountIn));
        const feesTotal = fees.lpFee + fees.protocolFee + fees.eqFee - fees.eqReward;
        return parseInt(feesTotal.toString());
    }
    calcOutByIn(amountIn, direction) {
        if (!direction)
            throw new Error('Wrong way for BridgeStargateV04OneWay');
        const fees = (0, StarGateFeesV04_js_1.getStarGateFeesV04)(this.bridgeState, this.whitelisted, (0, Utils_js_1.getBigInt)(amountIn));
        const maxAmount = parseInt((this.bridgeState.currentBalance - fees.lpFee + fees.eqReward).toString());
        if (amountIn > maxAmount)
            throw new Error('OutOfLiquidity BridgeStargateV04OneWay');
        const feesTotal = parseInt((fees.lpFee + fees.protocolFee + fees.eqFee - fees.eqReward).toString());
        const out = amountIn - feesTotal;
        console.assert(out >= 0, 'Error 336');
        return { out, gasSpent: this.swapGasCost };
    }
    calcInByOut() {
        throw new Error('calcInByOut for BridgeStargateV04OneWay');
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
exports.BridgeStargateV04OneWay = BridgeStargateV04OneWay;
//# sourceMappingURL=BridgeStargateV04OneWay.js.map