"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPool = exports.PoolType = exports.setTokenId = exports.TYPICAL_MINIMAL_LIQUIDITY = exports.TYPICAL_SWAP_GAS_COST = void 0;
exports.TYPICAL_SWAP_GAS_COST = 60000;
exports.TYPICAL_MINIMAL_LIQUIDITY = 1000;
function setTokenId(...tokens) {
    tokens.forEach((t) => {
        if (!t.tokenId)
            t.tokenId = `${t.address || ''}_${t.chainId}`;
    });
}
exports.setTokenId = setTokenId;
var PoolType;
(function (PoolType) {
    PoolType["Wrap"] = "Wrap";
    PoolType["Bridge"] = "Bridge";
    PoolType["Classic"] = "Classic";
    PoolType["Concentrated"] = "Concentrated";
    PoolType["Stable"] = "Stable";
    PoolType["Curve"] = "Curve";
    PoolType["Unknown"] = "Unknown";
})(PoolType || (exports.PoolType = PoolType = {}));
class RPool {
    address;
    token0;
    token1;
    fee;
    reserve0;
    reserve1;
    // flow0: number = 0
    // flow1: number = 0
    // gasSpent: number = 0
    minLiquidity;
    swapGasCost;
    constructor(address, token0, token1, fee, reserve0, reserve1, minLiquidity = exports.TYPICAL_MINIMAL_LIQUIDITY, swapGasCost = exports.TYPICAL_SWAP_GAS_COST) {
        this.address = address || '0x';
        this.token0 = token0;
        this.token1 = token1;
        if (token0 && token1) {
            // exception just for deserialization - tokenId should be set after
            setTokenId(this.token0, this.token1);
        }
        this.fee = fee;
        this.minLiquidity = minLiquidity;
        this.swapGasCost = swapGasCost;
        this.reserve0 = reserve0;
        this.reserve1 = reserve1;
    }
    updateReserves(res0, res1) {
        this.reserve0 = res0;
        this.reserve1 = res1;
    }
    getReserve0() {
        return this.reserve0;
    }
    getReserve1() {
        return this.reserve1;
    }
    // Should return real output, as close to the pool as possible. With rounding. No exceptions
    calcOutByInReal(amountIn, direction) {
        return this.calcOutByIn(amountIn, direction).out;
    }
    // For multitoken pools
    setCurrentFlow(_flow0, _flow1, _gas) { }
    // For multitoken pools
    cleanTmpData() { }
    // precision of calcOutByIn
    granularity0() {
        return 1;
    }
    granularity1() {
        return 1;
    }
    alwaysAppropriateForPricing() {
        return false;
    }
    // not so easy for multitoken pools
    uniqueID() {
        return this.address;
    }
    poolType() {
        return PoolType.Unknown;
    }
}
exports.RPool = RPool;
//# sourceMappingURL=RPool.js.map