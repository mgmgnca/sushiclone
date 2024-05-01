"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfPermit = void 0;
const abi_1 = require("@ethersproject/abi");
const ISelfPermit_json_1 = __importDefault(require("@uniswap/v3-periphery/artifacts/contracts/interfaces/ISelfPermit.sol/ISelfPermit.json"));
const index_js_1 = require("../../../convert/index.js");
function isAllowedPermit(permitOptions) {
    return 'nonce' in permitOptions;
}
class SelfPermit {
    static INTERFACE = new abi_1.Interface(ISelfPermit_json_1.default.abi);
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static encodePermit(token, options) {
        return isAllowedPermit(options)
            ? SelfPermit.INTERFACE.encodeFunctionData('selfPermitAllowed', [
                token.address,
                (0, index_js_1.toHex)(options.nonce),
                (0, index_js_1.toHex)(options.expiry),
                options.v,
                options.r,
                options.s,
            ])
            : SelfPermit.INTERFACE.encodeFunctionData('selfPermit', [
                token.address,
                (0, index_js_1.toHex)(options.amount),
                (0, index_js_1.toHex)(options.deadline),
                options.v,
                options.r,
                options.s,
            ]);
    }
}
exports.SelfPermit = SelfPermit;
//# sourceMappingURL=SelfPermit.js.map