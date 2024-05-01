import { PoolType, RPool, RToken } from './RPool.js';
import { BridgeState } from './StarGateFeesV04.js';
export declare class BridgeStargateV04OneWay extends RPool {
    bridgeState: BridgeState;
    whitelisted: boolean;
    constructor(id: string, // some kind of bridge ID. Used for tines output
    token0: RToken, // from token
    token1: RToken, // to token
    bridgeState: BridgeState, whitelisted: boolean, swapGasCost?: number);
    calcFeeAmount(amountIn: number): number;
    calcOutByIn(amountIn: number, direction: boolean): {
        out: number;
        gasSpent: number;
    };
    calcInByOut(): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(_direction: boolean): number;
    alwaysAppropriateForPricing(): boolean;
    poolType(): PoolType;
}
//# sourceMappingURL=BridgeStargateV04OneWay.d.ts.map