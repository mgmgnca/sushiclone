export declare const sushiXSwapAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IBentoBoxMinimal";
        readonly name: "_bentoBox";
        readonly type: "address";
    }, {
        readonly internalType: "contract IStargateRouter";
        readonly name: "_stargateRouter";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_factory";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_pairCodeHash";
        readonly type: "bytes32";
    }, {
        readonly internalType: "contract IStargateWidget";
        readonly name: "_stargateWidget";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "NotStargateRouter";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TooLittleReceived";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "srcContext";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "failed";
        readonly type: "bool";
    }];
    readonly name: "StargateSushiXSwapDst";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "srcContext";
        readonly type: "bytes32";
    }];
    readonly name: "StargateSushiXSwapSrc";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "approveToStargateRouter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
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
        readonly internalType: "uint8[]";
        readonly name: "actions";
        readonly type: "uint8[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "values";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "datas";
        readonly type: "bytes[]";
    }];
    readonly name: "cook";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
    readonly name: "pairCodeHash";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
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
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
//# sourceMappingURL=sushiXSwapAbi.d.ts.map