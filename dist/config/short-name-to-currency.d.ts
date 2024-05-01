import { ChainId } from '../chain/index.js';
import { Native, Token, Type } from '../currency/index.js';
declare const CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY: {
    readonly 42161: {
        readonly ETH: Native;
        readonly WETH: Token;
        readonly WBTC: Token;
        readonly USDC: Token;
        readonly USDT: Token;
        readonly DAI: Token;
        readonly FRAX: Token;
        readonly MIM: Token;
        readonly SUSHI: Token;
        readonly MAI: Token;
        readonly UNI: Token;
        readonly AGEUR: Token;
    };
    readonly 42170: {
        readonly ETH: Native;
        readonly WETH: Token;
        readonly SUSHI: Token;
    };
    readonly 43114: {
        readonly AVAX: Native;
        readonly WAVAX: Token;
        readonly ETH: Token;
        readonly WETH: Token;
        readonly WBTC: Token;
        readonly USDC: Token;
        readonly USDT: Token;
        readonly DAI: Token;
        readonly FRAX: Token;
        readonly MIM: Token;
        readonly SUSHI: Token;
        readonly MAI: Token;
        readonly UNI: Token;
        readonly AGEUR: Token;
    };
    readonly 288: {
        readonly ETH: Native;
        readonly WETH: Token;
        readonly SUSHI: Token;
    };
    readonly 43288: {
        readonly BOBA: Native;
        readonly WBOBA: Token;
        readonly USDC: Token;
    };
    readonly 56288: {
        readonly BOBA: Native;
        readonly WBOBA: Token;
        readonly USDC: Token;
        readonly BNB: Token;
    };
    readonly 56: {
        readonly BNB: Native;
        readonly WBNB: Token;
        readonly ETH: Token;
        readonly WETH: Token;
        readonly USDC: Token;
        readonly USDT: Token;
        readonly DAI: Token;
        readonly FRAX: Token;
        readonly MIM: Token;
        readonly SUSHI: Token;
        readonly MAI: Token;
        readonly UNI: Token;
        readonly AGEUR: Token;
    };
    readonly 199: {
        readonly BTT: Native;
        readonly WBTT: Token;
        readonly SUSHI: Token;
    };
    readonly 42220: {
        readonly CELO: Native;
        readonly WCELO: Token;
        readonly SUSHI: Token;
        readonly AGEUR: Token;
    };
    readonly 1: {
        readonly ETH: Native;
        readonly WETH: Token;
        readonly WBTC: Token;
        readonly USDC: Token;
        readonly USDT: Token;
        readonly DAI: Token;
        readonly FRAX: Token;
        readonly MIM: Token;
        readonly SUSHI: Token;
        readonly MAI: Token;
        readonly UNI: Token;
        readonly LUSD: Token;
        readonly AGEUR: Token;
    };
    readonly 250: {
        readonly FTM: Native;
        readonly WFTM: Token;
        readonly FRAX: Token;
        readonly MIM: Token;
        readonly SUSHI: Token;
        readonly MAI: Token;
    };
    readonly 122: {
        readonly FUSE: Native;
        readonly WFUSE: Token;
        readonly SUSHI: Token;
    };
    readonly 100: {
        readonly XDAI: Native;
        readonly WXDAI: Token;
        readonly SUSHI: Token;
        readonly AGEUR: Token;
    };
    readonly 2222: {
        readonly KAVA: Native;
        readonly WKAVA: Token;
        readonly SUSHI: Token;
    };
    readonly 1088: {
        readonly METIS: Native;
        readonly WMETIS: Token;
        readonly SUSHI: Token;
    };
    readonly 1284: {
        readonly GLMR: Native;
        readonly WGLMR: Token;
        readonly SUSHI: Token;
    };
    readonly 1285: {
        readonly MOVR: Native;
        readonly WMOVR: Token;
        readonly SUSHI: Token;
    };
    readonly 10: {
        readonly ETH: Native;
        readonly WETH: Token;
        readonly USDC: Token;
        readonly USDT: Token;
        readonly OP: Token;
        readonly SUSHI: Token;
        readonly AGEUR: Token;
    };
    readonly 137: {
        readonly MATIC: Native;
        readonly WMATIC: Token;
        readonly ETH: Token;
        readonly WETH: Token;
        readonly WBTC: Token;
        readonly USDC: Token;
        readonly USDT: Token;
        readonly DAI: Token;
        readonly FRAX: Token;
        readonly MIM: Token;
        readonly SUSHI: Token;
        readonly MAI: Token;
        readonly UNI: Token;
        readonly AGEUR: Token;
    };
    readonly 1666600000: {
        readonly ONE: Native;
        readonly WONE: Token;
        readonly SUSHI: Token;
    };
    readonly 108: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly SUSHI: Token;
    };
    readonly 1101: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly ETH: Native;
        readonly WETH: Token;
    };
    readonly 1116: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly ETH: Token;
        readonly WETH: Token;
    };
    readonly 11235: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly ETH: Token;
        readonly WETH: Token;
    };
    readonly 324: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly ETH: Native;
        readonly WETH: Token;
    };
    readonly 59144: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly ETH: Native;
        readonly WETH: Token;
    };
    readonly 8453: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly ETH: Native;
        readonly WETH: Token;
    };
    readonly 534352: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly ETH: Native;
        readonly WETH: Token;
    };
    readonly 314: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
    };
    readonly 7000: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
    };
    readonly 81457: {
        readonly NATIVE: Native;
        readonly WNATIVE: Token;
        readonly USDB: Token;
    };
};
export type ShortCurrencyNameChainId = keyof typeof CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY;
export type ShortCurrencyName = keyof (typeof CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY)[ShortCurrencyNameChainId];
export declare const isShortCurrencyNameSupported: (chainId: ChainId) => chainId is 1 | 137 | 250 | 100 | 56 | 42161 | 42170 | 43114 | 1666600000 | 42220 | 1285 | 122 | 1284 | 10 | 2222 | 1088 | 288 | 43288 | 56288 | 199 | 1101 | 108 | 314 | 11235 | 1116 | 324 | 59144 | 8453 | 534352 | 7000 | 81457;
export declare const isShortCurrencyName: (chainId: ChainId, shortCurrencyName: string) => shortCurrencyName is never;
export declare const currencyFromShortCurrencyName: (chainId: ChainId, shortCurrencyName: ShortCurrencyName) => Type;
export {};
//# sourceMappingURL=short-name-to-currency.d.ts.map