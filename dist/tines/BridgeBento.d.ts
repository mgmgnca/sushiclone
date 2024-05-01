import { PoolType, RPool, RToken } from './RPool.js';
export declare class BridgeBento extends RPool {
    elastic: number;
    base: number;
    freeLiquidity: number | undefined;
    constructor(address: string, tokenEthereum: RToken, tokenBento: RToken, elastic: bigint, base: bigint, freeLiquidity?: bigint);
    uniqueID(): string;
    updateReserves(elastic: bigint, base: bigint): void;
    poolType(): PoolType;
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
//# sourceMappingURL=BridgeBento.d.ts.map