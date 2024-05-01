"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tick = void 0;
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../utils/index.js");
class Tick {
    index;
    liquidityGross;
    liquidityNet;
    constructor({ index, liquidityGross, liquidityNet }) {
        (0, tiny_invariant_1.default)(index >= index_js_1.TickMath.MIN_TICK && index <= index_js_1.TickMath.MAX_TICK, 'TICK');
        this.index = index;
        this.liquidityGross = BigInt(liquidityGross.toString());
        this.liquidityNet = BigInt(liquidityNet.toString());
    }
}
exports.Tick = Tick;
//# sourceMappingURL=Tick.js.map