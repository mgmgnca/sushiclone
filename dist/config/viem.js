"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicClientConfig = exports.publicChains = exports.publicTransports = exports.blast = exports.zetachain = exports.filecoin = exports.core = exports.bttc = exports.bobaBnb = exports.bobaAvax = exports.palm = exports.heco = exports.kava = exports.fuse = exports.zkSync = exports.polygonZkEvm = exports.polygon = exports.optimism = exports.okc = exports.moonriver = exports.moonbeam = exports.metis = exports.mainnet = exports.localhost = exports.linea = exports.hardhat = exports.goerli = exports.gnosis = exports.foundry = exports.fantom = exports.celo = exports.bsc = exports.boba = exports.base = exports.avalanche = exports.arbitrumNova = exports.arbitrum = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
Object.defineProperty(exports, "arbitrum", { enumerable: true, get: function () { return chains_1.arbitrum; } });
Object.defineProperty(exports, "arbitrumNova", { enumerable: true, get: function () { return 
    // arbitrumGoerli,
    chains_1.arbitrumNova; } });
Object.defineProperty(exports, "avalanche", { enumerable: true, get: function () { return 
    // aurora,
    // auroraGoerli,
    chains_1.avalanche; } });
Object.defineProperty(exports, "base", { enumerable: true, get: function () { return 
    //  avalancheFuji,
    chains_1.base; } });
Object.defineProperty(exports, "boba", { enumerable: true, get: function () { return chains_1.boba; } });
Object.defineProperty(exports, "bsc", { enumerable: true, get: function () { return 
    // bronos,
    // bronosTestnet,
    chains_1.bsc; } });
Object.defineProperty(exports, "celo", { enumerable: true, get: function () { return 
    // bscTestnet,
    // canto,
    chains_1.celo; } });
Object.defineProperty(exports, "fantom", { enumerable: true, get: function () { return 
    // celoAlfajores,
    // crossbell,
    // evmos,
    //  evmosTestnet,
    chains_1.fantom; } });
Object.defineProperty(exports, "foundry", { enumerable: true, get: function () { return 
    // fantomTestnet,
    // filecoinTestnet,
    chains_1.foundry; } });
Object.defineProperty(exports, "gnosis", { enumerable: true, get: function () { return chains_1.gnosis; } });
Object.defineProperty(exports, "goerli", { enumerable: true, get: function () { return chains_1.goerli; } });
Object.defineProperty(exports, "hardhat", { enumerable: true, get: function () { return 
    // gnosisChiado,
    chains_1.hardhat; } });
Object.defineProperty(exports, "linea", { enumerable: true, get: function () { return 
    // iotex,
    // iotexTestnet,
    chains_1.linea; } });
Object.defineProperty(exports, "localhost", { enumerable: true, get: function () { return chains_1.localhost; } });
Object.defineProperty(exports, "mainnet", { enumerable: true, get: function () { return chains_1.mainnet; } });
Object.defineProperty(exports, "metis", { enumerable: true, get: function () { return chains_1.metis; } });
Object.defineProperty(exports, "moonbeam", { enumerable: true, get: function () { return 
    // metisGoerli,
    chains_1.moonbeam; } });
Object.defineProperty(exports, "moonriver", { enumerable: true, get: function () { return chains_1.moonriver; } });
Object.defineProperty(exports, "okc", { enumerable: true, get: function () { return chains_1.okc; } });
Object.defineProperty(exports, "optimism", { enumerable: true, get: function () { return chains_1.optimism; } });
Object.defineProperty(exports, "polygon", { enumerable: true, get: function () { return 
    //  optimismGoerli,
    chains_1.polygon; } });
