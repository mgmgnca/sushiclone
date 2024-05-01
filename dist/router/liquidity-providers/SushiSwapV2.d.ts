import { PublicClient } from 'viem';
import { ChainId } from '../../chain/index.js';
import { LiquidityProviders } from './LiquidityProvider.js';
import { UniswapV2BaseProvider } from './UniswapV2Base.js';
export declare class SushiSwapV2Provider extends UniswapV2BaseProvider {
    constructor(chainId: ChainId, web3Client: PublicClient);
    getType(): LiquidityProviders;
    getPoolProviderName(): string;
}
//# sourceMappingURL=SushiSwapV2.d.ts.map