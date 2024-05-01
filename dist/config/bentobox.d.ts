import { ChainId } from '../chain/index.js';
export declare const BENTOBOX_SUPPORTED_CHAIN_IDS: readonly [42161, 42170, 43114, 288, 43288, 56288, 56, 199, 42220, 1, 250, 122, 100, 1666600000, 128, 2222, 1088, 1284, 1285, 10, 137];
export type BentoBoxChainId = (typeof BENTOBOX_SUPPORTED_CHAIN_IDS)[number];
export declare const BENTOBOX_ADDRESS: Record<BentoBoxChainId, `0x${string}`>;
export declare const isBentoBoxChainId: (chainId: ChainId) => chainId is 1 | 137 | 250 | 100 | 56 | 42161 | 42170 | 43114 | 128 | 1666600000 | 42220 | 1285 | 122 | 1284 | 10 | 2222 | 1088 | 288 | 43288 | 56288 | 199;
//# sourceMappingURL=bentobox.d.ts.map