"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../math/index.js");
const Amount_js_1 = require("./Amount.js");
class Share extends index_js_1.Fraction {
    currency;
    scale;
    static fromRawShare(currency, rawShare = 0) {
        return new Share(currency, rawShare);
    }
    constructor(currency, numerator, denominator) {
        super(numerator, denominator);
        (0, tiny_invariant_1.default)(this.quotient <= index_js_1.MAX_UINT128, 'SHARE');
        this.currency = currency;
        this.scale = 10n ** BigInt(currency.decimals);
    }
    toAmount(rebase, roundUp = false) {
        if (rebase.base === index_js_1.ZERO)
            return Amount_js_1.Amount.fromRawAmount(this.currency, this.quotient);
        const elastic = (this.quotient * rebase.elastic) / rebase.base;
        if (roundUp && (elastic * rebase.base) / rebase.elastic < this.quotient) {
            return Amount_js_1.Amount.fromRawAmount(this.currency, elastic + 1n);
        }
        return Amount_js_1.Amount.fromRawAmount(this.currency, elastic);
    }
    /**
     * Construct a currency share with a denominator that is not equal to 1
     * @param currency the currency
     * @param numerator the numerator of the fractional token share
     * @param denominator the denominator of the fractional token share
     */
    static fromFractionalShare(currency, numerator, denominator) {
        return new Share(currency, numerator, denominator);
    }
    add(other) {
        (0, tiny_invariant_1.default)(this.currency.equals(other.currency), 'CURRENCY');
        const added = super.add(other);
        return Share.fromFractionalShare(this.currency, added.numerator, added.denominator);
    }
    subtract(other) {
        (0, tiny_invariant_1.default)(this.currency.equals(other.currency), 'CURRENCY');
        const subtracted = super.subtract(other);
        return Share.fromFractionalShare(this.currency, subtracted.numerator, subtracted.denominator);
    }
    multiply(other) {
        const multiplied = super.multiply(other);
        return Share.fromFractionalShare(this.currency, multiplied.numerator, multiplied.denominator);
    }
    divide(other) {
        const divided = super.divide(other);
        return Share.fromFractionalShare(this.currency, divided.numerator, divided.denominator);
    }
    toSignificant(significantDigits = 6, format, rounding = index_js_1.Rounding.ROUND_DOWN) {
        return super
            .divide(this.scale)
            .toSignificant(significantDigits, format, rounding);
    }
    toFixed(decimalPlaces = this.currency.decimals, format, rounding = index_js_1.Rounding.ROUND_DOWN) {
        (0, tiny_invariant_1.default)(decimalPlaces <= this.currency.decimals, 'DECIMALS');
        return super.divide(this.scale).toFixed(decimalPlaces, format, rounding);
    }
    toExact(format = { groupSeparator: '' }) {
        index_js_1.Big.DP = this.currency.decimals;
        return new index_js_1.Big(this.quotient.toString())
            .div(this.scale.toString())
            .toFormat(format);
    }
}
exports.Share = Share;
//# sourceMappingURL=Share.js.map