export declare const tickLensAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "int16";
        readonly name: "tickBitmapIndex";
        readonly type: "int16";
    }];
    readonly name: "getPopulatedTicksInWord";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }, {
            readonly internalType: "int128";
            readonly name: "liquidityNet";
            readonly type: "int128";
        }, {
            readonly internalType: "uint128";
            readonly name: "liquidityGross";
            readonly type: "uint128";
        }];
        readonly internalType: "struct ITickLens.PopulatedTick[]";
        readonly name: "populatedTicks";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
//# sourceMappingURL=tickLensAbi.d.ts.map