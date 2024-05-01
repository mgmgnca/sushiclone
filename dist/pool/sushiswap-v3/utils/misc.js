"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceRangeWithTokenRatio = exports.getTokenRatio = exports.getCapitalEfficiency = exports.priceToNumber = void 0;
/**
 * Convert fraction to decimal number
 */
const fractionToNumber = (fraction) => {
    return Number(fraction.numerator) / Number(fraction.denominator);
};
/**
 * Convert price to decimal number
 */
const priceToNumber = (price) => {
    return fractionToNumber(price.asFraction.multiply(price.scalar));
};
exports.priceToNumber = priceToNumber;
/**
 * Calculate captial efficiency of the given price range
 * @param priceCurrent Current price
 * @param priceLower Lower price boundary
 * @param priceUpper Upper price boundary
 * @returns Capitial efficiency, i.e., using the same amount of cash, the amount of liquidity obtained by a position
 * with the given price range v.s. that obtained by a full-range position.
 */
function getCapitalEfficiency(priceCurrent, priceLower, priceUpper) {
    const priceBounded = priceCurrent.greaterThan(priceUpper)
        ? priceUpper
        : priceCurrent.lessThan(priceLower)
            ? priceLower
            : priceCurrent;
    const sqrtPBounded = Math.sqrt((0, exports.priceToNumber)(priceBounded));
    const sqrtPLower = Math.sqrt((0, exports.priceToNumber)(priceLower));
    const sqrtPUpper = Math.sqrt((0, exports.priceToNumber)(priceUpper));
    const priceNow = (0, exports.priceToNumber)(priceCurrent);
    const denom = priceNow * (1 / sqrtPBounded - 1 / sqrtPUpper) + (sqrtPBounded - sqrtPLower);
    const num = 2 * Math.sqrt(priceNow);
    return num / denom;
}
exports.getCapitalEfficiency = getCapitalEfficiency;
/**
 * Calculate the weights of the two tokens in a position with the given price range in terms of cash value
 * @param priceCurrent Current price
 * @param priceLower Lower price boundary
 * @param priceUpper Upper price boundary
 * @returns [token0's weight, token1's weight] in terms of cash value.
 */
function getTokenRatio(priceCurrent, priceLower, priceUpper) {
    if (priceCurrent.greaterThan(priceUpper) || priceCurrent.equalTo(priceUpper))
        return [0, 1];
    if (priceCurrent.lessThan(priceLower) || priceCurrent.equalTo(priceLower))
        return [1, 0];
    const a = fractionToNumber(priceLower.asFraction.multiply(priceUpper));
    const b = fractionToNumber(priceCurrent.asFraction.multiply(priceUpper));
    const p = fractionToNumber(priceCurrent.asFraction);
    const w0 = 1 / ((Math.sqrt(a) - Math.sqrt(b)) / (p - Math.sqrt(b)) + 1);
    const w1 = 1 - w0;
    return [w0, w1];
}
exports.getTokenRatio = getTokenRatio;
const MIN_SQRT_PRICE_APPROX = 2 ** -56;
const MAX_SQRT_PRICE_APPROX = 2 ** 56;
const getPriceLowerWithTokenRatio = (priceCurrent, priceUpper, weight0) => {
    if (priceCurrent >= priceUpper)
        throw new Error('invalid inputs');
    const z = (1 / weight0 - 1) * priceCurrent;
    const sqrtP = Math.sqrt(priceCurrent);
    const sqrtPLower = sqrtP - z * (1 / sqrtP - 1 / Math.sqrt(priceUpper));
    return Math.max(sqrtPLower, MIN_SQRT_PRICE_APPROX) ** 2;
};
const getPriceUpperWithTokenRatio = (priceCurrent, priceLower, weight0) => {
    if (priceLower >= priceCurrent)
        throw new Error('invalid inputs');
    const z = (1 / weight0 - 1) * priceCurrent;
    const sqrtP = Math.sqrt(priceCurrent);
    const denom = z - (sqrtP - Math.sqrt(priceLower)) * sqrtP;
    if (denom <= 0)
        return MAX_SQRT_PRICE_APPROX ** 2;
    const sqrtUpper = (z * sqrtP) / denom;
    return Math.min(sqrtUpper, MAX_SQRT_PRICE_APPROX) ** 2;
};
/**
 * Given a price range, we alter the range to fit a desired token weight.
 * Note that the resulted price range has not been snapped to fit tick-spacing.
 */
const getPriceRangeWithTokenRatio = (priceCurrent, priceLower, priceUpper, independentBound, weight0) => {
    if (weight0 === 1) {
        return [
            Math.max(priceLower, priceCurrent),
            Math.max(priceUpper, priceCurrent),
        ];
    }
    if (weight0 === 0) {
        return [
            Math.min(priceLower, priceCurrent),
            Math.min(priceUpper, priceCurrent),
        ];
    }
    // flipped
    if (weight0 < 1 &&
        priceLower > priceCurrent &&
        independentBound === 'LOWER') {
        independentBound = 'UPPER';
        priceUpper = priceLower;
        priceLower = NaN;
    }
    if (weight0 > 0 &&
        priceUpper < priceCurrent &&
        independentBound === 'UPPER') {
        independentBound = 'LOWER';
        priceLower = priceUpper;
        priceUpper = NaN;
    }
    if (independentBound === 'LOWER') {
        return [
            priceLower,
            getPriceUpperWithTokenRatio(priceCurrent, priceLower, weight0),
        ];
    }
    else {
        return [
            getPriceLowerWithTokenRatio(priceCurrent, priceUpper, weight0),
            priceUpper,
        ];
    }
};
exports.getPriceRangeWithTokenRatio = getPriceRangeWithTokenRatio;
//# sourceMappingURL=misc.js.map