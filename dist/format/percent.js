"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPercent = void 0;
const numeral_1 = __importDefault(require("numeral"));
const formatPercent = (value) => {
    let negative = false;
    if (value < 0) {
        negative = true;
        value = Math.abs(value);
    }
    if (value === 0) {
        return '0.00%';
    }
    if (value < 0.0001) {
        return '<0.01%';
    }
    if (value > 1000) {
        return '>100000%';
    }
    return `${negative ? '-' : ''}${(0, numeral_1.default)(value).format('(0.00%)')}`;
};
exports.formatPercent = formatPercent;
//# sourceMappingURL=percent.js.map