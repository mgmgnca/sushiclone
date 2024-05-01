"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExtractorSupportedChainId = exports.EXTRACTOR_SUPPORTED_CHAIN_IDS = void 0;
const index_js_1 = require("../chain/index.js");
exports.EXTRACTOR_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.ARBITRUM_NOVA,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.BASE,
    index_js_1.ChainId.BOBA,
    index_js_1.ChainId.BOBA_BNB,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.BTTC,
    index_js_1.ChainId.CELO,
    index_js_1.ChainId.CORE,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.FANTOM,
    index_js_1.ChainId.FILECOIN,
    index_js_1.ChainId.FUSE,
    index_js_1.ChainId.GNOSIS,
    index_js_1.ChainId.HAQQ,
    index_js_1.ChainId.HARMONY,
    index_js_1.ChainId.KAVA,
    index_js_1.ChainId.LINEA,
    index_js_1.ChainId.METIS,
    index_js_1.ChainId.MOONBEAM,
    index_js_1.ChainId.MOONRIVER,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.POLYGON_ZKEVM,
    index_js_1.ChainId.SCROLL,
    index_js_1.ChainId.TELOS,
    index_js_1.ChainId.THUNDERCORE,
    index_js_1.ChainId.ZETACHAIN,
    index_js_1.ChainId.CRONOS,
    index_js_1.ChainId.BLAST,
    // ChainId.ZKSYNC_ERA,
];
const isExtractorSupportedChainId = (chainId) => exports.EXTRACTOR_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isExtractorSupportedChainId = isExtractorSupportedChainId;
//# sourceMappingURL=extractor.js.map