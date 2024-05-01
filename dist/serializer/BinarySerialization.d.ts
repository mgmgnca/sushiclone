import { Address } from 'viem';
export declare class BinWriteStream {
    data: Uint8Array;
    position: number;
    constructor(primarySize?: number);
    getSerializedData(): Uint8Array;
    ensurePlace(bytes: number): void;
    uint8(num: number): void;
    uint16(num: number): void;
    uint24(num: number): void;
    int24(num: number): void;
    uint32(num: number): void;
    float64(num: number): void;
    bigUInt(num: bigint, debug0?: string, debug1?: string): void;
    bigInt(num: bigint): void;
    str16UTF8(s: string): void;
    str16UTF16(s: string): void;
    str16(s: string): void;
    address(s: string): void;
    reserveUint16(): number;
    setLengthUint16(position: number): void;
}
export declare class BinReadStream {
    data: Uint8Array;
    position: number;
    constructor(data: Uint8Array);
    restBytes(): number;
    ensurePlace(bytes: number): void;
    skip(bytes: number): void;
    uint8(): number;
    uint16(): number;
    uint24(): number;
    int24(): number;
    uint32(): number;
    float64(): number;
    bigUInt(): bigint;
    bigInt(): bigint;
    str16UTF8(): string;
    str16UTF16(): string;
    str16(): string;
    address(): Address;
}
//# sourceMappingURL=BinarySerialization.d.ts.map