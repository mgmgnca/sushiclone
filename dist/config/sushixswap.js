"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSquidAdapterChainId = exports.SQUID_ADAPTER_ADDRESS = exports.SQUID_ADAPTER_SUPPORTED_CHAIN_IDS = exports.isStargateAdapterChainId = exports.STARGATE_ADAPTER_ADDRESS = exports.STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS = exports.isSushiXSwap2ChainId = exports.SUSHIXSWAP_2_ADDRESS = exports.SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS = exports.isSushiXSwapChainId = exports.SUSHIXSWAP_ADDRESS = exports.SUSHIXSWAP_SUPPORTED_CHAIN_IDS = void 0;
const index_js_1 = require("../chain/index.js");
exports.SUSHIXSWAP_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.FANTOM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.POLYGON,
];
exports.SUSHIXSWAP_ADDRESS = {
    [index_js_1.ChainId.ARBITRUM]: '0x53b08DbD70327b7Ba3B7886Fc9987BC985d27262',
    [index_js_1.ChainId.AVALANCHE]: '0x2c8C987C4777AB740d20Cb581f5d381BE95A4A4a',
    [index_js_1.ChainId.BSC]: '0x7A4af156379f512DE147ed3b96393047226d923F',
    [index_js_1.ChainId.ETHEREUM]: '0x011E52E4E40CF9498c79273329E8827b21E2e581',
    [index_js_1.ChainId.FANTOM]: '0xD045d27c1f7e7f770a807B0a85d8e3F852e0F2BE',
    [index_js_1.ChainId.OPTIMISM]: '0x8B396ddF906D552b2F98a8E7d743DD58Cd0d920f',
    [index_js_1.ChainId.POLYGON]: '0xd08b5f3e89F1e2d6b067e0A0cbdb094e6e41E77c',
};
const isSushiXSwapChainId = (chainId) => exports.SUSHIXSWAP_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isSushiXSwapChainId = isSushiXSwapChainId;
exports.SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.BASE,
    index_js_1.ChainId.FANTOM,
    index_js_1.ChainId.LINEA,
    // ChainId.KAVA,
    // ChainId.METIS,
    index_js_1.ChainId.MOONBEAM,
    index_js_1.ChainId.CELO,
    index_js_1.ChainId.SCROLL,
];
exports.SUSHIXSWAP_2_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.BSC]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.AVALANCHE]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.POLYGON]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.ARBITRUM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.OPTIMISM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.BASE]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.FANTOM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.LINEA]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    // [ChainId.KAVA]: '0xD5607d184b1D6ecbA94A07c217497FE9346010D9',
    // [ChainId.METIS]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.MOONBEAM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.CELO]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
    [index_js_1.ChainId.SCROLL]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
};
const isSushiXSwap2ChainId = (chainId) => exports.SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isSushiXSwap2ChainId = isSushiXSwap2ChainId;
exports.STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.BASE,
];
exports.STARGATE_ADAPTER_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0xD408a20f1213286fB3158a2bfBf5bFfAca8bF269',
    [index_js_1.ChainId.BSC]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.AVALANCHE]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.POLYGON]: '0x1719DEf1BF8422a777f2442bcE704AC4Fb20c7f0',
    [index_js_1.ChainId.ARBITRUM]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.OPTIMISM]: '0xA62eC622DbA415Aa94110739B1f951B1202Cf322',
    [index_js_1.ChainId.BASE]: '0xD408a20f1213286fB3158a2bfBf5bFfAca8bF269',
};
const isStargateAdapterChainId = (chainId) => exports.STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isStargateAdapterChainId = isStargateAdapterChainId;
exports.SQUID_ADAPTER_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.BASE,
    index_js_1.ChainId.FANTOM,
    index_js_1.ChainId.LINEA,
    // ChainId.KAVA,
    index_js_1.ChainId.MOONBEAM,
    index_js_1.ChainId.CELO,
    index_js_1.ChainId.SCROLL,
];
exports.SQUID_ADAPTER_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.BSC]: '0xbF3B71decBCEFABB3210B9D8f18eC22e0556f5F0',
    [index_js_1.ChainId.AVALANCHE]: '0xbF3B71decBCEFABB3210B9D8f18eC22e0556f5F0',
    [index_js_1.ChainId.POLYGON]: '0x1B4eb3e90dA47ff898d2cda40B5750721886E850',
    [index_js_1.ChainId.ARBITRUM]: '0x454714482cA38fBBcE7fC76D96Ba1CE2028A4fF6',
    [index_js_1.ChainId.OPTIMISM]: '0xbF3B71decBCEFABB3210B9D8f18eC22e0556f5F0',
    [index_js_1.ChainId.BASE]: '0xFF51a7C624Eb866917102707F3dA8bFb99Db8692',
    [index_js_1.ChainId.FANTOM]: '0x454714482cA38fBBcE7fC76D96Ba1CE2028A4fF6',
    [index_js_1.ChainId.LINEA]: '0xbF3B71decBCEFABB3210B9D8f18eC22e0556f5F0',
    // [ChainId.KAVA]: '0xEfb2b93B2a039A227459AAD0572a019Aba8eA69d',
    [index_js_1.ChainId.MOONBEAM]: '0x02a480a258361c9Bc3eaacBd6473364C67adCD3a',
    [index_js_1.ChainId.CELO]: '0x02a480a258361c9Bc3eaacBd6473364C67adCD3a',
    [index_js_1.ChainId.SCROLL]: '0x02a480a258361c9Bc3eaacBd6473364C67adCD3a',
};
const isSquidAdapterChainId = (chainId) => exports.SQUID_ADAPTER_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isSquidAdapterChainId = isSquidAdapterChainId;
//# sourceMappingURL=sushixswap.js.map