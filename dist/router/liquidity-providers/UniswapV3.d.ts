import { PublicClient } from 'viem';
import { ChainId } from '../../chain/index.js';
import { LiquidityProviders } from './LiquidityProvider.js';
import { UniswapV3BaseProvider } from './UniswapV3Base.js';
export declare class UniswapV3Provider extends UniswapV3BaseProvider {
    constructor(chainId: ChainId, web3Client: PublicClient);
    getType(): LiquidityProviders;
    getPoolProviderName(): string;
}
//# sourceMappingURL=UniswapV3.d.ts.map