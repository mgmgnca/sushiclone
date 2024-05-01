"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoneySwapProvider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class HoneySwapProvider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.GNOSIS]: '0xA818b4F111Ccac7AA31D0BCc0806d64F2E0737D7',
        };
        const initCodeHash = {
            [index_js_1.ChainId.GNOSIS]: '0x3f88503e8580ab941773b59034fb4b2a63e86dbc031b3633a925533ad3ed2b93',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.HoneySwap;
    }
    getPoolProviderName() {
        return 'HoneySwap';
    }
}
exports.HoneySwapProvider = HoneySwapProvider;
//# sourceMappingURL=HoneySwap.js.map