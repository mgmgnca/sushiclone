"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TridentCLPoolCode = void 0;
const HEXer_js_1 = require("../HEXer.js");
const PoolCode_js_1 = require("./PoolCode.js");
class TridentCLPoolCode extends PoolCode_js_1.PoolCode {
    constructor(pool, liquidityProvider, providerName) {
        super(pool, liquidityProvider, `${providerName} ${pool.fee * 100}%`);
    }
    getStartPoint() {
        return PoolCode_js_1.PoolCode.RouteProcessorAddress;
    }
    // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars, @typescript-eslint/no-unused-vars
    getSwapCodeForRouteProcessor() {
        return 'unsupported';
    }
    getSwapCodeForRouteProcessor2(leg, _route, to) {
        const code = new HEXer_js_1.HEXer()
            .uint8(5) // TridentCL pool
            .address(this.pool.address)
            .bool(leg.tokenFrom.address === this.pool.token0.address)
            .address(to)
            .toString();
        return code;
    }
}
exports.TridentCLPoolCode = TridentCLPoolCode;
//# sourceMappingURL=TridentCLPool.js.map