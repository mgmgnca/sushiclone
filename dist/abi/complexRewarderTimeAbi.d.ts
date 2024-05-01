export declare const complexRewarderTimeAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "_rewardToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_rewardPerSecond";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_MASTERCHEF_V2";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "LogInit";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "pid";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "LogOnReward";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "pid";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "allocPoint";
        readonly type: "uint256";
    }];
    readonly name: "LogPoolAddition";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "rewardPerSecond";
        readonly type: "uint256";
    }];
    readonly name: "LogRewardPerSecond";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "pid";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "allocPoint";
        readonly type: "uint256";
    }];
    readonly name: "LogSetPool";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "pid";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "lastRewardTime";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "lpSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "accSushiPerShare";
        readonly type: "uint256";
    }];
    readonly name: "LogUpdatePool";
    readonly type: "event";
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
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "allocPoint";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_pid";
        readonly type: "uint256";
    }];
    readonly name: "add";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "claimOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pids";
        readonly type: "uint256[]";
    }];
    readonly name: "massUpdatePools";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pid";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_user";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "lpToken";
        readonly type: "uint256";
    }];
    readonly name: "onSushiReward";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly name: "pendingOwner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_pid";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_user";
        readonly type: "address";
    }];
    readonly name: "pendingToken";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pending";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pid";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "pendingTokens";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "rewardTokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "rewardAmounts";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "poolIds";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "poolInfo";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "accSushiPerShare";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "lastRewardTime";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "allocPoint";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "poolLength";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pools";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "address payable";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "reclaimTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "rewardPerSecond";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_pid";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_allocPoint";
        readonly type: "uint256";
    }];
    readonly name: "set";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_rewardPerSecond";
        readonly type: "uint256";
    }];
    readonly name: "setRewardPerSecond";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "direct";
        readonly type: "bool";
    }, {
        readonly internalType: "bool";
        readonly name: "renounce";
        readonly type: "bool";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pid";
        readonly type: "uint256";
    }];
    readonly name: "updatePool";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint128";
            readonly name: "accSushiPerShare";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint64";
            readonly name: "lastRewardTime";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "allocPoint";
            readonly type: "uint64";
        }];
        readonly internalType: "struct ComplexRewarderTime.PoolInfo";
        readonly name: "pool";
        readonly type: "tuple";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "userInfo";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "rewardDebt";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "unpaidRewards";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=complexRewarderTimeAbi.d.ts.map