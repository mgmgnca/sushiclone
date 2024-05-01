"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAngleEnabledChainId = exports.ANGLE_ENABLED_NETWORKS = void 0;
const index_js_1 = require("../chain/index.js");
exports.ANGLE_ENABLED_NETWORKS = [
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.POLYGON,
    // ChainId.POLYGON_ZKEVM,
    index_js_1.ChainId.BASE,
    // ChainId.THUNDERCORE,
    // ChainId.CORE,
    // ChainId.GNOSIS
];
const isAngleEnabledChainId = (chainId) => exports.ANGLE_ENABLED_NETWORKS.includes(chainId);
exports.isAngleEnabledChainId = isAngleEnabledChainId;
//# sourceMappingURL=angle.js.map