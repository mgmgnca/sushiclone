"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPoolSerialization = exports.comparePoolArrays = exports.deserializePoolsBinary = exports.serializePoolsBinary = void 0;
const index_js_1 = require("../currency/index.js");
const BinarySerialization_js_1 = require("../serializer/BinarySerialization.js");
const index_js_2 = require("../tines/index.js");
const index_js_3 = require("./pool-codes/index.js");
var PoolTypeIndex;
(function (PoolTypeIndex) {
    PoolTypeIndex[PoolTypeIndex["Bridge"] = 0] = "Bridge";
    PoolTypeIndex[PoolTypeIndex["Classic"] = 1] = "Classic";
    PoolTypeIndex[PoolTypeIndex["Concentrated"] = 2] = "Concentrated";
    PoolTypeIndex[PoolTypeIndex["Curve"] = 3] = "Curve";
})(PoolTypeIndex || (PoolTypeIndex = {}));
const FEE_FRACTIONS = 10000000;
// Serialization of constructor params
function serializePoolsBinary(pools, extraData) {
    const stream = new BinarySerialization_js_1.BinWriteStream();
    stream.str16(JSON.stringify(extraData ?? {}));
    stream.float64(Number(pools[0]?.pool.token0.chainId ?? 0));
    const CurveCoreSerialized = new Set();
    const tokenMap = new Map();
    pools.forEach(({ pool: p }) => {
        tokenMap.set(p.token0.address, p.token0);
        tokenMap.set(p.token1.address, p.token1);
    });
    stream.uint24(tokenMap.size);
    Array.from(tokenMap.values()).forEach((t) => {
        stream.address(t.address);
        const pos = stream.reserveUint16();
        stream.str16(t.name);
        stream.str16(t.symbol);
        stream.uint8(t.decimals);
        stream.setLengthUint16(pos);
    });
    const tokenIndex = new Map(Array.from(tokenMap.entries()).map((a, i) => [a[0], i]));
    stream.uint24(pools.length);
    pools.forEach((pc) => {
        stream.str16(pc.liquidityProvider);
        if (pc instanceof index_js_3.ConstantProductPoolCode) {
            const p = pc.pool;
            stream.uint8(PoolTypeIndex.Classic);
            stream.address(p.address);
            stream.uint24(tokenIndex.get(p.token0.address));
            stream.uint24(tokenIndex.get(p.token1.address));
            stream.uint24(p.fee * FEE_FRACTIONS); // can be optimized - usually 0.003
            stream.bigUInt(p.reserve0, p.address, 'res0');
            stream.bigUInt(p.reserve1, p.address, 'res1');
        }
        else if (pc instanceof index_js_3.UniV3PoolCode) {
            const p = pc.pool;
            stream.uint8(PoolTypeIndex.Concentrated);
            stream.address(p.address);
            stream.uint24(tokenIndex.get(p.token0.address));
            stream.uint24(tokenIndex.get(p.token1.address));
            stream.uint24(p.fee * FEE_FRACTIONS); // can be optimized - usually [0.003, 0.001, 0.0005]
            stream.bigUInt(p.reserve0, p.address, 'res0');
            stream.bigUInt(p.reserve1, p.address, 'res1');
            //stream.uint32(p.tick) nearestTick instead of it
            stream.uint24(p.nearestTick);
            stream.bigUInt(p.liquidity, p.address, 'liquidity');
            stream.bigUInt(p.sqrtPriceX96, p.address, 'price');
            stream.uint24(p.ticks.length);
            p.ticks.forEach((t) => {
                stream.int24(t.index);
                stream.bigInt(t.DLiquidity);
            });
        }
        else if (pc instanceof index_js_3.NativeWrapBridgePoolCode) {
            const p = pc.pool;
            // Native wrappers for example
            stream.uint8(PoolTypeIndex.Bridge);
            stream.address(p.address);
            stream.uint24(tokenIndex.get(p.token0.address));
            stream.uint24(tokenIndex.get(p.token1.address));
            stream.uint24(p.fee * FEE_FRACTIONS); // can be optimized - usually 0.003
        }
        else if (pc instanceof index_js_3.CurvePoolCode) {
            const p = pc.pool;
            const core = p.core;
            if (CurveCoreSerialized.has(core.address))
                return;
            CurveCoreSerialized.add(core.address);
            stream.uint8(PoolTypeIndex.Curve);
            stream.address(core.address);
            stream.uint8(core.tokens.length);
            core.tokens.forEach((t, i) => {
                stream.uint24(tokenIndex.get(t.address));
                stream.bigUInt(core.reserves[i], core.address);
                stream.float64(core.rates[i]);
            });
            stream.uint24(p.fee * FEE_FRACTIONS); // can be optimized - usually [0.003, 0.001, 0.0005]
            stream.float64(core.A);
        }
        else {
            console.error(`Serialization: unsupported pool type ${pc.pool.address}`);
        }
    });
    return stream.getSerializedData();
}
exports.serializePoolsBinary = serializePoolsBinary;
// Deserialization - launching constructors
function deserializePoolsBinary(data, start = 0, existedTokens) {
    const stream = new BinarySerialization_js_1.BinReadStream(data);
    stream.skip(start);
    const extraData = JSON.parse(stream.str16());
    const chainId = stream.float64();
    const tokensNum = stream.uint24();
    const tokensArray = new Array(tokensNum);
    // const newTokens: Token[] = []
    // let existedTokensNumber = 0
    for (let i = 0; i < tokensNum; ++i) {
        const address = stream.address();
        const tokenRestDataLength = stream.uint16();
        const token = existedTokens?.(address);
        if (token) {
            tokensArray[i] = token;
            stream.skip(tokenRestDataLength);
        }
        else {
            const name = stream.str16();
            const symbol = stream.str16();
            const decimals = stream.uint8();
            const token = new index_js_1.Token({
                chainId,
                address,
                name,
                symbol,
                decimals,
            });
            tokensArray[i] = token;
        }
    }
    const poolsNum = stream.uint24();
    const pools = new Array(poolsNum);
    for (let i = 0; i < poolsNum;) {
        const liquidityProvider = stream.str16();
        const poolType = stream.uint8();
        switch (poolType) {
            case PoolTypeIndex.Classic:
                pools[i++] = new index_js_3.ConstantProductPoolCode(readCPRPool(stream, tokensArray), liquidityProvider, liquidityProvider);
                break;
            case PoolTypeIndex.Concentrated:
                pools[i++] = new index_js_3.UniV3PoolCode(readUniV3Pool(stream, tokensArray), liquidityProvider, liquidityProvider);
                break;
            case PoolTypeIndex.Bridge:
                pools[i++] = new index_js_3.NativeWrapBridgePoolCode(readNativeWrapRPool(stream, tokensArray), liquidityProvider);
                break;
            case PoolTypeIndex.Curve:
                readCurveRPools(stream, tokensArray).forEach((p) => {
                    pools[i++] = new index_js_3.CurvePoolCode(p, liquidityProvider, liquidityProvider);
                });
                break;
            default:
                console.error(`Deserealization: unknown pool type ${poolType}`);
        }
    }
    return { pools, extraData, finish: stream.position };
}
exports.deserializePoolsBinary = deserializePoolsBinary;
function readCPRPool(stream, tokensArray) {
    const address = stream.address();
    const token0 = tokensArray[stream.uint24()];
    const token1 = tokensArray[stream.uint24()];
    const fee = stream.uint24() / FEE_FRACTIONS;
    const reserve0 = stream.bigUInt();
    const reserve1 = stream.bigUInt();
    return new index_js_2.ConstantProductRPool(address, token0, token1, fee, reserve0, reserve1);
}
function readUniV3Pool(stream, tokensArray) {
    const address = stream.address();
    const token0 = tokensArray[stream.uint24()];
    const token1 = tokensArray[stream.uint24()];
    const fee = stream.uint24() / FEE_FRACTIONS;
    const reserve0 = stream.bigUInt();
    const reserve1 = stream.bigUInt();
    const nearestTick = stream.uint24();
    const liquidity = stream.bigUInt();
    const sqrtPriceX96 = stream.bigUInt();
    const ticksLen = stream.uint24();
    const ticks = new Array(ticksLen);
    for (let i = 0; i < ticksLen; ++i) {
        const index = stream.int24();
        const DLiquidity = stream.bigInt();
        ticks[i] = { index, DLiquidity };
    }
    return new index_js_2.UniV3Pool(address, token0, token1, fee, reserve0, reserve1, 0, // tick is not needed if we already have nearestTick
    liquidity, sqrtPriceX96, ticks, nearestTick);
}
function readNativeWrapRPool(stream, tokensArray) {
    const address = stream.address();
    const token0 = tokensArray[stream.uint24()];
    const token1 = tokensArray[stream.uint24()];
    const fee = stream.uint24() / FEE_FRACTIONS;
    return new index_js_2.BridgeUnlimited(address, token0, token1, fee);
}
function readCurveRPools(stream, tokensArray) {
    const address = stream.address();
    const tokensLen = stream.uint8();
    const tokens = new Array(tokensLen);
    const reserves = new Array(tokensLen);
    const rates = new Array(tokensLen);
    for (let i = 0; i < tokensLen; ++i) {
        tokens[i] = tokensArray[stream.uint24()];
        reserves[i] = stream.bigUInt();
        rates[i] = stream.float64();
    }
    const fee = stream.uint24() / FEE_FRACTIONS;
    const A = stream.float64();
    return (0, index_js_2.createCurvePoolsForMultipool)(address, tokens, fee, A, reserves, rates);
}
function comparePoolArrays(poolsA, poolsB) {
    let res = true;
    const poolsAMap = new Map();
    poolsA.forEach((p) => poolsAMap.set(p.pool.uniqueID(), p));
    const poolsBMap = new Map();
    poolsB.forEach((p) => poolsBMap.set(p.pool.uniqueID(), p));
    Array.from(poolsAMap.values()).forEach((pA) => {
        const pB = poolsBMap.get(pA.pool.uniqueID());
        if (pB === undefined) {
            console.log(`Set 2 has no pool ${pA.pool.uniqueID()}`);
            res = false;
        }
        else
            res = comparePools(pA, pB) && res;
    });
    Array.from(poolsBMap.values()).forEach((pB) => {
        const pA = poolsAMap.get(pB.pool.uniqueID());
        if (pA === undefined) {
            console.log(`Set 1 has no pool ${pB.pool.uniqueID()}`);
            res = false;
        }
    });
    return res;
}
exports.comparePoolArrays = comparePoolArrays;
function comparePools(poolsA, poolsB) {
    let res = cmpObj(poolsA, poolsB, ['liquidityProvider', 'poolName'], `Pool ${poolsA.pool.uniqueID()} mismatch`);
    if (poolsA instanceof index_js_3.ConstantProductPoolCode) {
        if (!(poolsB instanceof index_js_3.ConstantProductPoolCode)) {
            console.log(`PoolCode ${poolsA.pool.uniqueID()} poolType mismatch`);
            res = false;
        }
        else {
            if (!(poolsA.pool instanceof index_js_2.ConstantProductRPool)) {
                console.log(`Set 1 pool ${poolsA.pool.uniqueID()} poolType mismatch`);
                res = false;
            }
            else {
                if (!(poolsB.pool instanceof index_js_2.ConstantProductRPool)) {
                    console.log(`Set 2 pool ${poolsB.pool.uniqueID()} poolType mismatch`);
                    res = false;
                }
                else {
                    if (!compareConstantProductRPool(poolsA.pool, poolsB.pool))
                        res = false;
                }
            }
        }
    }
    else if (poolsA instanceof index_js_3.UniV3PoolCode) {
        if (!(poolsB instanceof index_js_3.UniV3PoolCode)) {
            console.log(`PoolCode ${poolsA.pool.uniqueID()} poolType mismatch`);
            res = false;
        }
        else {
            if (!(poolsA.pool instanceof index_js_2.UniV3Pool)) {
                console.log(`Set 1 pool ${poolsA.pool.uniqueID()} poolType mismatch`);
                res = false;
            }
            else {
                if (!(poolsB.pool instanceof index_js_2.UniV3Pool)) {
                    console.log(`Set 2 pool ${poolsB.pool.uniqueID()} poolType mismatch`);
                    res = false;
                }
                else {
                    if (!compareUniV3Pool(poolsA.pool, poolsB.pool))
                        res = false;
                }
            }
        }
    }
    else if (poolsA instanceof index_js_3.NativeWrapBridgePoolCode) {
        if (!(poolsB instanceof index_js_3.NativeWrapBridgePoolCode)) {
            console.log(`PoolCode ${poolsA.pool.uniqueID()} poolType mismatch`);
            res = false;
        }
        else {
            if (!(poolsA.pool instanceof index_js_2.BridgeUnlimited)) {
                console.log(`Set 1 pool ${poolsA.pool.uniqueID()} poolType mismatch`);
                res = false;
            }
            else {
                if (!(poolsB.pool instanceof index_js_2.BridgeUnlimited)) {
                    console.log(`Set 2 pool ${poolsB.pool.uniqueID()} poolType mismatch`);
                    res = false;
                }
                else {
                    if (!compareBridgeUnlimited(poolsA.pool, poolsB.pool))
                        res = false;
                }
            }
        }
    }
    else if (poolsA instanceof index_js_3.CurvePoolCode) {
        if (!(poolsB instanceof index_js_3.CurvePoolCode)) {
            console.log(`PoolCode ${poolsA.pool.uniqueID()} poolType mismatch`);
            res = false;
        }
        else {
            if (!(poolsA.pool instanceof index_js_2.CurveMultitokenPool)) {
                console.log(`Set 1 pool ${poolsA.pool.uniqueID()} poolType mismatch`);
                res = false;
            }
            else {
                if (!(poolsB.pool instanceof index_js_2.CurveMultitokenPool)) {
                    console.log(`Set 2 pool ${poolsB.pool.uniqueID()} poolType mismatch`);
                    res = false;
                }
                else {
                    if (!compareCurveMultitokenPool(poolsA.pool, poolsB.pool))
                        res = false;
                }
            }
        }
    }
    else {
        console.log('Unknown pool type');
    }
    return res;
}
function compareConstantProductRPool(poolA, poolB) {
    let res = cmpObj(poolA, poolB, ['address', 'fee', 'reserve0', 'reserve1'], `ConstantProductRPool ${poolA.address} mismatch`);
    res = compareTokens(poolA.token0, poolB.token0, poolA.uniqueID()) && res;
    res = compareTokens(poolA.token1, poolB.token1, poolA.uniqueID()) && res;
    return res;
}
function compareUniV3Pool(poolA, poolB) {
    let res = cmpObj(poolA, poolB, [
        'address',
        'fee',
        'reserve0',
        'reserve1',
        'nearestTick',
        'liquidity',
        'sqrtPriceX96',
    ], `UniV3Pool ${poolA.address} mismatch`);
    res = compareTokens(poolA.token0, poolB.token0, poolA.uniqueID()) && res;
    res = compareTokens(poolA.token1, poolB.token1, poolA.uniqueID()) && res;
    res =
        cmpArrObj(poolA.ticks, poolB.ticks, ['index', 'DLiquidity'], `UniV3Pool ${poolA.address} mismatch ticks`) && res;
    return res;
}
function compareBridgeUnlimited(poolA, poolB) {
    let res = cmpObj(poolA, poolB, ['address', 'fee'], `BridgeUnlimited ${poolA.address} mismatch`);
    res = compareTokens(poolA.token0, poolB.token0, poolA.uniqueID()) && res;
    res = compareTokens(poolA.token1, poolB.token1, poolA.uniqueID()) && res;
    return res;
}
function compareCurveMultitokenPool(poolA, poolB) {
    let res = cmpObj(poolA, poolB, ['index0', 'index1'], `CurveMultitokenPool ${poolA.address} mismatch`);
    res = compareCurveMultitokenCore(poolA.core, poolB.core) && res;
    return res;
}
function compareCurveMultitokenCore(poolA, poolB) {
    let res = cmpObj(poolA, poolB, ['address', 'fee', 'A'], `CurveMultitokenCore ${poolA.address} mismatch`);
    res =
        cmpArrObj(poolA.tokens, poolB.tokens, ['address', 'name', 'symbol', 'decimals'], `CurveMultitokenCore ${poolA.address} mismatch tokens`) && res;
    res =
        cmpArrVal(poolA.reserves, poolB.reserves, `CurveMultitokenCore ${poolA.address} mismatch reserves`) && res;
    res =
        cmpArrVal(poolA.rates, poolB.rates, `CurveMultitokenCore ${poolA.address} mismatch rates`) && res;
    return res;
}
function compareTokens(tokenA, tokenB, poolID) {
    return cmpObj(tokenA, tokenB, ['address', 'decimals'], `Pool ${poolID} tokens mismatch`);
}
function cmpVal(valA, valB, err) {
    if (valA !== valB) {
        console.log(`<!!> ${err} ${valA} != ${valB}`);
        return false;
    }
    return true;
}
function cmpObj(A, B, fields, err) {
    let res = true;
    fields.forEach((f) => {
        res = cmpVal(A[f], B[f], `${err} ${f}`) && res;
    });
    return res;
}
function cmpArrVal(A, B, err) {
    let res = cmpVal(A.length, B.length, `${err} length`);
    A.forEach((m, i) => {
        res = cmpVal(m, B[i], `${err} ${i}`) && res;
    });
    return res;
}
function cmpArrObj(A, B, fields, err) {
    let res = cmpVal(A.length, B.length, `${err} length`);
    if (!res)
        return res;
    A.forEach((m, i) => {
        res = cmpObj(m, B[i], fields, `${err} ${i}`) && res;
    });
    return res;
}
function testPoolSerialization(poolsA, existedTokens) {
    const t0 = performance.now();
    const data = serializePoolsBinary(poolsA);
    const t1 = performance.now();
    const { pools: poolsB } = deserializePoolsBinary(data, 0, existedTokens);
    const t2 = performance.now();
    console.log('Bin Pool (de)serialilization', poolsA.length, t1 - t0, t2 - t1);
    return comparePoolArrays(poolsA, poolsB);
}
exports.testPoolSerialization = testPoolSerialization;
//# sourceMappingURL=PoolBinarySerialization.js.map