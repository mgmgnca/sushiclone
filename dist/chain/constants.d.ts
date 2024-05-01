export declare const ChainId: {
    readonly ETHEREUM: 1;
    readonly POLYGON: 137;
    readonly POLYGON_TESTNET: 80001;
    readonly FANTOM: 250;
    readonly FANTOM_TESTNET: 4002;
    readonly GNOSIS: 100;
    readonly BSC: 56;
    readonly BSC_TESTNET: 97;
    readonly ARBITRUM: 42161;
    readonly ARBITRUM_NOVA: 42170;
    readonly ARBITRUM_TESTNET: 421614;
    readonly AVALANCHE: 43114;
    readonly AVALANCHE_TESTNET: 43113;
    readonly HECO: 128;
    readonly HARMONY: 1666600000;
    readonly OKEX: 66;
    readonly CELO: 42220;
    readonly PALM: 11297108109;
    readonly MOONRIVER: 1285;
    readonly FUSE: 122;
    readonly TELOS: 40;
    readonly MOONBEAM: 1284;
    readonly OPTIMISM: 10;
    readonly KAVA: 2222;
    readonly METIS: 1088;
    readonly BOBA: 288;
    readonly BOBA_AVAX: 43288;
    readonly BOBA_BNB: 56288;
    readonly BTTC: 199;
    readonly SEPOLIA: 11155111;
    readonly POLYGON_ZKEVM: 1101;
    readonly THUNDERCORE: 108;
    readonly FILECOIN: 314;
    readonly HAQQ: 11235;
    readonly CORE: 1116;
    readonly ZKSYNC_ERA: 324;
    readonly LINEA: 59144;
    readonly BASE: 8453;
    readonly SCROLL: 534352;
    readonly ZETACHAIN: 7000;
    readonly CRONOS: 25;
    readonly BLAST: 81457;
};
export type ChainId = (typeof ChainId)[keyof typeof ChainId];
export declare const TESTNET_CHAIN_IDS: readonly [421614, 43113, 97, 4002, 80001, 11155111];
export type TestnetChainId = (typeof TESTNET_CHAIN_IDS)[number];
export declare const isChainId: (chainId: number) => chainId is ChainId;
export declare const ChainKey: {
    readonly 42161: "arbitrum";
    readonly 42170: "arbitrum-nova";
    readonly 421614: "arbitrum-testnet";
    readonly 43114: "avalanche";
    readonly 43113: "avalance-testnet";
    readonly 56: "bsc";
    readonly 97: "bsc-testnet";
    readonly 42220: "celo";
    readonly 1: "ethereum";
    readonly 250: "fantom";
    readonly 4002: "fantom-testnet";
    readonly 122: "fuse";
    readonly 1666600000: "harmony";
    readonly 128: "heco";
    readonly 137: "polygon";
    readonly 80001: "matic-testnet";
    readonly 1284: "moonbeam";
    readonly 1285: "moonriver";
    readonly 66: "okex";
    readonly 11297108109: "palm";
    readonly 40: "telos";
    readonly 100: "gnosis";
    readonly 10: "optimism";
    readonly 2222: "kava";
    readonly 1088: "metis";
    readonly 288: "boba";
    readonly 43288: "boba-avax";
    readonly 56288: "boba-bnb";
    readonly 199: "bttc";
    readonly 1101: "polygon-zkevm";
    readonly 108: "thundercore";
    readonly 11235: "haqq";
    readonly 1116: "core";
    readonly 324: "zksync-era";
    readonly 59144: "linea";
    readonly 8453: "base";
    readonly 314: "filecoin";
    readonly 11155111: "sepolia";
    readonly 534352: "scroll";
    readonly 7000: "zetachain";
    readonly 25: "cronos";
    readonly 81457: "blast";
};
export type ChainKey = (typeof ChainKey)[keyof typeof ChainKey];
//# sourceMappingURL=constants.d.ts.map