"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParseAmount = void 0;
const viem_1 = require("viem");
const Amount_js_1 = require("./Amount.js");
// try to parse a user entered amount for a given token
function tryParseAmount(value, currency) {
    if (!value || !currency) {
        return undefined;
    }
    try {
        const typedValueParsed = (0, viem_1.parseUnits)(value, currency.decimals).toString();
        if (typedValueParsed !== '0') {
            return Amount_js_1.Amount.fromRawAmount(currency, BigInt(typedValueParsed));
        }
    }
    catch (error) {
        // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
        console.debug(`Failed to parse input amount: "${value}"`, error);
    }
    // necessary for all paths to return a value
    return undefined;
}
exports.tryParseAmount = tryParseAmount;
//# sourceMappingURL=try-parse-amount.js.map