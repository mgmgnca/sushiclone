"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickMath = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../../../math/index.js");
const mostSignificantBit_js_1 = require("./mostSignificantBit.js");
function mulShift(val, mulBy) {
    return (val * BigInt(mulBy)) >> 128n;
}
const Q32 = 2n ** 32n;
class TickMath {
    /**
     * Cannot be constructed.
     */
    constructor() { }
    /**
     * The minimum tick that can be used on any pool.
     */
    static MIN_TICK = -887272;
    /**
     * The maximum tick that can be used on any pool.
     */
    static MAX_TICK = -TickMath.MIN_TICK;
    /**
     * The sqrt ratio corresponding to the minimum tick that could be used on any pool.
     */
    static MIN_SQRT_RATIO = 4295128739n;
    /**
     * The sqrt ratio corresponding to the maximum tick that could be used on any pool.
     */
    static MAX_SQRT_RATIO = 1461446703485210103287273052203988822378723970342n;
    /**
     * Returns the sqrt ratio as a Q64.96 for the given tick. The sqrt ratio is computed as sqrt(1.0001)^tick
     * @param tick the tick for which to compute the sqrt ratio
     */
    static getSqrtRatioAtTick(tick) {
        (0, tiny_invariant_1.default)(tick >= TickMath.MIN_TICK &&
            tick <= TickMath.MAX_TICK &&
            Number.isInteger(tick), 'TICK');
        const absTick = tick < 0 ? tick * -1 : tick;
        let ratio = (absTick & 0x1) !== 0
            ? 0xfffcb933bd6fad37aa2d162d1a594001n
            : 0x100000000000000000000000000000000n;
        if ((absTick & 0x2) !== 0)
            ratio = mulShift(ratio, '0xfff97272373d413259a46990580e213a');
        if ((absTick & 0x4) !== 0)
            ratio = mulShift(ratio, '0xfff2e50f5f656932ef12357cf3c7fdcc');
        if ((absTick & 0x8) !== 0)
            ratio = mulShift(ratio, '0xffe5caca7e10e4e61c3624eaa0941cd0');
        if ((absTick & 0x10) !== 0)
            ratio = mulShift(ratio, '0xffcb9843d60f6159c9db58835c926644');
        if ((absTick & 0x20) !== 0)
            ratio = mulShift(ratio, '0xff973b41fa98c081472e6896dfb254c0');
        if ((absTick & 0x40) !== 0)
            ratio = mulShift(ratio, '0xff2ea16466c96a3843ec78b326b52861');
        if ((absTick & 0x80) !== 0)
            ratio = mulShift(ratio, '0xfe5dee046a99a2a811c461f1969c3053');
        if ((absTick & 0x100) !== 0)
            ratio = mulShift(ratio, '0xfcbe86c7900a88aedcffc83b479aa3a4');
        if ((absTick & 0x200) !== 0)
            ratio = mulShift(ratio, '0xf987a7253ac413176f2b074cf7815e54');
        if ((absTick & 0x400) !== 0)
            ratio = mulShift(ratio, '0xf3392b0822b70005940c7a398e4b70f3');
        if ((absTick & 0x800) !== 0)
            ratio = mulShift(ratio, '0xe7159475a2c29b7443b29c7fa6e889d9');
        if ((absTick & 0x1000) !== 0)
            ratio = mulShift(ratio, '0xd097f3bdfd2022b8845ad8f792aa5825');
        if ((absTick & 0x2000) !== 0)
            ratio = mulShift(ratio, '0xa9f746462d870fdf8a65dc1f90e061e5');
        if ((absTick & 0x4000) !== 0)
            ratio = mulShift(ratio, '0x70d869a156d2a1b890bb3df62baf32f7');
        if ((absTick & 0x8000) !== 0)
            ratio = mulShift(ratio, '0x31be135f97d08fd981231505542fcfa6');
        if ((absTick & 0x10000) !== 0)
            ratio = mulShift(ratio, '0x9aa508b5b7a84e1c677de54f3e99bc9');
        if ((absTick & 0x20000) !== 0)
            ratio = mulShift(ratio, '0x5d6af8dedb81196699c329225ee604');
        if ((absTick & 0x40000) !== 0)
            ratio = mulShift(ratio, '0x2216e584f5fa1ea926041bedfe98');
        if ((absTick & 0x80000) !== 0)
            ratio = mulShift(ratio, '0x48a170391f7dc42444e8fa2');
        if (tick > 0)
            ratio = index_js_1.MAX_UINT256 / ratio;
        // back to Q96
        return ratio % Q32 > 0n ? ratio / Q32 + 1n : ratio / Q32;
    }
    /**
     * Returns the tick corresponding to a given sqrt ratio, s.t. #getSqrtRatioAtTick(tick) <= sqrtRatioX96
     * and #getSqrtRatioAtTick(tick + 1) > sqrtRatioX96
     * @param sqrtRatioX96 the sqrt ratio as a Q64.96 for which to compute the tick
     */
    static getTickAtSqrtRatio(sqrtRatioX96) {
        (0, tiny_invariant_1.default)(sqrtRatioX96 >= TickMath.MIN_SQRT_RATIO &&
            sqrtRatioX96 < TickMath.MAX_SQRT_RATIO, 'SQRT_RATIO');
        const sqrtRatioX128 = sqrtRatioX96 << 32n;
        const msb = (0, mostSignificantBit_js_1.mostSignificantBit)(sqrtRatioX128);
        let r;
        if (BigInt(msb) >= 128n) {
            r = sqrtRatioX128 >> BigInt(msb - 127);
        }
        else {
            r = sqrtRatioX128 << BigInt(127 - msb);
        }
        let log_2 = (BigInt(msb) - 128n) << 64n;
        for (let i = 0; i < 14; i++) {
            r = (r * r) >> 127n;
            const f = r >> 128n;
            log_2 = log_2 | (f << BigInt(63 - i));
            r = r >> f;
        }
        const log_sqrt10001 = log_2 * 255738958999603826347141n;
        const tickLow = Number((log_sqrt10001 - 3402992956809132418596140100660247210n) >> 128n);
        const tickHigh = Number((log_sqrt10001 + 291339464771989622907027621153398088495n) >> 128n);
        return tickLow === tickHigh
            ? tickLow
            : TickMath.getSqrtRatioAtTick(tickHigh) <= sqrtRatioX96
                ? tickHigh
                : tickLow;
    }
}
exports.TickMath = TickMath;
//# sourceMappingURL=tickMath.js.map