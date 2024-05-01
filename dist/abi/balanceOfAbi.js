"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceOfAbi = void 0;
exports.balanceOfAbi = [
    {
        constant: true,
        inputs: [
            {
                name: '_owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                name: 'balance',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=balanceOfAbi.js.map