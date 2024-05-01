import { Address } from 'viem';
import { PoolType, RPool, RToken } from './RPool.js';
export declare class ConstantProductRPool extends RPool {
    reserve0Number: number;
    reserve1Number: number;
    constructor(address: Address, token0: RToken, token1: RToken, fee: number, reserve0: bigint, reserve1: bigint);
    updateReserves(res0: bigint, res1: bigint): void;
    poolType(): PoolType;
    calcOutByIn(amountIn: number, direction: boolean): {
        out: number;
        gasSpent: number;
    };
    calcOutByInReal(amountIn: number, direction: boolean): number;
    calcInByOut(amountOut: number, direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(direction: boolean): number;
    calcPrice(amountIn: number, direction: boolean, takeFeeIntoAccount: boolean): number;
    calcInputByPrice(price: number, direction: boolean, takeFeeIntoAccount: boolean): number;
    getLiquidity(): number;
}
export declare class HybridRPool extends RPool {
    readonly A: number;
    readonly A_PRECISION = 100;
    D: bigint;
    constructor(address: Address, token0: RToken, token1: RToken, fee: number, A: number, reserve0: bigint, reserve1: bigint);
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
    calcInputByPrice(price: number, direction: boolean, takeFeeIntoAccount: boolean, hint?: number): number;
}
//# sourceMappingURL=PrimaryPools.d.ts.map