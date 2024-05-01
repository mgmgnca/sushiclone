"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../format/index.js");
const Fraction_js_1 = __importDefault(require("./Fraction.js"));
const ONE_HUNDRED = new Fraction_js_1.default(100n);
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */
function toPercent(fraction) {
    return new Percent(fraction.numerator, fraction.denominator);
}
class Percent extends Fraction_js_1.default {
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */
    isPercent = true;
    add(other) {
        return toPercent(super.add(other));
    }
    subtract(other) {
        return toPercent(super.subtract(other));
    }
    multiply(other) {
        return toPercent(super.multiply(other));
    }
    divide(other) {
        return toPercent(super.divide(other));
    }
    toSignificant(significantDigits = 5, format, rounding) {
        return super
            .multiply(ONE_HUNDRED)
            .toSignificant(significantDigits, format, rounding);
    }
    toFixed(decimalPlaces = 2, format, rounding) {
        return super.multiply(ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
    }
    toPercentageString(decimalPlaces = 2) {
        // +2 since 0.5 = 50%
        return (0, index_js_1.formatPercent)(super.toFixed(decimalPlaces + 2));
    }
}
exports.default = Percent;
//# sourceMappingURL=Percent.js.map