import { ChainId } from '../chain/index.js';
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum PancakeSwapV3FeeAmount {
    /** 0.01% */
    LOWEST = 100,
    /** 0.1% */
    LOW = 500,
    /** 0.25% */
    MEDIUM = 2500,
    /** 1% */
    HIGH = 10000
}
export declare const PANCAKESWAP_V3_FEE_SPACING_MAP: Record<PancakeSwapV3FeeAmount, number>;
export declare const PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS: readonly [42161, 8453, 56, 1, 59144, 1101];
export declare const PancakeSwapV3ChainIds: readonly [42161, 8453, 56, 1, 59144, 1101];
export type PancakeSwapV3ChainId = (typeof PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS)[number];
export declare const isPancakeSwapV3ChainId: (chainId: ChainId) => chainId is 1 | 56 | 42161 | 1101 | 59144 | 8453;
export declare const PANCAKESWAP_V3_INIT_CODE_HASH: Record<PancakeSwapV3ChainId, `0x${string}`>;
export declare const PANCAKESWAP_V3_FACTORY_ADDRESS: Record<PancakeSwapV3ChainId, `0x${string}`>;
export declare const PANCAKESWAP_V3_DEPLOYER_ADDRESS: Record<PancakeSwapV3ChainId, `0x${string}`>;
//# sourceMappingURL=pancakeswap-v3.d.ts.map