Object.defineProperty(exports, "polygonZkEvm", { enumerable: true, get: function () { return chains_1.polygonZkEvm; } });
Object.defineProperty(exports, "zkSync", { enumerable: true, get: function () { return chains_1.zkSync; } });
const index_js_1 = require("../chain/index.js");
// Chains missing multicall
exports.fuse = {
    ...chains_1.fuse,
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 16146628,
        },
    },
};
const haqq = {
    ...chains_1.haqqMainnet,
    contracts: {
        multicall3: {
            address: '0xfe2D04A5018AC1B366F599A13BF4e0C760b2aE6b',
            blockCreated: 6589598,
        },
    },
};
// Chains missing from viem entirely
exports.kava = {
    id: index_js_1.ChainId.KAVA,
    name: 'Kava',
    network: 'kava',
    nativeCurrency: { name: 'Kava', symbol: 'KAVA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
        },
        public: {
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Kavascan',
            url: 'https://explorer.kava.io/',
        },
        default: {
            name: 'Kavascan',
            url: 'https://explorer.kava.io/',
        },
    },
    contracts: {
        multicall3: {
            address: '0x1578f6d2D3168acF41b506AA666A521994F6BAB6',
            blockCreated: 1176602,
        },
    },
};
exports.heco = {
    id: index_js_1.ChainId.HECO,
    name: 'Huobi ECO Chain',
    network: 'huobieco',
    nativeCurrency: { name: 'Huobi Token', symbol: 'HT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://http-mainnet.hecochain.com'],
        },
        public: {
            http: ['https://http-mainnet.hecochain.com'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'HecoInfo',
            url: 'https://www.hecoinfo.com/',
        },
        default: {
            name: 'Heco Explorer',
            url: 'https://www.hecoinfo.com/',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 14413501,
        },
    },
};
exports.palm = {
    id: index_js_1.ChainId.PALM,
    name: 'Palm',
    network: 'palm',
    nativeCurrency: { name: 'Palm', symbol: 'PALM', decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                'https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b',
            ],
        },
        public: {
            http: [
                'https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b',
            ],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Palm Explorer',
            url: 'https://explorer.palm.io/',
        },
        default: {
            name: 'Palm Explorer',
            url: 'https://explorer.palm.io/',
        },
    },
    contracts: {
        multicall3: {
            address: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
            blockCreated: 8005532,
        },
    },
};
exports.bobaAvax = {
    id: index_js_1.ChainId.BOBA_AVAX,
    name: 'Boba Avax',
    network: 'boba-avax',
    nativeCurrency: { name: 'Boba', symbol: 'BOBA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://avax.boba.network'],
        },
        public: {
            http: ['https://avax.boba.network'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Boba Avalanche Mainnet Explorer',
            url: 'https://blockexplorer.avax.boba.network/',
        },
        default: {
            name: 'Boba Avalanche Mainnet Explorer',
            url: 'https://blockexplorer.avax.boba.network/',
        },
    },
    contracts: {
        multicall3: {
            address: '0x2c46217Fae90D302d1Fb5467ADA504bC2A84f448',
            blockCreated: 3652,
        },
    },
};
exports.bobaBnb = {
    id: index_js_1.ChainId.BOBA_BNB,
    name: 'Boba BNB',
    network: 'boba-bnb',
    nativeCurrency: { name: 'Boba', symbol: 'BOBA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://bnb.boba.network'],
        },
        public: {
            http: ['https://bnb.boba.network'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Boba BNB Mainnet Explorer',
            url: 'https://blockexplorer.bnb.boba.network/',
        },
        default: {
            name: 'Boba BNB Mainnet Explorer',
            url: 'https://blockexplorer.bnb.boba.network/',
        },
    },
    contracts: {
        multicall3: {
            address: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
            blockCreated: 18871,
        },
    },
};
exports.bttc = {
    id: index_js_1.ChainId.BTTC,
    name: 'BitTorrent Chain',
    network: 'btt',
    nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.bittorrentchain.io'],
        },
        public: {
            http: ['https://rpc.bittorrentchain.io'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'BitTorrent Chain Explorer',
            url: 'https://bttcscan.com/',
        },
        default: {
            name: 'BitTorrent Chain Explorer',
            url: 'https://bttcscan.com/',
        },
    },
    contracts: {
        multicall3: {
            address: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
            blockCreated: 13014184,
        },
    },
};
const thundercore = {
    id: index_js_1.ChainId.THUNDERCORE,
    name: 'ThunderCore',
    network: 'thundercore',
    nativeCurrency: { name: 'Thunder Token', symbol: 'TT', decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet-rpc.thundercore.com',
                // 'https://mainnet-rpc.thundercore.io',
                // 'https://mainnet-rpc.thundertoken.net',
            ],
        },
        public: {
            http: [
                'https://mainnet-rpc.thundercore.com',
                'https://mainnet-rpc.thundercore.io',
                'https://mainnet-rpc.thundertoken.net',
            ],
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 100671921,
        },
    },
};
exports.core = {
    id: index_js_1.ChainId.CORE,
    name: 'Core',
    network: 'core',
    nativeCurrency: { name: 'Core', symbol: 'CORE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.coredao.org', 'https://rpc-core.icecreamswap.com'],
        },
        public: {
            http: ['https://rpc.coredao.org', 'https://rpc-core.icecreamswap.com'],
        },
    },
    contracts: {
        multicall3: {
            address: '0xC4b2e1718E850535A0f3e79F7fC522d966821688',
            blockCreated: 5087121,
        },
    },
};
exports.filecoin = {
    id: index_js_1.ChainId.FILECOIN,
    name: 'Filecoin Mainnet',
    network: 'filecoin-mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'filecoin',
        symbol: 'FIL',
    },
    rpcUrls: {
        default: { http: ['https://rpc.ankr.com/filecoin'] },
        public: { http: ['https://rpc.ankr.com/filecoin'] },
    },
    blockExplorers: {
        default: { name: 'Filfox', url: 'https://filfox.info/en' },
        filscan: { name: 'Filscan', url: 'https://filscan.io' },
        filscout: { name: 'Filscout', url: 'https://filscout.io/en' },
        glif: { name: 'Glif', url: 'https://explorer.glif.io' },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3328594,
        },
    },
};
exports.zetachain = {
    id: index_js_1.ChainId.ZETACHAIN,
    name: 'ZetaChain',
    network: 'zetachain',
    nativeCurrency: {
        decimals: 18,
        name: 'Zeta',
        symbol: 'ZETA',
    },
    rpcUrls: {
        default: {
            http: [
                'https://zetachain-evm.blockpi.network/v1/rpc/public',
                'https://zetachain-mainnet-archive.allthatnode.com:8545',
                'https://zetachain.rpc.thirdweb.com',
                'https://jsonrpc.zetachain.nodestake.org',
            ],
        },
        public: {
            http: [
                'https://zetachain-evm.blockpi.network/v1/rpc/public',
                'https://zetachain-mainnet-archive.allthatnode.com:8545',
                'https://zetachain.rpc.thirdweb.com',
                'https://jsonrpc.zetachain.nodestake.org',
            ],
        },
    },
    blockExplorers: {
        default: { name: 'ZetaScan', url: 'https://explorer.zetachain.com/' },
        blockscout: {
            name: 'Blockscout',
            url: 'https://zetachain.blockscout.com/',
        },
    },
    contracts: {
        multicall3: {
            address: '0x039e87AB90205F9d87c5b40d4B28e2Be45dA4a20',
            blockCreated: 1565755,
        },
    },
};
exports.blast = {
    id: index_js_1.ChainId.BLAST,
    name: 'Blast',
    network: 'blast',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.blast.io',
                'https://rpc.ankr.com/blast',
                'https://blast.din.dev/rpc',
                'https://blastl2-mainnet.public.blastapi.io',
                'https://blast.blockpi.network/v1/rpc/public',
            ],
        },
        public: {
            http: [
                'https://rpc.blast.io',
                'https://rpc.ankr.com/blast',
                'https://blast.din.dev/rpc',
                'https://blastl2-mainnet.public.blastapi.io',
                'https://blast.blockpi.network/v1/rpc/public',
            ],
        },
    },
    blockExplorers: {
        default: { name: 'BlastScan', url: 'https://blastscan.io/' },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 88189,
        },
    },
};
// const alchemyId =
//   process.env['ALCHEMY_ID'] || process.env['NEXT_PUBLIC_ALCHEMY_ID']
const drpcId = process.env['DRPC_ID'] || process.env['NEXT_PUBLIC_DRPC_ID'];
exports.publicTransports = {
    [index_js_1.ChainId.ARBITRUM_NOVA]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=arbitrum-nova&dkey=${drpcId}`),
    [index_js_1.ChainId.ARBITRUM]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=arbitrum&dkey=${drpcId}`),
    [index_js_1.ChainId.AVALANCHE]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=avalanche&dkey=${drpcId}`),
    [index_js_1.ChainId.BOBA]: (0, viem_1.http)('https://mainnet.boba.network'),
    [index_js_1.ChainId.BOBA_AVAX]: (0, viem_1.http)('https://avax.boba.network'),
    [index_js_1.ChainId.BOBA_BNB]: (0, viem_1.http)('https://bnb.boba.network'),
    [index_js_1.ChainId.BSC]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=bsc&dkey=${drpcId}`),
    [index_js_1.ChainId.BTTC]: (0, viem_1.http)('https://rpc.bittorrentchain.io'),
    [index_js_1.ChainId.CELO]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=celo&dkey=${drpcId}`),
    [index_js_1.ChainId.ETHEREUM]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=ethereum&dkey=${drpcId}`),
    [index_js_1.ChainId.FANTOM]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=fantom&dkey=${drpcId}`),
    [index_js_1.ChainId.FUSE]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=fuse&dkey=${drpcId}`),
    [index_js_1.ChainId.GNOSIS]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=gnosis&dkey=${drpcId}`),
    [index_js_1.ChainId.HARMONY]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=harmony-0&dkey=${drpcId}`),
    [index_js_1.ChainId.KAVA]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=kava&dkey=${drpcId}`),
    [index_js_1.ChainId.METIS]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=metis&dkey=${drpcId}`),
    [index_js_1.ChainId.MOONBEAM]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=moonbeam&dkey=${drpcId}`),
    [index_js_1.ChainId.MOONRIVER]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=moonriver&dkey=${drpcId}`),
    [index_js_1.ChainId.OPTIMISM]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=optimism&dkey=${drpcId}`),
    [index_js_1.ChainId.POLYGON]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=polygon&dkey=${drpcId}`),
    [index_js_1.ChainId.POLYGON_ZKEVM]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=polygon-zkevm&dkey=${drpcId}`),
    [index_js_1.ChainId.THUNDERCORE]: (0, viem_1.http)('https://mainnet-rpc.thundercore.com'),
    [index_js_1.ChainId.HAQQ]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=haqq&dkey=${drpcId}`),
    [index_js_1.ChainId.CORE]: (0, viem_1.http)('https://rpc.coredao.org'),
    [index_js_1.ChainId.TELOS]: (0, viem_1.http)('https://rpc1.us.telos.net/evm'),
    [index_js_1.ChainId.PALM]: (0, viem_1.http)(exports.palm.rpcUrls.default.http[0]),
    [index_js_1.ChainId.OKEX]: (0, viem_1.http)(chains_1.okc.rpcUrls.default.http[0]),
    [index_js_1.ChainId.HECO]: (0, viem_1.http)(exports.heco.rpcUrls.default.http[0]),
    [index_js_1.ChainId.ZKSYNC_ERA]: (0, viem_1.http)(chains_1.zkSync.rpcUrls.default.http[0]),
    [index_js_1.ChainId.LINEA]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=linea&dkey=${drpcId}`),
    [index_js_1.ChainId.BASE]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=base&dkey=${drpcId}`),
    [index_js_1.ChainId.SCROLL]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=scroll&dkey=${drpcId}`),
    [index_js_1.ChainId.FILECOIN]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=filecoin&dkey=${drpcId}`),
    [index_js_1.ChainId.ZETACHAIN]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=zeta-chain&dkey=${drpcId}`),
    [index_js_1.ChainId.CRONOS]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=cronos&dkey=${drpcId}`),
    [index_js_1.ChainId.BLAST]: (0, viem_1.http)(`https://lb.drpc.org/ogrpc?network=blast&dkey=${drpcId}`),
    /* Testnets */ // TODO: add testnet transports
    [index_js_1.ChainId.ARBITRUM_TESTNET]: (0, viem_1.http)('https://sepolia-rollup.arbitrum.io/rpc'),
    [index_js_1.ChainId.AVALANCHE_TESTNET]: (0, viem_1.http)('https://api.avax-test.network/ext/bc/C/rpc'),
    [index_js_1.ChainId.BSC_TESTNET]: (0, viem_1.http)('https://bsc-testnet.public.blastapi.io'),
    [index_js_1.ChainId.FANTOM_TESTNET]: (0, viem_1.http)('https://rpc.testnet.fantom.network'),
    [index_js_1.ChainId.POLYGON_TESTNET]: (0, viem_1.http)('https://rpc.ankr.com/polygon_mumbai'),
    [index_js_1.ChainId.SEPOLIA]: (0, viem_1.http)('https://sepolia.drpc.org'),
};
exports.publicChains = [
    chains_1.arbitrumNova,
    chains_1.arbitrum,
    chains_1.avalanche,
    chains_1.boba,
    exports.bobaAvax,
    exports.bobaBnb,
    chains_1.bsc,
    exports.bttc,
    exports.blast,
    chains_1.celo,
    chains_1.cronos,
    chains_1.mainnet,
    chains_1.fantom,
    exports.fuse,
    chains_1.gnosis,
    chains_1.harmonyOne,
    exports.kava,
    chains_1.metis,
    chains_1.optimism,
    chains_1.moonbeam,
    chains_1.moonriver,
    chains_1.polygon,
    chains_1.polygonZkEvm,
    thundercore,
    haqq,
    exports.core,
    chains_1.telos,
    exports.palm,
    chains_1.okc,
    exports.heco,
    chains_1.zkSync,
    chains_1.linea,
    chains_1.base,
    chains_1.scroll,
    exports.filecoin,
    exports.zetachain,
    /* Testnets */
    chains_1.arbitrumSepolia,
    chains_1.avalancheFuji,
    chains_1.bscTestnet,
    chains_1.fantomTestnet,
    chains_1.polygonMumbai,
    chains_1.sepolia,
];
exports.publicClientConfig = {
    [index_js_1.ChainId.ARBITRUM_NOVA]: {
        chain: chains_1.arbitrumNova,
        transport: exports.publicTransports[index_js_1.ChainId.ARBITRUM_NOVA],
    },
    [index_js_1.ChainId.ARBITRUM]: {
        chain: chains_1.arbitrum,
        transport: exports.publicTransports[index_js_1.ChainId.ARBITRUM],
    },
    [index_js_1.ChainId.AVALANCHE]: {
        chain: chains_1.avalanche,
        transport: exports.publicTransports[index_js_1.ChainId.AVALANCHE],
    },
    [index_js_1.ChainId.BOBA]: {
        chain: chains_1.boba,
        transport: exports.publicTransports[index_js_1.ChainId.BOBA],
    },
    [index_js_1.ChainId.BOBA_AVAX]: {
        chain: exports.bobaAvax,
        transport: exports.publicTransports[index_js_1.ChainId.BOBA_AVAX],
    },
    [index_js_1.ChainId.BOBA_BNB]: {
        chain: exports.bobaBnb,
        transport: exports.publicTransports[index_js_1.ChainId.BOBA_BNB],
    },
    [index_js_1.ChainId.BSC]: {
        chain: chains_1.bsc,
        transport: exports.publicTransports[index_js_1.ChainId.BSC],
    },
    [index_js_1.ChainId.BTTC]: {
        chain: exports.bttc,
        transport: exports.publicTransports[index_js_1.ChainId.BTTC],
    },
    [index_js_1.ChainId.CELO]: {
        chain: chains_1.celo,
        transport: exports.publicTransports[index_js_1.ChainId.CELO],
    },
    [index_js_1.ChainId.ETHEREUM]: {
        chain: chains_1.mainnet,
        transport: exports.publicTransports[index_js_1.ChainId.ETHEREUM],
    },
    [index_js_1.ChainId.FANTOM]: {
        chain: chains_1.fantom,
        transport: exports.publicTransports[index_js_1.ChainId.FANTOM],
    },
    [index_js_1.ChainId.FUSE]: {
        chain: exports.fuse,
        transport: exports.publicTransports[index_js_1.ChainId.FUSE],
    },
    [index_js_1.ChainId.GNOSIS]: {
        chain: chains_1.gnosis,
        transport: exports.publicTransports[index_js_1.ChainId.GNOSIS],
    },
    [index_js_1.ChainId.HARMONY]: {
        chain: chains_1.harmonyOne,
        transport: exports.publicTransports[index_js_1.ChainId.HARMONY],
    },
    [index_js_1.ChainId.KAVA]: {
        chain: exports.kava,
        transport: exports.publicTransports[index_js_1.ChainId.KAVA],
    },
    [index_js_1.ChainId.METIS]: {
        chain: chains_1.metis,
        transport: exports.publicTransports[index_js_1.ChainId.METIS],
    },
    [index_js_1.ChainId.MOONBEAM]: {
        chain: chains_1.moonbeam,
        transport: exports.publicTransports[index_js_1.ChainId.MOONBEAM],
    },
    [index_js_1.ChainId.MOONRIVER]: {
        chain: chains_1.moonriver,
        transport: exports.publicTransports[index_js_1.ChainId.MOONRIVER],
    },
    [index_js_1.ChainId.OPTIMISM]: {
        chain: chains_1.optimism,
        transport: exports.publicTransports[index_js_1.ChainId.OPTIMISM],
    },
    [index_js_1.ChainId.POLYGON]: {
        chain: chains_1.polygon,
        transport: exports.publicTransports[index_js_1.ChainId.POLYGON],
    },
    [index_js_1.ChainId.POLYGON_ZKEVM]: {
        chain: chains_1.polygonZkEvm,
        transport: exports.publicTransports[index_js_1.ChainId.POLYGON_ZKEVM],
    },
    [index_js_1.ChainId.THUNDERCORE]: {
        chain: thundercore,
        transport: exports.publicTransports[index_js_1.ChainId.THUNDERCORE],
    },
    [index_js_1.ChainId.HAQQ]: {
        chain: haqq,
        transport: exports.publicTransports[index_js_1.ChainId.HAQQ],
    },
    [index_js_1.ChainId.CORE]: {
        chain: exports.core,
        transport: exports.publicTransports[index_js_1.ChainId.CORE],
    },
    [index_js_1.ChainId.TELOS]: {
        chain: chains_1.telos,
        transport: exports.publicTransports[index_js_1.ChainId.TELOS],
    },
    [index_js_1.ChainId.PALM]: {
        chain: exports.palm,
        transport: exports.publicTransports[index_js_1.ChainId.PALM],
    },
    [index_js_1.ChainId.OKEX]: {
        chain: chains_1.okc,
        transport: exports.publicTransports[index_js_1.ChainId.OKEX],
    },
    [index_js_1.ChainId.HECO]: {
        chain: exports.heco,
        transport: exports.publicTransports[index_js_1.ChainId.HECO],
    },
    [index_js_1.ChainId.ZKSYNC_ERA]: {
        chain: chains_1.zkSync,
        transport: exports.publicTransports[index_js_1.ChainId.ZKSYNC_ERA],
    },
    [index_js_1.ChainId.LINEA]: {
        chain: chains_1.linea,
        transport: exports.publicTransports[index_js_1.ChainId.LINEA],
    },
    [index_js_1.ChainId.BASE]: {
        chain: chains_1.base,
        transport: exports.publicTransports[index_js_1.ChainId.BASE],
    },
    [index_js_1.ChainId.SCROLL]: {
        chain: chains_1.scroll,
        transport: exports.publicTransports[index_js_1.ChainId.SCROLL],
    },
    [index_js_1.ChainId.FILECOIN]: {
        chain: exports.filecoin,
        transport: exports.publicTransports[index_js_1.ChainId.FILECOIN],
    },
    [index_js_1.ChainId.ZETACHAIN]: {
        chain: exports.zetachain,
        transport: exports.publicTransports[index_js_1.ChainId.ZETACHAIN],
    },
    [index_js_1.ChainId.CRONOS]: {
        chain: chains_1.cronos,
        transport: exports.publicTransports[index_js_1.ChainId.CRONOS],
    },
    [index_js_1.ChainId.BLAST]: {
        chain: exports.blast,
        transport: exports.publicTransports[index_js_1.ChainId.BLAST],
    },
    /* Testnets */
    [index_js_1.ChainId.ARBITRUM_TESTNET]: {
        chain: chains_1.arbitrumSepolia,
        transport: exports.publicTransports[index_js_1.ChainId.ARBITRUM_TESTNET],
    },
    [index_js_1.ChainId.AVALANCHE_TESTNET]: {
        chain: chains_1.avalancheFuji,
        transport: exports.publicTransports[index_js_1.ChainId.AVALANCHE_TESTNET],
    },
    [index_js_1.ChainId.BSC_TESTNET]: {
        chain: chains_1.bscTestnet,
        transport: exports.publicTransports[index_js_1.ChainId.BSC_TESTNET],
    },
    [index_js_1.ChainId.FANTOM_TESTNET]: {
        chain: chains_1.fantomTestnet,
        transport: exports.publicTransports[index_js_1.ChainId.FANTOM_TESTNET],
    },
    [index_js_1.ChainId.POLYGON_TESTNET]: {
        chain: chains_1.polygonMumbai,
        transport: exports.publicTransports[index_js_1.ChainId.POLYGON_TESTNET],
    },
    [index_js_1.ChainId.SEPOLIA]: {
        chain: chains_1.sepolia,
        transport: exports.publicTransports[index_js_1.ChainId.SEPOLIA],
    },
};
//# sourceMappingURL=viem.js.map