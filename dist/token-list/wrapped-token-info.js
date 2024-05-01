"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrappedTokenInfo = void 0;
const viem_1 = require("viem");
/**
 * Token instances created from token info on a token list.
 */
class WrappedTokenInfo {
    id;
    isNative = false;
    isToken = true;
    list;
    tokenInfo;
    constructor(tokenInfo, list) {
        this.id = `${tokenInfo.chainId}:${tokenInfo.address}`;
        this.tokenInfo = tokenInfo;
        this.list = list;
    }
    _checksummedAddress = null;
    get address() {
        if (this._checksummedAddress)
            return this._checksummedAddress;
        if (!(0, viem_1.isAddress)(this.tokenInfo.address))
            throw new Error(`Invalid token address: ${this.tokenInfo.address}`);
        this._checksummedAddress = (0, viem_1.getAddress)(this.tokenInfo.address);
        return this._checksummedAddress;
    }
    get chainId() {
        return this.tokenInfo.chainId;
    }
    get decimals() {
        return this.tokenInfo.decimals;
    }
    get name() {
        return this.tokenInfo.name;
    }
    get symbol() {
        return this.tokenInfo.symbol;
    }
    get logoURI() {
        return this.tokenInfo.logoURI;
    }
    _tags = null;
    get tags() {
        if (this._tags !== null)
            return this._tags;
        if (!this.tokenInfo.tags) {
            this._tags = [];
            return this._tags;
        }
        const listTags = this.list?.tags;
        if (!listTags) {
            this._tags = [];
            return this._tags;
        }
        this._tags = this.tokenInfo.tags.map((tagId) => {
            return {
                ...listTags[tagId],
                id: tagId,
            };
        });
        return this._tags;
    }
    equals(other) {
        return (other.chainId === this.chainId &&
            other.isToken &&
            other.address.toLowerCase() === this.address.toLowerCase());
    }
    sortsBefore(other) {
        if (this.equals(other))
            throw new Error('Addresses should not be equal');
        return this.address.toLowerCase() < other.address.toLowerCase();
    }
    get wrapped() {
        return this;
    }
    serialize() {
        return {
            type: 'token',
            isNative: this.isNative,
            isToken: this.isToken,
            name: this.name,
            symbol: this.symbol,
            decimals: this.decimals,
            chainId: this.chainId,
            address: this.address,
        };
    }
}
exports.WrappedTokenInfo = WrappedTokenInfo;
//# sourceMappingURL=wrapped-token-info.js.map