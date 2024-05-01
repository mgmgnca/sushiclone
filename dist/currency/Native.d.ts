import { Currency } from './Currency.js';
import { Token } from './Token.js';
import { type Type } from './Type.js';
import { type SerializedNative } from './zod.js';
export declare class Native extends Currency {
    readonly id: string;
    readonly isNative: true;
    readonly isToken: false;
    readonly symbol: string;
    readonly name: string;
    protected constructor(native: {
        chainId: number;
        decimals: number;
        symbol: string;
        name: string;
    });
    get wrapped(): Token;
    private static cache;
    static onChain(chainId: number): Native;
    equals(other: Type): boolean;
    serialize(): SerializedNative;
    static deserialize(native: SerializedNative): Native;
}
//# sourceMappingURL=Native.d.ts.map