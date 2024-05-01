import { PublicClient } from 'viem';
import { ChainId } from '../../chain/index.js';
import { LiquidityProviders } from './LiquidityProvider.js';
import { UniswapV2BaseProvider } from './UniswapV2Base.js';
export declare class PancakeSwapProvider extends UniswapV2BaseProvider {
    fee: number;
    constructor(chainId: ChainId, web3Client: PublicClient);
    getType(): LiquidityProviders;
    getPoolProviderName(): string;
}
//# sourceMappingURL=PancakeSwap.d.ts.map