"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stargateAdapterAbi = void 0;
exports.stargateAdapterAbi = [
    {
        inputs: [
            { internalType: 'address', name: '_stargateRouter', type: 'address' },
            { internalType: 'address', name: '_stargateWidget', type: 'address' },
            { internalType: 'address', name: '_sgeth', type: 'address' },
            { internalType: 'address', name: '_rp', type: 'address' },
            { internalType: 'address', name: '_weth', type: 'address' },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    { inputs: [], name: 'InsufficientGas', type: 'error' },
    { inputs: [], name: 'NotStargateRouter', type: 'error' },
    { inputs: [], name: 'RpSentNativeIn', type: 'error' },
    {
        inputs: [
            { internalType: 'bytes', name: '_adapterData', type: 'bytes' },
            { internalType: 'address', name: '_refundAddress', type: 'address' },
            { internalType: 'bytes', name: '_swapData', type: 'bytes' },
            { internalType: 'bytes', name: '_payloadData', type: 'bytes' },
        ],
        name: 'adapterBridge',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_amountBridged', type: 'uint256' },
            { internalType: 'bytes', name: '_payloadData', type: 'bytes' },
            { internalType: 'address', name: '_token', type: 'address' },
        ],
        name: 'executePayload',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
            { internalType: 'uint8', name: '_functionType', type: 'uint8' },
            { internalType: 'address', name: '_receiver', type: 'address' },
            { internalType: 'uint256', name: '_gas', type: 'uint256' },
            { internalType: 'uint256', name: '_dustAmount', type: 'uint256' },
            { internalType: 'bytes', name: '_payload', type: 'bytes' },
        ],
        name: 'getFee',
        outputs: [
            { internalType: 'uint256', name: 'a', type: 'uint256' },
            { internalType: 'uint256', name: 'b', type: 'uint256' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'rp',
        outputs: [
            { internalType: 'contract IRouteProcessor', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes', name: '_adapterData', type: 'bytes' }],
        name: 'sendMessage',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint16', name: '', type: 'uint16' },
            { internalType: 'bytes', name: '', type: 'bytes' },
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'address', name: '_token', type: 'address' },
            { internalType: 'uint256', name: 'amountLD', type: 'uint256' },
            { internalType: 'bytes', name: 'payload', type: 'bytes' },
        ],
        name: 'sgReceive',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'sgeth',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'stargateRouter',
        outputs: [
            { internalType: 'contract IStargateRouter', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'stargateWidget',
        outputs: [
            { internalType: 'contract IStargateWidget', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'uint256', name: '_amountBridged', type: 'uint256' },
            { internalType: 'bytes', name: '_swapData', type: 'bytes' },
            { internalType: 'address', name: '_token', type: 'address' },
            { internalType: 'bytes', name: '_payloadData', type: 'bytes' },
        ],
        name: 'swap',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'weth',
        outputs: [{ internalType: 'contract IWETH', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
];
//# sourceMappingURL=stargateAdapterAbi.js.map