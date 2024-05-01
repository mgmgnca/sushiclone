"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiswapProvider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class BiswapProvider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    fee = 0.002;
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.BSC]: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
        };
        const initCodeHash = {
            [index_js_1.ChainId.BSC]: '0xfea293c909d87cd4153593f077b76bb7e94340200f4ee84211ae8e4f9bd7ffdf',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.Biswap;
    }
    getPoolProviderName() {
        return 'Biswap';
    }
}
exports.BiswapProvider = BiswapProvider;
//# sourceMappingURL=Biswap.js.map