"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeSqrtRatioX96 = void 0;
const index_js_1 = require("../../../math/index.js");
/**
 * Returns the sqrt ratio as a Q64.96 corresponding to a given ratio of amount1 and amount0
 * @param amount1 The numerator amount i.e., the amount of token1
 * @param amount0 The denominator amount i.e., the amount of token0
 * @returns The sqrt ratio
 */
function encodeSqrtRatioX96(amount1, amount0) {
    const numerator = BigInt(amount1.toString()) << 192n;
    const denominator = BigInt(amount0.toString());
    const ratioX192 = numerator / denominator;
    return (0, index_js_1.sqrt)(ratioX192);
}
exports.encodeSqrtRatioX96 = encodeSqrtRatioX96;
//# sourceMappingURL=encodeSqrtRatioX96.js.map