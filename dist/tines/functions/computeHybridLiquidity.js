"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeHybridLiquidity = void 0;
const index_js_1 = require("../../math/index.js");
const index_js_2 = require("../constants/index.js");
function computeHybridLiquidity(r0, r1, a) {
    if (r0 === 0n && r1 === 0n) {
        return 0n;
    }
    const s = r0 + r1;
    const nA = BigInt(a * 2);
    let prevD;
    let D = s;
    for (let i = 0; i < 256; i++) {
        const dP = (((D * D) / r0) * D) / r1 / 4n;
        prevD = D;
        D =
            (((nA * s) / index_js_2.A_PRECISION + 2n * dP) * D) / ((nA / index_js_2.A_PRECISION - 1n) * D) +
                3n * dP;
        if ((0, index_js_1.abs)(D - prevD) <= 1)
            break;
    }
    return D;
}
exports.computeHybridLiquidity = computeHybridLiquidity;
//# sourceMappingURL=computeHybridLiquidity.js.map