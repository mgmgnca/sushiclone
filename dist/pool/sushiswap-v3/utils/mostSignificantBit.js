"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostSignificantBit = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../../../math/index.js");
const POWERS_OF_2 = [128, 64, 32, 16, 8, 4, 2, 1].map((pow) => [pow, 2n ** BigInt(pow)]);
function mostSignificantBit(x) {
    (0, tiny_invariant_1.default)(x > 0n, 'ZERO');
    (0, tiny_invariant_1.default)(x <= index_js_1.MAX_UINT256, 'MAX');
    let msb = 0;
    for (const [power, min] of POWERS_OF_2) {
        if (x >= min) {
            x = x >> BigInt(power);
            msb += power;
        }
    }
    return msb;
}
exports.mostSignificantBit = mostSignificantBit;
//# sourceMappingURL=mostSignificantBit.js.map