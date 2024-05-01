export declare const stargateAdapterAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_stargateRouter";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_stargateWidget";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_sgeth";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_rp";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_weth";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientGas";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotStargateRouter";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RpSentNativeIn";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_adapterData";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_refundAddress";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "_swapData";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "_payloadData";
        readonly type: "bytes";
    }];
    readonly name: "adapterBridge";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_amountBridged";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "_payloadData";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }];
    readonly name: "executePayload";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "_dstChainId";
        readonly type: "uint16";
    }, {
        readonly internalType: "uint8";
        readonly name: "_functionType";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "_receiver";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_gas";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_dustAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "_payload";
        readonly type: "bytes";
    }];
    readonly name: "getFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "a";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "b";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "rp";
    readonly outputs: readonly [{
        readonly internalType: "contract IRouteProcessor";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_adapterData";
        readonly type: "bytes";
    }];
    readonly name: "sendMessage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "";
        readonly type: "uint16";
    }, {
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountLD";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "payload";
        readonly type: "bytes";
    }];
    readonly name: "sgReceive";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "sgeth";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "stargateRouter";
    readonly outputs: readonly [{
        readonly internalType: "contract IStargateRouter";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "stargateWidget";
    readonly outputs: readonly [{
        readonly internalType: "contract IStargateWidget";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_amountBridged";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "_swapData";
        readonly type: "bytes";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "_payloadData";
        readonly type: "bytes";
    }];
    readonly name: "swap";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "weth";
    readonly outputs: readonly [{
        readonly internalType: "contract IWETH";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
//# sourceMappingURL=stargateAdapterAbi.d.ts.map