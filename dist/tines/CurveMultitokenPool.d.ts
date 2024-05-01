import { PoolType, RPool, RToken } from './RPool.js';
export declare class CurveMultitokenPool extends RPool {
    core: CurveMultitokenCore;
    index0: number;
    index1: number;
    flow0: number;
    flow1: number;
    constructor(core: CurveMultitokenCore, index0: number, index1: number);
    updateReserves(_res0: bigint, _res1: bigint): void;
    poolType(): PoolType;
    calcOutByIn(amountIn: number, direction: boolean): {
        out: number;
        gasSpent: number;
    };
    calcInByOut(amountOut: number, direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    calcOutByInReal(amountIn: number, direction: boolean): number;
    calcCurrentPriceWithoutFee(direction: boolean): number;
    setCurrentFlow(flow0: number, flow1: number): void;
    cleanTmpData(): void;
    uniqueID(): string;
}
export declare class CurveMultitokenCore {
    address: string;
    tokens: RToken[];
    fee: number;
    A: number;
    reserves: bigint[];
    reservesRated: bigint[];
    rates: number[];
    ratesBN18: bigint[];
    currentFlow: number[];
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
    flowIntToExt(flowInt: number): number;
    flowExtToInt(flowExt: number): number;
    diffToAbsolute(diff: number, i: number): bigint;
    absoluteToDiff(abs: bigint, i: number): number;
    calcOutDiff(inpDiff: number, from: number, to: number): number;
    calcCurrentPriceWithoutFee(from: number, to: number): number;
    applyReserveChange(index: number, diff: number): void;
    cleanTmpData(): void;
}
export declare function createCurvePoolsForMultipool(address: string, tokens: RToken[], fee: number, A: number, reserves: bigint[], rates?: number[]): CurveMultitokenPool[];
//# sourceMappingURL=CurveMultitokenPool.d.ts.map