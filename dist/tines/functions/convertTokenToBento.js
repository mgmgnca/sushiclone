"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTokenToBento = void 0;
const getBentoChainId_js_1 = require("./getBentoChainId.js");
function convertTokenToBento(token) {
    const t = { ...token };
    t.chainId = (0, getBentoChainId_js_1.getBentoChainId)(token.chainId);
    t.name = (0, getBentoChainId_js_1.getBentoChainId)(token.name);
    t.symbol = (0, getBentoChainId_js_1.getBentoChainId)(token.symbol);
    delete t.tokenId;
    return t;
}
exports.convertTokenToBento = convertTokenToBento;
//# sourceMappingURL=convertTokenToBento.js.map