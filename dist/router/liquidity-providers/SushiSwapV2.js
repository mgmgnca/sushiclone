"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapV2Provider = void 0;
const index_js_1 = require("../../config/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class SushiSwapV2Provider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    constructor(chainId, web3Client) {
        const factory = index_js_1.SUSHISWAP_V2_FACTORY_ADDRESS;
        super(chainId, web3Client, factory, index_js_1.SUSHISWAP_V2_INIT_CODE_HASH);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.SushiSwapV2;
    }
    getPoolProviderName() {
        return 'SushiSwapV2';
    }
}
exports.SushiSwapV2Provider = SushiSwapV2Provider;
//# sourceMappingURL=SushiSwapV2.js.map