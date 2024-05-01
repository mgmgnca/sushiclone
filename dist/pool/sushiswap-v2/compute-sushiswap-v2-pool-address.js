"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSushiSwapV2PoolAddress = void 0;
const address_1 = require("@ethersproject/address");
const solidity_1 = require("@ethersproject/solidity");
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const index_js_1 = require("../../config/index.js");
/**
 * Computes a pair address
 * @param factoryAddress The Uniswap V2 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pair address
 */
const computeSushiSwapV2PoolAddress = ({ factoryAddress, tokenA, tokenB, initCodeHashManualOverride, }) => {
    const [token0, token1] = tokenA.sortsBefore(tokenB)
        ? [tokenA, tokenB]
        : [tokenB, tokenA]; // does safety checks
    (0, tiny_invariant_1.default)(token0.chainId === token1.chainId, 'CHAIN_ID');
    return (0, address_1.getCreate2Address)(factoryAddress, (0, solidity_1.keccak256)(['bytes'], [(0, solidity_1.pack)(['address', 'address'], [token0.address, token1.address])]), initCodeHashManualOverride ??
        index_js_1.SUSHISWAP_V2_INIT_CODE_HASH[token0.chainId]);
};
exports.computeSushiSwapV2PoolAddress = computeSushiSwapV2PoolAddress;
//# sourceMappingURL=compute-sushiswap-v2-pool-address.js.map