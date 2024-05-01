import { PoolType, RPool, RToken } from './RPool.js';
export declare class CurveMultitokenPoolSingle extends RPool {
    core: CurveMultitokenCoreSingle;
    index0: number;
    index1: number;
    constructor(core: CurveMultitokenCoreSingle, index0: number, index1: number);
    updateReserves(res0: bigint, res1: bigint): void;
    poolType(): PoolType;
    calcOutByIn(amountIn: number, direction: boolean): {
        out: number;
        gasSpent: number;
    };
    calcInByOut(amountOut: number, direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(direction: boolean): number;
    setCurrentFlow(flow0: number, flow1: number, gas: number): void;
}
declare class CurveMultitokenCoreSingle {
    address: string;
    tokens: RToken[];
    fee: number;
    A: number;
    reserves: bigint[];
    rates: number[];
    ratesBN18: bigint[];
    reservesRated: bigint[];
    singlePairUsed?: [number, number] | undefined;
    D: bigint;
    Ann: bigint;
    Annn: bigint;
    AnnMinus1: bigint;
    nn: bigint;
    n: bigint;
    nPlus1: bigint;
    constructor(address: string, tokens: RToken[], fee: number, A: number, reserves: bigint[], rates?: number[]);
    updateReserve(index: number, res: bigint): void;
    computeLiquidity(): bigint;
    computeY(xIndex: number, x: bigint, yIndex: number): bigint;
    calcOutByIn(amountIn: number, from: number, to: number): {
        out: number;
        gasSpent: number;
    };
    calcInByOut(amountOut: number, from: number, to: number): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(from: number, to: number): number;
    setCurrentFlow(from: number, to: number, flow0: number, flow1: number, _gas: number): void;
}
export declare function createCurvePoolsSingleForMultipool(address: string, tokens: RToken[], fee: number, A: number, reserves: bigint[], rates?: number[]): CurveMultitokenPoolSingle[];
export {};
//# sourceMappingURL=CurveMultitokenPoolSingle.d.ts.map