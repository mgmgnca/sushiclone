"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetSwapProvider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class NetSwapProvider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.METIS]: '0x70f51d68D16e8f9e418441280342BD43AC9Dff9f',
        };
        const initCodeHash = {
            [index_js_1.ChainId.METIS]: '0x966d65068a6a30f10fd1fa814258637a34e059081d79daa94f3e2b6cec48e810',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.NetSwap;
    }
    getPoolProviderName() {
        return 'NetSwap';
    }
}
exports.NetSwapProvider = NetSwapProvider;
//# sourceMappingURL=NetSwap.js.map