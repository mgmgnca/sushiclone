import { BigintIsh } from '../../../math/index.js';
import { Tick, TickConstructorArgs } from './Tick.js';
import { TickDataProvider } from './TickDataProvider.js';
/**
 * A data provider for ticks that is backed by an in-memory array of ticks.
 */
export declare class TickListDataProvider implements TickDataProvider {
    private ticks;
    constructor(ticks: (Tick | TickConstructorArgs)[], tickSpacing: number);
    getTick(tick: number): Promise<{
        liquidityNet: BigintIsh;
        liquidityGross: BigintIsh;
    }>;
    nextInitializedTickWithinOneWord(tick: number, lte: boolean, tickSpacing: number): Promise<[number, boolean]>;
}
//# sourceMappingURL=TickListDataProvider.d.ts.map