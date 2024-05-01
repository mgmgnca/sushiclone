"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const Big_js_1 = __importDefault(require("./Big.js"));
const Decimal_js_1 = __importDefault(require("./Decimal.js"));
const Rounding_js_1 = __importDefault(require("./Rounding.js"));
const toSignificantRounding = {
    [Rounding_js_1.default.ROUND_DOWN]: Decimal_js_1.default.ROUND_DOWN,
    [Rounding_js_1.default.ROUND_HALF_UP]: Decimal_js_1.default.ROUND_HALF_UP,
    [Rounding_js_1.default.ROUND_UP]: Decimal_js_1.default.ROUND_UP,
};
const toFixedRounding = {
    [Rounding_js_1.default.ROUND_DOWN]: Big_js_1.default.roundDown,
    [Rounding_js_1.default.ROUND_HALF_UP]: Big_js_1.default.roundHalfUp,
    [Rounding_js_1.default.ROUND_UP]: Big_js_1.default.roundUp,
};
class Fraction {
    numerator;
    denominator;
    constructor(numerator, denominator = 1n) {
        this.numerator =
            typeof numerator !== 'bigint' ? BigInt(numerator) : numerator;
        this.denominator =
            typeof denominator !== 'bigint' ? BigInt(denominator) : denominator;
    }
    static tryParseFraction(fractionish) {
        if (typeof fractionish === 'number' ||
            typeof fractionish === 'string' ||
            typeof fractionish === 'bigint')
            return new Fraction(fractionish);
        if ('numerator' in fractionish && 'denominator' in fractionish)
            return fractionish;
        throw new Error('Could not parse fraction');
    }
    // performs floor division
    get quotient() {
        return this.numerator / this.denominator;
    }
    // remainder after floor division
    get remainder() {
        return new Fraction(this.numerator % this.denominator, this.denominator);
    }
    invert() {
        return new Fraction(this.denominator, this.numerator);
    }
    add(other) {
        const otherParsed = Fraction.tryParseFraction(other);
        if (this.denominator === otherParsed.denominator) {
            return new Fraction(this.numerator + otherParsed.numerator, this.denominator);
        }
        return new Fraction(this.numerator * otherParsed.denominator +
            otherParsed.numerator * this.denominator, this.denominator * otherParsed.denominator);
    }
    subtract(other) {
        const otherParsed = Fraction.tryParseFraction(other);
        if (this.denominator === otherParsed.denominator) {
            return new Fraction(this.numerator - otherParsed.numerator, this.denominator);
        }
        return new Fraction(this.numerator * otherParsed.denominator -
            otherParsed.numerator * this.denominator, this.denominator * otherParsed.denominator);
    }
    lessThan(other) {
        const otherParsed = Fraction.tryParseFraction(other);
        return (this.numerator * otherParsed.denominator <
            otherParsed.numerator * this.denominator);
    }
    equalTo(other) {
        const otherParsed = Fraction.tryParseFraction(other);
        return (this.numerator * otherParsed.denominator ===
            otherParsed.numerator * this.denominator);
    }
    greaterThan(other) {
        const otherParsed = Fraction.tryParseFraction(other);
        return (this.numerator * otherParsed.denominator >
            otherParsed.numerator * this.denominator);
    }
    multiply(other) {
        const otherParsed = Fraction.tryParseFraction(other);
        return new Fraction(this.numerator * otherParsed.numerator, this.denominator * otherParsed.denominator);
    }
    divide(other) {
        const otherParsed = Fraction.tryParseFraction(other);
        return new Fraction(this.numerator * otherParsed.denominator, this.denominator * otherParsed.numerator);
    }
    toSignificant(significantDigits, format = { groupSeparator: '' }, rounding = Rounding_js_1.default.ROUND_HALF_UP) {
        (0, tiny_invariant_1.default)(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`);
        (0, tiny_invariant_1.default)(significantDigits > 0, `${significantDigits} is not positive.`);
        Decimal_js_1.default.set({
            precision: significantDigits + 1,
            rounding: toSignificantRounding[rounding],
        });
        const quotient = new Decimal_js_1.default(this.numerator.toString())
            .div(this.denominator.toString())
            .toSignificantDigits(significantDigits);
        return quotient.toFormat(quotient.decimalPlaces(), format);
    }
    toFixed(decimalPlaces, format = { groupSeparator: '' }, rounding = Rounding_js_1.default.ROUND_HALF_UP) {
        (0, tiny_invariant_1.default)(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`);
        (0, tiny_invariant_1.default)(decimalPlaces >= 0, `${decimalPlaces} is negative.`);
        Big_js_1.default.DP = decimalPlaces;
        Big_js_1.default.RM = toFixedRounding[rounding];
        return new Big_js_1.default(this.numerator.toString())
            .div(this.denominator.toString())
            .toFormat(decimalPlaces, format);
    }
    toJSON() {
        return {
            n: this.numerator.toString(),
            d: this.denominator.toString(),
        };
    }
    /**
     * Helper method for converting any super class back to a fraction
     */
    get asFraction() {
        return new Fraction(this.numerator, this.denominator);
    }
}
exports.default = Fraction;
//# sourceMappingURL=Fraction.js.map