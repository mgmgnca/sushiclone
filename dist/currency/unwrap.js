"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapToken = void 0;
const Native_js_1 = require("./Native.js");
const unwrapToken = (currency) => {
    return currency.wrapped.address ===
        Native_js_1.Native.onChain(currency.chainId).wrapped.address
        ? Native_js_1.Native.onChain(currency.chainId)
        : currency;
};
exports.unwrapToken = unwrapToken;
//# sourceMappingURL=unwrap.js.map