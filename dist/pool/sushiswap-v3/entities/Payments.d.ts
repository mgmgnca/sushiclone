import { Interface } from '@ethersproject/abi';
import { Token } from '../../../currency/index.js';
import { Percent } from '../../../math/index.js';
export interface FeeOptions {
    /**
     * The percent of the output that will be taken as a fee.
     */
    fee: Percent;
    /**
     * The recipient of the fee.
     */
    recipient: string;
}
export declare abstract class Payments {
    static INTERFACE: Interface;
    /**
     * Cannot be constructed.
     */
    private constructor();
    private static encodeFeeBips;
    static encodeUnwrapWETH9(amountMinimum: bigint, recipient: string, feeOptions?: FeeOptions): string;
    static encodeSweepToken(token: Token, amountMinimum: bigint, recipient: string, feeOptions?: FeeOptions): string;
    static encodeRefundETH(): string;
}
//# sourceMappingURL=Payments.d.ts.map