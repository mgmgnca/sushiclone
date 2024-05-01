"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullMath = void 0;
const index_js_1 = require("../../../math/index.js");
class FullMath {
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static mulDivRoundingUp(a, b, denominator) {
        const product = a * b;
        let result = product / denominator;
        if (product % denominator !== index_js_1.ZERO) {
            result = result + index_js_1.ONE;
        }
        return result;
    }
}
exports.FullMath = FullMath;
//# sourceMappingURL=fullMath.js.map