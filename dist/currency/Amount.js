"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amount = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../math/index.js");
const Native_js_1 = require("./Native.js");
const Share_js_1 = require("./Share.js");
const Token_js_1 = require("./Token.js");
const zod_js_1 = require("./zod.js");
class Amount extends index_js_1.Fraction {
    currency;
    scale;
    /**
     * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
     * @param currency the currency in the amount
     * @param rawAmount the raw token or ether amount
     */
    static fromRawAmount(currency, rawAmount) {
        return new Amount(currency, rawAmount);
    }
    static fromShare(currency, shares, rebase, roundUp = false) {
        if (rebase.base === index_js_1.ZERO)
            return new Amount(currency, shares);
        const sharesBI = typeof shares === 'bigint' ? shares : BigInt(shares.toString());
        const elastic = (sharesBI * rebase.elastic) / rebase.base;
        if (roundUp && (elastic * rebase.base) / rebase.elastic < sharesBI) {
            return new Amount(currency, elastic + 1n);
        }
        return new Amount(currency, elastic);
    }
    toShare(rebase, roundUp = false) {
        if (rebase.elastic === index_js_1.ZERO)
            return Share_js_1.Share.fromRawShare(this.currency, this.quotient);
        const base = (this.quotient * rebase.base) / rebase.elastic;
        if (roundUp && (base * rebase.elastic) / rebase.base < this.quotient) {
            return Share_js_1.Share.fromRawShare(this.currency, base + 1n);
        }
        return Share_js_1.Share.fromRawShare(this.currency, base);
    }
    /**
     * Construct a currency amount with a denominator that is not equal to 1
     * @param currency the currency
     * @param numerator the numerator of the fractional token amount
     * @param denominator the denominator of the fractional token amount
     */
    static fromFractionalAmount(currency, numerator, denominator) {
        return new Amount(currency, numerator, denominator);
    }
    constructor(currency, numerator, denominator) {
        super(numerator, denominator);
        (0, tiny_invariant_1.default)(this.quotient <= index_js_1.MAX_UINT256, 'AMOUNT');
        this.currency = currency;
        this.scale = 10n ** BigInt(currency.decimals);
    }
    add(other) {
        (0, tiny_invariant_1.default)(this.currency.equals(other.currency), 'CURRENCY');
        const added = super.add(other);
        return Amount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
    }
    subtract(other) {
        (0, tiny_invariant_1.default)(this.currency.equals(other.currency), 'CURRENCY');
        const subtracted = super.subtract(other);
        return Amount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
    }
    multiply(other) {
        const multiplied = super.multiply(other);
        return Amount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
    }
    divide(other) {
        const divided = super.divide(other);
        return Amount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
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
    toHex() {
        return `0x${this.quotient.toString(16)}`;
    }
    toExact(format = { groupSeparator: '' }) {
        index_js_1.Big.DP = this.currency.decimals;
        return new index_js_1.Big(this.quotient.toString())
            .div(this.scale.toString())
            .toFormat(format);
    }
    get wrapped() {
        if (this.currency.isToken)
            return this;
        return Amount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
    }
    serialize() {
        return zod_js_1.amountSchema.parse({
            amount: this.quotient.toString(),
            currency: this.currency.serialize(),
        });
    }
    static deserialize(amount) {
        if (amount.currency.isNative)
            return Amount.fromRawAmount(Native_js_1.Native.deserialize(amount.currency), amount.amount);
        return Amount.fromRawAmount(Token_js_1.Token.deserialize(amount.currency), amount.amount);
    }
}
exports.Amount = Amount;
//# sourceMappingURL=Amount.js.map