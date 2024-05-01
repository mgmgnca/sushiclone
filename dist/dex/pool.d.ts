import { Amount, Token } from '../currency/index.js';
import { Fee } from './fee.js';
export declare abstract class Pool {
    abstract readonly liquidityToken: Token;
    abstract readonly swapGasCost: bigint;
    abstract readonly minLiquidity: bigint;
    abstract get chainId(): number;
    abstract get fee(): Fee;
    abstract get assets(): Token[];
    abstract get reserves(): Amount<Token>[];
    abstract getLiquidityMinted(totalSupply: Amount<Token>, tokenAmountA: Amount<Token>, tokenAmountB: Amount<Token>): Amount<Token>;
    abstract getLiquidityValue(token: Token, totalSupply: Amount<Token>, liquidity: Amount<Token>): Amount<Token>;
    abstract involvesToken(token: Token): boolean;
}
//# sourceMappingURL=pool.d.ts.map