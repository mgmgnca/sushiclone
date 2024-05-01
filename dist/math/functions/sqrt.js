"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqrt = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../constants/index.js");
/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */
function sqrt(value) {
    (0, tiny_invariant_1.default)(value >= index_js_1.ZERO, 'NEGATIVE');
    // rely on built in sqrt if possible
    if (value < index_js_1.MAX_SAFE_INTEGER) {
        return BigInt(Math.floor(Math.sqrt(Number(value))));
    }
    let z;
    let x;
    z = value;
    x = value / index_js_1.TWO + index_js_1.ONE;
    while (x < z) {
        z = x;
        x = (value / x + x) / index_js_1.TWO;
    }
    return z;
}
exports.sqrt = sqrt;
//# sourceMappingURL=sqrt.js.map