"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximum = void 0;
/**
 * Returns the biggest member of the array
 * @param values the values from which the biggest gets returned
 * @returns the biggest memmber of the array
 */
function maximum(...values) {
    let highest = values[0];
    for (let i = 1; i < values.length; i++) {
        const value = values[i];
        if (value > highest) {
            highest = value;
        }
    }
    return highest;
}
exports.maximum = maximum;
//# sourceMappingURL=maximum.js.map