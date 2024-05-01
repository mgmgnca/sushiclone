"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapV2Pool = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../../chain/index.js");
const index_js_2 = require("../../config/index.js");
const index_js_3 = require("../../currency/index.js");
const index_js_4 = require("../../dex/index.js");
const index_js_5 = require("../../math/index.js");
const compute_sushiswap_v2_pool_address_js_1 = require("./compute-sushiswap-v2-pool-address.js");
const zod_js_1 = require("./zod.js");
class SushiSwapV2Pool {
    liquidityToken;
    swapGasCost = 60000n;
    minLiquidity = 1000n;
    tokenAmounts;
    static getAddress(tokenA, tokenB) {
        if (!(0, index_js_2.isSushiSwapV2ChainId)(tokenA.chainId)) {
            throw new Error(`ChainId Error: SushiSwapV2 is not available on ${index_js_1.chainName[tokenA.chainId]}`);
        }
        return (0, compute_sushiswap_v2_pool_address_js_1.computeSushiSwapV2PoolAddress)({
            factoryAddress: index_js_2.SUSHISWAP_V2_FACTORY_ADDRESS[tokenA.chainId],
            tokenA,
            tokenB,
        });
    }
    constructor(amountA, amountB) {
        const amounts = (amountA.currency.sortsBefore(amountB.currency) // does safety checks
            ? [amountA, amountB]
            : [amountB, amountA]);
        this.liquidityToken = new index_js_3.Token({
            chainId: amounts[0].currency.chainId,
            address: SushiSwapV2Pool.getAddress(amounts[0].currency, amounts[1].currency),
            decimals: 18,
            symbol: 'UNI-V2',
            name: 'Uniswap V2',
        });
        this.tokenAmounts = amounts;
    }
    /**
     * Returns true if the token is either token0 or token1
     * @param token to check
     */
    involvesToken(token) {
        return token.equals(this.token0) || token.equals(this.token1);
    }
    /**
     * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
     */
    get token0Price() {
        const result = this.tokenAmounts[1].divide(this.tokenAmounts[0]);
        return new index_js_3.Price(this.token0, this.token1, result.denominator, result.numerator);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
    get token1Price() {
        const result = this.tokenAmounts[0].divide(this.tokenAmounts[1]);
        return new index_js_3.Price(this.token1, this.token0, result.denominator, result.numerator);
    }
    /**
     * Return the price of the given token in terms of the other token in the pair.
     * @param token token to return price of
     */
    priceOf(token) {
        (0, tiny_invariant_1.default)(this.involvesToken(token), 'TOKEN');
        return token.equals(this.token0) ? this.token0Price : this.token1Price;
    }
    /**
     * Returns the chain ID of the tokens in the pair.
     */
    get chainId() {
        return this.token0.chainId;
    }
    get token0() {
        return this.tokenAmounts[0].currency;
    }
    get token1() {
        return this.tokenAmounts[1].currency;
    }
    get reserve0() {
        return this.tokenAmounts[0];
    }
    get reserve1() {
        return this.tokenAmounts[1];
    }
    reserveOf(token) {
        (0, tiny_invariant_1.default)(this.involvesToken(token), 'TOKEN');
        return token.equals(this.token0) ? this.reserve0 : this.reserve1;
    }
    getOutputAmount(inputAmount) {
        (0, tiny_invariant_1.default)(this.involvesToken(inputAmount.currency), 'TOKEN');
        if (this.reserve0.quotient === index_js_5.ZERO || this.reserve1.quotient === index_js_5.ZERO) {
            throw new index_js_4.InsufficientReservesError();
        }
        const inputReserve = this.reserveOf(inputAmount.currency);
        const outputReserve = this.reserveOf(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
        const inputAmountWithFee = inputAmount.quotient * index_js_5._997;
        const numerator = inputAmountWithFee * outputReserve.quotient;
        const denominator = inputReserve.quotient * index_js_5._1000 + inputAmountWithFee;
        const outputAmount = index_js_3.Amount.fromRawAmount(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0, numerator / denominator);
        if (outputAmount.quotient === index_js_5.ZERO) {
            throw new index_js_4.InsufficientInputAmountError();
        }
        return [
            outputAmount,
            new SushiSwapV2Pool(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount)),
        ];
    }
    getInputAmount(outputAmount) {
        (0, tiny_invariant_1.default)(this.involvesToken(outputAmount.currency), 'TOKEN');
        if (this.reserve0.quotient === index_js_5.ZERO ||
            this.reserve1.quotient === index_js_5.ZERO ||
            outputAmount.quotient >= this.reserveOf(outputAmount.currency).quotient) {
            throw new index_js_4.InsufficientReservesError();
        }
        const outputReserve = this.reserveOf(outputAmount.currency);
        const inputReserve = this.reserveOf(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
        const numerator = inputReserve.quotient * outputAmount.quotient * index_js_5._1000;
        const denominator = (outputReserve.quotient - outputAmount.quotient) * index_js_5._997;
        const inputAmount = index_js_3.Amount.fromRawAmount(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0, numerator / denominator + index_js_5.ONE);
        return [
            inputAmount,
            new SushiSwapV2Pool(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount)),
        ];
    }
    getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
        (0, tiny_invariant_1.default)(totalSupply.currency.equals(this.liquidityToken), 'LIQUIDITY');
        const tokenAmounts = (tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
            ? [tokenAmountA, tokenAmountB]
            : [tokenAmountB, tokenAmountA]);
        (0, tiny_invariant_1.default)(tokenAmounts[0].currency.equals(this.token0) &&
            tokenAmounts[1].currency.equals(this.token1), 'TOKEN');
        let liquidity;
        if (totalSupply.quotient === index_js_5.ZERO) {
            liquidity =
                (0, index_js_5.sqrt)(tokenAmounts[0].quotient * tokenAmounts[1].quotient) -
                    this.minLiquidity;
        }
        else {
            const amount0 = (tokenAmounts[0].quotient * totalSupply.quotient) /
                this.reserve0.quotient;
            const amount1 = (tokenAmounts[1].quotient * totalSupply.quotient) /
                this.reserve1.quotient;
            liquidity = amount0 <= amount1 ? amount0 : amount1;
        }
        if (liquidity <= index_js_5.ZERO) {
            throw new index_js_4.InsufficientInputAmountError();
        }
        return index_js_3.Amount.fromRawAmount(this.liquidityToken, liquidity);
    }
    getLiquidityValue(token, totalSupply, liquidity, feeOn = false, kLast) {
        (0, tiny_invariant_1.default)(this.involvesToken(token), 'TOKEN');
        (0, tiny_invariant_1.default)(totalSupply.currency.equals(this.liquidityToken), 'TOTAL_SUPPLY');
        (0, tiny_invariant_1.default)(liquidity.currency.equals(this.liquidityToken), 'LIQUIDITY');
        (0, tiny_invariant_1.default)(liquidity.quotient <= totalSupply.quotient, 'LIQUIDITY');
        let totalSupplyAdjusted;
        if (!feeOn) {
            totalSupplyAdjusted = totalSupply;
        }
        else {
            (0, tiny_invariant_1.default)(!!kLast, 'K_LAST');
            const kLastParsed = BigInt(typeof kLast === 'bigint' ? kLast.toString() : kLast);
            if (kLastParsed !== index_js_5.ZERO) {
                const rootK = (0, index_js_5.sqrt)(this.reserve0.quotient * this.reserve1.quotient);
                const rootKLast = (0, index_js_5.sqrt)(kLastParsed);
                if (rootK > rootKLast) {
                    const numerator = totalSupply.quotient * (rootK - rootKLast);
                    const denominator = rootK * index_js_5.FIVE + rootKLast;
                    const feeLiquidity = numerator / denominator;
                    totalSupplyAdjusted = totalSupply.add(index_js_3.Amount.fromRawAmount(this.liquidityToken, feeLiquidity));
                }
                else {
                    totalSupplyAdjusted = totalSupply;
                }
            }
            else {
                totalSupplyAdjusted = totalSupply;
            }
        }
        return index_js_3.Amount.fromRawAmount(token, (liquidity.quotient * this.reserveOf(token).quotient) /
            totalSupplyAdjusted.quotient);
    }
    serialize() {
        return zod_js_1.sushiSwapV2PoolSchema.parse({
            reserve0: this.tokenAmounts[0].serialize(),
            reserve1: this.tokenAmounts[1].serialize(),
        });
    }
    static deserialize(pair) {
        return new SushiSwapV2Pool(index_js_3.Amount.deserialize(pair.reserve0), index_js_3.Amount.deserialize(pair.reserve1));
    }
}
exports.SushiSwapV2Pool = SushiSwapV2Pool;
//# sourceMappingURL=sushiswap-v2-pool.js.map