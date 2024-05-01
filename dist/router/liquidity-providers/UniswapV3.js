"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV3Provider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV3Base_js_1 = require("./UniswapV3Base.js");
class UniswapV3Provider extends UniswapV3Base_js_1.UniswapV3BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.ETHEREUM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
            [index_js_1.ChainId.POLYGON]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
            [index_js_1.ChainId.ARBITRUM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
            [index_js_1.ChainId.OPTIMISM]: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
            [index_js_1.ChainId.BSC]: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
            [index_js_1.ChainId.BASE]: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
        };
        const initCodeHash = {
            [index_js_1.ChainId.ETHEREUM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.POLYGON]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.ARBITRUM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.OPTIMISM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.BSC]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.BASE]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
        };
        const tickLens = {
            [index_js_1.ChainId.ETHEREUM]: '0xbfd8137f7d1516d3ea5ca83523914859ec47f573',
            [index_js_1.ChainId.POLYGON]: '0xbfd8137f7d1516d3ea5ca83523914859ec47f573',
            [index_js_1.ChainId.ARBITRUM]: '0xbfd8137f7d1516d3ea5ca83523914859ec47f573',
            [index_js_1.ChainId.OPTIMISM]: '0xbfd8137f7d1516d3ea5ca83523914859ec47f573',
            [index_js_1.ChainId.BSC]: '0xD9270014D396281579760619CCf4c3af0501A47C',
            [index_js_1.ChainId.BASE]: '0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d',
        };
        super(chainId, web3Client, factory, initCodeHash, tickLens);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.UniswapV3;
    }
    getPoolProviderName() {
        return 'UniswapV3';
    }
}
exports.UniswapV3Provider = UniswapV3Provider;
//# sourceMappingURL=UniswapV3.js.map