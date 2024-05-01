export declare const routeProcessorAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_bentoBox";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "bentoBox";
    readonly outputs: readonly [{
        readonly internalType: "contract IBentoBoxMinimal";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "route";
        readonly type: "bytes";
    }];
    readonly name: "processRoute";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address payable";
        readonly name: "transferValueTo";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountValueTransfer";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutMin";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "route";
        readonly type: "bytes";
    }];
    readonly name: "transferValueAndprocessRoute";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
//# sourceMappingURL=routeProcessorAbi.d.ts.map