"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapMath = void 0;
const fullMath_js_1 = require("./fullMath.js");
const sqrtPriceMath_js_1 = require("./sqrtPriceMath.js");
const MAX_FEE = 10n ** 6n;
class SwapMath {
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static computeSwapStep(sqrtRatioCurrentX96, sqrtRatioTargetX96, liquidity, amountRemaining, feePips) {
        // We know that all will be assigned, typescript just doesn't see it for amountIn/Out
        let sqrtRatioNextX96;
        let amountIn = 0n;
        let amountOut = 0n;
        let feeAmount;
        const zeroForOne = sqrtRatioCurrentX96 >= sqrtRatioTargetX96;
        const exactIn = amountRemaining >= 0n;
        if (exactIn) {
            const amountRemainingLessFee = (amountRemaining * (MAX_FEE - BigInt(feePips))) / MAX_FEE;
            amountIn = zeroForOne
                ? sqrtPriceMath_js_1.SqrtPriceMath.getAmount0Delta(sqrtRatioTargetX96, sqrtRatioCurrentX96, liquidity, true)
                : sqrtPriceMath_js_1.SqrtPriceMath.getAmount1Delta(sqrtRatioCurrentX96, sqrtRatioTargetX96, liquidity, true);
            if (amountRemainingLessFee >= amountIn) {
                sqrtRatioNextX96 = sqrtRatioTargetX96;
            }
            else {
                sqrtRatioNextX96 = sqrtPriceMath_js_1.SqrtPriceMath.getNextSqrtPriceFromInput(sqrtRatioCurrentX96, liquidity, amountRemainingLessFee, zeroForOne);
            }
        }
        else {
            amountOut = zeroForOne
                ? sqrtPriceMath_js_1.SqrtPriceMath.getAmount1Delta(sqrtRatioTargetX96, sqrtRatioCurrentX96, liquidity, false)
                : sqrtPriceMath_js_1.SqrtPriceMath.getAmount0Delta(sqrtRatioCurrentX96, sqrtRatioTargetX96, liquidity, false);
            if (amountRemaining * -1n >= amountOut) {
                sqrtRatioNextX96 = sqrtRatioTargetX96;
            }
            else {
                sqrtRatioNextX96 = sqrtPriceMath_js_1.SqrtPriceMath.getNextSqrtPriceFromOutput(sqrtRatioCurrentX96, liquidity, amountRemaining * -1n, zeroForOne);
            }
        }
        const max = sqrtRatioTargetX96 === sqrtRatioNextX96;
        if (zeroForOne) {
            amountIn =
                max && exactIn
                    ? amountIn
                    : sqrtPriceMath_js_1.SqrtPriceMath.getAmount0Delta(sqrtRatioNextX96, sqrtRatioCurrentX96, liquidity, true);
            amountOut =
                max && !exactIn
                    ? amountOut
                    : sqrtPriceMath_js_1.SqrtPriceMath.getAmount1Delta(sqrtRatioNextX96, sqrtRatioCurrentX96, liquidity, false);
        }
        else {
            amountIn =
                max && exactIn
                    ? amountIn
                    : sqrtPriceMath_js_1.SqrtPriceMath.getAmount1Delta(sqrtRatioCurrentX96, sqrtRatioNextX96, liquidity, true);
            amountOut =
                max && !exactIn
                    ? amountOut
                    : sqrtPriceMath_js_1.SqrtPriceMath.getAmount0Delta(sqrtRatioCurrentX96, sqrtRatioNextX96, liquidity, false);
        }
        if (!exactIn && amountOut > amountRemaining * -1n) {
            amountOut = amountRemaining * -1n;
        }
        if (exactIn && sqrtRatioNextX96 !== sqrtRatioTargetX96) {
            // we didn't reach the target, so take the remainder of the maximum input as fee
            feeAmount = amountRemaining - amountIn;
        }
        else {
            feeAmount = fullMath_js_1.FullMath.mulDivRoundingUp(amountIn, BigInt(feePips), MAX_FEE - BigInt(feePips));
        }
        return [sqrtRatioNextX96, amountIn, amountOut, feeAmount];
    }
}
exports.SwapMath = SwapMath;
//# sourceMappingURL=swapMath.js.map