import { BigintIsh } from '../../../math/index.js';
export interface TickConstructorArgs {
    index: number;
    liquidityGross: BigintIsh;
    liquidityNet: BigintIsh;
}
export declare class Tick {
    readonly index: number;
    readonly liquidityGross: bigint;
    readonly liquidityNet: bigint;
    constructor({ index, liquidityGross, liquidityNet }: TickConstructorArgs);
}
//# sourceMappingURL=Tick.d.ts.map