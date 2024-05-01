import { type BigintIsh, Fraction, Rounding } from '../math/index.js';
import { Share } from './Share.js';
import { Token } from './Token.js';
import { type Type } from './Type.js';
import { type SerializedAmount } from './zod.js';
export declare class Amount<T extends Type> extends Fraction {
    readonly currency: T;
    readonly scale: bigint;
    /**
     * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
     * @param currency the currency in the amount
     * @param rawAmount the raw token or ether amount
     */
    static fromRawAmount<T extends Type>(currency: T, rawAmount: BigintIsh): Amount<T>;
    static fromShare<T extends Type>(currency: T, shares: BigintIsh, rebase: {
        base: bigint;
        elastic: bigint;
    }, roundUp?: boolean): Amount<T>;
    toShare(rebase: {
        base: bigint;
        elastic: bigint;
    }, roundUp?: boolean): Share<T>;
    /**
     * Construct a currency amount with a denominator that is not equal to 1
     * @param currency the currency
     * @param numerator the numerator of the fractional token amount
     * @param denominator the denominator of the fractional token amount
     */
    static fromFractionalAmount<T extends Type>(currency: T, numerator: BigintIsh, denominator: BigintIsh): Amount<T>;
    protected constructor(currency: T, numerator: BigintIsh, denominator?: BigintIsh);
    add(other: Amount<T>): Amount<T>;
    subtract(other: Amount<T>): Amount<T>;
    multiply(other: Fraction | BigintIsh): Amount<T>;
    divide(other: Fraction | BigintIsh): Amount<T>;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
    toHex(): string;
    toExact(format?: object): string;
    get wrapped(): Amount<Token>;
    serialize(): SerializedAmount;
    static deserialize<T extends Type>(amount: SerializedAmount): Amount<T>;
}
//# sourceMappingURL=Amount.d.ts.map