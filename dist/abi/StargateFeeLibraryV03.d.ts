export declare const stargateFeeLibraryV03Abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_factory";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DELTA_1";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DELTA_2";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DENOMINATOR";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "LAMBDA_1";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "LAMBDA_2";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "LP_FEE";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PROTOCOL_FEE";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PROTOCOL_SUBSIDY";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly internalType: "contract Factory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "idealBalance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "beforeBalance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountSD";
        readonly type: "uint256";
    }];
    readonly name: "getEquilibriumFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_srcPoolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_dstPoolId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint16";
        readonly name: "_dstChainId";
        readonly type: "uint16";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amountSD";
        readonly type: "uint256";
    }];
    readonly name: "getFees";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "eqFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "eqReward";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lpFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "protocolFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lkbRemove";
            readonly type: "uint256";
        }];
        readonly internalType: "struct Pool.SwapObj";
        readonly name: "s";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "lambda";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "yOffset";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "xUpperBound";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "xLowerBound";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "xStart";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "xEnd";
        readonly type: "uint256";
    }];
    readonly name: "getTrapezoidArea";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVersion";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=StargateFeeLibraryV03.d.ts.map