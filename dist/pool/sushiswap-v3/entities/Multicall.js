"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multicall = void 0;
const abi_1 = require("@ethersproject/abi");
const IMulticall_json_1 = __importDefault(require("@uniswap/v3-periphery/artifacts/contracts/interfaces/IMulticall.sol/IMulticall.json"));
class Multicall {
    static INTERFACE = new abi_1.Interface(IMulticall_json_1.default.abi);
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static encodeMulticall(calldatas) {
        if (!Array.isArray(calldatas)) {
            calldatas = [calldatas];
        }
        return calldatas.length === 1
            ? calldatas[0]
            : Multicall.INTERFACE.encodeFunctionData('multicall', [calldatas]);
    }
}
exports.Multicall = Multicall;
//# sourceMappingURL=Multicall.js.map