"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slippageAmount = void 0;
const index_js_1 = require("../math/index.js");
const ONE = new index_js_1.Fraction(1, 1);
function slippageAmount(value, slippage) {
    if (slippage.lessThan(0) || slippage.greaterThan(ONE))
        throw new Error('Unexpected slippage');
    return [
        value.multiply(ONE.subtract(slippage)).quotient,
        value.multiply(ONE.add(slippage)).quotient,
    ];
}
exports.slippageAmount = slippageAmount;
//# sourceMappingURL=slippageAmount.js.map