declare const RAW: readonly [{
    readonly chainId: 1;
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://eth.blockscout.com";
        readonly icon: "blockscout";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://ethereum.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Ethereum Mainnet";
    readonly shortName: "eth";
}, {
    readonly chainId: 10;
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://optimistic.etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://optimism.blockscout.com";
        readonly icon: "blockscout";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://optimism.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "OP Mainnet";
    readonly shortName: "oeth";
}, {
    readonly chainId: 25;
    readonly explorers: readonly [{
        readonly name: "Cronos Explorer";
        readonly url: "https://explorer.cronos.org";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "Cronos";
        readonly symbol: "CRO";
        readonly decimals: 18;
    };
    readonly name: "Cronos Mainnet";
    readonly shortName: "cro";
}, {
    readonly chainId: 40;
    readonly explorers: readonly [{
        readonly name: "teloscan";
        readonly url: "https://teloscan.io";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Telos";
        readonly symbol: "TLOS";
        readonly decimals: 18;
    };
    readonly name: "Telos EVM Mainnet";
    readonly shortName: "TelosEVM";
}, {
    readonly chainId: 56;
    readonly explorers: readonly [{
        readonly name: "bscscan";
        readonly url: "https://bscscan.com";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://bnb.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "BNB Chain Native Token";
        readonly symbol: "BNB";
        readonly decimals: 18;
    };
    readonly name: "BNB Smart Chain Mainnet";
    readonly shortName: "bnb";
}, {
    readonly chainId: 66;
    readonly explorers: readonly [{
        readonly name: "OKLink";
        readonly url: "https://www.oklink.com/en/okc";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "OKXChain Global Utility Token";
        readonly symbol: "OKT";
        readonly decimals: 18;
    };
    readonly name: "OKXChain Mainnet";
    readonly shortName: "okt";
}, {
    readonly chainId: 97;
    readonly explorers: readonly [{
        readonly name: "bscscan-testnet";
        readonly url: "https://testnet.bscscan.com";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "BNB Chain Native Token";
        readonly symbol: "tBNB";
        readonly decimals: 18;
    };
    readonly name: "BNB Smart Chain Testnet";
    readonly shortName: "bnbt";
}, {
    readonly chainId: 100;
    readonly explorers: readonly [{
        readonly name: "gnosisscan";
        readonly url: "https://gnosisscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://gnosis.blockscout.com";
        readonly icon: "blockscout";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://gnosis.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "xDAI";
        readonly symbol: "XDAI";
        readonly decimals: 18;
    };
    readonly name: "Gnosis";
    readonly shortName: "gno";
}, {
    readonly chainId: 108;
    readonly explorers: readonly [{
        readonly name: "thundercore-viewblock";
        readonly url: "https://viewblock.io/thundercore";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "ThunderCore Token";
        readonly symbol: "TT";
        readonly decimals: 18;
    };
    readonly name: "ThunderCore Mainnet";
    readonly shortName: "TT";
}, {
    readonly chainId: 122;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://explorer.fuse.io";
        readonly icon: "blockscout";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Fuse";
        readonly symbol: "FUSE";
        readonly decimals: 18;
    };
    readonly name: "Fuse Mainnet";
    readonly shortName: "fuse";
}, {
    readonly chainId: 128;
    readonly explorers: readonly [{
        readonly name: "hecoinfo";
        readonly url: "https://hecoinfo.com";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Huobi ECO Chain Native Token";
        readonly symbol: "HT";
        readonly decimals: 18;
    };
    readonly name: "Huobi ECO Chain Mainnet";
    readonly shortName: "heco";
}, {
    readonly chainId: 137;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://polygonscan.com";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://polygon.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly name: "Polygon Mainnet";
    readonly shortName: "matic";
}, {
    readonly chainId: 199;
    readonly explorers: readonly [{
        readonly name: "BitTorrent Chain Explorer";
        readonly url: "https://bttcscan.com";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "BitTorrent";
        readonly symbol: "BTT";
        readonly decimals: 18;
    };
    readonly name: "BitTorrent Chain Mainnet";
    readonly shortName: "BTT";
}, {
    readonly chainId: 250;
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://ftmscan.com";
        readonly icon: "ftmscan";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://fantom.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly name: "Fantom Opera";
    readonly shortName: "ftm";
}, {
    readonly chainId: 288;
    readonly explorers: readonly [{
        readonly name: "Bobascan";
        readonly url: "https://bobascan.com";
        readonly standard: "none";
    }, {
        readonly name: "Blockscout";
        readonly url: "https://blockexplorer.boba.network";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Boba Network";
    readonly shortName: "Boba";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://gateway.boba.network";
        }];
    };
}, {
    readonly chainId: 314;
    readonly explorers: readonly [{
        readonly name: "Filfox";
        readonly url: "https://filfox.info/en";
        readonly standard: "none";
    }, {
        readonly name: "Beryx";
        readonly url: "https://beryx.zondax.ch";
        readonly standard: "none";
    }, {
        readonly name: "Glif Explorer";
        readonly url: "https://explorer.glif.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Dev.storage";
        readonly url: "https://dev.storage";
        readonly standard: "none";
    }, {
        readonly name: "Filscan";
        readonly url: "https://filscan.io";
        readonly standard: "none";
    }, {
        readonly name: "Filscout";
        readonly url: "https://filscout.io/en";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "filecoin";
        readonly symbol: "FIL";
        readonly decimals: 18;
    };
    readonly name: "Filecoin - Mainnet";
    readonly shortName: "filecoin";
}, {
    readonly chainId: 324;
    readonly explorers: readonly [{
        readonly name: "zkSync Era Block Explorer";
        readonly url: "https://explorer.zksync.io";
        readonly icon: "zksync-era";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "zkSync Mainnet";
    readonly shortName: "zksync";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.zksync.io/";
        }];
    };
}, {
    readonly chainId: 1088;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://andromeda-explorer.metis.io";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Metis";
        readonly symbol: "METIS";
        readonly decimals: 18;
    };
    readonly name: "Metis Andromeda Mainnet";
    readonly shortName: "metis-andromeda";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.metis.io";
        }];
    };
}, {
    readonly chainId: 1101;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://zkevm.polygonscan.com";
        readonly icon: "zkevm";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Polygon zkEVM";
    readonly shortName: "zkevm";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.zkevm-rpc.com";
        }];
    };
}, {
    readonly chainId: 1116;
    readonly explorers: readonly [{
        readonly name: "Core Scan";
        readonly url: "https://scan.coredao.org";
        readonly icon: "core";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Core Blockchain Native Token";
        readonly symbol: "CORE";
        readonly decimals: 18;
    };
    readonly name: "Core Blockchain Mainnet";
    readonly shortName: "core";
}, {
    readonly chainId: 1284;
    readonly explorers: readonly [{
        readonly name: "moonscan";
        readonly url: "https://moonbeam.moonscan.io";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "Glimmer";
        readonly symbol: "GLMR";
        readonly decimals: 18;
    };
    readonly name: "Moonbeam";
    readonly shortName: "mbeam";
}, {
    readonly chainId: 1285;
    readonly explorers: readonly [{
        readonly name: "moonscan";
        readonly url: "https://moonriver.moonscan.io";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "Moonriver";
        readonly symbol: "MOVR";
        readonly decimals: 18;
    };
    readonly name: "Moonriver";
    readonly shortName: "mriver";
}, {
    readonly chainId: 2222;
    readonly explorers: readonly [{
        readonly name: "Kava EVM Explorer";
        readonly url: "https://kavascan.com";
        readonly standard: "EIP3091";
        readonly icon: "kava";
    }];
    readonly nativeCurrency: {
        readonly name: "Kava";
        readonly symbol: "KAVA";
        readonly decimals: 18;
    };
    readonly name: "Kava";
    readonly shortName: "kava";
}, {
    readonly chainId: 4002;
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://testnet.ftmscan.com";
        readonly icon: "ftmscan";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly name: "Fantom Testnet";
    readonly shortName: "tftm";
}, {
    readonly chainId: 7000;
    readonly explorers: readonly [{
        readonly name: "ZetaChain Mainnet Explorer";
        readonly url: "https://explorer.mainnet.zetachain.com";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "Zeta";
        readonly symbol: "ZETA";
        readonly decimals: 18;
    };
    readonly name: "ZetaChain Mainnet";
    readonly shortName: "zetachain-mainnet";
}, {
    readonly chainId: 8453;
    readonly explorers: readonly [{
        readonly name: "basescan";
        readonly url: "https://basescan.org";
        readonly standard: "none";
    }, {
        readonly name: "basescout";
        readonly url: "https://base.blockscout.com";
        readonly icon: "blockscout";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://base.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Base";
    readonly shortName: "base";
}, {
    readonly chainId: 11235;
    readonly explorers: readonly [{
        readonly name: "Mainnet HAQQ Explorer";
        readonly url: "https://explorer.haqq.network";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Islamic Coin";
        readonly symbol: "ISLM";
        readonly decimals: 18;
    };
    readonly name: "Haqq Network";
    readonly shortName: "ISLM";
}, {
    readonly chainId: 42161;
    readonly explorers: readonly [{
        readonly name: "Arbiscan";
        readonly url: "https://arbiscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Arbitrum Explorer";
        readonly url: "https://explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://arbitrum.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Arbitrum One";
    readonly shortName: "arb1";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io";
        }];
    };
}, {
    readonly chainId: 42170;
    readonly explorers: readonly [{
        readonly name: "Arbitrum Nova Chain Explorer";
        readonly url: "https://nova-explorer.arbitrum.io";
        readonly icon: "blockscout";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://nova.dex.guru";
        readonly icon: "dexguru";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Arbitrum Nova";
    readonly shortName: "arb-nova";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io";
        }];
    };
}, {
    readonly chainId: 42220;
    readonly explorers: readonly [{
        readonly name: "Celoscan";
        readonly url: "https://celoscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://explorer.celo.org";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "CELO";
        readonly symbol: "CELO";
        readonly decimals: 18;
    };
    readonly name: "Celo Mainnet";
    readonly shortName: "celo";
}, {
    readonly chainId: 43113;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://testnet.snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly name: "Avalanche Fuji Testnet";
    readonly shortName: "Fuji";
}, {
    readonly chainId: 43114;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly name: "Avalanche C-Chain";
    readonly shortName: "avax";
}, {
    readonly chainId: 43288;
    readonly explorers: readonly [{
        readonly name: "Boba Avax Explorer";
        readonly url: "https://blockexplorer.avax.boba.network";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "Boba Token";
        readonly symbol: "BOBA";
        readonly decimals: 18;
    };
    readonly name: "Boba Avax";
    readonly shortName: "bobaavax";
}, {
    readonly chainId: 56288;
    readonly explorers: readonly [{
        readonly name: "Boba BNB block explorer";
        readonly url: "https://blockexplorer.bnb.boba.network";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "Boba Token";
        readonly symbol: "BOBA";
        readonly decimals: 18;
    };
    readonly name: "Boba BNB Mainnet";
    readonly shortName: "BobaBnb";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-5";
        readonly bridges: readonly [{
            readonly url: "https://gateway.boba.network";
        }];
    };
}, {
    readonly chainId: 59144;
    readonly explorers: readonly [{
        readonly name: "Etherscan";
        readonly url: "https://lineascan.build";
        readonly standard: "EIP3091";
        readonly icon: "linea";
    }, {
        readonly name: "Blockscout";
        readonly url: "https://explorer.linea.build";
        readonly standard: "EIP3091";
        readonly icon: "linea";
    }, {
        readonly name: "L2scan";
        readonly url: "https://linea.l2scan.co";
        readonly standard: "EIP3091";
        readonly icon: "linea";
    }];
    readonly nativeCurrency: {
        readonly name: "Linea Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Linea";
    readonly shortName: "linea";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.linea.build";
        }];
    };
}, {
    readonly chainId: 80001;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://mumbai.polygonscan.com";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly name: "Mumbai";
    readonly shortName: "maticmum";
}, {
    readonly chainId: 81457;
    readonly explorers: readonly [{
        readonly name: "Blastscan";
        readonly url: "https://blastscan.io";
        readonly icon: "blast";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Blast Explorer";
        readonly url: "https://blastexplorer.io";
        readonly icon: "blast";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Blast";
    readonly shortName: "blastmainnet";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
    };
}, {
    readonly chainId: 421614;
    readonly explorers: readonly [{
        readonly name: "Arbitrum Sepolia Rollup Testnet Explorer";
        readonly url: "https://sepolia-explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Arbitrum Sepolia";
    readonly shortName: "arb-sep";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-11155111";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io";
        }];
    };
}, {
    readonly chainId: 534352;
    readonly explorers: readonly [{
        readonly name: "Scrollscan";
        readonly url: "https://scrollscan.com";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Blockscout";
        readonly url: "https://blockscout.scroll.io";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Scroll";
    readonly shortName: "scr";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://scroll.io/bridge";
        }];
    };
}, {
    readonly chainId: 11155111;
    readonly explorers: readonly [{
        readonly name: "etherscan-sepolia";
        readonly url: "https://sepolia.etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "otterscan-sepolia";
        readonly url: "https://sepolia.otterscan.io";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly name: "Sepolia";
    readonly shortName: "sep";
}, {
    readonly chainId: 1666600000;
    readonly explorers: readonly [{
        readonly name: "Harmony Block Explorer";
        readonly url: "https://explorer.harmony.one";
        readonly standard: "EIP3091";
    }];
    readonly nativeCurrency: {
        readonly name: "ONE";
        readonly symbol: "ONE";
        readonly decimals: 18;
    };
    readonly name: "Harmony Mainnet Shard 0";
    readonly shortName: "hmy-s0";
}, {
    readonly chainId: 11297108109;
    readonly explorers: readonly [{
        readonly name: "Chainlens";
        readonly url: "https://palm.chainlens.com";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Dora";
        readonly url: "https://www.ondora.xyz/network/palm";
        readonly standard: "none";
    }];
    readonly nativeCurrency: {
        readonly name: "PALM";
        readonly symbol: "PALM";
        readonly decimals: 18;
    };
    readonly name: "Palm";
    readonly shortName: "palm";
}];
type Data = (typeof RAW)[number];
export interface Chain {
    name: string;
    nativeCurrency: NativeCurrency;
    shortName: string;
    chainId: number;
    explorers?: Explorer[];
    parent?: Parent;
}
interface Explorer {
    name: string;
    url: string;
    standard: Standard;
    icon?: string;
}
declare const Standard: {
    readonly Eip3091: "EIP3091";
    readonly None: "none";
};
type Standard = (typeof Standard)[keyof typeof Standard];
interface NativeCurrency {
    name: string;
    symbol: string;
    decimals: number;
}
interface Parent {
    type: Type;
    chain: string;
    bridges?: Bridge[];
}
interface Bridge {
    url: string;
}
declare const Type: {
    readonly L2: "L2";
    readonly Shard: "shard";
};
type Type = (typeof Type)[keyof typeof Type];
export declare class Chain implements Chain {
    static fromRaw(data: Data): Chain;
    static from(chainId: number): Chain | undefined;
    static fromShortName(shortName: string): Chain | undefined;
    static fromChainId(chainId: number): Chain | undefined;
    static txUrl(chainId: number, txHash: string): string;
    static blockUrl(chainId: number, blockHashOrHeight: string): string;
    static tokenUrl(chainId: number, tokenAddress: string): string;
    static accountUrl(chainId: number, accountAddress: string): string;
    constructor(data: Data);
    getTxUrl(txHash: string): string;
    getBlockUrl(blockHashOrHeight: string): string;
    getTokenUrl(tokenAddress: string): string;
    getAccountUrl(accountAddress: string): string;
}
export declare const natives: {
    [k: string]: NativeCurrency;
};
export declare const chains: {
    [k: string]: Chain;
};
export declare const chainsL2: {
    [k: string]: Chain;
};
export declare const chainIds: (1 | 137 | 80001 | 250 | 4002 | 100 | 56 | 97 | 42161 | 42170 | 421614 | 43114 | 43113 | 128 | 1666600000 | 66 | 42220 | 11297108109 | 1285 | 122 | 40 | 1284 | 10 | 2222 | 1088 | 288 | 43288 | 56288 | 199 | 11155111 | 1101 | 108 | 314 | 11235 | 1116 | 324 | 59144 | 8453 | 534352 | 7000 | 25 | 81457)[];
export declare const chainShortNameToChainId: {
    [k: string]: number;
};
export declare const chainShortName: {
    [k: string]: string;
};
export declare const chainName: {
    [k: string]: string;
};
export * from './constants.js';
export default chains;
//# sourceMappingURL=index.d.ts.map