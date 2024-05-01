import { Address } from 'viem';
import { RPool, RToken } from '../tines';
export declare class TokenVert {
    address: Address;
    decExp: number;
    token: RToken;
    pools: PoolEdge[];
    price?: number | undefined;
    obj?: object | undefined;
    constructor(token: RToken);
    getNeibour(edge: PoolEdge): TokenVert;
}
export declare class PoolEdge {
    pool: RPool;
    token0: TokenVert;
    token1: TokenVert;
    poolLiquidity: number;
    constructor(pool: RPool, token0: TokenVert, token1: TokenVert);
    reserve(token: TokenVert): bigint;
}
export declare function makePoolTokenGraph(pools: RPool[], baseTokens: Address[]): (TokenVert | undefined)[];
//# sourceMappingURL=PoolTokenGraph.d.ts.map