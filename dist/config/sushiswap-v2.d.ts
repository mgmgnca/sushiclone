import { ChainId } from '../chain/index.js';
export declare const SUSHISWAP_V2_SUPPORTED_CHAIN_IDS: (1 | 137 | 80001 | 250 | 100 | 56 | 97 | 42161 | 42170 | 43114 | 43113 | 128 | 1666600000 | 66 | 42220 | 11297108109 | 1285 | 122 | 40 | 1284 | 10 | 2222 | 1088 | 288 | 43288 | 56288 | 199 | 1101 | 108 | 314 | 11235 | 1116 | 59144 | 8453 | 534352 | 7000 | 81457)[];
export declare const SushiSwapV2ChainIds: (1 | 137 | 80001 | 250 | 100 | 56 | 97 | 42161 | 42170 | 43114 | 43113 | 128 | 1666600000 | 66 | 42220 | 11297108109 | 1285 | 122 | 40 | 1284 | 10 | 2222 | 1088 | 288 | 43288 | 56288 | 199 | 1101 | 108 | 314 | 11235 | 1116 | 59144 | 8453 | 534352 | 7000 | 81457)[];
export type SushiSwapV2ChainId = (typeof SUSHISWAP_V2_SUPPORTED_CHAIN_IDS)[number];
export declare const isSushiSwapV2ChainId: (chainId: ChainId) => chainId is 1 | 137 | 80001 | 250 | 100 | 56 | 97 | 42161 | 42170 | 43114 | 43113 | 128 | 1666600000 | 66 | 42220 | 11297108109 | 1285 | 122 | 40 | 1284 | 10 | 2222 | 1088 | 288 | 43288 | 56288 | 199 | 1101 | 108 | 314 | 11235 | 1116 | 59144 | 8453 | 534352 | 7000 | 81457;
export declare const SUSHISWAP_V2_INIT_CODE_HASH: Record<SushiSwapV2ChainId, `0x${string}`>;
export declare const SUSHISWAP_V2_FACTORY_ADDRESS: Record<SushiSwapV2ChainId, `0x${string}`>;
export declare const SUSHISWAP_V2_ROUTER_ADDRESS: Record<SushiSwapV2ChainId, `0x${string}`>;
//# sourceMappingURL=sushiswap-v2.d.ts.map