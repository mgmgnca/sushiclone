"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Native = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../chain/index.js");
const Currency_js_1 = require("./Currency.js");
const tokens_js_1 = require("./tokens.js");
const zod_js_1 = require("./zod.js");
class Native extends Currency_js_1.Currency {
    id;
    isNative = true;
    isToken = false;
    symbol;
    name;
    constructor(native) {
        super(native);
        this.id = `${native.chainId}:NATIVE`;
        this.symbol = native.symbol;
        this.name = native.name;
    }
    get wrapped() {
        const wnative = tokens_js_1.WNATIVE[this.chainId];
        (0, tiny_invariant_1.default)(!!wnative, 'WRAPPED');
        return wnative;
    }
    // public get tokenURI(): string {
    //   return `native-currency/${this.symbol.toLowerCase()}.svg`
    // }
    static cache = {};
    static onChain(chainId) {
        const cached = this.cache[chainId];
        if (typeof cached !== 'undefined') {
            return cached;
        }
        const nativeCurrency = index_js_1.natives?.[chainId];
        (0, tiny_invariant_1.default)(!!nativeCurrency, 'NATIVE_CURRENCY');
        const { decimals, name, symbol } = nativeCurrency;
        const native = new Native({
            chainId,
            decimals,
            name,
            symbol,
        });
        this.cache[chainId] = new Native({
            chainId,
            decimals,
            name,
            symbol,
        });
        return native;
    }
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    serialize() {
        return zod_js_1.nativeSchema.parse({
            isNative: this.isNative,
            name: this.name,
            symbol: this.symbol,
            decimals: this.decimals,
            chainId: this.chainId,
        });
    }
    static deserialize(native) {
        return Native.onChain(native.chainId);
    }
}
exports.Native = Native;
//# sourceMappingURL=Native.js.map