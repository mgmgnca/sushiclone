"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TridentConstantPool = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../../config/index.js");
const index_js_2 = require("../../currency/index.js");
const index_js_3 = require("../../dex/index.js");
const index_js_4 = require("../../math/index.js");
const compute_trident_constant_pool_address_js_1 = require("./compute-trident-constant-pool-address.js");
const zod_js_1 = require("./zod.js");
class TridentConstantPool {
    liquidityToken;
    swapGasCost = 60000n;
    minLiquidity = 1000n;
    fee;
    twap;
    tokenAmounts;
    MAX_FEE = 10000n;
    static getAddress(tokenA, tokenB, fee, twap) {
        return (0, compute_trident_constant_pool_address_js_1.computeTridentConstantPoolAddress)({
            factoryAddress: index_js_1.TRIDENT_CONSTANT_POOL_FACTORY_ADDRESS[tokenA.chainId],
            tokenA,
            tokenB,
            fee,
            twap,
        });
    }
    constructor(amountA, amountB, fee, twap) {
        const amounts = (amountA.currency.sortsBefore(amountB.currency) // does safety checks
            ? [amountA, amountB]
            : [amountB, amountA]);
        this.liquidityToken = new index_js_2.Token({
            chainId: amounts[0].currency.chainId,
            address: TridentConstantPool.getAddress(amounts[0].currency, amounts[1].currency, fee, twap),
            decimals: 18,
            symbol: 'SCPLP',
            name: 'Sushi Constant Product LP Token',
        });
        this.fee = fee;
        this.twap = twap;
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
        return new index_js_2.Price(this.token0, this.token1, result.denominator, result.numerator);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
    get token1Price() {
        const result = this.tokenAmounts[0].divide(this.tokenAmounts[1]);
        return new index_js_2.Price(this.token1, this.token0, result.denominator, result.numerator);
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
    get assets() {
        return [this.tokenAmounts[0].currency, this.tokenAmounts[1].currency];
    }
    get reserves() {
        return [this.reserve0, this.reserve1];
    }
    get kLast() {
        return (0, index_js_4.sqrt)(this.reserve0.multiply(this.reserve1).quotient);
    }
    reserveOf(token) {
        (0, tiny_invariant_1.default)(this.involvesToken(token), 'TOKEN');
        return token.equals(this.token0) ? this.reserve0 : this.reserve1;
    }
    getOutputAmount(inputAmount) {
        (0, tiny_invariant_1.default)(this.involvesToken(inputAmount.currency), 'TOKEN');
        if (this.reserve0.quotient === index_js_4.ZERO || this.reserve1.quotient === index_js_4.ZERO) {
            throw new index_js_3.InsufficientReservesError();
        }
        const inputReserve = this.reserveOf(inputAmount.currency);
        const outputReserve = this.reserveOf(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
        const inputAmountWithFee = inputAmount.quotient * this.MAX_FEE - BigInt(this.fee);
        const numerator = inputAmountWithFee * outputReserve.quotient;
        const denominator = inputReserve.quotient * this.MAX_FEE + inputAmountWithFee;
        const outputAmount = index_js_2.Amount.fromRawAmount(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0, numerator / denominator);
        if (outputAmount.quotient === index_js_4.ZERO) {
            throw new index_js_3.InsufficientInputAmountError();
        }
        return [
            outputAmount,
            new TridentConstantPool(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount), this.fee, this.twap),
        ];
    }
    getInputAmount(outputAmount) {
        (0, tiny_invariant_1.default)(this.involvesToken(outputAmount.currency), 'TOKEN');
        if (this.reserve0.quotient === index_js_4.ZERO ||
            this.reserve1.quotient === index_js_4.ZERO ||
            outputAmount.quotient >= this.reserveOf(outputAmount.currency).quotient) {
            throw new index_js_3.InsufficientReservesError();
        }
        const outputReserve = this.reserveOf(outputAmount.currency);
        const inputReserve = this.reserveOf(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
        const numerator = inputReserve.quotient * outputAmount.quotient * this.MAX_FEE;
        const denominator = (outputReserve.quotient - outputAmount.quotient) *
            (this.MAX_FEE - BigInt(this.fee));
        const inputAmount = index_js_2.Amount.fromRawAmount(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0, numerator / denominator + index_js_4.ONE);
        return [
            inputAmount,
            new TridentConstantPool(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount), this.fee, this.twap),
        ];
    }
    getNonOptimalMintFee(amount0, amount1, reserve0, reserve1) {
        if (reserve0 === index_js_4.ZERO || reserve1 === index_js_4.ZERO) {
            return [index_js_4.ZERO, index_js_4.ZERO];
        }
        const amount1Optimal = (amount0 * reserve1) / reserve0;
        if (amount1Optimal <= amount1) {
            return [
                index_js_4.ZERO,
                (BigInt(this.fee) * (amount1 - amount1Optimal)) / (2n * 10000n),
            ];
        }
        else {
            const amount0Optimal = (amount1 * reserve0) / reserve1;
            return [
                (BigInt(this.fee) * (amount0 - amount0Optimal)) / (2n * 10000n),
                index_js_4.ZERO,
            ];
        }
    }
    getMintFee(reserve0, reserve1, totalSupply) {
        if (this.kLast !== index_js_4.ZERO) {
            const computed = (0, index_js_4.sqrt)(reserve0 * reserve1);
            if (computed > this.kLast) {
                const liquidity = (totalSupply * (computed - this.kLast) * 5n) / computed / 10000n;
                if (liquidity !== index_js_4.ZERO) {
                    return liquidity;
                }
            }
        }
        return index_js_4.ZERO;
    }
    getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
        (0, tiny_invariant_1.default)(totalSupply.currency.equals(this.liquidityToken), 'LIQUIDITY');
        const tokenAmounts = (tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
            ? [tokenAmountA, tokenAmountB]
            : [tokenAmountB, tokenAmountA]);
        (0, tiny_invariant_1.default)(tokenAmounts[0].currency.equals(this.token0) &&
            tokenAmounts[1].currency.equals(this.token1), 'TOKEN');
        let liquidity;
        // Expected balances after minting
        const balance0 = tokenAmounts[0].quotient + this.reserve0.quotient;
        const balance1 = tokenAmounts[1].quotient + this.reserve1.quotient;
        const computed = (0, index_js_4.sqrt)(balance0 * balance1);
        if (totalSupply.quotient === index_js_4.ZERO) {
            liquidity = computed - this.minLiquidity;
        }
        else {
            const [fee0, fee1] = this.getNonOptimalMintFee(tokenAmounts[0].quotient, tokenAmounts[1].quotient, this.reserve0.quotient, this.reserve1.quotient);
            const reserve0 = this.reserve0.quotient + fee0;
            const reserve1 = this.reserve1.quotient + fee1;
            const k = (0, index_js_4.sqrt)(reserve0 * reserve1);
            const mintFee = this.getMintFee(reserve0, reserve1, totalSupply.quotient);
            liquidity = ((computed - k) * (totalSupply.quotient + mintFee)) / k;
        }
        if (liquidity <= index_js_4.ZERO) {
            throw new index_js_3.InsufficientInputAmountError();
        }
        return index_js_2.Amount.fromRawAmount(this.liquidityToken, liquidity);
    }
    getLiquidityValue(token, totalSupply, liquidity) {
        (0, tiny_invariant_1.default)(this.involvesToken(token), 'TOKEN');
        (0, tiny_invariant_1.default)(totalSupply.currency.equals(this.liquidityToken), 'TOTAL_SUPPLY');
        (0, tiny_invariant_1.default)(liquidity.currency.equals(this.liquidityToken), 'LIQUIDITY');
        (0, tiny_invariant_1.default)(liquidity.quotient <= totalSupply.quotient, 'LIQUIDITY');
        return index_js_2.Amount.fromRawAmount(token, (liquidity.quotient * this.reserveOf(token).quotient) /
            totalSupply.quotient);
    }
    getAmountOut(amountIn, reserveAmountIn, reserveAmountOut) {
        const amountInWithFee = amountIn * (this.MAX_FEE - BigInt(this.fee));
        return ((amountInWithFee * reserveAmountOut) /
            (reserveAmountIn * this.MAX_FEE + amountInWithFee));
    }
    getLiquidityValueSingleToken(token, totalSupply, liquidity) {
        (0, tiny_invariant_1.default)(this.involvesToken(token), 'TOKEN');
        (0, tiny_invariant_1.default)(totalSupply.currency.equals(this.liquidityToken), 'TOTAL_SUPPLY');
        (0, tiny_invariant_1.default)(liquidity.currency.equals(this.liquidityToken), 'LIQUIDITY');
        (0, tiny_invariant_1.default)(liquidity.quotient <= totalSupply.quotient, 'LIQUIDITY');
        const _totalSupply = totalSupply.quotient +
            this.getMintFee(this.reserve0.quotient, this.reserve1.quotient, totalSupply.quotient);
        const amount0 = (liquidity.quotient * this.reserve0.quotient) / _totalSupply;
        const amount1 = (liquidity.quotient * this.reserve1.quotient) / _totalSupply;
        if (token === this.token1) {
            return index_js_2.Amount.fromRawAmount(token, amount1 +
                this.getAmountOut(amount0, this.reserve0.quotient - amount0, this.reserve1.quotient - amount1));
        }
        return index_js_2.Amount.fromRawAmount(token, amount0 +
            this.getAmountOut(amount1, this.reserve1.quotient - amount1, this.reserve0.quotient - amount0));
    }
    serialize() {
        return zod_js_1.tridentConstantPoolSchema.parse({
            reserve0: this.tokenAmounts[0].serialize(),
            reserve1: this.tokenAmounts[1].serialize(),
            fee: this.fee,
            twap: this.twap,
        });
    }
    static deserialize(pool) {
        return new TridentConstantPool(index_js_2.Amount.deserialize(pool.reserve0), index_js_2.Amount.deserialize(pool.reserve1), pool.fee, pool.twap);
    }
}
exports.TridentConstantPool = TridentConstantPool;
//# sourceMappingURL=trident-constant-pool.js.map