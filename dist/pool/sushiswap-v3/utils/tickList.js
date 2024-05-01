"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickList = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const isSorted_js_1 = require("./isSorted.js");
function tickComparator(a, b) {
    return a.index - b.index;
}
/**
 * Utility methods for interacting with sorted lists of ticks
 */
class TickList {
    /**
     * Cannot be constructed
     */
    constructor() { }
    static validateList(ticks, tickSpacing) {
        (0, tiny_invariant_1.default)(tickSpacing > 0, 'TICK_SPACING_NONZERO');
        // ensure ticks are spaced appropriately
        (0, tiny_invariant_1.default)(ticks.every(({ index }) => index % tickSpacing === 0), 'TICK_SPACING');
        // ensure tick liquidity deltas sum to 0
        (0, tiny_invariant_1.default)(ticks.reduce((accumulator, { liquidityNet }) => accumulator + liquidityNet, 0n) === 0n, 'ZERO_NET');
        (0, tiny_invariant_1.default)((0, isSorted_js_1.isSorted)(ticks, tickComparator), 'SORTED');
    }
    static isBelowSmallest(ticks, tick) {
        (0, tiny_invariant_1.default)(ticks.length > 0, 'LENGTH');
        return tick < ticks[0].index;
    }
    static isAtOrAboveLargest(ticks, tick) {
        (0, tiny_invariant_1.default)(ticks.length > 0, 'LENGTH');
        return tick >= ticks[ticks.length - 1].index;
    }
    static getTick(ticks, index) {
        const tick = ticks[this.binarySearch(ticks, index)];
        (0, tiny_invariant_1.default)(tick.index === index, 'NOT_CONTAINED');
        return tick;
    }
    /**
     * Finds the largest tick in the list of ticks that is less than or equal to tick
     * @param ticks list of ticks
     * @param tick tick to find the largest tick that is less than or equal to tick
     * @private
     */
    static binarySearch(ticks, tick) {
        (0, tiny_invariant_1.default)(!this.isBelowSmallest(ticks, tick), 'BELOW_SMALLEST');
        let l = 0;
        let r = ticks.length - 1;
        let i;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            i = Math.floor((l + r) / 2);
            if (ticks[i].index <= tick &&
                (i === ticks.length - 1 || ticks[i + 1].index > tick)) {
                return i;
            }
            if (ticks[i].index < tick) {
                l = i + 1;
            }
            else {
                r = i - 1;
            }
        }
    }
    static nextInitializedTick(ticks, tick, lte) {
        if (lte) {
            (0, tiny_invariant_1.default)(!TickList.isBelowSmallest(ticks, tick), 'BELOW_SMALLEST');
            if (TickList.isAtOrAboveLargest(ticks, tick)) {
                return ticks[ticks.length - 1];
            }
            const index = this.binarySearch(ticks, tick);
            return ticks[index];
        }
        else {
            (0, tiny_invariant_1.default)(!this.isAtOrAboveLargest(ticks, tick), 'AT_OR_ABOVE_LARGEST');
            if (this.isBelowSmallest(ticks, tick)) {
                return ticks[0];
            }
            const index = this.binarySearch(ticks, tick);
            return ticks[index + 1];
        }
    }
    static nextInitializedTickWithinOneWord(ticks, tick, lte, tickSpacing) {
        const compressed = Math.floor(tick / tickSpacing); // matches rounding in the code
        if (lte) {
            const wordPos = compressed >> 8;
            const minimum = (wordPos << 8) * tickSpacing;
            if (TickList.isBelowSmallest(ticks, tick)) {
                return [minimum, false];
            }
            const index = TickList.nextInitializedTick(ticks, tick, lte).index;
            const nextInitializedTick = Math.max(minimum, index);
            return [nextInitializedTick, nextInitializedTick === index];
        }
        else {
            const wordPos = (compressed + 1) >> 8;
            const maximum = (((wordPos + 1) << 8) - 1) * tickSpacing;
            if (this.isAtOrAboveLargest(ticks, tick)) {
                return [maximum, false];
            }
            const index = this.nextInitializedTick(ticks, tick, lte).index;
            const nextInitializedTick = Math.min(maximum, index);
            return [nextInitializedTick, nextInitializedTick === index];
        }
    }
}
exports.TickList = TickList;
//# sourceMappingURL=tickList.js.map