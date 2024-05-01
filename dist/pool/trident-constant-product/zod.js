"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tridentConstantPoolSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const index_js_1 = require("../../currency/index.js");
const index_js_2 = require("../../dex/index.js");
exports.tridentConstantPoolSchema = zod_1.default.object({
    reserve0: index_js_1.amountSchema,
    reserve1: index_js_1.amountSchema,
    fee: zod_1.default.nativeEnum(index_js_2.Fee),
    twap: zod_1.default.boolean(),
});
//# sourceMappingURL=zod.js.map