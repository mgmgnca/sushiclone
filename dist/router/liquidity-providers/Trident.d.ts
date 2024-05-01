import { Address, PublicClient } from 'viem';
import { type ChainId } from '../../chain/index.js';
import { Token } from '../../currency/index.js';
import { PoolResponse2 } from '../lib/api.js';
import { type PoolCode } from '../pool-codes/index.js';
import { LiquidityProvider, LiquidityProviders } from './LiquidityProvider.js';
export declare function convertToNumbers(arr: bigint[]): (number | undefined)[];
interface PoolInfo {
    poolCode: PoolCode;
    validUntilTimestamp: number;
}
export declare class TridentProvider extends LiquidityProvider {
    readonly TOP_POOL_SIZE = 155;
    readonly TOP_POOL_LIQUIDITY_THRESHOLD = 1000;
    readonly ON_DEMAND_POOL_SIZE = 20;
    readonly REFRESH_INITIAL_POOLS_INTERVAL = 60;
    isInitialized: boolean;
    topClassicPools: Map<Address, PoolCode>;
    topStablePools: Map<Address, PoolCode>;
    onDemandClassicPools: Map<Address, PoolInfo>;
    onDemandStablePools: Map<Address, PoolInfo>;
    poolsByTrade: Map<string, string[]>;
    availablePools: Map<string, PoolResponse2>;
    bridges: Map<string, PoolCode>;
    bentoBox: Record<1 | 137 | 250 | 100 | 56 | 42161 | 42170 | 43114 | 128 | 1666600000 | 42220 | 1285 | 122 | 1284 | 10 | 2222 | 1088 | 288 | 43288 | 56288 | 199, `0x${string}`>;
    constantProductPoolFactory: {
        readonly 42161: "0xc79Ae87E9f55761c08e346B98dDdf070C9872787";
        readonly 43114: "0xb84a043bc4fCA97B7a74eD7dAaB1Bf12A8DF929F";
        readonly 56: "0x3D2f8ae0344d38525d2AE96Ab750B83480c0844F";
        readonly 199: "0x752Dc00ABa9c930c84aC81D288dB5E2a02Afe633";
        readonly 1: "0xD75F5369724b513b497101fb15211160c1d96550";
        readonly 250: "0x2c8C987C4777AB740d20Cb581f5d381BE95A4A4a";
        readonly 100: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3";
        readonly 2222: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F";
        readonly 1088: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F";
        readonly 10: "0x93395129bd3fcf49d95730D3C2737c17990fF328";
        readonly 137: "0x28890e3C0aA9B4b48b1a716f46C9abc9B12abfab";
    };
    stablePoolFactory: {
        readonly 42161: "0xc2fB256ABa36852DCcEA92181eC6b355f09A0288";
        readonly 43114: "0x7770978eED668a3ba661d51a773d3a992Fc9DDCB";
        readonly 56: "0xA4C0363edD74F55AC8f316a3Bf447F8aa09607D3";
        readonly 199: "0x120140d0c1EBC938befc84840575EcDc5fE55aFe";
        readonly 1: "0xC040F84Cf7046409f92d578eF9040fE45E6ef4be";
        readonly 250: "0x97a32B4f8486735075f2cBEcff64208fBF2e610A";
        readonly 100: "0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa";
        readonly 2222: "0x9B3fF703FA9C8B467F5886d7b61E61ba07a9b51c";
        readonly 1088: "0x2f686751b19a9d91cc3d57d90150Bc767f050066";
        readonly 10: "0x827179dD56d07A7eeA32e3873493835da2866976";
        readonly 137: "0x2A0Caa28331bC6a18FF195f06694f90671dE70f2";
    };
    latestPoolCreatedAtTimestamp: Date;
    discoverNewPoolsTimestamp: number;
    refreshAvailablePoolsTimestamp: number;
    blockListener?: (() => void) | undefined;
    unwatchBlockNumber?: () => void;
    constructor(chainId: ChainId, web3Client: PublicClient, isTest?: boolean);
    getType(): LiquidityProviders;
    getPoolProviderName(): string;
    initialize(): Promise<void>;
    private getInitialPools;
    initPools(pools: PoolResponse2[]): Promise<void>;
    updatePools(): Promise<void>;
    getOnDemandPools(t0: Token, t1: Token, excludePools?: Set<string>): Promise<void>;
    private discoverNewPools;
    private updateAvailablePools;
    private prioritizeTopPools;
    startFetchPoolsData(): void;
    private removeStalePools;
    fetchPoolsForToken(t0: Token, t1: Token, excludePools?: Set<string>): Promise<void>;
    getCurrentPoolList(t0: Token, t1: Token): PoolCode[];
    stopFetchPoolsData(): void;
    private updateClassicReserves;
    private updateStablePools;
    private poolResponseToSortedTokens;
}
export {};
//# sourceMappingURL=Trident.d.ts.map