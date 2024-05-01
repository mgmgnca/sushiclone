import { Interface } from '@ethersproject/abi';
import { Token } from '../../../currency/index.js';
import { BigintIsh } from '../../../math/index.js';
export interface StandardPermitArguments {
    v: 0 | 1 | 27 | 28;
    r: string;
    s: string;
    amount: BigintIsh;
    deadline: BigintIsh;
}
export interface AllowedPermitArguments {
    v: 0 | 1 | 27 | 28;
    r: string;
    s: string;
    nonce: BigintIsh;
    expiry: BigintIsh;
}
export type PermitOptions = StandardPermitArguments | AllowedPermitArguments;
export declare abstract class SelfPermit {
    static INTERFACE: Interface;
    /**
     * Cannot be constructed.
     */
    private constructor();
    static encodePermit(token: Token, options: PermitOptions): string;
}
//# sourceMappingURL=SelfPermit.d.ts.map