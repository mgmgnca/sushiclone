import type { Tags, TokenInfo, TokenList } from '@uniswap/token-lists';
import { Address } from 'viem';
import type { ChainId } from '../chain/index.js';
import { Token, Type } from '../currency/index.js';
type TagDetails = Tags[keyof Tags];
interface TagInfo extends TagDetails {
    id: string;
}
/**
 * Token instances created from token info on a token list.
 */
export declare class WrappedTokenInfo implements Token {
    readonly id: string;
    readonly isNative: false;
    readonly isToken: true;
    readonly list?: TokenList | undefined;
    readonly tokenInfo: TokenInfo;
    constructor(tokenInfo: TokenInfo, list?: TokenList);
    private _checksummedAddress;
    get address(): Address;
    get chainId(): ChainId;
    get decimals(): number;
    get name(): string;
    get symbol(): string;
    get logoURI(): string | undefined;
    private _tags;
    get tags(): TagInfo[];
    equals(other: Type): boolean;
    sortsBefore(other: Token): boolean;
    get wrapped(): Token;
    serialize(): {
        type: string;
        isNative: false;
        isToken: true;
        name: string;
        symbol: string;
        decimals: number;
        chainId: ChainId;
        address: `0x${string}`;
    };
}
export {};
//# sourceMappingURL=wrapped-token-info.d.ts.map