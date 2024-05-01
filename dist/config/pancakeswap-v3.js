"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PANCAKESWAP_V3_DEPLOYER_ADDRESS = exports.PANCAKESWAP_V3_FACTORY_ADDRESS = exports.PANCAKESWAP_V3_INIT_CODE_HASH = exports.isPancakeSwapV3ChainId = exports.PancakeSwapV3ChainIds = exports.PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS = exports.PANCAKESWAP_V3_FEE_SPACING_MAP = exports.PancakeSwapV3FeeAmount = void 0;
const index_js_1 = require("../chain/index.js");
const POOL_INIT_CODE_HASH = '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2';
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
var PancakeSwapV3FeeAmount;
(function (PancakeSwapV3FeeAmount) {
    /** 0.01% */
    PancakeSwapV3FeeAmount[PancakeSwapV3FeeAmount["LOWEST"] = 100] = "LOWEST";
    /** 0.1% */
    PancakeSwapV3FeeAmount[PancakeSwapV3FeeAmount["LOW"] = 500] = "LOW";
    /** 0.25% */
    PancakeSwapV3FeeAmount[PancakeSwapV3FeeAmount["MEDIUM"] = 2500] = "MEDIUM";
    /** 1% */
    PancakeSwapV3FeeAmount[PancakeSwapV3FeeAmount["HIGH"] = 10000] = "HIGH";
})(PancakeSwapV3FeeAmount || (exports.PancakeSwapV3FeeAmount = PancakeSwapV3FeeAmount = {}));
exports.PANCAKESWAP_V3_FEE_SPACING_MAP = {
    100: 1,
    500: 10,
    2500: 50,
    10000: 200,
};
exports.PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.BASE,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.LINEA,
    index_js_1.ChainId.POLYGON_ZKEVM,
];
exports.PancakeSwapV3ChainIds = exports.PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS;
const isPancakeSwapV3ChainId = (chainId) => exports.PANCAKESWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isPancakeSwapV3ChainId = isPancakeSwapV3ChainId;
exports.PANCAKESWAP_V3_INIT_CODE_HASH = {
    [index_js_1.ChainId.ARBITRUM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BASE]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BSC]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.LINEA]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.POLYGON_ZKEVM]: POOL_INIT_CODE_HASH,
};
exports.PANCAKESWAP_V3_FACTORY_ADDRESS = {
    [index_js_1.ChainId.ARBITRUM]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    [index_js_1.ChainId.BASE]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    [index_js_1.ChainId.BSC]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    [index_js_1.ChainId.ETHEREUM]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    [index_js_1.ChainId.LINEA]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
    [index_js_1.ChainId.POLYGON_ZKEVM]: '0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865',
};
exports.PANCAKESWAP_V3_DEPLOYER_ADDRESS = {
    [index_js_1.ChainId.ARBITRUM]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    [index_js_1.ChainId.BASE]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    [index_js_1.ChainId.BSC]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    [index_js_1.ChainId.ETHEREUM]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    [index_js_1.ChainId.LINEA]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
    [index_js_1.ChainId.POLYGON_ZKEVM]: '0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9',
};
//# sourceMappingURL=pancakeswap-v3.js.map