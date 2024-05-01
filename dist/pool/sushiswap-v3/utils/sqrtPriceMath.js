"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqrtPriceMath = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../../../math/index.js");
const internalConstants_js_1 = require("../internalConstants.js");
const fullMath_js_1 = require("./fullMath.js");
const MaxUint160 = 2n ** 160n - 1n;
function multiplyIn256(x, y) {
    const product = x * y;
    return product & index_js_1.MAX_UINT256;
}
function addIn256(x, y) {
    const sum = x + y;
    return sum & index_js_1.MAX_UINT256;
}
class SqrtPriceMath {
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static getAmount0Delta(sqrtRatioAX96, sqrtRatioBX96, liquidity, roundUp) {
        if (sqrtRatioAX96 > sqrtRatioBX96) {
            ;
            [sqrtRatioAX96, sqrtRatioBX96] = [sqrtRatioBX96, sqrtRatioAX96];
        }
        const numerator1 = liquidity << 96n;
        const numerator2 = sqrtRatioBX96 - sqrtRatioAX96;
        return roundUp
            ? fullMath_js_1.FullMath.mulDivRoundingUp(fullMath_js_1.FullMath.mulDivRoundingUp(numerator1, numerator2, sqrtRatioBX96), 1n, sqrtRatioAX96)
            : (numerator1 * numerator2) / sqrtRatioBX96 / sqrtRatioAX96;
    }
    static getAmount1Delta(sqrtRatioAX96, sqrtRatioBX96, liquidity, roundUp) {
        if (sqrtRatioAX96 > sqrtRatioBX96) {
            ;
            [sqrtRatioAX96, sqrtRatioBX96] = [sqrtRatioBX96, sqrtRatioAX96];
        }
        return roundUp
            ? fullMath_js_1.FullMath.mulDivRoundingUp(liquidity, sqrtRatioBX96 - sqrtRatioAX96, internalConstants_js_1.Q96)
            : (liquidity * (sqrtRatioBX96 - sqrtRatioAX96)) / internalConstants_js_1.Q96;
    }
    static getNextSqrtPriceFromInput(sqrtPX96, liquidity, amountIn, zeroForOne) {
        (0, tiny_invariant_1.default)(sqrtPX96 > 0n);
        (0, tiny_invariant_1.default)(liquidity > 0n);
        return zeroForOne
            ? this.getNextSqrtPriceFromAmount0RoundingUp(sqrtPX96, liquidity, amountIn, true)
            : this.getNextSqrtPriceFromAmount1RoundingDown(sqrtPX96, liquidity, amountIn, true);
    }
    static getNextSqrtPriceFromOutput(sqrtPX96, liquidity, amountOut, zeroForOne) {
        (0, tiny_invariant_1.default)(sqrtPX96 > 0n);
        (0, tiny_invariant_1.default)(liquidity > 0n);
        return zeroForOne
            ? this.getNextSqrtPriceFromAmount1RoundingDown(sqrtPX96, liquidity, amountOut, false)
            : this.getNextSqrtPriceFromAmount0RoundingUp(sqrtPX96, liquidity, amountOut, false);
    }
    static getNextSqrtPriceFromAmount0RoundingUp(sqrtPX96, liquidity, amount, add) {
        if (amount === 0n)
            return sqrtPX96;
        const numerator1 = liquidity << 96n;
        if (add) {
            const product = multiplyIn256(amount, sqrtPX96);
            if (product / amount === sqrtPX96) {
                const denominator = addIn256(numerator1, product);
                if (denominator >= numerator1) {
                    return fullMath_js_1.FullMath.mulDivRoundingUp(numerator1, sqrtPX96, denominator);
                }
            }
            return fullMath_js_1.FullMath.mulDivRoundingUp(numerator1, 1n, numerator1 / sqrtPX96 + amount);
        }
        else {
            const product = multiplyIn256(amount, sqrtPX96);
            (0, tiny_invariant_1.default)(product / amount === sqrtPX96);
            (0, tiny_invariant_1.default)(numerator1 > product);
            const denominator = numerator1 - product;
            return fullMath_js_1.FullMath.mulDivRoundingUp(numerator1, sqrtPX96, denominator);
        }
    }
    static getNextSqrtPriceFromAmount1RoundingDown(sqrtPX96, liquidity, amount, add) {
        if (add) {
            const quotient = amount <= MaxUint160
                ? (amount << 96n) / liquidity
                : (amount * internalConstants_js_1.Q96) / liquidity;
            return sqrtPX96 + quotient;
        }
        else {
            const quotient = fullMath_js_1.FullMath.mulDivRoundingUp(amount, internalConstants_js_1.Q96, liquidity);
            (0, tiny_invariant_1.default)(sqrtPX96 > quotient);
            return sqrtPX96 - quotient;
        }
    }
}
exports.SqrtPriceMath = SqrtPriceMath;
//# sourceMappingURL=sqrtPriceMath.js.map