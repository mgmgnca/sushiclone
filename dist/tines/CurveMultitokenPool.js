"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCurvePoolsForMultipool = exports.CurveMultitokenCore = exports.CurveMultitokenPool = void 0;
const RPool_js_1 = require("./RPool.js");
const Utils_js_1 = require("./Utils.js");
const ZERO = 0n;
const MIN_LIQUIDITY = 1000;
const SWAP_GAS_COST = 90000;
class CurveMultitokenPool extends RPool_js_1.RPool {
    core;
    index0;
    index1;
    flow0 = 0;
    flow1 = 0;
    constructor(core, index0, index1) {
        if (core) {
            super(core.address, core.tokens[index0], core.tokens[index1], core.fee, core.reserves[index0], core.reserves[index1], MIN_LIQUIDITY, SWAP_GAS_COST);
            console.assert(index0 < index1, 'Wrong CurveMultitokenPool indexes');
            this.core = core;
            this.index0 = index0;
            this.index1 = index1;
        }
        else {
            // for deserealization
            super(undefined, undefined, undefined, undefined, undefined, undefined, MIN_LIQUIDITY, SWAP_GAS_COST);
        }
    }
    updateReserves(_res0, _res1) {
        console.error('CurveMultitokenPool.updateReserves not expected to be used');
        // super.updateReserves(res0, res1)
        // this.core.updateReserve(this.index0, res0)
        // this.core.updateReserve(this.index1, res1)
    }
    poolType() {
        return RPool_js_1.PoolType.Curve;
    }
    calcOutByIn(amountIn, direction) {
        if (direction) {
            console.assert(amountIn - this.flow0 >= 0, 'CurveMultitokenPool.calcOutByIn Unexpected input value 0');
            const out = -this.flow1 -
                this.core.calcOutDiff(amountIn - this.flow0, this.index0, this.index1);
            console.assert(out >= 0, 'CurveMultitokenPool.calcOutByIn Unexpected output value 0');
            return { out, gasSpent: SWAP_GAS_COST };
        }
        else {
            console.assert(amountIn - this.flow1 >= 0, 'CurveMultitokenPool.calcOutByIn Unexpected input value 1');
            const out = -this.flow0 -
                this.core.calcOutDiff(amountIn - this.flow1, this.index1, this.index0);
            console.assert(out >= 0, 'CurveMultitokenPool.calcOutByIn Unexpected output value 1');
            return { out, gasSpent: SWAP_GAS_COST };
        }
    }
    calcInByOut(amountOut, direction) {
        if (direction) {
            const inp = this.core.calcOutDiff(-amountOut - this.flow1, this.index1, this.index0) + this.flow0;
            console.assert(inp >= 0, 'CurveMultitokenPool.calcInByOut Unexpected output value 0');
            return { inp, gasSpent: SWAP_GAS_COST };
        }
        else {
            const inp = this.core.calcOutDiff(-amountOut - this.flow0, this.index0, this.index1) + this.flow1;
            console.assert(inp >= 0, 'CurveMultitokenPool.calcInByOut Unexpected output value 1');
            return { inp, gasSpent: SWAP_GAS_COST };
        }
    }
    calcOutByInReal(amountIn, direction) {
        const amountOut = Math.round(this.calcOutByIn(amountIn, direction).out);
        const [flow0, flow1] = direction
            ? [amountIn, -amountOut]
            : [-amountOut, amountIn];
        this.setCurrentFlow(flow0, flow1);
        return amountOut;
    }
    calcCurrentPriceWithoutFee(direction) {
        if (direction)
            return this.core.calcCurrentPriceWithoutFee(this.index0, this.index1);
        else
            return this.core.calcCurrentPriceWithoutFee(this.index1, this.index0);
    }
    setCurrentFlow(flow0, flow1) {
        this.core.applyReserveChange(this.index0, flow0 - this.flow0);
        this.core.applyReserveChange(this.index1, flow1 - this.flow1);
        this.flow0 = flow0;
        this.flow1 = flow1;
    }
    cleanTmpData() {
        this.flow0 = 0;
        this.flow1 = 0;
        this.core.cleanTmpData();
    }
    uniqueID() {
        return `${this.address}_${this.index0}_${this.index1}`;
    }
}
exports.CurveMultitokenPool = CurveMultitokenPool;
const E18 = (0, Utils_js_1.getBigInt)(1e18);
class CurveMultitokenCore {
    address;
    tokens;
    fee;
    A;
    reserves;
    reservesRated;
    rates;
    ratesBN18;
    currentFlow;
    D;
    // For faster calculation
    Ann;
    Annn;
    AnnMinus1;
    nn;
    n;
    nPlus1;
    constructor(address, tokens, fee, A, reserves, rates) {
        if (address) {
            this.address = address;
            this.tokens = tokens;
            this.fee = fee;
            this.A = A;
            this.reserves = reserves;
            const decimalsMax = Math.max(...tokens.map((t) => t.decimals));
            this.rates = tokens.map((t, i) => 10 ** (decimalsMax - t.decimals) * (rates?.[i] ?? 1));
            this.ratesBN18 = this.rates.map((r) => (0, Utils_js_1.getBigInt)(r * 1e18)); // precision is 18 digits
            this.reservesRated = this.reserves.map((r, i) => (r * this.ratesBN18[i]) / E18);
            this.currentFlow = this.reserves.map(() => 0);
            this.D = 0n;
            this.Ann = (0, Utils_js_1.getBigInt)(A * this.tokens.length);
            this.n = BigInt(this.tokens.length);
            this.Annn = this.Ann * this.n;
            this.AnnMinus1 = this.Ann - 1n;
            this.nn = (0, Utils_js_1.getBigInt)(this.tokens.length ** this.tokens.length);
            this.nPlus1 = this.n + 1n;
        }
        else {
            // for deserialization
        }
    }
    updateReserve(index, res) {
        this.D = 0n;
        this.reserves[index] = res;
        this.reservesRated[index] = (res * this.ratesBN18[index]) / E18;
        this.currentFlow[index] = 0;
    }
    computeLiquidity() {
        if (this.D !== 0n)
            return this.D; // already calculated
        if (this.reserves.some((r) => r === 0n))
            return 0n;
        const s = this.reservesRated.reduce((a, b) => a + b, 0n);
        let prevD;
        let D = s;
        const AnnS = this.Ann * s;
        for (let i = 0; i < 256; i++) {
            let dP = D;
            this.reservesRated.forEach((r) => {
                dP = (dP * D) / r;
            });
            dP = dP / this.nn;
            prevD = D;
            // D = (Ann * S + D_P * N_COINS) * D / ((Ann - 1) * D + (N_COINS + 1) * D_P)
            D = ((AnnS + dP * this.n) * D) / (this.AnnMinus1 * D + dP * this.nPlus1);
            if (Math.abs(Number(D - prevD)) <= 1) {
                break;
            }
        }
        this.D = D;
        return D;
    }
    computeY(xIndex, x, yIndex) {
        const D = this.computeLiquidity();
        let c = D;
        let S_ = ZERO;
        for (let i = 0; i < this.tokens.length; ++i) {
            let _x = ZERO;
            if (i === xIndex)
                _x = x;
            else if (i !== yIndex)
                _x = this.diffToAbsolute(0, i);
            else
                continue;
            S_ = S_ + _x;
            c = (c * D) / _x / this.n;
        }
        c = (c * D) / this.Annn;
        const b = D / this.Ann + S_;
        let y_prev = ZERO;
        let y = D;
        for (let i = 0; i < 256; i++) {
            y_prev = y;
            y = (y * y + c) / (y * 2n + b - D);
            if (Math.abs(Number(y - y_prev)) <= 1) {
                break;
            }
        }
        return y;
    }
    flowIntToExt(flowInt) {
        return flowInt >= 0 ? flowInt : flowInt * (1 - this.fee);
    }
    flowExtToInt(flowExt) {
        return flowExt >= 0 ? flowExt : flowExt / (1 - this.fee);
    }
    diffToAbsolute(diff, i) {
        return (BigInt(Math.round(this.flowExtToInt(diff + this.currentFlow[i]) * this.rates[i])) +
            (this.reserves[i] * this.ratesBN18[i]) / E18);
    }
    absoluteToDiff(abs, i) {
        return (this.flowIntToExt(Number((abs * E18) / this.ratesBN18[i] - this.reserves[i])) - this.currentFlow[i]);
    }
    calcOutDiff(inpDiff, from, to) {
        const xAbs = this.diffToAbsolute(inpDiff, from);
        const yAbs = this.computeY(from, xAbs, to);
        if (yAbs < MIN_LIQUIDITY)
            throw new Error('Curve pool OutOfLiquidity');
        return this.absoluteToDiff(yAbs, to);
    }
    calcCurrentPriceWithoutFee(from, to) {
        const xInp = Number(this.reservesRated[from]);
        const D = Number(this.computeLiquidity());
        let Sx = 0;
        let Px = 1;
        this.tokens.forEach((_, i) => {
            if (i === to)
                return;
            const x = Number(this.reservesRated[i]);
            Sx += x;
            Px *= x;
        });
        const n = this.tokens.length;
        const b = Sx + D / this.A / n - D;
        const c = (D / n) ** (n + 1) / Px / this.A;
        const Ds = Math.sqrt(b * b + 4 * c);
        const dD = 2 * b - (4 * c) / xInp;
        const price = 0.5 - dD / Ds / 4;
        const scale = this.rates[from] / this.rates[to];
        return price * scale;
    }
    applyReserveChange(index, diff) {
        this.currentFlow[index] += diff;
    }
    cleanTmpData() {
        this.currentFlow = this.reserves.map(() => 0);
    }
}
exports.CurveMultitokenCore = CurveMultitokenCore;
function createCurvePoolsForMultipool(address, tokens, fee, A, reserves, rates) {
    const core = new CurveMultitokenCore(address, tokens, fee, A, reserves, rates);
    const pools = [];
    for (let i = 0; i < tokens.length; ++i)
        for (let j = i + 1; j < tokens.length; ++j)
            pools.push(new CurveMultitokenPool(core, i, j));
    return pools;
}
exports.createCurvePoolsForMultipool = createCurvePoolsForMultipool;
//# sourceMappingURL=CurveMultitokenPool.js.map