export declare const tridentConstantPoolFactoryAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_masterDeployer";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenOrder";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UnauthorisedDeployer";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroAddress";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "bytecodeHash";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token0";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token1";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "swapFee";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "twapSupport";
        readonly type: "bool";
    }];
    readonly name: "calculatePoolAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "configAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_deployData";
        readonly type: "bytes";
    }];
    readonly name: "deployPool";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getDeployData";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }, {
        readonly internalType: "contract IMasterDeployer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token0";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token1";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "startIndex";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "count";
        readonly type: "uint256";
    }];
    readonly name: "getPools";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "pairPools";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "masterDeployer";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "pools";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token0";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "token1";
        readonly type: "address";
    }];
    readonly name: "poolsCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "count";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=tridentConstantPoolFactoryAbi.d.ts.map