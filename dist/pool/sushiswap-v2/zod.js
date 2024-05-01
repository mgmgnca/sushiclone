"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sushiSwapV2PoolSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const index_js_1 = require("../../currency/index.js");
exports.sushiSwapV2PoolSchema = zod_1.default.object({
    reserve0: index_js_1.amountSchema,
    reserve1: index_js_1.amountSchema,
});
//# sourceMappingURL=zod.js.map