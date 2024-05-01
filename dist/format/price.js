"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUSD = void 0;
const numeral_1 = __importDefault(require("numeral"));
const formatUSD = (value, inputString = '$0.00a') => {
    if (typeof value === 'string')
        value = Number(value);
    let negative = false;
    if (value < 0) {
        negative = true;
        value = Math.abs(value);
    }
    if (value === 0)
        return '$0.00';
    if (value < 0.000001)
        return '<$0.01';
    if (value < 0.0001)
        return (0, numeral_1.default)(value).format('$0.000000a');
    if (value < 0.001)
        return (0, numeral_1.default)(value).format('$0.0000a');
    if (value < 0.01)
        return (0, numeral_1.default)(value).format('$0.000a');
    return `${negative ? '-' : ''}${(0, numeral_1.default)(value).format(inputString)}`;
};
exports.formatUSD = formatUSD;
//# sourceMappingURL=price.js.map