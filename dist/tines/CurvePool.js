"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurvePool = void 0;
const index_js_1 = require("../math/index.js");
const RPool_js_1 = require("./RPool.js");
const Utils_js_1 = require("./Utils.js");
class CurvePool extends RPool_js_1.RPool {
    A;
    D; // set it to 0 if reserves are changed !!
    rate0BI;
    rate1BN18;
    rate0;
    rate1;
    reserve0Rated;
    reserve1Rated;
    constructor(address, token0, token1, fee, A, reserve0, reserve1, ratio = 1) {
        super(address, token0, token1, fee, reserve0, reserve1, undefined, 90000);
        this.A = A;
        this.D = 0n;
        if (address) {
            const decimalsMin = Math.min(this.token0.decimals, this.token1.decimals);
            this.rate0 = 10 ** (this.token1.decimals - decimalsMin);
            this.rate1 = 10 ** (this.token0.decimals - decimalsMin) * ratio;
            this.rate0BI = (0, Utils_js_1.getBigInt)(this.rate0);
            this.rate1BN18 = (0, Utils_js_1.getBigInt)(this.rate1 * 1e18); // 18 digits for precision
            this.reserve0Rated = this.reserve0 * this.rate0BI;
            this.reserve1Rated = (this.reserve1 * this.rate1BN18) / (0, Utils_js_1.getBigInt)(1e18);
        }
        else {
            // for deserialization
            this.rate0 = 0;
            this.rate1 = 0;
            this.rate0BI = undefined;
            this.rate1BN18 = undefined;
            this.reserve0Rated = undefined;
            this.reserve1Rated = undefined;
        }
    }
    updateReserves(res0, res1) {
        this.D = 0n;
        this.reserve0 = res0;
        this.reserve1 = res1;
        this.reserve0Rated = this.reserve0 * this.rate0BI;
        this.reserve1Rated = (this.reserve1 * this.rate1BN18) / (0, Utils_js_1.getBigInt)(1e18);
    }
    poolType() {
        return RPool_js_1.PoolType.Curve;
    }
    computeLiquidity() {
        if (this.D !== 0n)
            return this.D; // already calculated
        const r0 = this.reserve0Rated;
        const r1 = this.reserve1Rated;
        if (r0 === 0n && r1 === 0n) {
            return 0n;
        }
        const s = r0 + r1;
        const nA = BigInt(this.A * 2);
        let prevD;
        let D = s;
        for (let i = 0; i < 256; i++) {
            const dP = (((D * D) / r0) * D) / r1 / 4n;
            prevD = D;
            D = ((nA * s + 2n * dP) * D) / ((nA - 1n) * D + 3n * dP);
            if ((0, index_js_1.abs)(D - prevD) <= 1)
                break;
        }
        this.D = D;
        return D;
    }
    computeY(x) {
        const D = this.computeLiquidity();
        const nA = BigInt(this.A * 2);
        const c = (((D * D) / (x * 2n)) * D) / (nA * 2n);
        const b = D / nA + x;
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
        amountIn *= direction ? this.rate0 : this.rate1;
        const xBI = direction ? this.reserve0Rated : this.reserve1Rated;
        const yBI = direction ? this.reserve1Rated : this.reserve0Rated;
        const xNewBI = xBI + (0, Utils_js_1.getBigInt)(amountIn /* * (1 - this.fee)*/);
        const yNewBI = this.computeY(xNewBI);
        const dy = parseInt((yBI - yNewBI).toString()) /
            (direction ? this.rate1 : this.rate0);
        if (parseInt(yNewBI.toString()) < this.minLiquidity)
            throw 'Curve pool OutOfLiquidity';
        return { out: dy * (1 - this.fee), gasSpent: this.swapGasCost };
    }
    calcInByOut(amountOut, direction) {
        amountOut *= direction ? this.rate1 : this.rate0;
        const xBI = direction ? this.reserve0Rated : this.reserve1Rated;
        const yBI = direction ? this.reserve1Rated : this.reserve0Rated;
        let yNewBI = yBI - (0, Utils_js_1.getBigInt)(amountOut / (1 - this.fee));
        if (yNewBI < 1)
            // lack of precision
            yNewBI = 1n;
        const xNewBI = this.computeY(yNewBI);
        const input = Math.round(parseInt((xNewBI - xBI).toString()) /* / (1 - this.fee)*/ /
            (direction ? this.rate0 : this.rate1));
        //if (input < 1) input = 1
        return { inp: input, gasSpent: this.swapGasCost };
    }
    calcCurrentPriceWithoutFee(direction) {
        return this.calcPrice(0, direction, false);
    }
    calcPrice(amountIn, direction, takeFeeIntoAccount) {
        const xBI = direction ? this.reserve0Rated : this.reserve1Rated;
        const x = parseInt(xBI.toString());
        const oneMinusFee = takeFeeIntoAccount ? 1 - this.fee : 1;
        const D = parseInt(this.computeLiquidity().toString());
        const A = this.A / 2;
        const xI = x + amountIn;
        const b = 4 * A * xI + D - 4 * A * D;
        const ac4 = (D * D * D) / xI;
        const Ds = Math.sqrt(b * b + 4 * A * ac4);
        const price = (0.5 - (2 * b - ac4 / xI) / Ds / 4) * oneMinusFee;
        const scale = this.rate0 / this.rate1;
        return direction ? price * scale : price / scale;
    }
}
exports.CurvePool = CurvePool;
//# sourceMappingURL=CurvePool.js.map