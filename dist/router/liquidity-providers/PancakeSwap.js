"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeSwapProvider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class PancakeSwapProvider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    fee = 0.0025;
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.ETHEREUM]: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
            [index_js_1.ChainId.BSC]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
        };
        const initCodeHash = {
            [index_js_1.ChainId.ETHEREUM]: '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d',
            [index_js_1.ChainId.BSC]: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.PancakeSwap;
    }
    getPoolProviderName() {
        return 'PancakeSwap';
    }
}
exports.PancakeSwapProvider = PancakeSwapProvider;
//# sourceMappingURL=PancakeSwap.js.map