"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNISWAP_V3_FACTORY_ADDRESS = exports.UNISWAP_V3_INIT_CODE_HASH = exports.isUniswapV3ChainId = exports.UniswapV3ChainIds = exports.UNISWAP_V3_SUPPORTED_CHAIN_IDS = exports.UNISWAP_V3_TICK_SPACINGS = exports.UniswapV3FeeAmount = void 0;
const index_js_1 = require("../chain/index.js");
const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54';
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
var UniswapV3FeeAmount;
(function (UniswapV3FeeAmount) {
    /** 0.01% */
    UniswapV3FeeAmount[UniswapV3FeeAmount["LOWEST"] = 100] = "LOWEST";
    /** 0.1% */
    UniswapV3FeeAmount[UniswapV3FeeAmount["LOW"] = 500] = "LOW";
    /** 0.3% */
    UniswapV3FeeAmount[UniswapV3FeeAmount["MEDIUM"] = 3000] = "MEDIUM";
    /** 1% */
    UniswapV3FeeAmount[UniswapV3FeeAmount["HIGH"] = 10000] = "HIGH";
})(UniswapV3FeeAmount || (exports.UniswapV3FeeAmount = UniswapV3FeeAmount = {}));
/**
 * The default factory tick spacings by fee amount.
 */
exports.UNISWAP_V3_TICK_SPACINGS = {
    [UniswapV3FeeAmount.LOWEST]: 1,
    [UniswapV3FeeAmount.LOW]: 10,
    [UniswapV3FeeAmount.MEDIUM]: 60,
    [UniswapV3FeeAmount.HIGH]: 200,
};
exports.UNISWAP_V3_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.CELO,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.BASE,
    index_js_1.ChainId.MOONBEAM,
    index_js_1.ChainId.AVALANCHE,
];
exports.UniswapV3ChainIds = exports.UNISWAP_V3_SUPPORTED_CHAIN_IDS;
const isUniswapV3ChainId = (chainId) => exports.UNISWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isUniswapV3ChainId = isUniswapV3ChainId;
exports.UNISWAP_V3_INIT_CODE_HASH = {
    [index_js_1.ChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.POLYGON]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.ARBITRUM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.OPTIMISM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BSC]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.CELO]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BASE]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.MOONBEAM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.AVALANCHE]: POOL_INIT_CODE_HASH,
};
exports.UNISWAP_V3_FACTORY_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    [index_js_1.ChainId.POLYGON]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    [index_js_1.ChainId.ARBITRUM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    [index_js_1.ChainId.OPTIMISM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    [index_js_1.ChainId.BSC]: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
    [index_js_1.ChainId.CELO]: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
    [index_js_1.ChainId.BASE]: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
    [index_js_1.ChainId.MOONBEAM]: '0x28f1158795A3585CaAA3cD6469CD65382b89BB70',
    [index_js_1.ChainId.AVALANCHE]: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
};
//# sourceMappingURL=uniswap-v3.js.map