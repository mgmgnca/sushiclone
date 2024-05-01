"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimum = void 0;
/**
 * Returns the smallest member of the array
 * @param values the values from which the smallest gets returned
 * @returns the smallest memmber of the array
 */
function minimum(...values) {
    let lowest = values[0];
    for (let i = 1; i < values.length; i++) {
        const value = values[i];
        if (value < lowest) {
            lowest = value;
        }
    }
    return lowest;
}
exports.minimum = minimum;
//# sourceMappingURL=minimum.js.map