"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbeSwapProvider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class UbeSwapProvider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.CELO]: '0x62d5b84bE28a183aBB507E125B384122D2C25fAE',
        };
        const initCodeHash = {
            [index_js_1.ChainId.CELO]: '0xb3b8ff62960acea3a88039ebcf80699f15786f1b17cebd82802f7375827a339c',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.UbeSwap;
    }
    getPoolProviderName() {
        return 'UbeSwap';
    }
}
exports.UbeSwapProvider = UbeSwapProvider;
//# sourceMappingURL=UbeSwap.js.map