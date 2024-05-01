import { PoolType, RPool, RToken } from './RPool.js';
export declare class BridgeUnlimited extends RPool {
    constructor(address: string, token0: RToken, token1: RToken, fee: number, swapGasCost?: number);
    calcOutByIn(amountIn: number, _direction: boolean): {
        out: number;
        gasSpent: number;
    };
    calcInByOut(amountOut: number, _direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(_direction: boolean): number;
    alwaysAppropriateForPricing(): boolean;
    poolType(): PoolType;
}
//# sourceMappingURL=BridgeBidirectionalUnlimited.d.ts.map