"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSushiSwapV3PoolAddress = void 0;
const abi_1 = require("@ethersproject/abi");
const address_1 = require("@ethersproject/address");
const solidity_1 = require("@ethersproject/solidity");
const index_js_1 = require("../../../config/index.js");
/**
 * Computes a pool address
 * @param factoryAddress The Uniswap V3 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pool address
 */
function computeSushiSwapV3PoolAddress({ factoryAddress, tokenA, tokenB, fee, initCodeHashManualOverride, }) {
    if (typeof tokenA !== 'string' && typeof tokenB !== 'string') {
        const [token0, token1] = tokenA.sortsBefore(tokenB)
            ? [tokenA, tokenB]
            : [tokenB, tokenA]; // does safety checks
        return (0, address_1.getCreate2Address)(factoryAddress, (0, solidity_1.keccak256)(['bytes'], [
            abi_1.defaultAbiCoder.encode(['address', 'address', 'uint24'], [token0.address, token1.address, fee]),
        ]), initCodeHashManualOverride ??
            index_js_1.SUSHISWAP_V3_INIT_CODE_HASH[token0.chainId]);
    }
    // FIXME: We shouldn't even allow sending strings into here, this means we have to assume init code hash is always the same for every chain
    return (0, address_1.getCreate2Address)(factoryAddress, (0, solidity_1.keccak256)(['bytes'], [
        abi_1.defaultAbiCoder.encode(['address', 'address', 'uint24'], [tokenA, tokenB, fee]),
    ]), initCodeHashManualOverride ??
        '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54');
}
exports.computeSushiSwapV3PoolAddress = computeSushiSwapV3PoolAddress;
//# sourceMappingURL=computePoolAddress.js.map