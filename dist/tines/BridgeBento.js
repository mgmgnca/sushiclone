"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeBento = void 0;
const RPool_js_1 = require("./RPool.js");
const BENTO_MINIMUM_SHARE_BALANCE = 1000; // Bento Shares
const BRIDGING_GAS_COST = 60000; // gas points
class BridgeBento extends RPool_js_1.RPool {
    elastic;
    base;
    freeLiquidity; // Maximum number of tokens we can withdraw without harvest
    // elastic is reserve0, base is reserve1
    constructor(address, tokenEthereum, tokenBento, elastic, base, freeLiquidity) {
        super(address, tokenEthereum, tokenBento, 0, elastic, base, BENTO_MINIMUM_SHARE_BALANCE, BRIDGING_GAS_COST);
        if (address !== undefined) {
            this.elastic = parseInt(elastic.toString());
            this.base = parseInt(base.toString());
            this.freeLiquidity =
                freeLiquidity === undefined
                    ? undefined
                    : parseInt(freeLiquidity.toString());
        }
        else {
            // for deserialization
            this.elastic = 0;
            this.base = 0;
        }
    }
    uniqueID() {
        return `${this.address}_${this.token0.symbol}_bento_bridge`;
    }
    updateReserves(elastic, base) {
        this.reserve0 = elastic;
        this.elastic = parseInt(elastic.toString());
        this.reserve1 = base;
        this.base = parseInt(base.toString());
    }
    poolType() {
        return RPool_js_1.PoolType.Bridge;
    }
    // direction == true -> deposit: calcs output shares by input amounts
    // direction == false -> withdraw: calcs output amounts by input shares
    calcOutByIn(amountIn, direction, throwIfOutOfLiquidity = true) {
        let out;
        if (direction === true) {
            if (this.elastic === 0) {
                out = amountIn;
            }
            else {
                out = (amountIn * this.base) / this.elastic;
            }
        }
        else {
            if (this.base === 0) {
                out = amountIn;
            }
            else {
                out = (amountIn * this.elastic) / this.base;
            }
            if (throwIfOutOfLiquidity &&
                this.freeLiquidity !== undefined &&
                out > this.freeLiquidity)
                throw new Error('OutOfLiquidity BridgeBento');
        }
        return { out, gasSpent: this.swapGasCost };
    }
    calcOutByInReal(amountIn, direction) {
        return Math.floor(this.calcOutByIn(amountIn, direction, false).out);
    }
    calcInByOut(amountOut, direction) {
        let inp;
        if (direction === true) {
            if (this.elastic === 0) {
                inp = amountOut;
            }
            else {
                if (this.base === 0) {
                    inp = Number.POSITIVE_INFINITY;
                }
                else {
                    inp = (amountOut * this.elastic) / this.base;
                }
            }
        }
        else {
            if (this.freeLiquidity !== undefined && amountOut > this.freeLiquidity)
                inp = Number.POSITIVE_INFINITY;
            else {
                if (this.base === 0) {
                    inp = amountOut;
                }
                else {
                    if (this.elastic === 0) {
                        inp = Number.POSITIVE_INFINITY;
                    }
                    else {
                        inp = (amountOut * this.base) / this.elastic;
                    }
                }
            }
        }
        return { inp, gasSpent: this.swapGasCost };
    }
    calcCurrentPriceWithoutFee(direction) {
        if (direction === true) {
            if (this.elastic === 0) {
                return 1;
            }
            else {
                return this.base / this.elastic;
            }
        }
        else {
            if (this.base === 0) {
                return 1;
            }
            else {
                return this.elastic / this.base;
            }
        }
    }
}
exports.BridgeBento = BridgeBento;
//# sourceMappingURL=BridgeBento.js.map