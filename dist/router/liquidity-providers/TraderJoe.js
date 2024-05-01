"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderJoeProvider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class TraderJoeProvider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.AVALANCHE]: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
        };
        const initCodeHash = {
            [index_js_1.ChainId.AVALANCHE]: '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.TraderJoe;
    }
    getPoolProviderName() {
        return 'TraderJoe';
    }
}
exports.TraderJoeProvider = TraderJoeProvider;
//# sourceMappingURL=TraderJoe.js.map