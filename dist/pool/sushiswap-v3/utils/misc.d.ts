import { Currency, Price } from '../../../currency/index.js';
/**
 * Convert price to decimal number
 */
export declare const priceToNumber: (price: Price<Currency, Currency>) => number;
/**
 * Calculate captial efficiency of the given price range
 * @param priceCurrent Current price
 * @param priceLower Lower price boundary
 * @param priceUpper Upper price boundary
 * @returns Capitial efficiency, i.e., using the same amount of cash, the amount of liquidity obtained by a position
 * with the given price range v.s. that obtained by a full-range position.
 */
export declare function getCapitalEfficiency(priceCurrent: Price<Currency, Currency>, priceLower: Price<Currency, Currency>, priceUpper: Price<Currency, Currency>): number;
/**
 * Calculate the weights of the two tokens in a position with the given price range in terms of cash value
 * @param priceCurrent Current price
 * @param priceLower Lower price boundary
 * @param priceUpper Upper price boundary
 * @returns [token0's weight, token1's weight] in terms of cash value.
 */
export declare function getTokenRatio(priceCurrent: Price<Currency, Currency>, priceLower: Price<Currency, Currency>, priceUpper: Price<Currency, Currency>): [number, number];
/**
 * Given a price range, we alter the range to fit a desired token weight.
 * Note that the resulted price range has not been snapped to fit tick-spacing.
 */
export declare const getPriceRangeWithTokenRatio: (priceCurrent: number, priceLower: number, priceUpper: number, independentBound: 'LOWER' | 'UPPER', weight0: number) => [number, number];
//# sourceMappingURL=misc.d.ts.map