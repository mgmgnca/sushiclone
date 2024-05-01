"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapV3Pool = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../../../config/index.js");
const index_js_2 = require("../../../currency/index.js");
const internalConstants_js_1 = require("../internalConstants.js");
const computePoolAddress_js_1 = require("../utils/computePoolAddress.js");
const liquidityMath_js_1 = require("../utils/liquidityMath.js");
const swapMath_js_1 = require("../utils/swapMath.js");
const tickMath_js_1 = require("../utils/tickMath.js");
const TickDataProvider_js_1 = require("./TickDataProvider.js");
const TickListDataProvider_js_1 = require("./TickListDataProvider.js");
/**
 * By default, pools will not allow operations that require ticks.
 */
const NO_TICK_DATA_PROVIDER_DEFAULT = new TickDataProvider_js_1.NoTickDataProvider();
/**
 * Represents a V3 pool
 */
class SushiSwapV3Pool {
    token0;
    token1;
    fee;
    sqrtRatioX96;
    liquidity;
    tickCurrent;
    tickDataProvider;
    _token0Price;
    _token1Price;
    static getAddress(tokenA, tokenB, fee, initCodeHashManualOverride, factoryAddressOverride) {
        return (0, computePoolAddress_js_1.computeSushiSwapV3PoolAddress)({
            factoryAddress: factoryAddressOverride ??
                index_js_1.SUSHISWAP_V3_FACTORY_ADDRESS[tokenA.chainId],
            fee,
            tokenA,
            tokenB,
            initCodeHashManualOverride,
        });
    }
    /**
     * Construct a pool
     * @param tokenA One of the tokens in the pool
     * @param tokenB The other token in the pool
     * @param fee The fee in hundredths of a bips of the input amount of every swap that is collected by the pool
     * @param sqrtRatioX96 The sqrt of the current ratio of amounts of token1 to token0
     * @param liquidity The current value of in range liquidity
     * @param tickCurrent The current tick of the pool
     * @param ticks The current state of the pool ticks or a data provider that can return tick data
     */
    constructor(tokenA, tokenB, fee, sqrtRatioX96, liquidity, tickCurrent, ticks = NO_TICK_DATA_PROVIDER_DEFAULT) {
        (0, tiny_invariant_1.default)(Number.isInteger(fee) && fee < 1000000, 'FEE');
        const tickCurrentSqrtRatioX96 = tickMath_js_1.TickMath.getSqrtRatioAtTick(tickCurrent);
        const nextTickSqrtRatioX96 = tickMath_js_1.TickMath.getSqrtRatioAtTick(tickCurrent + 1);
        (0, tiny_invariant_1.default)(BigInt(sqrtRatioX96.toString()) >= tickCurrentSqrtRatioX96 &&
            BigInt(sqrtRatioX96.toString()) <= nextTickSqrtRatioX96, 'PRICE_BOUNDS');
        [this.token0, this.token1] = tokenA.sortsBefore(tokenB)
            ? [tokenA, tokenB]
            : [tokenB, tokenA];
        this.fee = fee;
        this.sqrtRatioX96 = BigInt(sqrtRatioX96.toString());
        this.liquidity = BigInt(liquidity.toString());
        this.tickCurrent = tickCurrent;
        this.tickDataProvider = Array.isArray(ticks)
            ? new TickListDataProvider_js_1.TickListDataProvider(ticks, index_js_1.TICK_SPACINGS[fee])
            : ticks;
    }
    /**
     * Returns true if the token is either token0 or token1
     * @param token The token to check
     * @returns True if token is either token0 or token
     */
    involvesToken(token) {
        return token.equals(this.token0) || token.equals(this.token1);
    }
    /**
     * Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0
     */
    get token0Price() {
        if (!this._token0Price) {
            this._token0Price = new index_js_2.Price(this.token0, this.token1, internalConstants_js_1.Q192, this.sqrtRatioX96 * this.sqrtRatioX96);
        }
        return this._token0Price;
    }
    /**
     * Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1
     */
    get token1Price() {
        if (!this._token1Price) {
            this._token1Price = new index_js_2.Price(this.token1, this.token0, this.sqrtRatioX96 * this.sqrtRatioX96, internalConstants_js_1.Q192);
        }
        return this._token1Price;
    }
    /**
     * Return the price of the given token in terms of the other token in the pool.
     * @param token The token to return price of
     * @returns The price of the given token, in terms of the other.
     */
    priceOf(token) {
        (0, tiny_invariant_1.default)(this.involvesToken(token), 'TOKEN');
        return token.equals(this.token0) ? this.token0Price : this.token1Price;
    }
    /**
     * Returns the chain ID of the tokens in the pool.
     */
    get chainId() {
        return this.token0.chainId;
    }
    /**
     * Given an input amount of a token, return the computed output amount, and a pool with state updated after the trade
     * @param inputAmount The input amount for which to quote the output amount
     * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit
     * @returns The output amount and the pool with updated state
     */
    async getOutputAmount(inputAmount, sqrtPriceLimitX96) {
        (0, tiny_invariant_1.default)(this.involvesToken(inputAmount.currency), 'TOKEN');
        const zeroForOne = inputAmount.currency.equals(this.token0);
        const { amountCalculated: outputAmount, sqrtRatioX96, liquidity, tickCurrent, } = await this.swap(zeroForOne, inputAmount.quotient, sqrtPriceLimitX96);
        const outputToken = zeroForOne ? this.token1 : this.token0;
        return [
            index_js_2.Amount.fromRawAmount(outputToken, outputAmount * -1n),
            new SushiSwapV3Pool(this.token0, this.token1, this.fee, sqrtRatioX96, liquidity, tickCurrent, this.tickDataProvider),
        ];
    }
    /**
     * Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade
     * @param outputAmount the output amount for which to quote the input amount
     * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
     * @returns The input amount and the pool with updated state
     */
    async getInputAmount(outputAmount, sqrtPriceLimitX96) {
        (0, tiny_invariant_1.default)(outputAmount.currency.isToken &&
            this.involvesToken(outputAmount.currency), 'TOKEN');
        const zeroForOne = outputAmount.currency.equals(this.token1);
        const { amountCalculated: inputAmount, sqrtRatioX96, liquidity, tickCurrent, } = await this.swap(zeroForOne, outputAmount.quotient * -1n, sqrtPriceLimitX96);
        const inputToken = zeroForOne ? this.token0 : this.token1;
        return [
            index_js_2.Amount.fromRawAmount(inputToken, inputAmount),
            new SushiSwapV3Pool(this.token0, this.token1, this.fee, sqrtRatioX96, liquidity, tickCurrent, this.tickDataProvider),
        ];
    }
    /**
     * Executes a swap
     * @param zeroForOne Whether the amount in is token0 or token1
     * @param amountSpecified The amount of the swap, which implicitly configures the swap as exact input (positive), or exact output (negative)
     * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
     * @returns amountCalculated
     * @returns sqrtRatioX96
     * @returns liquidity
     * @returns tickCurrent
     */
    async swap(zeroForOne, amountSpecified, sqrtPriceLimitX96) {
        if (!sqrtPriceLimitX96)
            sqrtPriceLimitX96 = zeroForOne
                ? tickMath_js_1.TickMath.MIN_SQRT_RATIO + 1n
                : tickMath_js_1.TickMath.MAX_SQRT_RATIO - 1n;
        if (zeroForOne) {
            (0, tiny_invariant_1.default)(sqrtPriceLimitX96 > tickMath_js_1.TickMath.MIN_SQRT_RATIO, 'RATIO_MIN');
            (0, tiny_invariant_1.default)(sqrtPriceLimitX96 < this.sqrtRatioX96, 'RATIO_CURRENT');
        }
        else {
            (0, tiny_invariant_1.default)(sqrtPriceLimitX96 < tickMath_js_1.TickMath.MAX_SQRT_RATIO, 'RATIO_MAX');
            (0, tiny_invariant_1.default)(sqrtPriceLimitX96 > this.sqrtRatioX96, 'RATIO_CURRENT');
        }
        const exactInput = amountSpecified >= 0n;
        // keep track of swap state
        const state = {
            amountSpecifiedRemaining: amountSpecified,
            amountCalculated: 0n,
            sqrtPriceX96: this.sqrtRatioX96,
            tick: this.tickCurrent,
            liquidity: this.liquidity,
        };
        // start swap while loop
        while (state.amountSpecifiedRemaining !== 0n &&
            state.sqrtPriceX96 !== sqrtPriceLimitX96) {
            const step = {};
            step.sqrtPriceStartX96 = state.sqrtPriceX96;
            [step.tickNext, step.initialized] =
                await this.tickDataProvider.nextInitializedTickWithinOneWord(state.tick, zeroForOne, this.tickSpacing);
            if (step.tickNext < tickMath_js_1.TickMath.MIN_TICK) {
                step.tickNext = tickMath_js_1.TickMath.MIN_TICK;
            }
            else if (step.tickNext > tickMath_js_1.TickMath.MAX_TICK) {
                step.tickNext = tickMath_js_1.TickMath.MAX_TICK;
            }
            step.sqrtPriceNextX96 = tickMath_js_1.TickMath.getSqrtRatioAtTick(step.tickNext);
            [state.sqrtPriceX96, step.amountIn, step.amountOut, step.feeAmount] =
                swapMath_js_1.SwapMath.computeSwapStep(state.sqrtPriceX96, (zeroForOne
                    ? step.sqrtPriceNextX96 < sqrtPriceLimitX96
                    : step.sqrtPriceNextX96 > sqrtPriceLimitX96)
                    ? sqrtPriceLimitX96
                    : step.sqrtPriceNextX96, state.liquidity, state.amountSpecifiedRemaining, this.fee);
            if (exactInput) {
                state.amountSpecifiedRemaining =
                    state.amountSpecifiedRemaining - (step.amountIn + step.feeAmount);
                state.amountCalculated = state.amountCalculated - step.amountOut;
            }
            else {
                state.amountSpecifiedRemaining =
                    state.amountSpecifiedRemaining + step.amountOut;
                state.amountCalculated =
                    state.amountCalculated + (step.amountIn + step.feeAmount);
            }
            // TODO
            if (state.sqrtPriceX96 === step.sqrtPriceNextX96) {
                // if the tick is initialized, run the tick transition
                if (step.initialized) {
                    let liquidityNet = BigInt((await this.tickDataProvider.getTick(step.tickNext)).liquidityNet.toString());
                    // if we're moving leftward, we interpret liquidityNet as the opposite sign
                    // safe because liquidityNet cannot be type(int128).min
                    if (zeroForOne)
                        liquidityNet = liquidityNet * -1n;
                    state.liquidity = liquidityMath_js_1.LiquidityMath.addDelta(state.liquidity, liquidityNet);
                }
                state.tick = zeroForOne ? step.tickNext - 1 : step.tickNext;
            }
            else if (state.sqrtPriceX96 !== step.sqrtPriceStartX96) {
                // updated comparison function
                // recompute unless we're on a lower tick boundary (i.e. already transitioned ticks), and haven't moved
                state.tick = tickMath_js_1.TickMath.getTickAtSqrtRatio(state.sqrtPriceX96);
            }
        }
        return {
            amountCalculated: state.amountCalculated,
            sqrtRatioX96: state.sqrtPriceX96,
            liquidity: state.liquidity,
            tickCurrent: state.tick,
        };
    }
    get tickSpacing() {
        return index_js_1.TICK_SPACINGS[this.fee];
    }
}
exports.SushiSwapV3Pool = SushiSwapV3Pool;
//# sourceMappingURL=SushiSwapV3Pool.js.map