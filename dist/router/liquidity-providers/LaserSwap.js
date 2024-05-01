"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaserSwapV2Provider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class LaserSwapV2Provider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    fee = 0.0025;
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.THUNDERCORE]: '0x23c7FA9A9f81B322684F25b8079e22C37e00b46b',
        };
        const initCodeHash = {
            [index_js_1.ChainId.THUNDERCORE]: '0x9d026965f89efe44dcdcb857289f65e798b9012bfc276b63ec2a4d9f7761e8a7',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.LaserSwap;
    }
    getPoolProviderName() {
        return 'LaserSwap';
    }
}
exports.LaserSwapV2Provider = LaserSwapV2Provider;
//# sourceMappingURL=LaserSwap.js.map