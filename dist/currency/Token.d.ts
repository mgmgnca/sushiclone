import { Address } from 'viem';
import { Currency } from './Currency.js';
import { type Type } from './Type.js';
import { type SerializedToken } from './zod.js';
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export declare class Token extends Currency {
    readonly id: string;
    readonly isNative: false;
    readonly isToken: true;
    /**
     * The contract address on the chain on which this token lives
     */
    readonly address: Address;
    constructor({ chainId, address, decimals, symbol, name, }: {
        chainId: number | string;
        address: string;
        decimals: number | string;
        symbol?: string | undefined;
        name?: string | undefined;
    });
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Type): boolean;
    /**
     * Returns true if the address of this token sorts before the address of the other token
     * @param other other token to compare
     * @throws if the tokens have the same address
     * @throws if the tokens are on different chains
     */
    sortsBefore(other: Token): boolean;
    /**
     * Return this token, which does not need to be wrapped
     */
    get wrapped(): Token;
    /**
     * Serialize to JSON object
     */
    serialize(): SerializedToken;
    static deserialize({ name, symbol, address, decimals, chainId, }: SerializedToken): Token;
}
//# sourceMappingURL=Token.d.ts.map