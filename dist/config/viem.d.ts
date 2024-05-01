import { arbitrum, arbitrumNova, avalanche, base, boba, bsc, celo, fantom, foundry, // missing multicall
gnosis, goerli, hardhat, linea, localhost, mainnet, metis, moonbeam, moonriver, okc, optimism, polygon, polygonZkEvm, zkSync } from 'viem/chains';
export { arbitrum, arbitrumNova, avalanche, base, boba, bsc, celo, fantom, foundry, gnosis, goerli, hardhat, linea, localhost, mainnet, metis, moonbeam, moonriver, okc, optimism, polygon, polygonZkEvm, zkSync, };
export declare const fuse: {
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 16146628;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Fuse Explorer";
            readonly url: "https://explorer.fuse.io";
            readonly apiUrl: "https://explorer.fuse.io/api";
        };
    };
    readonly id: 122;
    readonly name: "Fuse";
    readonly nativeCurrency: {
        readonly name: "Fuse";
        readonly symbol: "FUSE";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.fuse.io"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly custom?: Record<string, unknown> | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
};
export declare const kava: {
    readonly id: 2222;
    readonly name: "Kava";
    readonly network: "kava";
    readonly nativeCurrency: {
        readonly name: "Kava";
        readonly symbol: "KAVA";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evm.kava.io", "https://evm2.kava.io"];
        };
        readonly public: {
            readonly http: readonly ["https://evm.kava.io", "https://evm2.kava.io"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Kavascan";
            readonly url: "https://explorer.kava.io/";
        };
        readonly default: {
            readonly name: "Kavascan";
            readonly url: "https://explorer.kava.io/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 1176602;
        };
    };
};
export declare const heco: {
    readonly id: 128;
    readonly name: "Huobi ECO Chain";
    readonly network: "huobieco";
    readonly nativeCurrency: {
        readonly name: "Huobi Token";
        readonly symbol: "HT";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://http-mainnet.hecochain.com"];
        };
        readonly public: {
            readonly http: readonly ["https://http-mainnet.hecochain.com"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "HecoInfo";
            readonly url: "https://www.hecoinfo.com/";
        };
        readonly default: {
            readonly name: "Heco Explorer";
            readonly url: "https://www.hecoinfo.com/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 14413501;
        };
    };
};
export declare const palm: {
    readonly id: 11297108109;
    readonly name: "Palm";
    readonly network: "palm";
    readonly nativeCurrency: {
        readonly name: "Palm";
        readonly symbol: "PALM";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"];
        };
        readonly public: {
            readonly http: readonly ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Palm Explorer";
            readonly url: "https://explorer.palm.io/";
        };
        readonly default: {
            readonly name: "Palm Explorer";
            readonly url: "https://explorer.palm.io/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 8005532;
        };
    };
};
export declare const bobaAvax: {
    readonly id: 43288;
    readonly name: "Boba Avax";
    readonly network: "boba-avax";
    readonly nativeCurrency: {
        readonly name: "Boba";
        readonly symbol: "BOBA";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://avax.boba.network"];
        };
        readonly public: {
            readonly http: readonly ["https://avax.boba.network"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Boba Avalanche Mainnet Explorer";
            readonly url: "https://blockexplorer.avax.boba.network/";
        };
        readonly default: {
            readonly name: "Boba Avalanche Mainnet Explorer";
            readonly url: "https://blockexplorer.avax.boba.network/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 3652;
        };
    };
};
export declare const bobaBnb: {
    readonly id: 56288;
    readonly name: "Boba BNB";
    readonly network: "boba-bnb";
    readonly nativeCurrency: {
        readonly name: "Boba";
        readonly symbol: "BOBA";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://bnb.boba.network"];
        };
        readonly public: {
            readonly http: readonly ["https://bnb.boba.network"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Boba BNB Mainnet Explorer";
            readonly url: "https://blockexplorer.bnb.boba.network/";
        };
        readonly default: {
            readonly name: "Boba BNB Mainnet Explorer";
            readonly url: "https://blockexplorer.bnb.boba.network/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 18871;
        };
    };
};
export declare const bttc: {
    readonly id: 199;
    readonly name: "BitTorrent Chain";
    readonly network: "btt";
    readonly nativeCurrency: {
        readonly name: "BitTorrent";
        readonly symbol: "BTT";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.bittorrentchain.io"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.bittorrentchain.io"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "BitTorrent Chain Explorer";
            readonly url: "https://bttcscan.com/";
        };
        readonly default: {
            readonly name: "BitTorrent Chain Explorer";
            readonly url: "https://bttcscan.com/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 13014184;
        };
    };
};
export declare const core: {
    readonly id: 1116;
    readonly name: "Core";
    readonly network: "core";
    readonly nativeCurrency: {
        readonly name: "Core";
        readonly symbol: "CORE";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.coredao.org", "https://rpc-core.icecreamswap.com"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.coredao.org", "https://rpc-core.icecreamswap.com"];
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xC4b2e1718E850535A0f3e79F7fC522d966821688";
            readonly blockCreated: 5087121;
        };
    };
};
export declare const filecoin: {
    readonly id: 314;
    readonly name: "Filecoin Mainnet";
    readonly network: "filecoin-mainnet";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "filecoin";
        readonly symbol: "FIL";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/filecoin"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/filecoin"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Filfox";
            readonly url: "https://filfox.info/en";
        };
        readonly filscan: {
            readonly name: "Filscan";
            readonly url: "https://filscan.io";
        };
        readonly filscout: {
            readonly name: "Filscout";
            readonly url: "https://filscout.io/en";
        };
        readonly glif: {
            readonly name: "Glif";
            readonly url: "https://explorer.glif.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 3328594;
        };
    };
};
export declare const zetachain: {
    readonly id: 7000;
    readonly name: "ZetaChain";
    readonly network: "zetachain";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Zeta";
        readonly symbol: "ZETA";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://zetachain-evm.blockpi.network/v1/rpc/public", "https://zetachain-mainnet-archive.allthatnode.com:8545", "https://zetachain.rpc.thirdweb.com", "https://jsonrpc.zetachain.nodestake.org"];
        };
        readonly public: {
            readonly http: readonly ["https://zetachain-evm.blockpi.network/v1/rpc/public", "https://zetachain-mainnet-archive.allthatnode.com:8545", "https://zetachain.rpc.thirdweb.com", "https://jsonrpc.zetachain.nodestake.org"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "ZetaScan";
            readonly url: "https://explorer.zetachain.com/";
        };
        readonly blockscout: {
            readonly name: "Blockscout";
            readonly url: "https://zetachain.blockscout.com/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0x039e87AB90205F9d87c5b40d4B28e2Be45dA4a20";
            readonly blockCreated: 1565755;
        };
    };
};
export declare const blast: {
    readonly id: 81457;
    readonly name: "Blast";
    readonly network: "blast";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.blast.io", "https://rpc.ankr.com/blast", "https://blast.din.dev/rpc", "https://blastl2-mainnet.public.blastapi.io", "https://blast.blockpi.network/v1/rpc/public"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.blast.io", "https://rpc.ankr.com/blast", "https://blast.din.dev/rpc", "https://blastl2-mainnet.public.blastapi.io", "https://blast.blockpi.network/v1/rpc/public"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "BlastScan";
            readonly url: "https://blastscan.io/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 88189;
        };
    };
};
export declare const publicTransports: {
    readonly 42170: import("viem").HttpTransport;
    readonly 42161: import("viem").HttpTransport;
    readonly 43114: import("viem").HttpTransport;
    readonly 288: import("viem").HttpTransport;
    readonly 43288: import("viem").HttpTransport;
    readonly 56288: import("viem").HttpTransport;
    readonly 56: import("viem").HttpTransport;
    readonly 199: import("viem").HttpTransport;
    readonly 42220: import("viem").HttpTransport;
    readonly 1: import("viem").HttpTransport;
    readonly 250: import("viem").HttpTransport;
    readonly 122: import("viem").HttpTransport;
    readonly 100: import("viem").HttpTransport;
    readonly 1666600000: import("viem").HttpTransport;
    readonly 2222: import("viem").HttpTransport;
    readonly 1088: import("viem").HttpTransport;
    readonly 1284: import("viem").HttpTransport;
    readonly 1285: import("viem").HttpTransport;
    readonly 10: import("viem").HttpTransport;
    readonly 137: import("viem").HttpTransport;
    readonly 1101: import("viem").HttpTransport;
    readonly 108: import("viem").HttpTransport;
    readonly 11235: import("viem").HttpTransport;
    readonly 1116: import("viem").HttpTransport;
    readonly 40: import("viem").HttpTransport;
    readonly 11297108109: import("viem").HttpTransport;
    readonly 66: import("viem").HttpTransport;
    readonly 128: import("viem").HttpTransport;
    readonly 324: import("viem").HttpTransport;
    readonly 59144: import("viem").HttpTransport;
    readonly 8453: import("viem").HttpTransport;
    readonly 534352: import("viem").HttpTransport;
    readonly 314: import("viem").HttpTransport;
    readonly 7000: import("viem").HttpTransport;
    readonly 25: import("viem").HttpTransport;
    readonly 81457: import("viem").HttpTransport;
    readonly 421614: import("viem").HttpTransport;
    readonly 43113: import("viem").HttpTransport;
    readonly 97: import("viem").HttpTransport;
    readonly 4002: import("viem").HttpTransport;
    readonly 80001: import("viem").HttpTransport;
    readonly 11155111: import("viem").HttpTransport;
};
export declare const publicChains: readonly [{
    blockExplorers: {
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://nova.arbiscan.io";
            readonly apiUrl: "https://api-nova.arbiscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 1746963;
        };
    };
    id: 42170;
    name: "Arbitrum Nova";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://nova.arbitrum.io/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://arbiscan.io";
            readonly apiUrl: "https://api.arbiscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7654707;
        };
    };
    id: 42161;
    name: "Arbitrum One";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "SnowScan";
            readonly url: "https://snowscan.xyz";
            readonly apiUrl: "https://api.snowscan.xyz/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 11907934;
        };
    };
    id: 43114;
    name: "Avalanche";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.avax.network/ext/bc/C/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "BOBAScan";
            readonly url: "https://bobascan.com";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 446859;
        };
    };
    id: 288;
    name: "Boba Network";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Boba";
        readonly symbol: "BOBA";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.boba.network"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 43288;
    readonly name: "Boba Avax";
    readonly network: "boba-avax";
    readonly nativeCurrency: {
        readonly name: "Boba";
        readonly symbol: "BOBA";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://avax.boba.network"];
        };
        readonly public: {
            readonly http: readonly ["https://avax.boba.network"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Boba Avalanche Mainnet Explorer";
            readonly url: "https://blockexplorer.avax.boba.network/";
        };
        readonly default: {
            readonly name: "Boba Avalanche Mainnet Explorer";
            readonly url: "https://blockexplorer.avax.boba.network/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 3652;
        };
    };
}, {
    readonly id: 56288;
    readonly name: "Boba BNB";
    readonly network: "boba-bnb";
    readonly nativeCurrency: {
        readonly name: "Boba";
        readonly symbol: "BOBA";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://bnb.boba.network"];
        };
        readonly public: {
            readonly http: readonly ["https://bnb.boba.network"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Boba BNB Mainnet Explorer";
            readonly url: "https://blockexplorer.bnb.boba.network/";
        };
        readonly default: {
            readonly name: "Boba BNB Mainnet Explorer";
            readonly url: "https://blockexplorer.bnb.boba.network/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 18871;
        };
    };
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
            readonly apiUrl: "https://api.bscscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 15921452;
        };
    };
    id: 56;
    name: "BNB Smart Chain";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/bsc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 199;
    readonly name: "BitTorrent Chain";
    readonly network: "btt";
    readonly nativeCurrency: {
        readonly name: "BitTorrent";
        readonly symbol: "BTT";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.bittorrentchain.io"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.bittorrentchain.io"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "BitTorrent Chain Explorer";
            readonly url: "https://bttcscan.com/";
        };
        readonly default: {
            readonly name: "BitTorrent Chain Explorer";
            readonly url: "https://bttcscan.com/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 13014184;
        };
    };
}, {
    readonly id: 81457;
    readonly name: "Blast";
    readonly network: "blast";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.blast.io", "https://rpc.ankr.com/blast", "https://blast.din.dev/rpc", "https://blastl2-mainnet.public.blastapi.io", "https://blast.blockpi.network/v1/rpc/public"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.blast.io", "https://rpc.ankr.com/blast", "https://blast.din.dev/rpc", "https://blastl2-mainnet.public.blastapi.io", "https://blast.blockpi.network/v1/rpc/public"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "BlastScan";
            readonly url: "https://blastscan.io/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 88189;
        };
    };
}, Omit<{
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
            readonly apiUrl: "https://api.etherscan.io/api";
        };
    };
    contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
            readonly blockCreated: 19258213;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14353601;
        };
    };
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://cloudflare-eth.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, "id"> & {
    id: 42220;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Cronos Explorer";
            readonly url: "https://explorer.cronos.org";
            readonly apiUrl: "https://explorer-api.cronos.org/mainnet/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 1963112;
        };
    };
    id: 25;
    name: "Cronos Mainnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Cronos";
        readonly symbol: "CRO";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evm.cronos.org"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
            readonly apiUrl: "https://api.etherscan.io/api";
        };
    };
    contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
            readonly blockCreated: 19258213;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14353601;
        };
    };
    id: 1;
    name: "Ethereum";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://cloudflare-eth.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "FTMScan";
            readonly url: "https://ftmscan.com";
            readonly apiUrl: "https://api.ftmscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 33001987;
        };
    };
    id: 250;
    name: "Fantom";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Fantom";
        readonly symbol: "FTM";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/fantom"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 16146628;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Fuse Explorer";
            readonly url: "https://explorer.fuse.io";
            readonly apiUrl: "https://explorer.fuse.io/api";
        };
    };
    readonly id: 122;
    readonly name: "Fuse";
    readonly nativeCurrency: {
        readonly name: "Fuse";
        readonly symbol: "FUSE";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.fuse.io"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly custom?: Record<string, unknown> | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Gnosisscan";
            readonly url: "https://gnosisscan.io";
            readonly apiUrl: "https://api.gnosisscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 21022491;
        };
    };
    id: 100;
    name: "Gnosis";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Gnosis";
        readonly symbol: "xDAI";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.gnosischain.com"];
            readonly webSocket: readonly ["wss://rpc.gnosischain.com/wss"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Harmony Explorer";
            readonly url: "https://explorer.harmony.one";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 24185753;
        };
    };
    id: 1666600000;
    name: "Harmony One";
    nativeCurrency: {
        readonly name: "Harmony";
        readonly symbol: "ONE";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/harmony"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 2222;
    readonly name: "Kava";
    readonly network: "kava";
    readonly nativeCurrency: {
        readonly name: "Kava";
        readonly symbol: "KAVA";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://evm.kava.io", "https://evm2.kava.io"];
        };
        readonly public: {
            readonly http: readonly ["https://evm.kava.io", "https://evm2.kava.io"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Kavascan";
            readonly url: "https://explorer.kava.io/";
        };
        readonly default: {
            readonly name: "Kavascan";
            readonly url: "https://explorer.kava.io/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 1176602;
        };
    };
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Andromeda Explorer";
            readonly url: "https://andromeda-explorer.metis.io";
            readonly apiUrl: "https://andromeda-explorer.metis.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 2338552;
        };
    };
    id: 1088;
    name: "Metis";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Metis";
        readonly symbol: "METIS";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://andromeda.metis.io/?owner=1088"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Optimism Explorer";
            readonly url: "https://optimistic.etherscan.io";
            readonly apiUrl: "https://api-optimistic.etherscan.io/api";
        };
    };
    contracts: {
        readonly l2OutputOracle: {
            readonly 1: {
                readonly address: "0xdfe97868233d1aa22e815a266982f2cf17685a27";
            };
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 4286263;
        };
        readonly portal: {
            readonly 1: {
                readonly address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed";
            };
        };
        readonly l1StandardBridge: {
            readonly 1: {
                readonly address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1";
            };
        };
        readonly gasPriceOracle: {
            readonly address: "0x420000000000000000000000000000000000000F";
        };
        readonly l1Block: {
            readonly address: "0x4200000000000000000000000000000000000015";
        };
        readonly l2CrossDomainMessenger: {
            readonly address: "0x4200000000000000000000000000000000000007";
        };
        readonly l2Erc721Bridge: {
            readonly address: "0x4200000000000000000000000000000000000014";
        };
        readonly l2StandardBridge: {
            readonly address: "0x4200000000000000000000000000000000000010";
        };
        readonly l2ToL1MessagePasser: {
            readonly address: "0x4200000000000000000000000000000000000016";
        };
    };
    id: 10;
    name: "OP Mainnet";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.optimism.io"];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/chains").OpStackRpcBlockOverrides & {
                transactions: `0x${string}`[] | import("viem/chains").OpStackRpcTransaction<boolean>[];
            }>) => {
                baseFeePerGas: bigint | null;
                blobGasUsed: bigint;
                difficulty: bigint;
                excessBlobGas: bigint;
                extraData: `0x${string}`;
                gasLimit: bigint;
                gasUsed: bigint;
                hash: `0x${string}` | null;
                logsBloom: `0x${string}` | null;
                miner: `0x${string}`;
                mixHash: `0x${string}`;
                nonce: `0x${string}` | null;
                number: bigint | null;
                parentHash: `0x${string}`;
                receiptsRoot: `0x${string}`;
                sealFields: `0x${string}`[];
                sha3Uncles: `0x${string}`;
                size: bigint;
                stateRoot: `0x${string}`;
                timestamp: bigint;
                totalDifficulty: bigint | null;
                transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                transactionsRoot: `0x${string}`;
                uncles: `0x${string}`[];
                withdrawals?: import("viem").Withdrawal[] | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
            };
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x1";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x2";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x1";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x2";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x1";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x2";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas: `0x${string}`;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: `0x${string}`;
                type: "0x3";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            })) => {
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: number | undefined;
                yParity?: undefined;
                type: "legacy";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: number | undefined;
                yParity: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip2930";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip1559";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: undefined;
                maxPriorityFeePerGas: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip2930";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip1559";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas: bigint;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: number;
                type: "eip4844";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            };
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransactionReceipt>, import("viem/chains").OpStackRpcTransactionReceiptOverrides>) => {
                blobGasPrice?: bigint | undefined;
                blobGasUsed?: bigint | undefined;
                blockHash: `0x${string}`;
                blockNumber: bigint;
                contractAddress: `0x${string}` | null | undefined;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: `0x${string}`;
                gasUsed: bigint;
                logs: import("viem").Log<bigint, number, false, undefined, undefined, undefined, undefined>[];
                logsBloom: `0x${string}`;
                root?: `0x${string}` | undefined;
                status: "success" | "reverted";
                to: `0x${string}` | null;
                transactionHash: `0x${string}`;
                transactionIndex: number;
                type: import("viem").TransactionType;
                l1GasPrice: bigint | null;
                l1GasUsed: bigint | null;
                l1Fee: bigint | null;
                l1FeeScalar: number | null;
            };
            type: "transactionReceipt";
        };
    };
    serializers: {
        readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Moonscan";
            readonly url: "https://moonscan.io";
            readonly apiUrl: "https://api-moonbeam.moonscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 609002;
        };
    };
    id: 1284;
    name: "Moonbeam";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "GLMR";
        readonly symbol: "GLMR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://moonbeam.public.blastapi.io"];
            readonly webSocket: readonly ["wss://moonbeam.public.blastapi.io"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Moonscan";
            readonly url: "https://moonriver.moonscan.io";
            readonly apiUrl: "https://api-moonriver.moonscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 1597904;
        };
    };
    id: 1285;
    name: "Moonriver";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "MOVR";
        readonly symbol: "MOVR";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://moonriver.public.blastapi.io"];
            readonly webSocket: readonly ["wss://moonriver.public.blastapi.io"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://polygonscan.com";
            readonly apiUrl: "https://api.polygonscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 25770160;
        };
    };
    id: 137;
    name: "Polygon";
    nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://polygon-rpc.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://zkevm.polygonscan.com";
            readonly apiUrl: "https://api-zkevm.polygonscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 57746;
        };
    };
    id: 1101;
    name: "Polygon zkEVM";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://zkevm-rpc.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 108;
    readonly name: "ThunderCore";
    readonly network: "thundercore";
    readonly nativeCurrency: {
        readonly name: "Thunder Token";
        readonly symbol: "TT";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet-rpc.thundercore.com"];
        };
        readonly public: {
            readonly http: readonly ["https://mainnet-rpc.thundercore.com", "https://mainnet-rpc.thundercore.io", "https://mainnet-rpc.thundertoken.net"];
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 100671921;
        };
    };
}, {
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xfe2D04A5018AC1B366F599A13BF4e0C760b2aE6b";
            readonly blockCreated: 6589598;
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "HAQQ Explorer";
            readonly url: "https://explorer.haqq.network";
            readonly apiUrl: "https://explorer.haqq.network/api";
        };
    };
    readonly id: 11235;
    readonly name: "HAQQ Mainnet";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Islamic Coin";
        readonly symbol: "ISLM";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.eth.haqq.network"];
        };
    };
    readonly sourceId?: number | undefined;
    readonly testnet?: boolean | undefined;
    readonly custom?: Record<string, unknown> | undefined;
    readonly formatters?: undefined;
    readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
    readonly fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 1116;
    readonly name: "Core";
    readonly network: "core";
    readonly nativeCurrency: {
        readonly name: "Core";
        readonly symbol: "CORE";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.coredao.org", "https://rpc-core.icecreamswap.com"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.coredao.org", "https://rpc-core.icecreamswap.com"];
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xC4b2e1718E850535A0f3e79F7fC522d966821688";
            readonly blockCreated: 5087121;
        };
    };
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Teloscan";
            readonly url: "https://www.teloscan.io/";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 246530709;
        };
    };
    id: 40;
    name: "Telos";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Telos";
        readonly symbol: "TLOS";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.telos.net/evm"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 11297108109;
    readonly name: "Palm";
    readonly network: "palm";
    readonly nativeCurrency: {
        readonly name: "Palm";
        readonly symbol: "PALM";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"];
        };
        readonly public: {
            readonly http: readonly ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Palm Explorer";
            readonly url: "https://explorer.palm.io/";
        };
        readonly default: {
            readonly name: "Palm Explorer";
            readonly url: "https://explorer.palm.io/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 8005532;
        };
    };
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "oklink";
            readonly url: "https://www.oklink.com/okc";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 10364792;
        };
    };
    id: 66;
    name: "OKC";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "OKT";
        readonly symbol: "OKT";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://exchainrpc.okex.org"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 128;
    readonly name: "Huobi ECO Chain";
    readonly network: "huobieco";
    readonly nativeCurrency: {
        readonly name: "Huobi Token";
        readonly symbol: "HT";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://http-mainnet.hecochain.com"];
        };
        readonly public: {
            readonly http: readonly ["https://http-mainnet.hecochain.com"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "HecoInfo";
            readonly url: "https://www.hecoinfo.com/";
        };
        readonly default: {
            readonly name: "Heco Explorer";
            readonly url: "https://www.hecoinfo.com/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: `0x${string}`;
            readonly blockCreated: 14413501;
        };
    };
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://era.zksync.network/";
            readonly apiUrl: "https://api-era.zksync.network/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xF9cda624FBC7e059355ce98a31693d299FACd963";
        };
    };
    id: 324;
    name: "zkSync Era";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Ether";
        readonly symbol: "ETH";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.era.zksync.io"];
            readonly webSocket: readonly ["wss://mainnet.era.zksync.io/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom: {
        readonly getEip712Domain: import("viem/zksync").EIP712DomainFn<import("viem/chains").ZkSyncTransactionSerializable, import("viem/chains").ZkSyncEIP712TransactionSignable>;
    };
    formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/chains").ZkSyncRpcBlockOverrides & {
                transactions: `0x${string}`[] | import("viem/chains").ZkSyncRpcTransaction<boolean>[];
            }>) => {
                baseFeePerGas: bigint | null;
                blobGasUsed: bigint;
                difficulty: bigint;
                excessBlobGas: bigint;
                extraData: `0x${string}`;
                gasLimit: bigint;
                gasUsed: bigint;
                hash: `0x${string}` | null;
                logsBloom: `0x${string}` | null;
                miner: `0x${string}`;
                mixHash: `0x${string}`;
                nonce: `0x${string}` | null;
                number: bigint | null;
                parentHash: `0x${string}`;
                receiptsRoot: `0x${string}`;
                sealFields: `0x${string}`[];
                sha3Uncles: `0x${string}`;
                size: bigint;
                stateRoot: `0x${string}`;
                timestamp: bigint;
                totalDifficulty: bigint | null;
                transactions: `0x${string}`[] | import("viem/chains").ZkSyncTransaction<boolean>[];
                transactionsRoot: `0x${string}`;
                uncles: `0x${string}`[];
                withdrawals?: import("viem").Withdrawal[] | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
                l1BatchNumber: bigint | null;
                l1BatchTimestamp: bigint | null;
            };
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransaction<boolean>>, import("viem/chains").ZkSyncRpcTransaction<boolean>>) => {
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: number | undefined;
                yParity?: undefined;
                type: "legacy";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: number | undefined;
                yParity: number;
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: number | undefined;
                yParity: number;
                type: "priority" | "eip712";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip2930";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip1559";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "priority" | "eip712";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: undefined;
                maxPriorityFeePerGas: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip2930";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip1559";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "priority" | "eip712";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas: bigint;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: number;
                type: "eip4844";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: number;
                type: "priority";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: number;
                type: "priority" | "eip712";
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
            };
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransactionReceipt>, import("viem/chains").ZkSyncRpcTransactionReceiptOverrides>) => {
                blobGasPrice?: bigint | undefined;
                blobGasUsed?: bigint | undefined;
                blockHash: `0x${string}`;
                blockNumber: bigint;
                contractAddress: `0x${string}` | null | undefined;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: `0x${string}`;
                gasUsed: bigint;
                logs: import("viem/chains").ZkSyncLog<bigint, number, boolean, undefined, undefined, undefined, undefined>[];
                logsBloom: `0x${string}`;
                root?: `0x${string}` | undefined;
                status: "success" | "reverted";
                to: `0x${string}` | null;
                transactionHash: `0x${string}`;
                transactionIndex: number;
                type: import("viem/chains").ZkSyncTransactionType;
                l1BatchNumber: bigint | null;
                l1BatchTxIndex: bigint | null;
                l2ToL1Logs: import("viem/chains").ZkSyncL2ToL1Log[];
            };
            type: "transactionReceipt";
        };
        readonly transactionRequest: {
            exclude: ("gasPerPubdata" | "paymaster" | "factoryDeps" | "paymasterInput" | "customSignature")[] | undefined;
            format: (args: ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip2930" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip1559" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster: `0x${string}`;
                paymasterInput: `0x${string}`;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster?: undefined;
                paymasterInput?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip2930" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip1559" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster: `0x${string}`;
                paymasterInput: `0x${string}`;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster?: undefined;
                paymasterInput?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip2930" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip1559" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster: `0x${string}`;
                paymasterInput: `0x${string}`;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster?: undefined;
                paymasterInput?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                value?: bigint | undefined;
                to?: `0x${string}` | null | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "legacy" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                value?: bigint | undefined;
                to?: `0x${string}` | null | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip2930" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                value?: bigint | undefined;
                to?: `0x${string}` | null | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                to?: `0x${string}` | null | undefined;
                value?: bigint | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "eip1559" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                value?: bigint | undefined;
                to?: `0x${string}` | null | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                value?: bigint | undefined;
                to: `0x${string}` | null;
                gasPrice?: undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                maxFeePerBlobGas: bigint;
                accessList?: import("viem").AccessList | undefined;
                blobs: readonly `0x${string}`[] | readonly Uint8Array[];
                type?: "eip4844" | undefined;
            } & {
                gasPerPubdata?: undefined;
                customSignature?: undefined;
                paymaster?: undefined;
                paymasterInput?: undefined;
                factoryDeps?: undefined;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                value?: bigint | undefined;
                to?: `0x${string}` | null | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster: `0x${string}`;
                paymasterInput: `0x${string}`;
            }) | ({
                data?: `0x${string}` | undefined;
                from?: `0x${string}`;
                gas?: bigint | undefined;
                nonce?: number | undefined;
                value?: bigint | undefined;
                to?: `0x${string}` | null | undefined;
                gasPrice?: bigint | undefined;
                maxFeePerGas?: bigint | undefined;
                maxPriorityFeePerGas?: bigint | undefined;
                maxFeePerBlobGas?: bigint | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
            } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                gasPerPubdata?: bigint | undefined;
                customSignature?: `0x${string}` | undefined;
                factoryDeps?: `0x${string}`[] | undefined;
                type?: "priority" | "eip712" | undefined;
            } & {
                paymaster?: undefined;
                paymasterInput?: undefined;
            })) => ({
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: undefined;
                blobs?: undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/chains").ZkSyncEip712Meta;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/chains").ZkSyncEip712Meta;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobs?: undefined;
                type?: "0x0" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "0x1" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type?: "0x2" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                to?: `0x${string}` | null | undefined;
                value?: `0x${string}` | undefined;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs?: undefined;
                type: "0xff" | "0x71";
                eip712Meta: import("viem/chains").ZkSyncEip712Meta;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                to: `0x${string}` | null;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                maxFeePerBlobGas: `0x${string}`;
                accessList?: import("viem").AccessList | undefined;
                blobs: readonly `0x${string}`[] | readonly Uint8Array[];
                type?: "0x3" | undefined;
                eip712Meta?: undefined;
            } | {
                data?: `0x${string}` | undefined;
                from: `0x${string}`;
                gas?: `0x${string}` | undefined;
                nonce?: `0x${string}` | undefined;
                value?: `0x${string}` | undefined;
                to: `0x${string}` | null | undefined;
                gasPrice?: undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                maxFeePerBlobGas: undefined;
                accessList?: import("viem").AccessList | undefined;
                blobs: readonly `0x${string}`[] | readonly Uint8Array[];
                type: "0xff" | "0x71";
                eip712Meta: import("viem/chains").ZkSyncEip712Meta;
            }) & {
                gasPerPubdata: never;
                paymaster: never;
                factoryDeps: never;
                paymasterInput: never;
                customSignature: never;
            };
            type: "transactionRequest";
        };
    };
    serializers: {
        readonly transaction: typeof import("viem/zksync").serializeTransaction;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
    readonly network: "zksync-era";
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://lineascan.build";
            readonly apiUrl: "https://api.lineascan.build/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 42;
        };
    };
    id: 59144;
    name: "Linea Mainnet";
    nativeCurrency: {
        readonly name: "Linea Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.linea.build"];
            readonly webSocket: readonly ["wss://rpc.linea.build"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Basescan";
            readonly url: "https://basescan.org";
            readonly apiUrl: "https://api.basescan.org/api";
        };
    };
    contracts: {
        readonly l2OutputOracle: {
            readonly 1: {
                readonly address: "0x56315b90c40730925ec5485cf004d835058518A0";
            };
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 5022;
        };
        readonly portal: {
            readonly 1: {
                readonly address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e";
                readonly blockCreated: 17482143;
            };
        };
        readonly l1StandardBridge: {
            readonly 1: {
                readonly address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35";
                readonly blockCreated: 17482143;
            };
        };
        readonly gasPriceOracle: {
            readonly address: "0x420000000000000000000000000000000000000F";
        };
        readonly l1Block: {
            readonly address: "0x4200000000000000000000000000000000000015";
        };
        readonly l2CrossDomainMessenger: {
            readonly address: "0x4200000000000000000000000000000000000007";
        };
        readonly l2Erc721Bridge: {
            readonly address: "0x4200000000000000000000000000000000000014";
        };
        readonly l2StandardBridge: {
            readonly address: "0x4200000000000000000000000000000000000010";
        };
        readonly l2ToL1MessagePasser: {
            readonly address: "0x4200000000000000000000000000000000000016";
        };
    };
    id: 8453;
    name: "Base";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.base.org"];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters: {
        readonly block: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/chains").OpStackRpcBlockOverrides & {
                transactions: `0x${string}`[] | import("viem/chains").OpStackRpcTransaction<boolean>[];
            }>) => {
                baseFeePerGas: bigint | null;
                blobGasUsed: bigint;
                difficulty: bigint;
                excessBlobGas: bigint;
                extraData: `0x${string}`;
                gasLimit: bigint;
                gasUsed: bigint;
                hash: `0x${string}` | null;
                logsBloom: `0x${string}` | null;
                miner: `0x${string}`;
                mixHash: `0x${string}`;
                nonce: `0x${string}` | null;
                number: bigint | null;
                parentHash: `0x${string}`;
                receiptsRoot: `0x${string}`;
                sealFields: `0x${string}`[];
                sha3Uncles: `0x${string}`;
                size: bigint;
                stateRoot: `0x${string}`;
                timestamp: bigint;
                totalDifficulty: bigint | null;
                transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                transactionsRoot: `0x${string}`;
                uncles: `0x${string}`[];
                withdrawals?: import("viem").Withdrawal[] | undefined;
                withdrawalsRoot?: `0x${string}` | undefined;
            };
            type: "block";
        };
        readonly transaction: {
            exclude: [] | undefined;
            format: (args: ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x1";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x2";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x1";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x2";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                r: `0x${string}`;
                s: `0x${string}`;
                v: `0x${string}`;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                nonce: `0x${string}`;
                value: `0x${string}`;
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: `0x${string}` | undefined;
                yParity?: undefined;
                type: "0x0";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice: `0x${string}`;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x1";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: `0x${string}`;
                type: "0x2";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                blockHash: `0x${string}` | null;
                blockNumber: `0x${string}` | null;
                from: `0x${string}`;
                gas: `0x${string}`;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: `0x${string}`;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: `0x${string}` | null;
                typeHex: `0x${string}` | null;
                v: `0x${string}`;
                value: `0x${string}`;
                yParity: `0x${string}`;
                gasPrice?: undefined;
                maxFeePerBlobGas: `0x${string}`;
                maxFeePerGas: `0x${string}`;
                maxPriorityFeePerGas: `0x${string}`;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: `0x${string}`;
                type: "0x3";
            }, "yParity">, "typeHex"> & {
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            }) | ({
                r?: `0x${string}`;
                s?: `0x${string}`;
                v?: `0x${string}`;
                yParity?: `0x${string}` | undefined;
                gasPrice?: `0x${string}` | undefined;
                maxFeePerBlobGas?: `0x${string}` | undefined;
                maxFeePerGas?: `0x${string}` | undefined;
                maxPriorityFeePerGas?: `0x${string}` | undefined;
                to?: `0x${string}` | null;
                from?: `0x${string}`;
                gas?: `0x${string}`;
                nonce?: `0x${string}`;
                value?: `0x${string}`;
                type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                accessList?: import("viem").AccessList | undefined;
                blockHash?: `0x${string}` | null;
                blockNumber?: `0x${string}` | null;
                hash?: `0x${string}`;
                input?: `0x${string}`;
                transactionIndex?: `0x${string}` | null;
                blobVersionedHashes?: `0x${string}`[] | undefined;
                chainId?: `0x${string}` | undefined;
            } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                isSystemTx?: boolean | undefined;
                mint?: `0x${string}` | undefined;
                sourceHash: `0x${string}`;
                type: "0x7e";
            })) => {
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: number | undefined;
                yParity?: undefined;
                type: "legacy";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                r: `0x${string}`;
                s: `0x${string}`;
                v: bigint;
                to: `0x${string}` | null;
                from: `0x${string}`;
                gas: bigint;
                nonce: number;
                value: bigint;
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                hash: `0x${string}`;
                input: `0x${string}`;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList?: undefined;
                blobVersionedHashes?: undefined;
                chainId?: number | undefined;
                yParity: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas?: undefined;
                maxPriorityFeePerGas?: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip2930";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip1559";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: undefined;
                maxPriorityFeePerGas: undefined;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip2930";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "eip1559";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas?: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes?: undefined;
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas: bigint;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: number;
                type: "eip4844";
                isSystemTx?: undefined;
                mint?: undefined;
                sourceHash?: undefined;
            } | {
                blockHash: `0x${string}` | null;
                blockNumber: bigint | null;
                from: `0x${string}`;
                gas: bigint;
                hash: `0x${string}`;
                input: `0x${string}`;
                nonce: number;
                r: `0x${string}`;
                s: `0x${string}`;
                to: `0x${string}` | null;
                transactionIndex: number | null;
                typeHex: `0x${string}` | null;
                v: bigint;
                value: bigint;
                yParity: number;
                gasPrice?: undefined;
                maxFeePerBlobGas: undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                accessList: import("viem").AccessList;
                blobVersionedHashes: `0x${string}`[];
                chainId: number;
                type: "deposit";
                isSystemTx?: boolean;
                mint?: bigint | undefined;
                sourceHash: `0x${string}`;
            };
            type: "transaction";
        };
        readonly transactionReceipt: {
            exclude: [] | undefined;
            format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransactionReceipt>, import("viem/chains").OpStackRpcTransactionReceiptOverrides>) => {
                blobGasPrice?: bigint | undefined;
                blobGasUsed?: bigint | undefined;
                blockHash: `0x${string}`;
                blockNumber: bigint;
                contractAddress: `0x${string}` | null | undefined;
                cumulativeGasUsed: bigint;
                effectiveGasPrice: bigint;
                from: `0x${string}`;
                gasUsed: bigint;
                logs: import("viem").Log<bigint, number, false, undefined, undefined, undefined, undefined>[];
                logsBloom: `0x${string}`;
                root?: `0x${string}` | undefined;
                status: "success" | "reverted";
                to: `0x${string}` | null;
                transactionHash: `0x${string}`;
                transactionIndex: number;
                type: import("viem").TransactionType;
                l1GasPrice: bigint | null;
                l1GasUsed: bigint | null;
                l1Fee: bigint | null;
                l1FeeScalar: number | null;
            };
            type: "transactionReceipt";
        };
    };
    serializers: {
        readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
    };
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Scrollscan";
            readonly url: "https://scrollscan.com";
            readonly apiUrl: "https://api.scrollscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14;
        };
    };
    id: 534352;
    name: "Scroll";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.scroll.io"];
            readonly webSocket: readonly ["wss://wss-rpc.scroll.io/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    readonly id: 314;
    readonly name: "Filecoin Mainnet";
    readonly network: "filecoin-mainnet";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "filecoin";
        readonly symbol: "FIL";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/filecoin"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/filecoin"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Filfox";
            readonly url: "https://filfox.info/en";
        };
        readonly filscan: {
            readonly name: "Filscan";
            readonly url: "https://filscan.io";
        };
        readonly filscout: {
            readonly name: "Filscout";
            readonly url: "https://filscout.io/en";
        };
        readonly glif: {
            readonly name: "Glif";
            readonly url: "https://explorer.glif.io";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 3328594;
        };
    };
}, {
    readonly id: 7000;
    readonly name: "ZetaChain";
    readonly network: "zetachain";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Zeta";
        readonly symbol: "ZETA";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://zetachain-evm.blockpi.network/v1/rpc/public", "https://zetachain-mainnet-archive.allthatnode.com:8545", "https://zetachain.rpc.thirdweb.com", "https://jsonrpc.zetachain.nodestake.org"];
        };
        readonly public: {
            readonly http: readonly ["https://zetachain-evm.blockpi.network/v1/rpc/public", "https://zetachain-mainnet-archive.allthatnode.com:8545", "https://zetachain.rpc.thirdweb.com", "https://jsonrpc.zetachain.nodestake.org"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "ZetaScan";
            readonly url: "https://explorer.zetachain.com/";
        };
        readonly blockscout: {
            readonly name: "Blockscout";
            readonly url: "https://zetachain.blockscout.com/";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0x039e87AB90205F9d87c5b40d4B28e2Be45dA4a20";
            readonly blockCreated: 1565755;
        };
    };
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Arbiscan";
            readonly url: "https://sepolia.arbiscan.io";
            readonly apiUrl: "https://api-sepolia.arbiscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 81930;
        };
    };
    id: 421614;
    name: "Arbitrum Sepolia";
    nativeCurrency: {
        readonly name: "Arbitrum Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://sepolia-rollup.arbitrum.io/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "SnowScan";
            readonly url: "https://testnet.snowscan.xyz";
            readonly apiUrl: "https://api-testnet.snowscan.xyz";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 7096959;
        };
    };
    id: 43113;
    name: "Avalanche Fuji";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Avalanche Fuji";
        readonly symbol: "AVAX";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.avax-test.network/ext/bc/C/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://testnet.bscscan.com";
            readonly apiUrl: "https://testnet.bscscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 17422483;
        };
    };
    id: 97;
    name: "Binance Smart Chain Testnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "tBNB";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "FTMScan";
            readonly url: "https://testnet.ftmscan.com";
            readonly apiUrl: "https://testnet.ftmscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 8328688;
        };
    };
    id: 4002;
    name: "Fantom Testnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Fantom";
        readonly symbol: "FTM";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.testnet.fantom.network"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://mumbai.polygonscan.com";
            readonly apiUrl: "https://mumbai.polygonscan.com/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 25770160;
        };
    };
    id: 80001;
    name: "Polygon Mumbai";
    nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/polygon_mumbai"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}, {
    blockExplorers: {
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://sepolia.etherscan.io";
            readonly apiUrl: "https://api-sepolia.etherscan.io/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 751532;
        };
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC";
            readonly blockCreated: 5317080;
        };
    };
    id: 11155111;
    name: "Sepolia";
    nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "SEP";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.sepolia.org"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
}];
export declare const publicClientConfig: {
    readonly 42170: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Arbiscan";
                    readonly url: "https://nova.arbiscan.io";
                    readonly apiUrl: "https://api-nova.arbiscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 1746963;
                };
            };
            id: 42170;
            name: "Arbitrum Nova";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://nova.arbitrum.io/rpc"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 42161: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Arbiscan";
                    readonly url: "https://arbiscan.io";
                    readonly apiUrl: "https://api.arbiscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 7654707;
                };
            };
            id: 42161;
            name: "Arbitrum One";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 43114: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "SnowScan";
                    readonly url: "https://snowscan.xyz";
                    readonly apiUrl: "https://api.snowscan.xyz/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 11907934;
                };
            };
            id: 43114;
            name: "Avalanche";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Avalanche";
                readonly symbol: "AVAX";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://api.avax.network/ext/bc/C/rpc"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 288: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "BOBAScan";
                    readonly url: "https://bobascan.com";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 446859;
                };
            };
            id: 288;
            name: "Boba Network";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Boba";
                readonly symbol: "BOBA";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet.boba.network"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 43288: {
        readonly chain: {
            readonly id: 43288;
            readonly name: "Boba Avax";
            readonly network: "boba-avax";
            readonly nativeCurrency: {
                readonly name: "Boba";
                readonly symbol: "BOBA";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://avax.boba.network"];
                };
                readonly public: {
                    readonly http: readonly ["https://avax.boba.network"];
                };
            };
            readonly blockExplorers: {
                readonly etherscan: {
                    readonly name: "Boba Avalanche Mainnet Explorer";
                    readonly url: "https://blockexplorer.avax.boba.network/";
                };
                readonly default: {
                    readonly name: "Boba Avalanche Mainnet Explorer";
                    readonly url: "https://blockexplorer.avax.boba.network/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: `0x${string}`;
                    readonly blockCreated: 3652;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 56288: {
        readonly chain: {
            readonly id: 56288;
            readonly name: "Boba BNB";
            readonly network: "boba-bnb";
            readonly nativeCurrency: {
                readonly name: "Boba";
                readonly symbol: "BOBA";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://bnb.boba.network"];
                };
                readonly public: {
                    readonly http: readonly ["https://bnb.boba.network"];
                };
            };
            readonly blockExplorers: {
                readonly etherscan: {
                    readonly name: "Boba BNB Mainnet Explorer";
                    readonly url: "https://blockexplorer.bnb.boba.network/";
                };
                readonly default: {
                    readonly name: "Boba BNB Mainnet Explorer";
                    readonly url: "https://blockexplorer.bnb.boba.network/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: `0x${string}`;
                    readonly blockCreated: 18871;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 56: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://bscscan.com";
                    readonly apiUrl: "https://api.bscscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 15921452;
                };
            };
            id: 56;
            name: "BNB Smart Chain";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "BNB";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.ankr.com/bsc"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 199: {
        readonly chain: {
            readonly id: 199;
            readonly name: "BitTorrent Chain";
            readonly network: "btt";
            readonly nativeCurrency: {
                readonly name: "BitTorrent";
                readonly symbol: "BTT";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.bittorrentchain.io"];
                };
                readonly public: {
                    readonly http: readonly ["https://rpc.bittorrentchain.io"];
                };
            };
            readonly blockExplorers: {
                readonly etherscan: {
                    readonly name: "BitTorrent Chain Explorer";
                    readonly url: "https://bttcscan.com/";
                };
                readonly default: {
                    readonly name: "BitTorrent Chain Explorer";
                    readonly url: "https://bttcscan.com/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: `0x${string}`;
                    readonly blockCreated: 13014184;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 42220: {
        readonly chain: never;
        readonly transport: import("viem").HttpTransport;
    };
    readonly 1: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Etherscan";
                    readonly url: "https://etherscan.io";
                    readonly apiUrl: "https://api.etherscan.io/api";
                };
            };
            contracts: {
                readonly ensRegistry: {
                    readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
                };
                readonly ensUniversalResolver: {
                    readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                    readonly blockCreated: 19258213;
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 14353601;
                };
            };
            id: 1;
            name: "Ethereum";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://cloudflare-eth.com"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 250: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "FTMScan";
                    readonly url: "https://ftmscan.com";
                    readonly apiUrl: "https://api.ftmscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 33001987;
                };
            };
            id: 250;
            name: "Fantom";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Fantom";
                readonly symbol: "FTM";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.ankr.com/fantom"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 122: {
        readonly chain: {
            readonly contracts: {
                readonly multicall3: {
                    readonly address: `0x${string}`;
                    readonly blockCreated: 16146628;
                };
            };
            readonly blockExplorers: {
                readonly default: {
                    readonly name: "Fuse Explorer";
                    readonly url: "https://explorer.fuse.io";
                    readonly apiUrl: "https://explorer.fuse.io/api";
                };
            };
            readonly id: 122;
            readonly name: "Fuse";
            readonly nativeCurrency: {
                readonly name: "Fuse";
                readonly symbol: "FUSE";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.fuse.io"];
                };
            };
            readonly sourceId?: number | undefined;
            readonly testnet?: boolean | undefined;
            readonly custom?: Record<string, unknown> | undefined;
            readonly formatters?: undefined;
            readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
            readonly fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 100: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Gnosisscan";
                    readonly url: "https://gnosisscan.io";
                    readonly apiUrl: "https://api.gnosisscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 21022491;
                };
            };
            id: 100;
            name: "Gnosis";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Gnosis";
                readonly symbol: "xDAI";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.gnosischain.com"];
                    readonly webSocket: readonly ["wss://rpc.gnosischain.com/wss"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 1666600000: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Harmony Explorer";
                    readonly url: "https://explorer.harmony.one";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 24185753;
                };
            };
            id: 1666600000;
            name: "Harmony One";
            nativeCurrency: {
                readonly name: "Harmony";
                readonly symbol: "ONE";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.ankr.com/harmony"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 2222: {
        readonly chain: {
            readonly id: 2222;
            readonly name: "Kava";
            readonly network: "kava";
            readonly nativeCurrency: {
                readonly name: "Kava";
                readonly symbol: "KAVA";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://evm.kava.io", "https://evm2.kava.io"];
                };
                readonly public: {
                    readonly http: readonly ["https://evm.kava.io", "https://evm2.kava.io"];
                };
            };
            readonly blockExplorers: {
                readonly etherscan: {
                    readonly name: "Kavascan";
                    readonly url: "https://explorer.kava.io/";
                };
                readonly default: {
                    readonly name: "Kavascan";
                    readonly url: "https://explorer.kava.io/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: `0x${string}`;
                    readonly blockCreated: 1176602;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 1088: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Andromeda Explorer";
                    readonly url: "https://andromeda-explorer.metis.io";
                    readonly apiUrl: "https://andromeda-explorer.metis.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 2338552;
                };
            };
            id: 1088;
            name: "Metis";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Metis";
                readonly symbol: "METIS";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://andromeda.metis.io/?owner=1088"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 1284: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Moonscan";
                    readonly url: "https://moonscan.io";
                    readonly apiUrl: "https://api-moonbeam.moonscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 609002;
                };
            };
            id: 1284;
            name: "Moonbeam";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "GLMR";
                readonly symbol: "GLMR";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://moonbeam.public.blastapi.io"];
                    readonly webSocket: readonly ["wss://moonbeam.public.blastapi.io"];
                };
            };
            sourceId?: number | undefined;
            testnet: false;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 1285: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Moonscan";
                    readonly url: "https://moonriver.moonscan.io";
                    readonly apiUrl: "https://api-moonriver.moonscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 1597904;
                };
            };
            id: 1285;
            name: "Moonriver";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "MOVR";
                readonly symbol: "MOVR";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://moonriver.public.blastapi.io"];
                    readonly webSocket: readonly ["wss://moonriver.public.blastapi.io"];
                };
            };
            sourceId?: number | undefined;
            testnet: false;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 10: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Optimism Explorer";
                    readonly url: "https://optimistic.etherscan.io";
                    readonly apiUrl: "https://api-optimistic.etherscan.io/api";
                };
            };
            contracts: {
                readonly l2OutputOracle: {
                    readonly 1: {
                        readonly address: "0xdfe97868233d1aa22e815a266982f2cf17685a27";
                    };
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 4286263;
                };
                readonly portal: {
                    readonly 1: {
                        readonly address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed";
                    };
                };
                readonly l1StandardBridge: {
                    readonly 1: {
                        readonly address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1";
                    };
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            id: 10;
            name: "OP Mainnet";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet.optimism.io"];
                };
            };
            sourceId: 1;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/chains").OpStackRpcBlockOverrides & {
                        transactions: `0x${string}`[] | import("viem/chains").OpStackRpcTransaction<boolean>[];
                    }>) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: `0x${string}`;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: `0x${string}`;
                        mixHash: `0x${string}`;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentHash: `0x${string}`;
                        receiptsRoot: `0x${string}`;
                        sealFields: `0x${string}`[];
                        sha3Uncles: `0x${string}`;
                        size: bigint;
                        stateRoot: `0x${string}`;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: `0x${string}`;
                        uncles: `0x${string}`[];
                        withdrawals?: import("viem").Withdrawal[] | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    };
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x1";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x2";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x1";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x2";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x1";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x2";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: `0x${string}`;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: `0x${string}`;
                        type: "0x3";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    })) => {
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: bigint;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: number | undefined;
                        yParity?: undefined;
                        type: "legacy";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: bigint;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: number | undefined;
                        yParity: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip2930";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip1559";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: undefined;
                        maxPriorityFeePerGas: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip2930";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip1559";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: number;
                        type: "eip4844";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    };
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransactionReceipt>, import("viem/chains").OpStackRpcTransactionReceiptOverrides>) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        contractAddress: `0x${string}` | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: `0x${string}`;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false, undefined, undefined, undefined, undefined>[];
                        logsBloom: `0x${string}`;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: `0x${string}` | null;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    };
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 137: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "PolygonScan";
                    readonly url: "https://polygonscan.com";
                    readonly apiUrl: "https://api.polygonscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 25770160;
                };
            };
            id: 137;
            name: "Polygon";
            nativeCurrency: {
                readonly name: "MATIC";
                readonly symbol: "MATIC";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://polygon-rpc.com"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 1101: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "PolygonScan";
                    readonly url: "https://zkevm.polygonscan.com";
                    readonly apiUrl: "https://api-zkevm.polygonscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 57746;
                };
            };
            id: 1101;
            name: "Polygon zkEVM";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://zkevm-rpc.com"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 108: {
        readonly chain: {
            readonly id: 108;
            readonly name: "ThunderCore";
            readonly network: "thundercore";
            readonly nativeCurrency: {
                readonly name: "Thunder Token";
                readonly symbol: "TT";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet-rpc.thundercore.com"];
                };
                readonly public: {
                    readonly http: readonly ["https://mainnet-rpc.thundercore.com", "https://mainnet-rpc.thundercore.io", "https://mainnet-rpc.thundertoken.net"];
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 100671921;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 11235: {
        readonly chain: {
            readonly contracts: {
                readonly multicall3: {
                    readonly address: "0xfe2D04A5018AC1B366F599A13BF4e0C760b2aE6b";
                    readonly blockCreated: 6589598;
                };
            };
            readonly blockExplorers: {
                readonly default: {
                    readonly name: "HAQQ Explorer";
                    readonly url: "https://explorer.haqq.network";
                    readonly apiUrl: "https://explorer.haqq.network/api";
                };
            };
            readonly id: 11235;
            readonly name: "HAQQ Mainnet";
            readonly nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Islamic Coin";
                readonly symbol: "ISLM";
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.eth.haqq.network"];
                };
            };
            readonly sourceId?: number | undefined;
            readonly testnet?: boolean | undefined;
            readonly custom?: Record<string, unknown> | undefined;
            readonly formatters?: undefined;
            readonly serializers?: import("viem").ChainSerializers<undefined> | undefined;
            readonly fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 1116: {
        readonly chain: {
            readonly id: 1116;
            readonly name: "Core";
            readonly network: "core";
            readonly nativeCurrency: {
                readonly name: "Core";
                readonly symbol: "CORE";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.coredao.org", "https://rpc-core.icecreamswap.com"];
                };
                readonly public: {
                    readonly http: readonly ["https://rpc.coredao.org", "https://rpc-core.icecreamswap.com"];
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: "0xC4b2e1718E850535A0f3e79F7fC522d966821688";
                    readonly blockCreated: 5087121;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 40: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Teloscan";
                    readonly url: "https://www.teloscan.io/";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 246530709;
                };
            };
            id: 40;
            name: "Telos";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Telos";
                readonly symbol: "TLOS";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet.telos.net/evm"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 11297108109: {
        readonly chain: {
            readonly id: 11297108109;
            readonly name: "Palm";
            readonly network: "palm";
            readonly nativeCurrency: {
                readonly name: "Palm";
                readonly symbol: "PALM";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"];
                };
                readonly public: {
                    readonly http: readonly ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"];
                };
            };
            readonly blockExplorers: {
                readonly etherscan: {
                    readonly name: "Palm Explorer";
                    readonly url: "https://explorer.palm.io/";
                };
                readonly default: {
                    readonly name: "Palm Explorer";
                    readonly url: "https://explorer.palm.io/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: `0x${string}`;
                    readonly blockCreated: 8005532;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 66: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "oklink";
                    readonly url: "https://www.oklink.com/okc";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 10364792;
                };
            };
            id: 66;
            name: "OKC";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "OKT";
                readonly symbol: "OKT";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://exchainrpc.okex.org"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 128: {
        readonly chain: {
            readonly id: 128;
            readonly name: "Huobi ECO Chain";
            readonly network: "huobieco";
            readonly nativeCurrency: {
                readonly name: "Huobi Token";
                readonly symbol: "HT";
                readonly decimals: 18;
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://http-mainnet.hecochain.com"];
                };
                readonly public: {
                    readonly http: readonly ["https://http-mainnet.hecochain.com"];
                };
            };
            readonly blockExplorers: {
                readonly etherscan: {
                    readonly name: "HecoInfo";
                    readonly url: "https://www.hecoinfo.com/";
                };
                readonly default: {
                    readonly name: "Heco Explorer";
                    readonly url: "https://www.hecoinfo.com/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: `0x${string}`;
                    readonly blockCreated: 14413501;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 324: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Etherscan";
                    readonly url: "https://era.zksync.network/";
                    readonly apiUrl: "https://api-era.zksync.network/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xF9cda624FBC7e059355ce98a31693d299FACd963";
                };
            };
            id: 324;
            name: "zkSync Era";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Ether";
                readonly symbol: "ETH";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet.era.zksync.io"];
                    readonly webSocket: readonly ["wss://mainnet.era.zksync.io/ws"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom: {
                readonly getEip712Domain: import("viem/zksync").EIP712DomainFn<import("viem/chains").ZkSyncTransactionSerializable, import("viem/chains").ZkSyncEIP712TransactionSignable>;
            };
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/chains").ZkSyncRpcBlockOverrides & {
                        transactions: `0x${string}`[] | import("viem/chains").ZkSyncRpcTransaction<boolean>[];
                    }>) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: `0x${string}`;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: `0x${string}`;
                        mixHash: `0x${string}`;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentHash: `0x${string}`;
                        receiptsRoot: `0x${string}`;
                        sealFields: `0x${string}`[];
                        sha3Uncles: `0x${string}`;
                        size: bigint;
                        stateRoot: `0x${string}`;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").ZkSyncTransaction<boolean>[];
                        transactionsRoot: `0x${string}`;
                        uncles: `0x${string}`[];
                        withdrawals?: import("viem").Withdrawal[] | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                        l1BatchNumber: bigint | null;
                        l1BatchTimestamp: bigint | null;
                    };
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransaction<boolean>>, import("viem/chains").ZkSyncRpcTransaction<boolean>>) => {
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: bigint;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: number | undefined;
                        yParity?: undefined;
                        type: "legacy";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: bigint;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: number | undefined;
                        yParity: number;
                        type: "priority";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: bigint;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: number | undefined;
                        yParity: number;
                        type: "priority" | "eip712";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip2930";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip1559";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "priority";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "priority" | "eip712";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: undefined;
                        maxPriorityFeePerGas: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip2930";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip1559";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "priority";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "priority" | "eip712";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: number;
                        type: "eip4844";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: number;
                        type: "priority";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: number;
                        type: "priority" | "eip712";
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                    };
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransactionReceipt>, import("viem/chains").ZkSyncRpcTransactionReceiptOverrides>) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        contractAddress: `0x${string}` | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: `0x${string}`;
                        gasUsed: bigint;
                        logs: import("viem/chains").ZkSyncLog<bigint, number, boolean, undefined, undefined, undefined, undefined>[];
                        logsBloom: `0x${string}`;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: `0x${string}` | null;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        type: import("viem/chains").ZkSyncTransactionType;
                        l1BatchNumber: bigint | null;
                        l1BatchTxIndex: bigint | null;
                        l2ToL1Logs: import("viem/chains").ZkSyncL2ToL1Log[];
                    };
                    type: "transactionReceipt";
                };
                readonly transactionRequest: {
                    exclude: ("gasPerPubdata" | "paymaster" | "factoryDeps" | "paymasterInput" | "customSignature")[] | undefined;
                    format: (args: ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip2930" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip1559" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster: `0x${string}`;
                        paymasterInput: `0x${string}`;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip2930" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip1559" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster: `0x${string}`;
                        paymasterInput: `0x${string}`;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip2930" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip1559" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster: `0x${string}`;
                        paymasterInput: `0x${string}`;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        value?: bigint | undefined;
                        to?: `0x${string}` | null | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "legacy" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        value?: bigint | undefined;
                        to?: `0x${string}` | null | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip2930" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        value?: bigint | undefined;
                        to?: `0x${string}` | null | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: bigint | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "eip1559" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        value?: bigint | undefined;
                        to?: `0x${string}` | null | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        value?: bigint | undefined;
                        to: `0x${string}` | null;
                        gasPrice?: undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        maxFeePerBlobGas: bigint;
                        accessList?: import("viem").AccessList | undefined;
                        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
                        type?: "eip4844" | undefined;
                    } & {
                        gasPerPubdata?: undefined;
                        customSignature?: undefined;
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                        factoryDeps?: undefined;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        value?: bigint | undefined;
                        to?: `0x${string}` | null | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster: `0x${string}`;
                        paymasterInput: `0x${string}`;
                    }) | ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}`;
                        gas?: bigint | undefined;
                        nonce?: number | undefined;
                        value?: bigint | undefined;
                        to?: `0x${string}` | null | undefined;
                        gasPrice?: bigint | undefined;
                        maxFeePerGas?: bigint | undefined;
                        maxPriorityFeePerGas?: bigint | undefined;
                        maxFeePerBlobGas?: bigint | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
                        type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "priority" | "eip712" | undefined;
                    } & Omit<import("viem").TransactionRequestBase<bigint, number>, "type"> & import("viem").ExactPartial<import("viem").FeeValuesEIP1559<bigint>> & {
                        gasPerPubdata?: bigint | undefined;
                        customSignature?: `0x${string}` | undefined;
                        factoryDeps?: `0x${string}`[] | undefined;
                        type?: "priority" | "eip712" | undefined;
                    } & {
                        paymaster?: undefined;
                        paymasterInput?: undefined;
                    })) => ({
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "0x0" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "0x1" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "0x2" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type: "0xff" | "0x71";
                        eip712Meta: import("viem/chains").ZkSyncEip712Meta;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "0x0" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "0x1" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "0x2" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type: "0xff" | "0x71";
                        eip712Meta: import("viem/chains").ZkSyncEip712Meta;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobs?: undefined;
                        type?: "0x0" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "0x1" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type?: "0x2" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        type: "0xff" | "0x71";
                        eip712Meta: import("viem/chains").ZkSyncEip712Meta;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        value?: `0x${string}` | undefined;
                        to: `0x${string}` | null;
                        gasPrice?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        maxFeePerBlobGas: `0x${string}`;
                        accessList?: import("viem").AccessList | undefined;
                        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
                        type?: "0x3" | undefined;
                        eip712Meta?: undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from: `0x${string}`;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        value?: `0x${string}` | undefined;
                        to: `0x${string}` | null | undefined;
                        gasPrice?: undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        maxFeePerBlobGas: undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
                        type: "0xff" | "0x71";
                        eip712Meta: import("viem/chains").ZkSyncEip712Meta;
                    }) & {
                        gasPerPubdata: never;
                        paymaster: never;
                        factoryDeps: never;
                        paymasterInput: never;
                        customSignature: never;
                    };
                    type: "transactionRequest";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/zksync").serializeTransaction;
            };
            fees?: import("viem").ChainFees<undefined> | undefined;
            readonly network: "zksync-era";
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 59144: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Etherscan";
                    readonly url: "https://lineascan.build";
                    readonly apiUrl: "https://api.lineascan.build/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 42;
                };
            };
            id: 59144;
            name: "Linea Mainnet";
            nativeCurrency: {
                readonly name: "Linea Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.linea.build"];
                    readonly webSocket: readonly ["wss://rpc.linea.build"];
                };
            };
            sourceId?: number | undefined;
            testnet: false;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 8453: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Basescan";
                    readonly url: "https://basescan.org";
                    readonly apiUrl: "https://api.basescan.org/api";
                };
            };
            contracts: {
                readonly l2OutputOracle: {
                    readonly 1: {
                        readonly address: "0x56315b90c40730925ec5485cf004d835058518A0";
                    };
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 5022;
                };
                readonly portal: {
                    readonly 1: {
                        readonly address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e";
                        readonly blockCreated: 17482143;
                    };
                };
                readonly l1StandardBridge: {
                    readonly 1: {
                        readonly address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35";
                        readonly blockCreated: 17482143;
                    };
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            id: 8453;
            name: "Base";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet.base.org"];
                };
            };
            sourceId: 1;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcBlock<import("viem").BlockTag, boolean, import("viem").RpcTransaction<boolean>>>, import("viem/chains").OpStackRpcBlockOverrides & {
                        transactions: `0x${string}`[] | import("viem/chains").OpStackRpcTransaction<boolean>[];
                    }>) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: `0x${string}`;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: `0x${string}`;
                        mixHash: `0x${string}`;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentHash: `0x${string}`;
                        receiptsRoot: `0x${string}`;
                        sealFields: `0x${string}`[];
                        sha3Uncles: `0x${string}`;
                        size: bigint;
                        stateRoot: `0x${string}`;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: `0x${string}`;
                        uncles: `0x${string}`[];
                        withdrawals?: import("viem").Withdrawal[] | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    };
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x1";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x2";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x1";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x2";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: `0x${string}`;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        nonce: `0x${string}`;
                        value: `0x${string}`;
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: `0x${string}` | undefined;
                        yParity?: undefined;
                        type: "0x0";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice: `0x${string}`;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x1";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: `0x${string}`;
                        type: "0x2";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & import("viem/chains").Omit<import("viem/chains").PartialBy<{
                        blockHash: `0x${string}` | null;
                        blockNumber: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: `0x${string}`;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: `0x${string}`;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: `0x${string}` | null;
                        typeHex: `0x${string}` | null;
                        v: `0x${string}`;
                        value: `0x${string}`;
                        yParity: `0x${string}`;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: `0x${string}`;
                        maxFeePerGas: `0x${string}`;
                        maxPriorityFeePerGas: `0x${string}`;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: `0x${string}`;
                        type: "0x3";
                    }, "yParity">, "typeHex"> & {
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    }) | ({
                        r?: `0x${string}`;
                        s?: `0x${string}`;
                        v?: `0x${string}`;
                        yParity?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: `0x${string}` | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null;
                        from?: `0x${string}`;
                        gas?: `0x${string}`;
                        nonce?: `0x${string}`;
                        value?: `0x${string}`;
                        type?: "0x0" | "0x1" | "0x2" | "0x3" | "0x7e";
                        accessList?: import("viem").AccessList | undefined;
                        blockHash?: `0x${string}` | null;
                        blockNumber?: `0x${string}` | null;
                        hash?: `0x${string}`;
                        input?: `0x${string}`;
                        transactionIndex?: `0x${string}` | null;
                        blobVersionedHashes?: `0x${string}`[] | undefined;
                        chainId?: `0x${string}` | undefined;
                    } & Omit<import("viem").TransactionBase<`0x${string}`, `0x${string}`, boolean>, "typeHex"> & import("viem").FeeValuesEIP1559<`0x${string}`> & {
                        isSystemTx?: boolean | undefined;
                        mint?: `0x${string}` | undefined;
                        sourceHash: `0x${string}`;
                        type: "0x7e";
                    })) => {
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: bigint;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: number | undefined;
                        yParity?: undefined;
                        type: "legacy";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        r: `0x${string}`;
                        s: `0x${string}`;
                        v: bigint;
                        to: `0x${string}` | null;
                        from: `0x${string}`;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: number | undefined;
                        yParity: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas?: undefined;
                        maxPriorityFeePerGas?: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip2930";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip1559";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: undefined;
                        maxPriorityFeePerGas: undefined;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip2930";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "eip1559";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas?: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes?: undefined;
                        chainId: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: number;
                        type: "eip4844";
                        isSystemTx?: undefined;
                        mint?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: `0x${string}`;
                        gas: bigint;
                        hash: `0x${string}`;
                        input: `0x${string}`;
                        nonce: number;
                        r: `0x${string}`;
                        s: `0x${string}`;
                        to: `0x${string}` | null;
                        transactionIndex: number | null;
                        typeHex: `0x${string}` | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined;
                        maxFeePerBlobGas: undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        blobVersionedHashes: `0x${string}`[];
                        chainId: number;
                        type: "deposit";
                        isSystemTx?: boolean;
                        mint?: bigint | undefined;
                        sourceHash: `0x${string}`;
                    };
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").Assign<import("viem").ExactPartial<import("viem").RpcTransactionReceipt>, import("viem/chains").OpStackRpcTransactionReceiptOverrides>) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: `0x${string}`;
                        blockNumber: bigint;
                        contractAddress: `0x${string}` | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: `0x${string}`;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false, undefined, undefined, undefined, undefined>[];
                        logsBloom: `0x${string}`;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: `0x${string}` | null;
                        transactionHash: `0x${string}`;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    };
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 534352: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Scrollscan";
                    readonly url: "https://scrollscan.com";
                    readonly apiUrl: "https://api.scrollscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 14;
                };
            };
            id: 534352;
            name: "Scroll";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.scroll.io"];
                    readonly webSocket: readonly ["wss://wss-rpc.scroll.io/ws"];
                };
            };
            sourceId?: number | undefined;
            testnet: false;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 314: {
        readonly chain: {
            readonly id: 314;
            readonly name: "Filecoin Mainnet";
            readonly network: "filecoin-mainnet";
            readonly nativeCurrency: {
                readonly decimals: 18;
                readonly name: "filecoin";
                readonly symbol: "FIL";
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.ankr.com/filecoin"];
                };
                readonly public: {
                    readonly http: readonly ["https://rpc.ankr.com/filecoin"];
                };
            };
            readonly blockExplorers: {
                readonly default: {
                    readonly name: "Filfox";
                    readonly url: "https://filfox.info/en";
                };
                readonly filscan: {
                    readonly name: "Filscan";
                    readonly url: "https://filscan.io";
                };
                readonly filscout: {
                    readonly name: "Filscout";
                    readonly url: "https://filscout.io/en";
                };
                readonly glif: {
                    readonly name: "Glif";
                    readonly url: "https://explorer.glif.io";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 3328594;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 7000: {
        readonly chain: {
            readonly id: 7000;
            readonly name: "ZetaChain";
            readonly network: "zetachain";
            readonly nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Zeta";
                readonly symbol: "ZETA";
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://zetachain-evm.blockpi.network/v1/rpc/public", "https://zetachain-mainnet-archive.allthatnode.com:8545", "https://zetachain.rpc.thirdweb.com", "https://jsonrpc.zetachain.nodestake.org"];
                };
                readonly public: {
                    readonly http: readonly ["https://zetachain-evm.blockpi.network/v1/rpc/public", "https://zetachain-mainnet-archive.allthatnode.com:8545", "https://zetachain.rpc.thirdweb.com", "https://jsonrpc.zetachain.nodestake.org"];
                };
            };
            readonly blockExplorers: {
                readonly default: {
                    readonly name: "ZetaScan";
                    readonly url: "https://explorer.zetachain.com/";
                };
                readonly blockscout: {
                    readonly name: "Blockscout";
                    readonly url: "https://zetachain.blockscout.com/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: "0x039e87AB90205F9d87c5b40d4B28e2Be45dA4a20";
                    readonly blockCreated: 1565755;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 25: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Cronos Explorer";
                    readonly url: "https://explorer.cronos.org";
                    readonly apiUrl: "https://explorer-api.cronos.org/mainnet/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 1963112;
                };
            };
            id: 25;
            name: "Cronos Mainnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Cronos";
                readonly symbol: "CRO";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://evm.cronos.org"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 81457: {
        readonly chain: {
            readonly id: 81457;
            readonly name: "Blast";
            readonly network: "blast";
            readonly nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Ether";
                readonly symbol: "ETH";
            };
            readonly rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.blast.io", "https://rpc.ankr.com/blast", "https://blast.din.dev/rpc", "https://blastl2-mainnet.public.blastapi.io", "https://blast.blockpi.network/v1/rpc/public"];
                };
                readonly public: {
                    readonly http: readonly ["https://rpc.blast.io", "https://rpc.ankr.com/blast", "https://blast.din.dev/rpc", "https://blastl2-mainnet.public.blastapi.io", "https://blast.blockpi.network/v1/rpc/public"];
                };
            };
            readonly blockExplorers: {
                readonly default: {
                    readonly name: "BlastScan";
                    readonly url: "https://blastscan.io/";
                };
            };
            readonly contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 88189;
                };
            };
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 421614: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Arbiscan";
                    readonly url: "https://sepolia.arbiscan.io";
                    readonly apiUrl: "https://api-sepolia.arbiscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 81930;
                };
            };
            id: 421614;
            name: "Arbitrum Sepolia";
            nativeCurrency: {
                readonly name: "Arbitrum Sepolia Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia-rollup.arbitrum.io/rpc"];
                };
            };
            sourceId?: number | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 43113: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "SnowScan";
                    readonly url: "https://testnet.snowscan.xyz";
                    readonly apiUrl: "https://api-testnet.snowscan.xyz";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 7096959;
                };
            };
            id: 43113;
            name: "Avalanche Fuji";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Avalanche Fuji";
                readonly symbol: "AVAX";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://api.avax-test.network/ext/bc/C/rpc"];
                };
            };
            sourceId?: number | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 97: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://testnet.bscscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            id: 97;
            name: "Binance Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 4002: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "FTMScan";
                    readonly url: "https://testnet.ftmscan.com";
                    readonly apiUrl: "https://testnet.ftmscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 8328688;
                };
            };
            id: 4002;
            name: "Fantom Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Fantom";
                readonly symbol: "FTM";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.testnet.fantom.network"];
                };
            };
            sourceId?: number | undefined;
            testnet?: boolean | undefined;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 80001: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "PolygonScan";
                    readonly url: "https://mumbai.polygonscan.com";
                    readonly apiUrl: "https://mumbai.polygonscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 25770160;
                };
            };
            id: 80001;
            name: "Polygon Mumbai";
            nativeCurrency: {
                readonly name: "MATIC";
                readonly symbol: "MATIC";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.ankr.com/polygon_mumbai"];
                };
            };
            sourceId?: number | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
    readonly 11155111: {
        readonly chain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Etherscan";
                    readonly url: "https://sepolia.etherscan.io";
                    readonly apiUrl: "https://api-sepolia.etherscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 751532;
                };
                readonly ensRegistry: {
                    readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
                };
                readonly ensUniversalResolver: {
                    readonly address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC";
                    readonly blockCreated: 5317080;
                };
            };
            id: 11155111;
            name: "Sepolia";
            nativeCurrency: {
                readonly name: "Sepolia Ether";
                readonly symbol: "SEP";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.sepolia.org"];
                };
            };
            sourceId?: number | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
        };
        readonly transport: import("viem").HttpTransport;
    };
};
//# sourceMappingURL=viem.d.ts.map