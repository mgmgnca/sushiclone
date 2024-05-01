"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO_PERCENT = exports.MAX_UINT128 = exports.MAX_UINT256 = exports.MAX_SAFE_INTEGER = exports._1e6 = exports._1e9 = exports._1e12 = exports._1e18 = exports._10000 = exports._9995 = exports._9994 = exports._1000 = exports._997 = exports._100 = exports.TEN = exports.FIVE = exports.THREE = exports.TWO = exports.ONE = exports.ZERO = void 0;
const Percent_js_1 = __importDefault(require("../Percent.js"));
exports.ZERO = 0n;
exports.ONE = 1n;
exports.TWO = 2n;
exports.THREE = 3n;
exports.FIVE = 5n;
exports.TEN = 10n;
exports._100 = 100n;
exports._997 = 997n;
exports._1000 = 1000n;
exports._9994 = 9994n;
exports._9995 = 9995n;
exports._10000 = 10000n;
exports._1e18 = 10n ** 18n;
exports._1e12 = 10n ** 12n;
exports._1e9 = 10n ** 9n;
exports._1e6 = 10n ** 6n;
exports.MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
exports.MAX_UINT256 = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
// 2^128 - 1
exports.MAX_UINT128 = 2n ** 128n - 1n;
exports.ZERO_PERCENT = new Percent_js_1.default(0);
//# sourceMappingURL=numbers.js.map