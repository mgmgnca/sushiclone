import { Amount, Price, Token } from '../../currency/index.js';
import { BigintIsh } from '../../math/index.js';
import { SerializedSushiSwapV2Pool } from './zod.js';
export declare class SushiSwapV2Pool {
    readonly liquidityToken: Token;
    readonly swapGasCost = 60000n;
    readonly minLiquidity = 1000n;
    private readonly tokenAmounts;
    static getAddress(tokenA: Token, tokenB: Token): string;
    constructor(amountA: Amount<Token>, amountB: Amount<Token>);
    /**
     * Returns true if the token is either token0 or token1
     * @param token to check
     */
    involvesToken(token: Token): boolean;
    /**
     * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
     */
    get token0Price(): Price<Token, Token>;
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
    get token1Price(): Price<Token, Token>;
    /**
     * Return the price of the given token in terms of the other token in the pair.
     * @param token token to return price of
     */
    priceOf(token: Token): Price<Token, Token>;
    /**
     * Returns the chain ID of the tokens in the pair.
     */
    get chainId(): number;
    get token0(): Token;
    get token1(): Token;
    get reserve0(): Amount<Token>;
    get reserve1(): Amount<Token>;
    reserveOf(token: Token): Amount<Token>;
    getOutputAmount(inputAmount: Amount<Token>): [Amount<Token>, SushiSwapV2Pool];
    getInputAmount(outputAmount: Amount<Token>): [Amount<Token>, SushiSwapV2Pool];
    getLiquidityMinted(totalSupply: Amount<Token>, tokenAmountA: Amount<Token>, tokenAmountB: Amount<Token>): Amount<Token>;
    getLiquidityValue(token: Token, totalSupply: Amount<Token>, liquidity: Amount<Token>, feeOn?: boolean, kLast?: BigintIsh): Amount<Token>;
    serialize(): SerializedSushiSwapV2Pool;
    static deserialize(pair: SerializedSushiSwapV2Pool): SushiSwapV2Pool;
}
//# sourceMappingURL=sushiswap-v2-pool.d.ts.map