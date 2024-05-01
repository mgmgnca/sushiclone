import { Token } from '../currency/index.js';
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export declare const CUSTOM_BASES: {
    [chainId: number]: {
        [tokenAddress: string]: Token[];
    };
};
//# sourceMappingURL=custom-bases.d.ts.map