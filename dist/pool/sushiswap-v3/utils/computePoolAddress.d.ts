import { Address } from 'viem';
import { SushiSwapV3FeeAmount } from '../../../config/index.js';
import { Token } from '../../../currency/index.js';
/**
 * Computes a pool address
 * @param factoryAddress The Uniswap V3 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pool address
 */
export declare function computeSushiSwapV3PoolAddress({ factoryAddress, tokenA, tokenB, fee, initCodeHashManualOverride, }: {
    factoryAddress: string;
    tokenA: Token | string;
    tokenB: Token | string;
    fee: SushiSwapV3FeeAmount;
    initCodeHashManualOverride?: string | undefined;
}): Address;
//# sourceMappingURL=computePoolAddress.d.ts.map