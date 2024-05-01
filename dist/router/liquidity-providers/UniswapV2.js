"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Provider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class UniswapV2Provider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.ETHEREUM]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
        };
        const initCodeHash = {
            [index_js_1.ChainId.ETHEREUM]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.UniswapV2;
    }
    getPoolProviderName() {
        return 'UniswapV2';
    }
}
exports.UniswapV2Provider = UniswapV2Provider;
//# sourceMappingURL=UniswapV2.js.map