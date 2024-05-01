export declare const furoStreamRouterAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IBentoBoxMinimal";
        readonly name: "_bentoBox";
        readonly type: "address";
    }, {
        readonly internalType: "contract IFuroStream";
        readonly name: "_furoStream";
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
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint64";
        readonly name: "startTime";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "endTime";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "fromBentoBox";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "minShare";
        readonly type: "uint256";
    }];
    readonly name: "createStream";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "streamId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "depositedShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "furoStream";
    readonly outputs: readonly [{
        readonly internalType: "contract IFuroStream";
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
//# sourceMappingURL=furoStreamRouterAbi.d.ts.map