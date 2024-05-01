export declare const furoVestingRouterAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IBentoBoxMinimal";
        readonly name: "_bentoBox";
        readonly type: "address";
    }, {
        readonly internalType: "contract IFuroVesting";
        readonly name: "_furoVesting";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_wETH";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientShares";
    readonly type: "error";
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
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "start";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "cliffDuration";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "stepDuration";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "steps";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "stepPercentage";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly internalType: "bool";
            readonly name: "fromBentoBox";
            readonly type: "bool";
        }];
        readonly internalType: "struct IFuroVesting.VestParams";
        readonly name: "vestParams";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "minShare";
        readonly type: "uint256";
    }];
    readonly name: "createVesting";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "depositedShares";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "vestId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint128";
        readonly name: "stepShares";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "cliffShares";
        readonly type: "uint128";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "furoVesting";
    readonly outputs: readonly [{
        readonly internalType: "contract IFuroVesting";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "setBentoBoxApproval";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "wETH";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=furoVestingRouterAbi.d.ts.map