"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastArrayMerge = exports.getBigInt = exports.revertPositive = exports.calcSquareEquation = exports.closeValues = exports.DEBUG_MODE_ON = exports.DEBUG = exports.ASSERT = void 0;
function ASSERT(f, t) {
    if (process.env['NODE_ENV'] !== 'production') {
        if (!f() && t)
            console.error(t);
    }
}
exports.ASSERT = ASSERT;
let DEBUG_MODE = false;
function DEBUG(f) {
    if (DEBUG_MODE)
        f();
}
exports.DEBUG = DEBUG;
function DEBUG_MODE_ON(on) {
    DEBUG_MODE = on;
}
exports.DEBUG_MODE_ON = DEBUG_MODE_ON;
function closeValues(a, b, accuracy, logInfoIfFalse = '') {
    if (accuracy === 0)
        return a === b;
    if (Math.abs(a) < 1 / accuracy)
        return Math.abs(a - b) <= 10;
    if (Math.abs(b) < 1 / accuracy)
        return Math.abs(a - b) <= 10;
    const res = Math.abs(a / b - 1) < accuracy;
    if (!res) {
        console.log('Expected close: ', a, b, accuracy, logInfoIfFalse);
        // debugger
    }
    return res;
}
exports.closeValues = closeValues;
function calcSquareEquation(a, b, c) {
    const D = b * b - 4 * a * c;
    console.assert(D >= 0, `Discriminant is negative! ${a} ${b} ${c}`);
    const sqrtD = Math.sqrt(D);
    return [(-b - sqrtD) / 2 / a, (-b + sqrtD) / 2 / a];
}
exports.calcSquareEquation = calcSquareEquation;
// returns such x > 0 that f(x) = out or 0 if there is no such x or f defined not everywhere
// hint - approximation of x to spead up the algorithm
// f assumed to be continues monotone growth function defined everywhere
function revertPositive(f, out, hint = 1) {
    try {
        if (out <= f(0))
            return 0;
        let min;
        let max;
        if (f(hint) > out) {
            min = hint / 2;
            while (f(min) > out)
                min /= 2;
            max = min * 2;
        }
        else {
            max = hint * 2;
            while (f(max) < out)
                max *= 2;
            min = max / 2;
        }
        while (max / min - 1 > 1e-4) {
            const x0 = (min + max) / 2;
            const y0 = f(x0);
            if (out === y0)
                return x0;
            if (out < y0)
                max = x0;
            else
                min = x0;
        }
        return (min + max) / 2;
    }
    catch (_e) {
        return 0;
    }
}
exports.revertPositive = revertPositive;
function getBigInt(value) {
    const v = Math.abs(value);
    if (v < Number.MAX_SAFE_INTEGER)
        return BigInt(Math.round(value));
    const exp = Math.floor(Math.log(v) / Math.LN2);
    console.assert(exp >= 51, 'Internal Error 314');
    const shift = exp - 51;
    const mant = Math.round(v / 2 ** shift);
    const res = BigInt(mant) * 2n ** BigInt(shift);
    return value > 0 ? res : res * -1n;
}
exports.getBigInt = getBigInt;
function fastArrayMerge(base, ins) {
    if (base.length === 0) {
        return ins.sort((a, b) => a[0] - b[0]);
    }
    // Now base is not empty
    for (let i = ins.length - 1; i >= 0; --i) {
        const value = ins[i][0];
        let low = 0;
        let up = base.length;
        while (low < up) {
            const middle = (low + up) >> 1;
            const diff = base[middle][0] - value;
            if (diff > 0)
                up = middle;
            else if (diff < 0)
                low = middle + 1;
            else {
                low = middle;
                break;
            }
        }
        base.splice(low, 0, ins[i]);
    }
    return base;
}
exports.fastArrayMerge = fastArrayMerge;
//# sourceMappingURL=Utils.js.map