import { ChainId } from '../chain/index.js';
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum SushiSwapV3FeeAmount {
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
export declare const TICK_SPACINGS: {
    [_amount in SushiSwapV3FeeAmount]: number;
};
export declare const SUSHISWAP_V3_FACTORY_ADDRESS: Record<SushiSwapV3ChainId, `0x${string}`>;
export declare const SUSHISWAP_V3_INIT_CODE_HASH: Record<SushiSwapV3ChainId, `0x${string}`>;
export declare const SUSHISWAP_V3_POSTIION_MANAGER: Record<SushiSwapV3ChainId, `0x${string}`>;
export declare const SUSHISWAP_V3_TICK_LENS: Record<SushiSwapV3ChainId, `0x${string}`>;
export declare const SUSHISWAP_V3_SUPPORTED_CHAIN_IDS: readonly [42170, 42161, 43114, 56, 199, 1, 250, 122, 100, 1285, 10, 137, 288, 1101, 108, 11235, 1116, 59144, 8453, 534352, 2222, 1088, 314, 7000, 81457];
export declare const SushiSwapV3ChainIds: readonly [42170, 42161, 43114, 56, 199, 1, 250, 122, 100, 1285, 10, 137, 288, 1101, 108, 11235, 1116, 59144, 8453, 534352, 2222, 1088, 314, 7000, 81457];
export type SushiSwapV3ChainId = (typeof SUSHISWAP_V3_SUPPORTED_CHAIN_IDS)[number];
export declare const isSushiSwapV3ChainId: (chainId: ChainId) => chainId is 1 | 137 | 250 | 100 | 56 | 42161 | 42170 | 43114 | 1285 | 122 | 10 | 2222 | 1088 | 288 | 199 | 1101 | 108 | 314 | 11235 | 1116 | 59144 | 8453 | 534352 | 7000 | 81457;
//# sourceMappingURL=sushiswap-v3.d.ts.map