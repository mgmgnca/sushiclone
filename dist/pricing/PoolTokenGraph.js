"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePoolTokenGraph = exports.PoolEdge = exports.TokenVert = void 0;
class TokenVert {
    address;
    decExp;
    token;
    pools = [];
    price;
    obj;
    constructor(token) {
        this.token = token;
        this.address = token.address;
        this.decExp = 10 ** token.decimals;
    }
    getNeibour(edge) {
        const token0 = edge.token0;
        return token0 === this ? edge.token1 : token0;
    }
}
exports.TokenVert = TokenVert;
class PoolEdge {
    pool;
    token0;
    token1;
    poolLiquidity = 0;
    constructor(pool, token0, token1) {
        this.pool = pool;
        this.token0 = token0;
        this.token1 = token1;
    }
    reserve(token) {
        return token === this.token0
            ? this.pool.getReserve0()
            : this.pool.getReserve1();
    }
}
exports.PoolEdge = PoolEdge;
function makePoolTokenGraph(pools, baseTokens) {
    // const vertices: TokenVert = []
    // const edges: PoolEdge = []
    const tokens = new Map();
    const poolsDeduplication = new Set();
    pools.forEach((p) => {
        const poolId = p.address.toLowerCase();
        if (poolsDeduplication.has(poolId))
            return;
        poolsDeduplication.add(poolId);
        // TokenVert for p.token0 finding or creation
        const addr0 = p.token0.address;
        let v0 = tokens.get(addr0);
        if (v0 === undefined) {
            v0 = new TokenVert(p.token0);
            tokens.set(addr0, v0);
        }
        // TokenVert for p.token1 finding or creation
        const addr1 = p.token1.address;
        let v1 = tokens.get(addr1);
        if (v1 === undefined) {
            v1 = new TokenVert(p.token1);
            tokens.set(addr1, v1);
        }
        const edge = new PoolEdge(p, v0, v1);
        v0.pools.push(edge);
        v1.pools.push(edge);
    });
    return baseTokens.map((t) => tokens.get(t));
}
exports.makePoolTokenGraph = makePoolTokenGraph;
//# sourceMappingURL=PoolTokenGraph.js.map