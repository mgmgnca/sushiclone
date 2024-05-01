"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBentoBoxChainId = exports.BENTOBOX_ADDRESS = exports.BENTOBOX_SUPPORTED_CHAIN_IDS = void 0;
const index_js_1 = require("../chain/index.js");
exports.BENTOBOX_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.ARBITRUM_NOVA,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.BOBA,
    index_js_1.ChainId.BOBA_AVAX,
    index_js_1.ChainId.BOBA_BNB,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.BTTC,
    index_js_1.ChainId.CELO,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.FANTOM,
    index_js_1.ChainId.FUSE,
    index_js_1.ChainId.GNOSIS,
    index_js_1.ChainId.HARMONY,
    index_js_1.ChainId.HECO,
    index_js_1.ChainId.KAVA,
    index_js_1.ChainId.METIS,
    index_js_1.ChainId.MOONBEAM,
    index_js_1.ChainId.MOONRIVER,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.POLYGON,
];
exports.BENTOBOX_ADDRESS = {
    [index_js_1.ChainId.ARBITRUM]: '0x74c764D41B77DBbb4fe771daB1939B00b146894A',
    [index_js_1.ChainId.ARBITRUM_NOVA]: '0xbE811A0D44E2553d25d11CB8DC0d3F0D0E6430E6',
    [index_js_1.ChainId.AVALANCHE]: '0x0711B6026068f736bae6B213031fCE978D48E026',
    [index_js_1.ChainId.BOBA]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    [index_js_1.ChainId.BOBA_AVAX]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    [index_js_1.ChainId.BOBA_BNB]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
    [index_js_1.ChainId.BSC]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
    [index_js_1.ChainId.BTTC]: '0x8dacffa7F69Ce572992132697252E16254225D38',
    [index_js_1.ChainId.CELO]: '0x0711B6026068f736bae6B213031fCE978D48E026',
    [index_js_1.ChainId.ETHEREUM]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
    [index_js_1.ChainId.FANTOM]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
    [index_js_1.ChainId.FUSE]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
    [index_js_1.ChainId.GNOSIS]: '0xE2d7F5dd869Fc7c126D21b13a9080e75a4bDb324',
    [index_js_1.ChainId.HARMONY]: '0x6b2A3FF504798886862Ca5ce501e080947A506A2',
    [index_js_1.ChainId.HECO]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
    [index_js_1.ChainId.KAVA]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.METIS]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.MOONBEAM]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
    [index_js_1.ChainId.MOONRIVER]: '0x145d82bCa93cCa2AE057D1c6f26245d1b9522E6F',
    [index_js_1.ChainId.OPTIMISM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.POLYGON]: '0x0319000133d3AdA02600f0875d2cf03D442C3367',
};
const isBentoBoxChainId = (chainId) => exports.BENTOBOX_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isBentoBoxChainId = isBentoBoxChainId;
//# sourceMappingURL=bentobox.js.map