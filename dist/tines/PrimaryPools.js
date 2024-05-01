"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HybridRPool = exports.ConstantProductRPool = void 0;
const index_js_1 = require("../math/index.js");
const RPool_js_1 = require("./RPool.js");
const Utils_js_1 = require("./Utils.js");
const index_js_2 = require("./functions/index.js");
class ConstantProductRPool extends RPool_js_1.RPool {
    reserve0Number;
    reserve1Number;
    constructor(address, token0, token1, fee, reserve0, reserve1) {
        super(address, token0, token1, fee, reserve0, reserve1);
        this.reserve0Number = Number(reserve0 || '0');
        this.reserve1Number = Number(reserve1 || '0');
    }
    updateReserves(res0, res1) {
        this.reserve0 = res0;
        this.reserve0Number = Number(res0);
        this.reserve1 = res1;
        this.reserve1Number = Number(res1);
    }
    poolType() {
        return RPool_js_1.PoolType.Classic;
    }
    calcOutByIn(amountIn, direction) {
        const x = direction ? this.reserve0Number : this.reserve1Number;
        const y = direction ? this.reserve1Number : this.reserve0Number;
        const out = (y * amountIn) / (x / (1 - this.fee) + amountIn);
        if (y - out < this.minLiquidity)
            throw 'CP OutOfLiquidity';
        return { out, gasSpent: this.swapGasCost };
    }
    calcOutByInReal(amountIn, direction) {
        const x = direction ? this.reserve0Number : this.reserve1Number;
        const y = direction ? this.reserve1Number : this.reserve0Number;
        const amountInWithoutFee = Math.floor(amountIn * (1 - this.fee) * 1000); // rounding of amount without fee
        const out = (y * amountInWithoutFee) / (x * 1000 + amountInWithoutFee);
        return Math.floor(out); // rounding of output
    }
    calcInByOut(amountOut, direction) {
        const x = direction ? this.reserve0Number : this.reserve1Number;
        const y = direction ? this.reserve1Number : this.reserve0Number;
        if (y - amountOut < this.minLiquidity)
            // not possible swap
            return { inp: Number.POSITIVE_INFINITY, gasSpent: this.swapGasCost };
        const input = (x * amountOut) / (1 - this.fee) / (y - amountOut);
        return { inp: input, gasSpent: this.swapGasCost };
    }
    calcCurrentPriceWithoutFee(direction) {
        return this.calcPrice(0, direction, false);
    }
    calcPrice(amountIn, direction, takeFeeIntoAccount) {
        const x = direction ? this.reserve0Number : this.reserve1Number;
        const y = direction ? this.reserve1Number : this.reserve0Number;
        const oneMinusFee = takeFeeIntoAccount ? 1 - this.fee : 1;
        const xf = x / oneMinusFee;
        return (y * xf) / (xf + amountIn) / (xf + amountIn);
    }
    calcInputByPrice(price, direction, takeFeeIntoAccount) {
        const x = direction ? this.reserve0Number : this.reserve1Number;
        const y = direction ? this.reserve1Number : this.reserve0Number;
        const oneMinusFee = takeFeeIntoAccount ? 1 - this.fee : 1;
        const xf = x / oneMinusFee;
        return Math.sqrt(y * xf * price) - xf; // TODO: or y*xf/price ???
    }
    getLiquidity() {
        return Math.sqrt(this.reserve0Number * this.reserve1Number);
    }
}
exports.ConstantProductRPool = ConstantProductRPool;
class HybridRPool extends RPool_js_1.RPool {
    A;
    A_PRECISION = 100;
    D; // set it to 0 if reserves are changed !!
    constructor(address, token0, token1, fee, A, reserve0, reserve1) {
        super(address, token0, token1, fee, reserve0, reserve1);
        this.A = A;
        this.D = 0n;
    }
    updateReserves(res0, res1) {
        this.D = 0n;
        this.reserve0 = res0;
        this.reserve1 = res1;
    }
    poolType() {
        return RPool_js_1.PoolType.Curve;
    }
    computeLiquidity() {
        if (this.D !== 0n)
            return this.D; // already calculated
        const r0 = this.reserve0;
        const r1 = this.reserve1;
        return (0, index_js_2.computeHybridLiquidity)(r0, r1, this.A);
        // if (r0 === 0n && r1 === 0n) return 0n
        // const s = r0 + r1
        // const nA = BigInt(this.A * 2)
        // let prevD
        // let D = s
        // for (let i = 0; i < 256; i++) {
        //   const dP = D.mul(D).div(r0).mul(D).div(r1).div(4)
        //   prevD = D
        //   D = nA
        //     .mul(s)
        //     .div(this.A_PRECISION)
        //     .add(dP.mul(2))
        //     .mul(D)
        //     .div(nA.div(this.A_PRECISION).sub(1).mul(D).add(dP.mul(3)))
        //   if (D.sub(prevD).abs().lte(1)) {
        //     break
        //   }
        // }
        // this.D = D
        // return D
    }
    computeY(x) {
        const D = this.computeLiquidity();
        const nA = BigInt(this.A * 2);
        const c = (((D * D) / (x * 2n)) * D) / ((nA * 2n) / BigInt(this.A_PRECISION));
        const b = (D * BigInt(this.A_PRECISION)) / nA + x;
        let yPrev;
        let y = D;
        for (let i = 0; i < 256; i++) {
            yPrev = y;
            y = (y * y + c) / (y * 2n + b - D);
            if ((0, index_js_1.abs)(y - yPrev) <= 1) {
                break;
            }
        }
        return y;
    }
    calcOutByIn(amountIn, direction) {
        const xBI = direction ? this.reserve0 : this.reserve1;
        const yBI = direction ? this.reserve1 : this.reserve0;
        const xNewBI = xBI + (0, Utils_js_1.getBigInt)(amountIn * (1 - this.fee));
        const yNewBI = this.computeY(xNewBI);
        const dy = parseInt((yBI - yNewBI).toString());
        if (parseInt(yNewBI.toString()) < this.minLiquidity)
            throw 'Hybrid OutOfLiquidity';
        return { out: dy, gasSpent: this.swapGasCost };
    }
    calcInByOut(amountOut, direction) {
        const xBI = direction ? this.reserve0 : this.reserve1;
        const yBI = direction ? this.reserve1 : this.reserve0;
        let yNewBI = yBI - (0, Utils_js_1.getBigInt)(amountOut);
        if (yNewBI < 1n)
            // lack of precision
            yNewBI = 1n;
        const xNewBI = this.computeY(yNewBI);
        const input = Math.round(parseInt((xNewBI - xBI).toString()) / (1 - this.fee));
        //if (input < 1) input = 1
        return { inp: input, gasSpent: this.swapGasCost };
    }
    calcCurrentPriceWithoutFee(direction) {
        return this.calcPrice(0, direction, false);
    }
    calcPrice(amountIn, direction, takeFeeIntoAccount) {
        const xBI = direction ? this.reserve0 : this.reserve1;
        const x = parseInt(xBI.toString());
        const oneMinusFee = takeFeeIntoAccount ? 1 - this.fee : 1;
        const D = parseInt(this.computeLiquidity().toString());
        const A = this.A / this.A_PRECISION;
        const xI = x + amountIn;
        const b = 4 * A * xI + D - 4 * A * D;
        const ac4 = (D * D * D) / xI;
        const Ds = Math.sqrt(b * b + 4 * A * ac4);
        const res = (0.5 - (2 * b - ac4 / xI) / Ds / 4) * oneMinusFee;
        return res;
    }
    calcInputByPrice(price, direction, takeFeeIntoAccount, hint = 1) {
        // TODO:  (x:number) => this.calcPrice(x, !direction, takeFeeIntoAccount)  ???
        return (0, Utils_js_1.revertPositive)((x) => 1 / this.calcPrice(x, direction, takeFeeIntoAccount), price, hint);
    }
}
exports.HybridRPool = HybridRPool;
//# sourceMappingURL=PrimaryPools.js.map