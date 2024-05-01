"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withoutScientificNotation = exports.formatNumber = void 0;
const numeral_1 = __importDefault(require("numeral"));
const formatNumber = (value) => {
    return (0, numeral_1.default)(value).format('(0.00a)');
};
exports.formatNumber = formatNumber;
/**
 * Convert scientific notation into decimal form, e.g. "-12.34e-5" => "-0.0001234",
 * @param value Number in scientific notation
 * @return Number in decimal form only
 */
function withoutScientificNotation(value) {
    if (!value.includes('e'))
        return value;
    if (!value.match(/^-?\d*\.?\d+(e[+-]?\d+)?$/))
        return undefined;
    const [sign, absValue] = value.startsWith('-')
        ? ['-', value.slice(1)]
        : ['', value];
    const [m, n] = absValue.split('e');
    const [integer, fraction] = m.split('.');
    const mantissa = (integer + (fraction ?? '')).replace(/^0+/, '');
    const exponent = parseInt(n ?? 0) - (fraction ?? '').length;
    if (exponent >= 0) {
        return sign + mantissa + '0'.repeat(exponent);
    }
    else {
        const i = mantissa.length + exponent;
        if (i > 0) {
            return `${sign + mantissa.slice(0, i)}.${mantissa.slice(i) || 0}`;
        }
        else {
            return `${sign}0.${'0'.repeat(-i)}${mantissa}`;
        }
    }
}
exports.withoutScientificNotation = withoutScientificNotation;
//# sourceMappingURL=number.js.map