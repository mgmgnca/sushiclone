import { ChainId } from '../chain/index.js';
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum UniswapV3FeeAmount {
    /** 0.01% */
    LOWEST = 100,
    /** 0.1% */
    LOW = 500,
    /** 0.3% */
    MEDIUM = 3000,
    /** 1% */
    HIGH = 10000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const UNISWAP_V3_TICK_SPACINGS: {
    [_amount in UniswapV3FeeAmount]: number;
};
export declare const UNISWAP_V3_SUPPORTED_CHAIN_IDS: readonly [42161, 56, 42220, 1, 10, 137, 8453, 1284, 43114];
export declare const UniswapV3ChainIds: readonly [42161, 56, 42220, 1, 10, 137, 8453, 1284, 43114];
export type UniswapV3ChainId = (typeof UNISWAP_V3_SUPPORTED_CHAIN_IDS)[number];
export declare const isUniswapV3ChainId: (chainId: ChainId) => chainId is 1 | 137 | 56 | 42161 | 43114 | 42220 | 1284 | 10 | 8453;
export declare const UNISWAP_V3_INIT_CODE_HASH: Record<UniswapV3ChainId, `0x${string}`>;
export declare const UNISWAP_V3_FACTORY_ADDRESS: Record<UniswapV3ChainId, `0x${string}`>;
//# sourceMappingURL=uniswap-v3.d.ts.map