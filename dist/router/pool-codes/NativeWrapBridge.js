"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeWrapBridgePoolCode = void 0;
const index_js_1 = require("../../chain/index.js");
const HEXer_js_1 = require("../HEXer.js");
const PoolCode_js_1 = require("./PoolCode.js");
class NativeWrapBridgePoolCode extends PoolCode_js_1.PoolCode {
    constructor(pool, liquidityProvider) {
        super(pool, liquidityProvider, 'Wrap');
    }
    getStartPoint() {
        return PoolCode_js_1.PoolCode.RouteProcessorAddress;
    }
    getSwapCodeForRouteProcessor(leg) {
        if (leg.tokenFrom.tokenId === this.pool.token0.tokenId) {
            // wrap - deposit. not used normally
            const code = new HEXer_js_1.HEXer()
                .uint8(5)
                .address(this.pool.address)
                .uint8(0)
                .toString(); // wrapAndDistributeERC20Amounts;
            return code;
        }
        else {
            // unwrap - withdraw
            const code = new HEXer_js_1.HEXer().uint8(6).address(this.pool.address).toString(); // unwrapNative(address receiver, unwrap token)
            return code;
        }
    }
    getSwapCodeForRouteProcessor2(leg, _route, to) {
        const fake = leg.tokenFrom.chainId === index_js_1.ChainId.CELO ? 2 : 0; // no real wrap at celo - fake wrap code is generated
        if (leg.tokenFrom.tokenId === this.pool.token0.tokenId) {
            // wrap - deposit
            const code = new HEXer_js_1.HEXer()
                .uint8(2) // wrapNative pool type
                .uint8(1 + fake) // wrap action
                .address(to) // where to transfer native coin after unwrapping
                .address(this.pool.address) // wrap token
                .toString();
            return code;
        }
        else {
            // unwrap - withdraw
            const code = new HEXer_js_1.HEXer()
                .uint8(2) // wrapNative pool type
                .uint8(0 + fake) // unwrap action
                .address(to) // where to transfer native coin after unwrapping
                //.address(this.pool.address) - don't need because processToken knows the token
                .toString();
            return code;
        }
    }
}
exports.NativeWrapBridgePoolCode = NativeWrapBridgePoolCode;
//# sourceMappingURL=NativeWrapBridge.js.map