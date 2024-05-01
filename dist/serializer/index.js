"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPoolSnapshot = exports.savePoolSnapshot = exports.deserializePoolCodesJSON = exports.serializePoolCodesJSON = exports.restoreAfterSerialization = exports.makeSerializable = exports.serializer = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// import { fileURLToPath } from 'url'
const serialijse_1 = __importDefault(require("serialijse"));
exports.serializer = serialijse_1.default;
const index_js_1 = require("../currency/index.js");
const index_js_2 = require("../router/index.js");
const index_js_3 = require("../tines/index.js");
// All classes registration - for deserialization
serialijse_1.default.declarePersistable(index_js_2.NativeWrapBridgePoolCode);
serialijse_1.default.declarePersistable(index_js_3.BridgeUnlimited);
serialijse_1.default.declarePersistable(index_js_2.ConstantProductPoolCode);
serialijse_1.default.declarePersistable(index_js_3.ConstantProductRPool);
serialijse_1.default.declarePersistable(index_js_2.BentoPoolCode);
serialijse_1.default.declarePersistable(index_js_3.StableSwapRPool);
serialijse_1.default.declarePersistable(index_js_3.RebaseInternal);
serialijse_1.default.declarePersistable(index_js_2.BentoBridgePoolCode);
serialijse_1.default.declarePersistable(index_js_3.BridgeBento);
serialijse_1.default.declarePersistable(index_js_2.UniV3PoolCode);
serialijse_1.default.declarePersistable(index_js_3.UniV3Pool);
serialijse_1.default.declarePersistable(index_js_2.CurvePoolCode);
serialijse_1.default.declarePersistable(index_js_3.CurvePool);
serialijse_1.default.declarePersistable(index_js_3.CurveMultitokenPool);
serialijse_1.default.declarePersistable(index_js_3.CurveMultitokenCore);
serialijse_1.default.declarePersistable(index_js_1.Native);
function makeSerializable(poolCodes) {
    poolCodes.forEach(({ pool }) => {
        pool.reserve0 = String(pool.reserve0);
        pool.reserve1 = String(pool.reserve1);
        pool.token0 = { ...pool.token0 };
        pool.token1 = { ...pool.token1 };
        if (pool instanceof index_js_3.StableSwapRPool) {
            pool.k = String(pool.k);
            pool.total0.rebaseBI.base = String(pool.total0.rebaseBI.base);
            pool.total0.rebaseBI.elastic = String(pool.total0.rebaseBI.elastic);
            pool.total1.rebaseBI.base = String(pool.total1.rebaseBI.base);
            pool.total1.rebaseBI.elastic = String(pool.total1.rebaseBI.elastic);
        }
        else if (pool instanceof index_js_3.UniV3Pool) {
            pool.liquidity = String(pool.liquidity);
            pool.sqrtPriceX96 = String(pool.sqrtPriceX96);
            pool.ticks.forEach((t) => {
                t.DLiquidity = String(t.DLiquidity);
            });
        }
        else if (pool instanceof index_js_3.CurvePool) {
            pool.D = String(pool.D);
            pool.rate0BI = String(pool.rate0BI);
            pool.rate1BN18 = String(pool.rate1BN18);
            pool.reserve0Rated = String(pool.reserve0Rated);
            pool.reserve1Rated = String(pool.reserve1Rated);
        }
        else if (pool instanceof index_js_3.CurveMultitokenPool) {
            const core = pool.core;
            core.D = String(core.D);
            core.Ann = String(core.Ann);
            core.Annn = String(core.Annn);
            core.AnnMinus1 = String(core.AnnMinus1);
            core.nn = String(core.nn);
            core.n = String(core.n);
            core.nPlus1 = String(core.nPlus1);
            core.tokens = core.tokens.map((t) => ({ ...t }));
            core.reserves = core.reserves.map((r) => String(r));
            core.ratesBN18 = core.ratesBN18.map((r) => String(r));
            core.reservesRated = core.reservesRated.map((r) => String(r));
            //core.currentFlow = core.currentFlow.map(r => String(r) as unknown as bigint)
        }
    });
}
exports.makeSerializable = makeSerializable;
function restoreAfterSerialization(poolCodes) {
    poolCodes.forEach(({ pool }) => {
        pool.reserve0 = BigInt(pool.reserve0);
        pool.reserve1 = BigInt(pool.reserve1);
        if (pool instanceof index_js_3.StableSwapRPool) {
            pool.k = BigInt(pool.k);
            pool.total0.rebaseBI.base = BigInt(pool.total0.rebaseBI.base);
            pool.total0.rebaseBI.elastic = BigInt(pool.total0.rebaseBI.elastic);
            pool.total1.rebaseBI.base = BigInt(pool.total1.rebaseBI.base);
            pool.total1.rebaseBI.elastic = BigInt(pool.total1.rebaseBI.elastic);
        }
        else if (pool instanceof index_js_3.UniV3Pool) {
            pool.liquidity = BigInt(pool.liquidity);
            pool.sqrtPriceX96 = BigInt(pool.sqrtPriceX96);
            pool.ticks.forEach((t) => {
                t.DLiquidity = BigInt(t.DLiquidity);
            });
        }
        else if (pool instanceof index_js_3.CurvePool) {
            pool.D = BigInt(pool.D);
            pool.rate0BI = BigInt(pool.rate0BI);
            pool.rate1BN18 = BigInt(pool.rate1BN18);
            pool.reserve0Rated = BigInt(pool.reserve0Rated);
            pool.reserve1Rated = BigInt(pool.reserve1Rated);
        }
        else if (pool instanceof index_js_3.CurveMultitokenPool) {
            const core = pool.core;
            core.D = BigInt(core.D);
            core.Ann = BigInt(core.Ann);
            core.Annn = BigInt(core.Annn);
            core.AnnMinus1 = BigInt(core.AnnMinus1);
            core.nn = BigInt(core.nn);
            core.n = BigInt(core.n);
            core.nPlus1 = BigInt(core.nPlus1);
            core.reserves = core.reserves.map((r) => BigInt(r));
            core.ratesBN18 = core.ratesBN18.map((r) => BigInt(r));
            core.reservesRated = core.reservesRated.map((r) => BigInt(r));
            //core.currentFlow = core.currentFlow.map(r => BigInt(r))
        }
    });
}
exports.restoreAfterSerialization = restoreAfterSerialization;
function serializePoolCodesJSON(pools) {
    makeSerializable(pools);
    const data = serialijse_1.default.serialize(pools);
    restoreAfterSerialization(pools);
    return JSON.parse(data);
}
exports.serializePoolCodesJSON = serializePoolCodesJSON;
function deserializePoolCodesJSON(data) {
    const poolCodes = serialijse_1.default.deserialize(data);
    restoreAfterSerialization(poolCodes);
    return poolCodes;
}
exports.deserializePoolCodesJSON = deserializePoolCodesJSON;
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// default dir for pools snapshots
const snapshotDirDefault = path_1.default.resolve(__dirname, '../pool-snapshots/');
async function savePoolSnapshot(poolCodes, chainId, blockNumber, directory) {
    // pools preparation for serialization
    makeSerializable(poolCodes);
    const data = serialijse_1.default.serialize(poolCodes);
    const obj = JSON.parse(data);
    const humanReadableStr = JSON.stringify(obj, undefined, '  ');
    restoreAfterSerialization(poolCodes);
    directory = directory || snapshotDirDefault;
    if (!(0, fs_1.existsSync)(directory))
        (0, fs_1.mkdirSync)(directory);
    (0, fs_1.writeFileSync)(path_1.default.resolve(directory, `${chainId}-${blockNumber}`), humanReadableStr);
}
exports.savePoolSnapshot = savePoolSnapshot;
async function loadPoolSnapshot(chainId, blockNumber, directory) {
    directory = directory || snapshotDirDefault;
    const fileName = path_1.default.resolve(directory, `${chainId}-${blockNumber}`);
    if (!(0, fs_1.existsSync)(fileName))
        return undefined;
    const str = (0, fs_1.readFileSync)(fileName, 'utf8');
    const poolCodes = serialijse_1.default.deserialize(str);
    restoreAfterSerialization(poolCodes);
    return poolCodes;
}
exports.loadPoolSnapshot = loadPoolSnapshot;
//# sourceMappingURL=index.js.map