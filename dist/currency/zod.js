"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.amountSchema = exports.tokenSchema = exports.nativeSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.nativeSchema = zod_1.default.object({
    isNative: zod_1.default.literal(true),
    name: zod_1.default.string().optional(),
    symbol: zod_1.default.string().optional(),
    decimals: zod_1.default.number(),
    chainId: zod_1.default.number(),
});
exports.tokenSchema = zod_1.default.object({
    isNative: zod_1.default.literal(false),
    name: zod_1.default.string().optional(),
    symbol: zod_1.default.string().optional(),
    decimals: zod_1.default.number(),
    chainId: zod_1.default.number(),
    address: zod_1.default.string(),
});
exports.amountSchema = zod_1.default.object({
    amount: zod_1.default.string(),
    currency: zod_1.default.discriminatedUnion('isNative', [exports.nativeSchema, exports.tokenSchema]),
});
//# sourceMappingURL=zod.js.map