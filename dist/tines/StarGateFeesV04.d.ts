export interface BridgeState {
    currentAssetSD: bigint;
    lpAsset: bigint;
    eqFeePool: bigint;
    idealBalance: bigint;
    currentBalance: bigint;
    allocPointIsPositive: boolean;
}
export interface Fees {
    eqFee: bigint;
    eqReward: bigint;
    lpFee: bigint;
    protocolFee: bigint;
}
export declare function getStarGateFeesV04(state: BridgeState, whitelisted: boolean, amountSD: bigint): Fees;
//# sourceMappingURL=StarGateFeesV04.d.ts.map