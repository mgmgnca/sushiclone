import { Address } from 'viem';
import { Token } from '../currency';
import { RPool, RToken } from '../tines/index.js';
declare class TokenInfo {
    address: Address;
    decExp: number;
    token: RToken;
    parent: TokenInfo | undefined;
    children: TokenInfo[];
    direction: boolean;
    poolPrice: number;
    poolAddress?: Address | undefined;
    poolLiquidity?: number | undefined;
    totalSuccessors: number;
    changedPoolIndex?: number;
    constructor(token: RToken, direction: boolean, poolPrice: number, parent?: TokenInfo, poolAddress?: Address, poolLiquidity?: number);
}
export declare class IncrementalPricer {
    readonly baseTokens: TokenInfo[];
    readonly baseTokenPrices: number[];
    readonly minLiquidity: number;
    readonly poolTokenMap: Map<string, TokenInfo>;
    readonly tokenMap: Map<Address, TokenInfo>;
    prices: Record<string, number>;
    pricesSize: number;
    lastfullPricesRecalcDate: number;
    fullPricesRecalcFlag: boolean;
    constructor(baseTokens: Token[], prices: number[], minLiquidity: number);
    updatePrices(updatedPools: RPool[], allPoolsOnDemand: () => RPool[], logging?: boolean): number;
    reasoning(token: Address): string[];
    isFullPricesRecalcNeeded(): boolean;
    private _fullPricesRecalculation;
    private _sortBaseVerts;
    private _updateTotalSuccessor;
    private _addVertice;
    private _updatePricesForPools;
    private _updatePricesForToken;
    private _isPoolStillPricable;
    private _checkAndAddNewToken;
    private _addNewToken;
    private _deleteChildlessToken;
}
export declare function compareCommonPrices(errMsg: string, prices0: Record<string, number>, prices1: Record<string, number>, precision?: number): number;
export {};
//# sourceMappingURL=IncrementalPricer.d.ts.map