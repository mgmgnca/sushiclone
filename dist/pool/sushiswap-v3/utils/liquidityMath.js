"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidityMath = void 0;
const index_js_1 = require("../../../math/index.js");
class LiquidityMath {
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static addDelta(x, y) {
        if (y < index_js_1.ZERO) {
            return x - y * -index_js_1.ONE;
        }
        else {
            return x + y;
        }
    }
}
exports.LiquidityMath = LiquidityMath;
//# sourceMappingURL=liquidityMath.js.map