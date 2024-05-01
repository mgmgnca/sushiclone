import { Address } from 'viem';
import { PoolType, RPool, RToken } from './RPool.js';
export declare class CurvePool extends RPool {
    readonly A: number;
    D: bigint;
    rate0BI: bigint;
    rate1BN18: bigint;
    rate0: number;
    rate1: number;
    reserve0Rated: bigint;
    reserve1Rated: bigint;
    constructor(address: Address, token0: RToken, token1: RToken, fee: number, A: number, reserve0: bigint, reserve1: bigint, ratio?: number);
    updateReserves(res0: bigint, res1: bigint): void;
    poolType(): PoolType;
    computeLiquidity(): bigint;
    computeY(x: bigint): bigint;
    calcOutByIn(amountIn: number, direction: boolean): {
        out: number;
        gasSpent: number;
    };
    calcInByOut(amountOut: number, direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(direction: boolean): number;
    calcPrice(amountIn: number, direction: boolean, takeFeeIntoAccount: boolean): number;
}
//# sourceMappingURL=CurvePool.d.ts.map