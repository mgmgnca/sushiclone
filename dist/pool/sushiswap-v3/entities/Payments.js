"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
const abi_1 = require("@ethersproject/abi");
const IPeripheryPaymentsWithFee_json_1 = __importDefault(require("@uniswap/v3-periphery/artifacts/contracts/interfaces/IPeripheryPaymentsWithFee.sol/IPeripheryPaymentsWithFee.json"));
const index_js_1 = require("../../../convert/index.js");
const index_js_2 = require("../utils/index.js");
class Payments {
    static INTERFACE = new abi_1.Interface(IPeripheryPaymentsWithFee_json_1.default.abi);
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static encodeFeeBips(fee) {
        return (0, index_js_1.toHex)(fee.multiply(10000).quotient);
    }
    static encodeUnwrapWETH9(amountMinimum, recipient, feeOptions) {
        recipient = (0, index_js_2.validateAndParseAddress)(recipient);
        if (feeOptions) {
            const feeBips = this.encodeFeeBips(feeOptions.fee);
            const feeRecipient = (0, index_js_2.validateAndParseAddress)(feeOptions.recipient);
            return Payments.INTERFACE.encodeFunctionData('unwrapWETH9WithFee', [
                (0, index_js_1.toHex)(amountMinimum),
                recipient,
                feeBips,
                feeRecipient,
            ]);
        }
        else {
            return Payments.INTERFACE.encodeFunctionData('unwrapWETH9', [
                (0, index_js_1.toHex)(amountMinimum),
                recipient,
            ]);
        }
    }
    static encodeSweepToken(token, amountMinimum, recipient, feeOptions) {
        recipient = (0, index_js_2.validateAndParseAddress)(recipient);
        if (feeOptions) {
            const feeBips = this.encodeFeeBips(feeOptions.fee);
            const feeRecipient = (0, index_js_2.validateAndParseAddress)(feeOptions.recipient);
            return Payments.INTERFACE.encodeFunctionData('sweepTokenWithFee', [
                token.address,
                (0, index_js_1.toHex)(amountMinimum),
                recipient,
                feeBips,
                feeRecipient,
            ]);
        }
        else {
            return Payments.INTERFACE.encodeFunctionData('sweepToken', [
                token.address,
                (0, index_js_1.toHex)(amountMinimum),
                recipient,
            ]);
        }
    }
    static encodeRefundETH() {
        return Payments.INTERFACE.encodeFunctionData('refundETH');
    }
}
exports.Payments = Payments;
//# sourceMappingURL=Payments.js.map