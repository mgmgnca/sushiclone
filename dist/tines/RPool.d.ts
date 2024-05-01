import { Address } from 'viem';
export declare const TYPICAL_SWAP_GAS_COST = 60000;
export declare const TYPICAL_MINIMAL_LIQUIDITY = 1000;
export interface RToken {
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    chainId?: number | string;
    tokenId?: string;
}
export declare function setTokenId(...tokens: RToken[]): void;
export declare enum PoolType {
    Wrap = "Wrap",
    Bridge = "Bridge",
    Classic = "Classic",
    Concentrated = "Concentrated",
    Stable = "Stable",
    Curve = "Curve",
    Unknown = "Unknown"
}
export declare abstract class RPool {
    readonly address: Address;
    token0: RToken;
    token1: RToken;
    readonly fee: number;
    reserve0: bigint;
    reserve1: bigint;
    readonly minLiquidity: number;
    readonly swapGasCost: number;
    constructor(address: Address, token0: RToken, token1: RToken, fee: number, reserve0: bigint, reserve1: bigint, minLiquidity?: number, swapGasCost?: number);
    updateReserves(res0: bigint, res1: bigint): void;
    getReserve0(): bigint;
    getReserve1(): bigint;
    abstract calcOutByIn(amountIn: number, direction: boolean): {
        out: number;
        gasSpent: number;
    };
    abstract calcInByOut(amountOut: number, direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    abstract calcCurrentPriceWithoutFee(direction: boolean): number;
    calcOutByInReal(amountIn: number, direction: boolean): number;
    setCurrentFlow(_flow0: number, _flow1: number, _gas: number): void;
    cleanTmpData(): void;
    granularity0(): number;
    granularity1(): number;
    alwaysAppropriateForPricing(): boolean;
    uniqueID(): string;
    poolType(): PoolType;
}
//# sourceMappingURL=RPool.d.ts.map