import { type BigintIsh, Fraction, Rounding } from '../math/index.js';
import { Amount } from './Amount.js';
import { type Type } from './Type.js';
export declare class Share<T extends Type> extends Fraction {
    readonly currency: T;
    readonly scale: bigint;
    static fromRawShare<T extends Type>(currency: T, rawShare?: BigintIsh): Share<T>;
    protected constructor(currency: T, numerator: BigintIsh, denominator?: BigintIsh);
    toAmount(rebase: {
        base: bigint;
        elastic: bigint;
    }, roundUp?: boolean): Amount<T>;
    /**
     * Construct a currency share with a denominator that is not equal to 1
     * @param currency the currency
     * @param numerator the numerator of the fractional token share
     * @param denominator the denominator of the fractional token share
     */
    static fromFractionalShare<T extends Type>(currency: T, numerator: BigintIsh, denominator: BigintIsh): Share<T>;
    add(other: Share<T>): Share<T>;
    subtract(other: Share<T>): Share<T>;
    multiply(other: Fraction | BigintIsh): Share<T>;
    divide(other: Fraction | BigintIsh): Share<T>;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
    toExact(format?: object): string;
}
//# sourceMappingURL=Share.d.ts.map