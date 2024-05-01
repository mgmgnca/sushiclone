import { Token } from '../currency/index.js';
import { PoolCode } from './pool-codes/index.js';
export declare function serializePoolsBinary(pools: PoolCode[], extraData?: any): Uint8Array;
export declare function deserializePoolsBinary(data: Uint8Array, start?: number, existedTokens?: (a: string) => Token | undefined): {
    pools: PoolCode[];
    extraData: any;
    finish: number;
};
export declare function comparePoolArrays(poolsA: PoolCode[], poolsB: PoolCode[]): boolean;
export declare function testPoolSerialization(poolsA: PoolCode[], existedTokens?: (a: string) => Token | undefined): boolean;
//# sourceMappingURL=PoolBinarySerialization.d.ts.map