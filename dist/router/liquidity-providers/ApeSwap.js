"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApeSwapProvider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV2Base_js_1 = require("./UniswapV2Base.js");
class ApeSwapProvider extends UniswapV2Base_js_1.UniswapV2BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.ETHEREUM]: '0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B',
            [index_js_1.ChainId.POLYGON]: '0xCf083Be4164828f00cAE704EC15a36D711491284',
            [index_js_1.ChainId.BSC]: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
            [index_js_1.ChainId.TELOS]: '0x411172Dfcd5f68307656A1ff35520841C2F7fAec',
        };
        const initCodeHash = {
            [index_js_1.ChainId.ETHEREUM]: '0xe2200989b6f9506f3beca7e9c844741b3ad1a88ad978b6b0973e96d3ca4707aa',
            [index_js_1.ChainId.POLYGON]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
            [index_js_1.ChainId.BSC]: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
            [index_js_1.ChainId.TELOS]: '0x7d4b9bb0d5808344c0184aada7d10aae8f6b0cc8ceb5eba8dd084f63b8c32099',
        };
        super(chainId, web3Client, factory, initCodeHash);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.ApeSwap;
    }
    getPoolProviderName() {
        return 'ApeSwap';
    }
}
exports.ApeSwapProvider = ApeSwapProvider;
//# sourceMappingURL=ApeSwap.js.map