import { Address } from 'viem';
import { CLTick } from './CLPool.js';
import { PoolType, RPool, RToken } from './RPool.js';
export declare class UniV3Pool extends RPool {
    liquidity: bigint;
    sqrtPriceX96: bigint;
    nearestTick: number;
    ticks: CLTick[];
    constructor(address: Address, token0: RToken, token1: RToken, fee: number, reserve0: bigint, reserve1: bigint, tick: number, liquidity: bigint, sqrtPriceX96: bigint, ticks: CLTick[], nearestTick?: number);
    updateState(reserve0: bigint, reserve1: bigint, tick: number, liquidity: bigint, sqrtPriceX96: bigint): void;
    poolType(): PoolType;
    _findTickForPrice(tick: number): number;
    calcOutByIn(amountIn: number, direction: boolean, throwIfOutOfLiquidity?: boolean): {
        out: number;
        gasSpent: number;
    };
    calcOutByInReal(amountIn: number, direction: boolean): number;
    calcInByOut(amountOut: number, direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(direction: boolean): number;
}
//# sourceMappingURL=UniV3Pool.d.ts.map