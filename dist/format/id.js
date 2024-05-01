"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainIdAddressFromId = exports.getIdFromChainIdAddress = void 0;
const unsanitize_js_1 = require("./unsanitize.js");
const getIdFromChainIdAddress = (chainId, address) => `${chainId}:${address.toLowerCase()}`;
exports.getIdFromChainIdAddress = getIdFromChainIdAddress;
const getChainIdAddressFromId = (id) => {
    const [chainId, address] = (0, unsanitize_js_1.unsanitize)(id).split(':');
    if (!chainId || !address)
        throw new Error(`Invalid id: ${id}`);
    return { chainId: Number(chainId), address };
};
exports.getChainIdAddressFromId = getChainIdAddressFromId;
//# sourceMappingURL=id.js.map