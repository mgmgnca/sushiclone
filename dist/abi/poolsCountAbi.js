"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolsCountAbi = void 0;
exports.poolsCountAbi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token0',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'token1',
                type: 'address',
            },
        ],
        name: 'poolsCount',
        outputs: [
            {
                internalType: 'uint256',
                name: 'count',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=poolsCountAbi.js.map