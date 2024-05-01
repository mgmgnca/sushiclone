import { Address } from 'viem';
import { Token } from '../../currency/index.js';
/**
 * Computes a pair address
 * @param factoryAddress The Uniswap V2 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pair address
 */
export declare const computeSushiSwapV2PoolAddress: ({ factoryAddress, tokenA, tokenB, initCodeHashManualOverride, }: {
    factoryAddress: string;
    tokenA: Token;
    tokenB: Token;
    initCodeHashManualOverride?: string;
}) => Address;
//# sourceMappingURL=compute-sushiswap-v2-pool-address.d.ts.map