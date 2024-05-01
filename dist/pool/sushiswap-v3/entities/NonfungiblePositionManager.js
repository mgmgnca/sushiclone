"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonfungiblePositionManager = void 0;
const abi_1 = require("@ethersproject/abi");
const NonfungiblePositionManager_json_1 = __importDefault(require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"));
const tiny_invariant_1 = __importDefault(require("tiny-invariant"));
const viem_1 = require("viem");
const index_js_1 = require("../../../convert/index.js");
const index_js_2 = require("../../../currency/index.js");
const index_js_3 = require("../utils/index.js");
const Multicall_js_1 = require("./Multicall.js");
const Payments_js_1 = require("./Payments.js");
const Position_js_1 = require("./Position.js");
const SelfPermit_js_1 = require("./SelfPermit.js");
const MaxUint128 = (0, index_js_1.toHex)(2n ** 128n - 1n);
// type guard
function isMint(options) {
    return Object.keys(options).some((k) => k === 'recipient');
}
class NonfungiblePositionManager {
    static INTERFACE = new abi_1.Interface(NonfungiblePositionManager_json_1.default.abi);
    /**
     * Cannot be constructed.
     */
    constructor() { }
    static encodeCreate(pool) {
        return NonfungiblePositionManager.INTERFACE.encodeFunctionData('createAndInitializePoolIfNecessary', [
            pool.token0.address,
            pool.token1.address,
            pool.fee,
            (0, index_js_1.toHex)(pool.sqrtRatioX96),
        ]);
    }
    static createCallParameters(pool) {
        return {
            calldata: this.encodeCreate(pool),
            value: (0, index_js_1.toHex)(0),
        };
    }
    static addCallParameters(position, options) {
        (0, tiny_invariant_1.default)(position.liquidity > 0n, 'ZERO_LIQUIDITY');
        const calldatas = [];
        // get amounts
        const { amount0: amount0Desired, amount1: amount1Desired } = position.mintAmounts;
        // adjust for slippage
        const minimumAmounts = position.mintAmountsWithSlippage(options.slippageTolerance);
        const amount0Min = (0, index_js_1.toHex)(minimumAmounts.amount0);
        const amount1Min = (0, index_js_1.toHex)(minimumAmounts.amount1);
        const deadline = (0, index_js_1.toHex)(options.deadline);
        // create pool if needed
        if (isMint(options) && options.createPool) {
            calldatas.push(this.encodeCreate(position.pool));
        }
        // permits if necessary
        if (options.token0Permit) {
            calldatas.push(SelfPermit_js_1.SelfPermit.encodePermit(position.pool.token0, options.token0Permit));
        }
        if (options.token1Permit) {
            calldatas.push(SelfPermit_js_1.SelfPermit.encodePermit(position.pool.token1, options.token1Permit));
        }
        // mint
        if (isMint(options)) {
            const recipient = (0, index_js_3.validateAndParseAddress)(options.recipient);
            calldatas.push(NonfungiblePositionManager.INTERFACE.encodeFunctionData('mint', [
                {
                    token0: position.pool.token0.address,
                    token1: position.pool.token1.address,
                    fee: position.pool.fee,
                    tickLower: position.tickLower,
                    tickUpper: position.tickUpper,
                    amount0Desired: (0, index_js_1.toHex)(amount0Desired),
                    amount1Desired: (0, index_js_1.toHex)(amount1Desired),
                    amount0Min,
                    amount1Min,
                    recipient,
                    deadline,
                },
            ]));
        }
        else {
            // increase
            calldatas.push(NonfungiblePositionManager.INTERFACE.encodeFunctionData('increaseLiquidity', [
                {
                    tokenId: (0, index_js_1.toHex)(options.tokenId),
                    amount0Desired: (0, index_js_1.toHex)(amount0Desired),
                    amount1Desired: (0, index_js_1.toHex)(amount1Desired),
                    amount0Min,
                    amount1Min,
                    deadline,
                },
            ]));
        }
        let value = (0, index_js_1.toHex)(0);
        if (options.useNative) {
            const wrapped = options.useNative.wrapped;
            (0, tiny_invariant_1.default)(position.pool.token0.equals(wrapped) ||
                position.pool.token1.equals(wrapped), 'NO_WETH');
            const wrappedValue = position.pool.token0.equals(wrapped)
                ? amount0Desired
                : amount1Desired;
            // we only need to refund if we're actually sending ETH
            if (wrappedValue > 0n) {
                calldatas.push(Payments_js_1.Payments.encodeRefundETH());
            }
            value = (0, index_js_1.toHex)(wrappedValue);
        }
        return {
            calldata: Multicall_js_1.Multicall.encodeMulticall(calldatas),
            value,
        };
    }
    static encodeCollect(options) {
        const calldatas = [];
        const tokenId = (0, index_js_1.toHex)(options.tokenId);
        const involvesETH = options.expectedCurrencyOwed0.currency.isNative ||
            options.expectedCurrencyOwed1.currency.isNative;
        const recipient = (0, index_js_3.validateAndParseAddress)(options.recipient);
        // collect
        calldatas.push(NonfungiblePositionManager.INTERFACE.encodeFunctionData('collect', [
            {
                tokenId,
                recipient: involvesETH ? viem_1.zeroAddress : recipient,
                amount0Max: MaxUint128,
                amount1Max: MaxUint128,
            },
        ]));
        if (involvesETH) {
            const ethAmount = options.expectedCurrencyOwed0.currency.isNative
                ? options.expectedCurrencyOwed0.quotient
                : options.expectedCurrencyOwed1.quotient;
            const token = options.expectedCurrencyOwed0.currency.isNative
                ? options.expectedCurrencyOwed1.currency
                : options.expectedCurrencyOwed0.currency;
            const tokenAmount = options.expectedCurrencyOwed0.currency.isNative
                ? options.expectedCurrencyOwed1.quotient
                : options.expectedCurrencyOwed0.quotient;
            calldatas.push(Payments_js_1.Payments.encodeUnwrapWETH9(ethAmount, recipient));
            calldatas.push(Payments_js_1.Payments.encodeSweepToken(token, tokenAmount, recipient));
        }
        return calldatas;
    }
    static collectCallParameters(options) {
        const calldatas = NonfungiblePositionManager.encodeCollect(options);
        return {
            calldata: Multicall_js_1.Multicall.encodeMulticall(calldatas),
            value: (0, index_js_1.toHex)(0),
        };
    }
    /**
     * Produces the calldata for completely or partially exiting a position
     * @param position The position to exit
     * @param options Additional information necessary for generating the calldata
     * @returns The call parameters
     */
    static removeCallParameters(position, options) {
        const calldatas = [];
        const deadline = (0, index_js_1.toHex)(options.deadline);
        const tokenId = (0, index_js_1.toHex)(options.tokenId);
        // construct a partial position with a percentage of liquidity
        const partialPosition = new Position_js_1.Position({
            pool: position.pool,
            liquidity: options.liquidityPercentage.multiply(position.liquidity)
                .quotient,
            tickLower: position.tickLower,
            tickUpper: position.tickUpper,
        });
        (0, tiny_invariant_1.default)(partialPosition.liquidity > 0n, 'ZERO_LIQUIDITY');
        // slippage-adjusted underlying amounts
        const { amount0: amount0Min, amount1: amount1Min } = partialPosition.burnAmountsWithSlippage(options.slippageTolerance);
        if (options.permit) {
            calldatas.push(NonfungiblePositionManager.INTERFACE.encodeFunctionData('permit', [
                (0, index_js_3.validateAndParseAddress)(options.permit.spender),
                tokenId,
                (0, index_js_1.toHex)(options.permit.deadline),
                options.permit.v,
                options.permit.r,
                options.permit.s,
            ]));
        }
        // remove liquidity
        calldatas.push(NonfungiblePositionManager.INTERFACE.encodeFunctionData('decreaseLiquidity', [
            {
                tokenId,
                liquidity: (0, index_js_1.toHex)(partialPosition.liquidity),
                amount0Min: (0, index_js_1.toHex)(amount0Min),
                amount1Min: (0, index_js_1.toHex)(amount1Min),
                deadline,
            },
        ]));
        const { expectedCurrencyOwed0, expectedCurrencyOwed1, ...rest } = options.collectOptions;
        calldatas.push(...NonfungiblePositionManager.encodeCollect({
            tokenId: (0, index_js_1.toHex)(options.tokenId),
            // add the underlying value to the expected currency already owed
            expectedCurrencyOwed0: expectedCurrencyOwed0.add(index_js_2.Amount.fromRawAmount(expectedCurrencyOwed0.currency, amount0Min)),
            expectedCurrencyOwed1: expectedCurrencyOwed1.add(index_js_2.Amount.fromRawAmount(expectedCurrencyOwed1.currency, amount1Min)),
            ...rest,
        }));
        if (options.liquidityPercentage.equalTo(1n)) {
            if (options.burnToken) {
                calldatas.push(NonfungiblePositionManager.INTERFACE.encodeFunctionData('burn', [
                    tokenId,
                ]));
            }
        }
        else {
            (0, tiny_invariant_1.default)(options.burnToken !== true, 'CANNOT_BURN');
        }
        return {
            calldata: Multicall_js_1.Multicall.encodeMulticall(calldatas),
            value: (0, index_js_1.toHex)(0),
        };
    }
    static safeTransferFromParameters(options) {
        const recipient = (0, index_js_3.validateAndParseAddress)(options.recipient);
        const sender = (0, index_js_3.validateAndParseAddress)(options.sender);
        let calldata;
        if (options.data) {
            calldata = NonfungiblePositionManager.INTERFACE.encodeFunctionData('safeTransferFrom(address,address,uint256,bytes)', [sender, recipient, (0, index_js_1.toHex)(options.tokenId), options.data]);
        }
        else {
            calldata = NonfungiblePositionManager.INTERFACE.encodeFunctionData('safeTransferFrom(address,address,uint256)', [sender, recipient, (0, index_js_1.toHex)(options.tokenId)]);
        }
        return {
            calldata: calldata,
            value: (0, index_js_1.toHex)(0),
        };
    }
}
exports.NonfungiblePositionManager = NonfungiblePositionManager;
//# sourceMappingURL=NonfungiblePositionManager.js.map