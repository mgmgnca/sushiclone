"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyFromShortCurrencyName = exports.isShortCurrencyName = exports.isShortCurrencyNameSupported = void 0;
const index_js_1 = require("../chain/index.js");
const index_js_2 = require("../currency/index.js");
const CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY = {
    [index_js_1.ChainId.ARBITRUM]: {
        // NATIVE: Native.onChain(ChainId.ARBITRUM),
        // WNATIVE: WNATIVE[ChainId.ARBITRUM],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.ARBITRUM),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.ARBITRUM],
        WBTC: index_js_2.WBTC[index_js_1.ChainId.ARBITRUM],
        USDC: index_js_2.USDC[index_js_1.ChainId.ARBITRUM],
        USDT: index_js_2.USDT[index_js_1.ChainId.ARBITRUM],
        DAI: index_js_2.DAI[index_js_1.ChainId.ARBITRUM],
        FRAX: index_js_2.FRAX[index_js_1.ChainId.ARBITRUM],
        MIM: index_js_2.MIM[index_js_1.ChainId.ARBITRUM],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.ARBITRUM],
        MAI: index_js_2.MAI[index_js_1.ChainId.ARBITRUM],
        UNI: index_js_2.UNI[index_js_1.ChainId.ARBITRUM],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.ARBITRUM],
    },
    [index_js_1.ChainId.ARBITRUM_NOVA]: {
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.ARBITRUM_NOVA),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.ARBITRUM_NOVA],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.ARBITRUM_NOVA],
    },
    [index_js_1.ChainId.AVALANCHE]: {
        // NATIVE: Native.onChain(ChainId.AVALANCHE),
        // WNATIVE: WNATIVE[ChainId.AVALANCHE],
        AVAX: index_js_2.Native.onChain(index_js_1.ChainId.AVALANCHE),
        WAVAX: index_js_2.WNATIVE[index_js_1.ChainId.AVALANCHE],
        ETH: index_js_2.WETH9[index_js_1.ChainId.AVALANCHE],
        WETH: index_js_2.WETH9[index_js_1.ChainId.AVALANCHE],
        WBTC: index_js_2.WBTC[index_js_1.ChainId.AVALANCHE],
        USDC: index_js_2.USDC[index_js_1.ChainId.AVALANCHE],
        USDT: index_js_2.USDT[index_js_1.ChainId.AVALANCHE],
        DAI: index_js_2.DAI[index_js_1.ChainId.AVALANCHE],
        FRAX: index_js_2.FRAX[index_js_1.ChainId.AVALANCHE],
        MIM: index_js_2.MIM[index_js_1.ChainId.AVALANCHE],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.AVALANCHE],
        MAI: index_js_2.MAI[index_js_1.ChainId.AVALANCHE],
        UNI: index_js_2.UNI[index_js_1.ChainId.AVALANCHE],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.AVALANCHE],
    },
    [index_js_1.ChainId.BOBA]: {
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.BOBA),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.BOBA],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.BOBA],
    },
    [index_js_1.ChainId.BOBA_AVAX]: {
        BOBA: index_js_2.Native.onChain(index_js_1.ChainId.BOBA_AVAX),
        WBOBA: index_js_2.WNATIVE[index_js_1.ChainId.BOBA_AVAX],
        USDC: index_js_2.USDC[index_js_1.ChainId.BOBA_AVAX],
        // SUSHI: SUSHI[ChainId.BOBA_AVAX],
    },
    [index_js_1.ChainId.BOBA_BNB]: {
        BOBA: index_js_2.Native.onChain(index_js_1.ChainId.BOBA_BNB),
        WBOBA: index_js_2.WNATIVE[index_js_1.ChainId.BOBA_BNB],
        USDC: index_js_2.USDC[index_js_1.ChainId.BOBA_BNB],
        BNB: new index_js_2.Token({
            chainId: index_js_1.ChainId.BOBA_BNB,
            symbol: 'BNB',
            name: 'Binance Coin',
            decimals: 18,
            address: '0x4200000000000000000000000000000000000023',
        }),
        // SUSHI: SUSHI[ChainId.BOBA_BNB],
    },
    [index_js_1.ChainId.BSC]: {
        // NATIVE: Native.onChain(ChainId.BSC),
        // WNATIVE: WNATIVE[ChainId.BSC],
        BNB: index_js_2.Native.onChain(index_js_1.ChainId.BSC),
        WBNB: index_js_2.WNATIVE[index_js_1.ChainId.BSC],
        ETH: index_js_2.WETH9[index_js_1.ChainId.BSC],
        WETH: index_js_2.WETH9[index_js_1.ChainId.BSC],
        USDC: index_js_2.USDC[index_js_1.ChainId.BSC],
        USDT: index_js_2.USDT[index_js_1.ChainId.BSC],
        DAI: index_js_2.DAI[index_js_1.ChainId.BSC],
        FRAX: index_js_2.FRAX[index_js_1.ChainId.BSC],
        MIM: index_js_2.MIM[index_js_1.ChainId.BSC],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.BSC],
        MAI: index_js_2.MAI[index_js_1.ChainId.BSC],
        UNI: index_js_2.UNI[index_js_1.ChainId.BSC],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.BSC],
    },
    [index_js_1.ChainId.BTTC]: {
        BTT: index_js_2.Native.onChain(index_js_1.ChainId.BTTC),
        WBTT: index_js_2.WNATIVE[index_js_1.ChainId.BTTC],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.BTTC],
    },
    [index_js_1.ChainId.CELO]: {
        CELO: index_js_2.Native.onChain(index_js_1.ChainId.CELO),
        WCELO: index_js_2.WNATIVE[index_js_1.ChainId.CELO],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.CELO],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.CELO],
    },
    [index_js_1.ChainId.ETHEREUM]: {
        // NATIVE: Native.onChain(ChainId.ETHEREUM),
        // WNATIVE: WETH9[ChainId.ETHEREUM],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.ETHEREUM),
        WETH: index_js_2.WETH9[index_js_1.ChainId.ETHEREUM],
        WBTC: index_js_2.WBTC[index_js_1.ChainId.ETHEREUM],
        USDC: index_js_2.USDC[index_js_1.ChainId.ETHEREUM],
        USDT: index_js_2.USDT[index_js_1.ChainId.ETHEREUM],
        DAI: index_js_2.DAI[index_js_1.ChainId.ETHEREUM],
        FRAX: index_js_2.FRAX[index_js_1.ChainId.ETHEREUM],
        MIM: index_js_2.MIM[index_js_1.ChainId.ETHEREUM],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.ETHEREUM],
        MAI: index_js_2.MAI[index_js_1.ChainId.ETHEREUM],
        UNI: index_js_2.UNI[index_js_1.ChainId.ETHEREUM],
        LUSD: index_js_2.LUSD[index_js_1.ChainId.ETHEREUM],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.ETHEREUM],
    },
    [index_js_1.ChainId.FANTOM]: {
        // NATIVE: Native.onChain(ChainId.FANTOM),
        // WNATIVE: WNATIVE[ChainId.FANTOM],
        FTM: index_js_2.Native.onChain(index_js_1.ChainId.FANTOM),
        WFTM: index_js_2.WNATIVE[index_js_1.ChainId.FANTOM],
        FRAX: index_js_2.FRAX[index_js_1.ChainId.FANTOM],
        MIM: index_js_2.MIM[index_js_1.ChainId.FANTOM],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.FANTOM],
        MAI: index_js_2.MAI[index_js_1.ChainId.FANTOM],
    },
    [index_js_1.ChainId.FUSE]: {
        FUSE: index_js_2.Native.onChain(index_js_1.ChainId.FUSE),
        WFUSE: index_js_2.WNATIVE[index_js_1.ChainId.FUSE],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.FUSE],
    },
    [index_js_1.ChainId.GNOSIS]: {
        XDAI: index_js_2.Native.onChain(index_js_1.ChainId.GNOSIS),
        WXDAI: index_js_2.WNATIVE[index_js_1.ChainId.GNOSIS],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.GNOSIS],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.GNOSIS],
    },
    [index_js_1.ChainId.KAVA]: {
        KAVA: index_js_2.Native.onChain(index_js_1.ChainId.KAVA),
        WKAVA: index_js_2.WNATIVE[index_js_1.ChainId.KAVA],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.KAVA],
    },
    [index_js_1.ChainId.METIS]: {
        METIS: index_js_2.Native.onChain(index_js_1.ChainId.METIS),
        WMETIS: index_js_2.WNATIVE[index_js_1.ChainId.METIS],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.METIS],
    },
    [index_js_1.ChainId.MOONBEAM]: {
        GLMR: index_js_2.Native.onChain(index_js_1.ChainId.MOONBEAM),
        WGLMR: index_js_2.WNATIVE[index_js_1.ChainId.MOONBEAM],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.MOONBEAM],
    },
    [index_js_1.ChainId.MOONRIVER]: {
        MOVR: index_js_2.Native.onChain(index_js_1.ChainId.MOONRIVER),
        WMOVR: index_js_2.WNATIVE[index_js_1.ChainId.MOONRIVER],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.MOONRIVER],
    },
    [index_js_1.ChainId.OPTIMISM]: {
        // NATIVE: Native.onChain(ChainId.OPTIMISM),
        // WNATIVE: WNATIVE[ChainId.OPTIMISM],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.OPTIMISM),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.OPTIMISM],
        USDC: index_js_2.USDC[index_js_1.ChainId.OPTIMISM],
        USDT: index_js_2.USDT[index_js_1.ChainId.OPTIMISM],
        OP: index_js_2.OP[index_js_1.ChainId.OPTIMISM],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.OPTIMISM],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.OPTIMISM],
    },
    [index_js_1.ChainId.POLYGON]: {
        // NATIVE: Native.onChain(ChainId.POLYGON),
        // WNATIVE: WNATIVE[ChainId.POLYGON],
        MATIC: index_js_2.Native.onChain(index_js_1.ChainId.POLYGON),
        WMATIC: index_js_2.WNATIVE[index_js_1.ChainId.POLYGON],
        ETH: index_js_2.WETH9[index_js_1.ChainId.POLYGON],
        WETH: index_js_2.WETH9[index_js_1.ChainId.POLYGON],
        WBTC: index_js_2.WBTC[index_js_1.ChainId.POLYGON],
        USDC: index_js_2.USDC[index_js_1.ChainId.POLYGON],
        USDT: index_js_2.USDT[index_js_1.ChainId.POLYGON],
        DAI: index_js_2.DAI[index_js_1.ChainId.POLYGON],
        FRAX: index_js_2.FRAX[index_js_1.ChainId.POLYGON],
        MIM: index_js_2.MIM[index_js_1.ChainId.POLYGON],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.POLYGON],
        MAI: index_js_2.MAI[index_js_1.ChainId.POLYGON],
        UNI: index_js_2.UNI[index_js_1.ChainId.POLYGON],
        AGEUR: index_js_2.AGEUR[index_js_1.ChainId.POLYGON],
    },
    [index_js_1.ChainId.HARMONY]: {
        ONE: index_js_2.Native.onChain(index_js_1.ChainId.HARMONY),
        WONE: index_js_2.WNATIVE[index_js_1.ChainId.HARMONY],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.HARMONY],
    },
    // [ChainId.SCROLL_ALPHA_TESTNET]: {
    //   ETH: Native.onChain(ChainId.SCROLL_ALPHA_TESTNET),
    //   WETH: WNATIVE[ChainId.SCROLL_ALPHA_TESTNET],
    // },
    // [ChainId.CONSENSUS_ZKEVM_TESTNET]: {
    //   ETH: Native.onChain(ChainId.CONSENSUS_ZKEVM_TESTNET),
    //   WETH: WNATIVE[ChainId.CONSENSUS_ZKEVM_TESTNET],
    // },
    // [ChainId.BASE_TESTNET]: {
    //   ETH: Native.onChain(ChainId.BASE_TESTNET),
    //   WETH: WNATIVE[ChainId.BASE_TESTNET],
    // },
    [index_js_1.ChainId.THUNDERCORE]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.THUNDERCORE),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.THUNDERCORE],
        SUSHI: index_js_2.SUSHI[index_js_1.ChainId.THUNDERCORE],
    },
    [index_js_1.ChainId.POLYGON_ZKEVM]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.POLYGON_ZKEVM),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.POLYGON_ZKEVM],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.POLYGON_ZKEVM),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.POLYGON_ZKEVM],
    },
    [index_js_1.ChainId.CORE]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.CORE),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.CORE],
        ETH: index_js_2.WETH9[index_js_1.ChainId.CORE],
        WETH: index_js_2.WETH9[index_js_1.ChainId.CORE],
    },
    [index_js_1.ChainId.HAQQ]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.HAQQ),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.HAQQ],
        ETH: index_js_2.WETH9[index_js_1.ChainId.HAQQ],
        WETH: index_js_2.WETH9[index_js_1.ChainId.HAQQ],
    },
    [index_js_1.ChainId.ZKSYNC_ERA]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.ZKSYNC_ERA),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.ZKSYNC_ERA],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.ZKSYNC_ERA),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.ZKSYNC_ERA],
    },
    [index_js_1.ChainId.LINEA]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.LINEA),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.LINEA],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.LINEA),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.LINEA],
    },
    [index_js_1.ChainId.BASE]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.BASE),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.BASE],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.BASE),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.BASE],
    },
    [index_js_1.ChainId.SCROLL]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.SCROLL),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.SCROLL],
        ETH: index_js_2.Native.onChain(index_js_1.ChainId.SCROLL),
        WETH: index_js_2.WNATIVE[index_js_1.ChainId.SCROLL],
    },
    [index_js_1.ChainId.FILECOIN]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.FILECOIN),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.FILECOIN],
    },
    [index_js_1.ChainId.ZETACHAIN]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.ZETACHAIN),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.ZETACHAIN],
    },
    [index_js_1.ChainId.BLAST]: {
        NATIVE: index_js_2.Native.onChain(index_js_1.ChainId.BLAST),
        WNATIVE: index_js_2.WNATIVE[index_js_1.ChainId.BLAST],
        USDB: index_js_2.USDB[index_js_1.ChainId.BLAST],
    },
};
const isShortCurrencyNameSupported = (chainId) => chainId in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY;
exports.isShortCurrencyNameSupported = isShortCurrencyNameSupported;
const isShortCurrencyName = (chainId, shortCurrencyName) => {
    return ((0, exports.isShortCurrencyNameSupported)(chainId) &&
        shortCurrencyName in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId]);
};
exports.isShortCurrencyName = isShortCurrencyName;
const currencyFromShortCurrencyName = (chainId, shortCurrencyName) => {
    if (!(0, exports.isShortCurrencyNameSupported)(chainId))
        throw new Error(`Unsupported chain id ${chainId} for short currency name ${shortCurrencyName}`);
    if (!(shortCurrencyName in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId]))
        throw new Error(`Unsupported short currency name ${shortCurrencyName} on chain ${chainId}`);
    return CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId][shortCurrencyName];
};
exports.currencyFromShortCurrencyName = currencyFromShortCurrencyName;
//# sourceMappingURL=short-name-to-currency.js.map