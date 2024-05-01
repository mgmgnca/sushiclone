import { type BigintIsh } from './BigintIsh.js';
import Fraction from './Fraction.js';
import Rounding from './Rounding.js';
declare class Percent extends Fraction {
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */
    readonly isPercent: true;
    add(other: Fraction | BigintIsh): Percent;
    subtract(other: Fraction | BigintIsh): Percent;
    multiply(other: Fraction | BigintIsh): Percent;
    divide(other: Fraction | BigintIsh): Percent;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
    toPercentageString(decimalPlaces?: number): string;
}
export default Percent;
//# sourceMappingURL=Percent.d.ts.map