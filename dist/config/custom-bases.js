"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_BASES = void 0;
const index_js_1 = require("../chain/index.js");
const index_js_2 = require("../currency/index.js");
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
exports.CUSTOM_BASES = {
    [index_js_1.ChainId.ETHEREUM]: {
        [index_js_2.AMPL_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [
            index_js_2.DAI[index_js_1.ChainId.ETHEREUM],
            index_js_2.WNATIVE[index_js_1.ChainId.ETHEREUM],
        ],
    },
};
//# sourceMappingURL=custom-bases.js.map