"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeWrapProvider = void 0;
const index_js_1 = require("../../currency/index.js");
const index_js_2 = require("../../currency/index.js");
const index_js_3 = require("../../tines/index.js");
const index_js_4 = require("../pool-codes/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
class NativeWrapProvider extends LiquidityProvider_js_1.LiquidityProvider {
    poolCodes;
    constructor(chainId, client) {
        super(chainId, client);
        const native = index_js_2.Native.onChain(chainId);
        const nativeRToken = {
            address: '',
            name: native.name,
            symbol: native.symbol,
            chainId: chainId,
            decimals: 18,
        };
        const bridge = new index_js_3.BridgeUnlimited(index_js_1.WNATIVE_ADDRESS[chainId], nativeRToken, index_js_1.WNATIVE[chainId], 0, 50000);
        this.poolCodes = [
            new index_js_4.NativeWrapBridgePoolCode(bridge, LiquidityProvider_js_1.LiquidityProviders.NativeWrap),
        ];
        this.lastUpdateBlock = -1;
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.NativeWrap;
    }
    getPoolProviderName() {
        return 'NativeWrap';
    }
    startFetchPoolsData() { }
    async fetchPoolsForToken() { }
    getCurrentPoolList() {
        return this.poolCodes;
    }
    stopFetchPoolsData() { }
}
exports.NativeWrapProvider = NativeWrapProvider;
//# sourceMappingURL=NativeWrapProvider.js.map