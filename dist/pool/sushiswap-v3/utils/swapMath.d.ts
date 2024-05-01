import { SushiSwapV3FeeAmount } from '../../../config/index.js';
export declare abstract class SwapMath {
    /**
     * Cannot be constructed.
     */
    private constructor();
    static computeSwapStep(sqrtRatioCurrentX96: bigint, sqrtRatioTargetX96: bigint, liquidity: bigint, amountRemaining: bigint, feePips: SushiSwapV3FeeAmount): [bigint, bigint, bigint, bigint];
}
//# sourceMappingURL=swapMath.d.ts.map