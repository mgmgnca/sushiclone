"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const viem_1 = require("viem");
const Currency_js_1 = require("./Currency.js");
const zod_js_1 = require("./zod.js");
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
class Token extends Currency_js_1.Currency {
    id;
    isNative = false;
    isToken = true;
    /**
     * The contract address on the chain on which this token lives
     */
    address;
    constructor({ 
    // TODO:
    // id,
    chainId, address, decimals, symbol, name, }) {
        super({
            chainId,
            decimals,
            symbol,
            name,
        });
        try {
            this.address = (0, viem_1.getAddress)(address);
            this.id = `${chainId}:${address}`;
            // this.tokenId = `${t.address || ''}_${t.chainId}`
        }
        catch {
            throw `${address} is not a valid address`;
        }
    }
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other) {
        return (other.isToken &&
            this.chainId === other.chainId &&
            this.address === other.address);
    }
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other) {
        (0, tiny_invariant_1.default)(this.chainId === other.chainId, 'CHAIN_IDS');
        (0, tiny_invariant_1.default)(this.address !== other.address, 'ADDRESSES');
        return this.address.toLowerCase() < other.address.toLowerCase();
    }
    /**
     * Return this token, which does not need to be wrapped
     */
    get wrapped() {
        return this;
    }
    // public get tokenURI(): string {
    //   return `tokens/${this.chainId}/${this.address}.jpg`
    // }
    /**
     * Serialize to JSON object
     */
    serialize() {
        return zod_js_1.tokenSchema.parse({
            isNative: this.isNative,
            name: this.name,
            symbol: this.symbol,
            decimals: this.decimals,
            chainId: this.chainId,
            address: this.address,
        });
    }
    static deserialize({ name, symbol, address, decimals, chainId, }) {
        return new Token({
            name,
            symbol,
            address,
            decimals,
            chainId,
        });
    }
}
exports.Token = Token;
//# sourceMappingURL=Token.js.map