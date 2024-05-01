"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAI = exports.USDT = exports.USDC = exports.USD_PLUS = exports.axlWBTC = exports.axlETH = exports.axlDAI = exports.axlUSDT = exports.axlUSDC = exports.XSUSHI = exports.SUSHI = exports.WNATIVE = exports.WETH9 = exports.LUSD = exports.JPY = exports.COMP = exports.AAVE = exports.ANKR = exports.AGEUR = exports.TUSD = exports.MAI = exports.BUSD = exports.UNI = exports.WBTC = exports.OHM = exports.NFTX = exports.renBTC = exports.TRIBE = exports.FEI = exports.SWISE = exports.sETH2 = exports.rETH2 = exports.PRIMATE = exports.APE = exports.LDO = exports.KP3R = exports.ARB = exports.GNO = exports.MATIC = exports.GALA = exports.SNX = exports.CRV = exports.ENJ = exports.YFI = exports.MKR = exports.MANA = exports.GNS = exports.STG = exports.SAND = exports.AMPL = void 0;
exports.MUSD = exports.FILECOIN_CELER_BRIDGE_USDT = exports.FILECOIN_CELER_BRIDGE_USDC = exports.ZETA_BSC_BRIDGE_USDT = exports.ZETA_ETH_BRIDGE_USDT = exports.ZETA_BSC_BRIDGE_USDC = exports.ZETA_ETH_BRIDGE_USDC = exports.BASE_BRIDGE_USDC = exports.BTTC_TRON_BRIDGE_USDT = exports.BTTC_ETHEREUM_BRIDGE_USDT = exports.BTTC_BSC_BRIDGE_USDT = exports.BTTC_TRON_BRIDGE_USDC = exports.BTTC_ETHEREUM_BRIDGE_USDC = exports.BTTC_BSC_BRIDGE_USDC = exports.THUNDERCORE_ANY_BUSD = exports.THUNDERCORE_ANY_USDC = exports.THUNDERCORE_ANY_USDT = exports.OPTICS_USDC = exports.JUGNI = exports.WORMHOLE_WETH = exports.WORMHOLE_WBTC = exports.WORMHOLE_USDC = exports.USDB = exports.LINK = exports.RNDR = exports.TEL = exports.GRT = exports.KNCv2 = exports.WAVAX = exports.BAL = exports.OCEAN = exports.OP = exports.QUICK = exports.KLIMA = exports.BCT = exports.FXS = exports.FRAX = exports.MIM = void 0;
const index_js_1 = require("../chain/index.js");
const Token_js_1 = require("./Token.js");
const token_addresses_js_1 = require("./token-addresses.js");
function addressMapToTokenMap({ decimals, symbol, name, }, map) {
    return Object.fromEntries(Object.entries(map).map(([chainId, address]) => [
        chainId,
        new Token_js_1.Token({
            chainId,
            address,
            decimals,
            symbol,
            name,
        }),
    ]));
}
exports.AMPL = addressMapToTokenMap({ decimals: 9, symbol: 'AMPL', name: 'Ampleforth' }, token_addresses_js_1.AMPL_ADDRESS);
exports.SAND = addressMapToTokenMap({
    decimals: 18,
    symbol: 'SAND',
    name: 'SAND',
}, token_addresses_js_1.SAND_ADDRESS);
exports.STG = addressMapToTokenMap({
    decimals: 18,
    symbol: 'STG',
    name: 'StargateToken',
}, token_addresses_js_1.STG_ADDRESS);
exports.GNS = addressMapToTokenMap({
    decimals: 18,
    symbol: 'GNS',
    name: 'Gains Network',
}, token_addresses_js_1.GNS_ADDRESS);
exports.MANA = addressMapToTokenMap({
    decimals: 18,
    symbol: 'MANA',
    name: 'Decentraland',
}, token_addresses_js_1.MANA_ADDRESS);
exports.MKR = addressMapToTokenMap({
    decimals: 18,
    symbol: 'MKR',
    name: 'Maker',
}, token_addresses_js_1.MKR_ADDRESS);
exports.YFI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'YFI',
    name: 'yearn.finance',
}, token_addresses_js_1.YFI_ADDRESS);
exports.ENJ = addressMapToTokenMap({
    decimals: 18,
    symbol: 'ENJ',
    name: 'Enjin Coin',
}, token_addresses_js_1.ENJ_ADDRESS);
exports.CRV = addressMapToTokenMap({
    decimals: 18,
    symbol: 'CRV',
    name: 'Curve DAO Token',
}, token_addresses_js_1.CRV_ADDRESS);
exports.SNX = addressMapToTokenMap({
    decimals: 18,
    symbol: 'SNX',
    name: 'Synthetix Network Token',
}, token_addresses_js_1.SNX_ADDRESS);
exports.GALA = addressMapToTokenMap({
    decimals: 8,
    symbol: 'GALA',
    name: 'Gala',
}, token_addresses_js_1.GALA_ADDRESS);
exports.MATIC = addressMapToTokenMap({
    decimals: 18,
    symbol: 'MATIC',
    name: 'Matic Token',
}, token_addresses_js_1.MATIC_ADDRESS);
exports.GNO = addressMapToTokenMap({
    decimals: 18,
    symbol: 'GNO',
    name: 'Gnosis Token',
}, token_addresses_js_1.GNO_ADDRESS);
exports.ARB = addressMapToTokenMap({
    decimals: 18,
    symbol: 'ARB',
    name: 'Arbitrum',
}, token_addresses_js_1.ARB_ADDRESS);
exports.KP3R = addressMapToTokenMap({
    decimals: 18,
    symbol: 'KP3R',
    name: 'Keep3rV1',
}, token_addresses_js_1.KP3R_ADDRESS);
exports.LDO = addressMapToTokenMap({
    decimals: 18,
    symbol: 'LDO',
    name: 'Lido DAO Token',
}, token_addresses_js_1.LDO_ADDRESS);
exports.APE = addressMapToTokenMap({
    decimals: 18,
    symbol: 'APE',
    name: 'ApeCoin',
}, token_addresses_js_1.APE_ADDRESS);
exports.PRIMATE = addressMapToTokenMap({
    decimals: 18,
    symbol: 'PRIMATE',
    name: 'PRIMATE',
}, token_addresses_js_1.PRIMATE_ADDRESS);
exports.rETH2 = addressMapToTokenMap({
    decimals: 18,
    symbol: 'rETH2',
    name: 'StakeWise Reward ETH2',
}, token_addresses_js_1.rETH2_ADDRESS);
exports.sETH2 = addressMapToTokenMap({
    decimals: 18,
    symbol: 'sETH2',
    name: 'StakeWise Staked ETH2',
}, token_addresses_js_1.sETH2_ADDRESS);
exports.SWISE = addressMapToTokenMap({
    decimals: 18,
    symbol: 'SWISE',
    name: 'StakeWise',
}, token_addresses_js_1.SWISE_ADDRESS);
exports.FEI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'FEI',
    name: 'Fei USD',
}, token_addresses_js_1.FEI_ADDRESS);
exports.TRIBE = addressMapToTokenMap({
    decimals: 18,
    symbol: 'TRIBE',
    name: 'Tribe',
}, token_addresses_js_1.TRIBE_ADDRESS);
exports.renBTC = addressMapToTokenMap({
    decimals: 8,
    symbol: 'renBTC',
    name: 'renBTC',
}, token_addresses_js_1.renBTC_ADDRESS);
exports.NFTX = addressMapToTokenMap({
    decimals: 18,
    symbol: 'NFTX',
    name: 'NFTX',
}, token_addresses_js_1.NFTX_ADDRESS);
exports.OHM = addressMapToTokenMap({
    decimals: 9,
    symbol: 'OHM',
    name: 'Olympus',
}, token_addresses_js_1.OHM_ADDRESS);
exports.WBTC = addressMapToTokenMap({
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
}, token_addresses_js_1.WBTC_ADDRESS);
exports.UNI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'UNI',
    name: 'Uniswap',
}, token_addresses_js_1.UNI_ADDRESS);
exports.BUSD = addressMapToTokenMap({
    decimals: 18,
    symbol: 'BUSD',
    name: 'BUSD Token',
}, token_addresses_js_1.BUSD_ADDRESS);
exports.MAI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'MAI',
    name: 'Mai Stablecoin',
}, token_addresses_js_1.MAI_ADDRESS);
exports.TUSD = addressMapToTokenMap({
    decimals: 18,
    symbol: 'TUSD',
    name: 'TrueUSD',
}, token_addresses_js_1.TUSD_ADDRESS);
exports.AGEUR = addressMapToTokenMap({
    decimals: 18,
    symbol: 'agEUR',
    name: 'agEUR',
}, token_addresses_js_1.AGEUR_ADDRESS);
exports.ANKR = addressMapToTokenMap({
    decimals: 18,
    symbol: 'ANKR',
    name: 'Anker Network',
}, token_addresses_js_1.ANKR_ADDRESS);
exports.AAVE = addressMapToTokenMap({
    decimals: 18,
    symbol: 'AAVE',
    name: 'Aave Token',
}, token_addresses_js_1.AAVE_ADDRESS);
exports.COMP = addressMapToTokenMap({
    decimals: 18,
    symbol: 'COMP',
    name: 'Compound ',
}, token_addresses_js_1.COMP_ADDRESS);
exports.JPY = addressMapToTokenMap({
    decimals: 18,
    symbol: 'JPYC',
    name: 'JPY Coin',
}, token_addresses_js_1.JPY_ADDRESS);
exports.LUSD = addressMapToTokenMap({
    decimals: 18,
    symbol: 'LUSD',
    name: 'LUSD Stablecoin',
}, token_addresses_js_1.LUSD_ADDRESS);
exports.WETH9 = addressMapToTokenMap({
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
}, token_addresses_js_1.WETH9_ADDRESS);
exports.WNATIVE = {
    [index_js_1.ChainId.ETHEREUM]: exports.WETH9[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.SEPOLIA]: exports.WETH9[index_js_1.ChainId.SEPOLIA],
    // [ChainId.ROPSTEN]: WETH9[ChainId.ROPSTEN],
    // [ChainId.RINKEBY]: WETH9[ChainId.RINKEBY],
    // [ChainId.GÖRLI]: WETH9[ChainId.GÖRLI],
    // [ChainId.KOVAN]: WETH9[ChainId.KOVAN],
    [index_js_1.ChainId.OPTIMISM]: exports.WETH9[index_js_1.ChainId.OPTIMISM],
    [index_js_1.ChainId.FANTOM]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.FANTOM,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.FANTOM],
        decimals: 18,
        symbol: 'WFTM',
        name: 'Wrapped FTM',
    }),
    [index_js_1.ChainId.FANTOM_TESTNET]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.FANTOM_TESTNET,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.FANTOM_TESTNET],
        decimals: 18,
        symbol: 'WFTM',
        name: 'Wrapped FTM',
    }),
    [index_js_1.ChainId.POLYGON]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.POLYGON,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.POLYGON],
        decimals: 18,
        symbol: 'WMATIC',
        name: 'Wrapped Matic',
    }),
    [index_js_1.ChainId.POLYGON_TESTNET]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.POLYGON_TESTNET,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.POLYGON_TESTNET],
        decimals: 18,
        symbol: 'WMATIC',
        name: 'Wrapped Matic',
    }),
    [index_js_1.ChainId.GNOSIS]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.GNOSIS,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.GNOSIS],
        decimals: 18,
        symbol: 'WXDAI',
        name: 'Wrapped xDai',
    }),
    [index_js_1.ChainId.BSC]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BSC,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.BSC],
        decimals: 18,
        symbol: 'WBNB',
        name: 'Wrapped BNB',
    }),
    [index_js_1.ChainId.BSC_TESTNET]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BSC_TESTNET,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.BSC_TESTNET],
        decimals: 18,
        symbol: 'WBNB',
        name: 'Wrapped BNB',
    }),
    [index_js_1.ChainId.ARBITRUM]: exports.WETH9[index_js_1.ChainId.ARBITRUM],
    [index_js_1.ChainId.ARBITRUM_TESTNET]: exports.WETH9[index_js_1.ChainId.ARBITRUM_TESTNET],
    [index_js_1.ChainId.ARBITRUM_NOVA]: exports.WETH9[index_js_1.ChainId.ARBITRUM_NOVA],
    [index_js_1.ChainId.AVALANCHE]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.AVALANCHE,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.AVALANCHE],
        decimals: 18,
        symbol: 'WAVAX',
        name: 'Wrapped AVAX',
    }),
    [index_js_1.ChainId.AVALANCHE_TESTNET]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.AVALANCHE_TESTNET,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.AVALANCHE_TESTNET],
        decimals: 18,
        symbol: 'WAVAX',
        name: 'Wrapped AVAX',
    }),
    [index_js_1.ChainId.HECO]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.HECO,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.HECO],
        decimals: 18,
        symbol: 'WHT',
        name: 'Wrapped HT',
    }),
    // [ChainId.HECO_TESTNET]: new Token({
    //   chainId: ChainId.HECO_TESTNET,
    //   address: WNATIVE_ADDRESS[ChainId.HECO_TESTNET],
    //   decimals: 18,
    //   symbol: 'WHT',
    //   name: 'Wrapped HT',
    // }),
    [index_js_1.ChainId.HARMONY]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.HARMONY,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.HARMONY],
        decimals: 18,
        symbol: 'WONE',
        name: 'Wrapped ONE',
    }),
    // [ChainId.HARMONY_TESTNET]: new Token({
    //   chainId: ChainId.HARMONY_TESTNET,
    //   address: WNATIVE_ADDRESS[ChainId.HARMONY_TESTNET],
    //   decimals: 18,
    //   symbol: 'WONE',
    //   name: 'Wrapped ONE',
    // }),
    [index_js_1.ChainId.OKEX]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.OKEX,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.OKEX],
        decimals: 18,
        symbol: 'WOKT',
        name: 'Wrapped OKExChain',
    }),
    // [ChainId.OKEX_TESTNET]: new Token({
    //   chainId: ChainId.OKEX_TESTNET,
    //   address: WNATIVE_ADDRESS[ChainId.OKEX_TESTNET],
    //   decimals: 18,
    //   symbol: 'WOKT',
    //   name: 'Wrapped OKExChain',
    // }),
    [index_js_1.ChainId.CELO]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.CELO,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.CELO],
        decimals: 18,
        symbol: 'CELO',
        name: 'Celo',
    }),
    [index_js_1.ChainId.PALM]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.PALM,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.PALM],
        decimals: 18,
        symbol: 'WPALM',
        name: 'Wrapped Palm',
    }),
    [index_js_1.ChainId.MOONRIVER]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.MOONRIVER,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.MOONRIVER],
        decimals: 18,
        symbol: 'WMOVR',
        name: 'Wrapped Moonriver',
    }),
    [index_js_1.ChainId.FUSE]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.FUSE,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.FUSE],
        decimals: 18,
        symbol: 'WFUSE',
        name: 'Wrapped Fuse',
    }),
    [index_js_1.ChainId.TELOS]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.TELOS,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.TELOS],
        decimals: 18,
        symbol: 'WTLOS',
        name: 'Wrapped Telos',
    }),
    [index_js_1.ChainId.MOONBEAM]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.MOONBEAM,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.MOONBEAM],
        decimals: 18,
        symbol: 'WGLMR',
        name: 'Wrapped Glimmer',
    }),
    [index_js_1.ChainId.KAVA]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.KAVA,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.KAVA],
        decimals: 18,
        symbol: 'WKAVA',
        name: 'Wrapped Kava',
    }),
    [index_js_1.ChainId.METIS]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.METIS,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.METIS],
        decimals: 18,
        symbol: 'WMETIS',
        name: 'Wrapped Metis',
    }),
    [index_js_1.ChainId.BOBA]: exports.WETH9[index_js_1.ChainId.BOBA],
    [index_js_1.ChainId.BOBA_AVAX]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BOBA_AVAX,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.BOBA_AVAX],
        decimals: 18,
        symbol: 'WBOBA',
        name: 'Wrapped Boba',
    }),
    [index_js_1.ChainId.BOBA_BNB]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BOBA_BNB,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.BOBA_BNB],
        decimals: 18,
        symbol: 'WBOBA',
        name: 'Wrapped Boba',
    }),
    [index_js_1.ChainId.BTTC]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BTTC,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.BTTC],
        decimals: 18,
        symbol: 'WBTT',
        name: 'Wrapped BitTorrent Token',
    }),
    // [ChainId.SEPOLIA]: WETH9[ChainId.SEPOLIA],
    // [ChainId.CONSENSUS_ZKEVM_TESTNET]: WETH9[ChainId.CONSENSUS_ZKEVM_TESTNET],
    // [ChainId.SCROLL_ALPHA_TESTNET]: WETH9[ChainId.SCROLL_ALPHA_TESTNET],
    // [ChainId.BASE_TESTNET]: WETH9[ChainId.BASE_TESTNET],
    [index_js_1.ChainId.THUNDERCORE]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.THUNDERCORE,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.THUNDERCORE],
        decimals: 18,
        symbol: 'WTT',
        name: 'Wrapped Thunder Token',
    }),
    [index_js_1.ChainId.POLYGON_ZKEVM]: exports.WETH9[index_js_1.ChainId.POLYGON_ZKEVM],
    [index_js_1.ChainId.HAQQ]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.HAQQ,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.HAQQ],
        decimals: 18,
        symbol: 'WISLM',
        name: 'Wrapped Islamic Coin',
    }),
    [index_js_1.ChainId.CORE]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.CORE,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.CORE],
        decimals: 18,
        symbol: 'WCORE',
        name: 'Wrapped Core',
    }),
    [index_js_1.ChainId.ZKSYNC_ERA]: exports.WETH9[index_js_1.ChainId.ZKSYNC_ERA],
    [index_js_1.ChainId.LINEA]: exports.WETH9[index_js_1.ChainId.LINEA],
    [index_js_1.ChainId.BASE]: exports.WETH9[index_js_1.ChainId.BASE],
    [index_js_1.ChainId.SCROLL]: exports.WETH9[index_js_1.ChainId.SCROLL],
    [index_js_1.ChainId.FILECOIN]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.FILECOIN,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.FILECOIN],
        decimals: 18,
        symbol: 'WFIL',
        name: 'Wrapped FIL',
    }),
    [index_js_1.ChainId.ZETACHAIN]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.ZETACHAIN,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.ZETACHAIN],
        decimals: 18,
        symbol: 'WZETA',
        name: 'Wrapped ZETA',
    }),
    [index_js_1.ChainId.CRONOS]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.CRONOS,
        address: token_addresses_js_1.WNATIVE_ADDRESS[index_js_1.ChainId.CRONOS],
        decimals: 18,
        symbol: 'WCRO',
        name: 'Wrapped CRO',
    }),
    [index_js_1.ChainId.BLAST]: exports.WETH9[index_js_1.ChainId.BLAST],
};
exports.SUSHI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'SUSHI',
    name: 'SushiToken',
}, token_addresses_js_1.SUSHI_ADDRESS);
exports.XSUSHI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'XSUSHI',
    name: 'SushiBar',
}, token_addresses_js_1.XSUSHI_ADDRESS);
exports.axlUSDC = addressMapToTokenMap({
    decimals: 6,
    symbol: 'axlUSDC',
    name: 'Axelar Wrapped USDC',
}, token_addresses_js_1.axlUSDC_ADDRESS);
exports.axlUSDT = addressMapToTokenMap({
    decimals: 6,
    symbol: 'axlUSDT',
    name: 'Axelar Wrapped USDT',
}, token_addresses_js_1.axlUSDT_ADDRESS);
exports.axlDAI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'axlDAI',
    name: 'Axelar Wrapped DAI',
}, token_addresses_js_1.axlDAI_ADDRESS);
exports.axlETH = addressMapToTokenMap({
    decimals: 18,
    symbol: 'axlETH',
    name: 'Axelar Wrapped ETH',
}, token_addresses_js_1.axlETH_ADDRESS);
exports.axlWBTC = addressMapToTokenMap({
    decimals: 8,
    symbol: 'axlWBTC',
    name: 'Axelar Wrapped BTC',
}, token_addresses_js_1.axlWBTC_ADDRESS);
exports.USD_PLUS = addressMapToTokenMap({
    decimals: 6,
    symbol: 'USD+',
    name: 'USD+',
}, token_addresses_js_1.USD_PLUS_ADDRESS);
exports.USDC = {
    ...addressMapToTokenMap({
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
    }, token_addresses_js_1.USDC_ADDRESS),
    [index_js_1.ChainId.BSC]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BSC,
        address: token_addresses_js_1.USDC_ADDRESS[index_js_1.ChainId.BSC],
        decimals: 18,
        symbol: 'USDC',
        name: 'USD Coin',
    }),
    [index_js_1.ChainId.BOBA_BNB]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BOBA_BNB,
        address: token_addresses_js_1.USDC_ADDRESS[index_js_1.ChainId.BOBA_BNB],
        decimals: 18,
        symbol: 'USDC',
        name: 'USD Coin',
    }),
};
exports.USDT = {
    ...addressMapToTokenMap({
        decimals: 6,
        symbol: 'USDT',
        name: 'Tether USD',
    }, token_addresses_js_1.USDT_ADDRESS),
    [index_js_1.ChainId.BSC]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BSC,
        address: token_addresses_js_1.USDT_ADDRESS[index_js_1.ChainId.BSC],
        decimals: 18,
        symbol: 'USDT',
        name: 'Tether USD',
    }),
    [index_js_1.ChainId.BSC_TESTNET]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BSC_TESTNET,
        address: token_addresses_js_1.USDT_ADDRESS[index_js_1.ChainId.BSC_TESTNET],
        decimals: 18,
        symbol: 'USDT',
        name: 'Tether USD',
    }),
    [index_js_1.ChainId.BOBA_BNB]: new Token_js_1.Token({
        chainId: index_js_1.ChainId.BOBA_BNB,
        address: token_addresses_js_1.USDT_ADDRESS[index_js_1.ChainId.BOBA_BNB],
        decimals: 18,
        symbol: 'USDT',
        name: 'Tether USD',
    }),
};
exports.DAI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
}, token_addresses_js_1.DAI_ADDRESS);
exports.MIM = addressMapToTokenMap({
    decimals: 18,
    symbol: 'MIM',
    name: 'Magic Internet Money',
}, token_addresses_js_1.MIM_ADDRESS);
exports.FRAX = addressMapToTokenMap({
    decimals: 18,
    symbol: 'FRAX',
    name: 'Frax',
}, token_addresses_js_1.FRAX_ADDRESS);
exports.FXS = addressMapToTokenMap({
    decimals: 18,
    symbol: 'FXS',
    name: 'Frax Share',
}, token_addresses_js_1.FXS_ADDRESS);
exports.BCT = addressMapToTokenMap({
    decimals: 18,
    symbol: 'BCT',
    name: 'Toucan Protocol: Base Carbon Tonne',
}, token_addresses_js_1.BCT_ADDRESS);
exports.KLIMA = addressMapToTokenMap({
    decimals: 9,
    symbol: 'KLIMA',
    name: 'Klima DAO',
}, token_addresses_js_1.KLIMA_ADDRESS);
exports.QUICK = addressMapToTokenMap({
    decimals: 18,
    symbol: 'QUICK',
    name: 'Quickswap',
}, token_addresses_js_1.QUICK_ADDRESS);
exports.OP = addressMapToTokenMap({
    decimals: 18,
    symbol: 'OP',
    name: 'Optimism',
}, token_addresses_js_1.OP_ADDRESS);
exports.OCEAN = addressMapToTokenMap({
    decimals: 18,
    symbol: 'OCEAN',
    name: 'Ocean Token',
}, token_addresses_js_1.OCEAN_ADDRESS);
exports.BAL = addressMapToTokenMap({
    decimals: 18,
    symbol: 'BAL',
    name: 'Balancer',
}, token_addresses_js_1.BAL_ADDRESS);
exports.WAVAX = addressMapToTokenMap({
    decimals: 18,
    symbol: 'WAVAX',
    name: 'Wrapped Avalanche Token',
}, token_addresses_js_1.WAVAX_ADDRESS);
exports.KNCv2 = addressMapToTokenMap({
    decimals: 18,
    symbol: 'KNCv2',
    name: 'Kyber Network Crystal V2',
}, token_addresses_js_1.KNCv2_ADDRESS);
exports.GRT = addressMapToTokenMap({
    decimals: 18,
    symbol: 'GRT',
    name: 'Graph Token',
}, token_addresses_js_1.GRT_ADDRESS);
exports.TEL = addressMapToTokenMap({
    decimals: 2,
    symbol: 'TEL',
    name: 'Telcoin',
}, token_addresses_js_1.TEL_ADDRESS);
exports.RNDR = addressMapToTokenMap({
    decimals: 18,
    symbol: 'RNDR',
    name: 'Render Token',
}, token_addresses_js_1.RNDR_ADDRESS);
exports.LINK = addressMapToTokenMap({
    decimals: 18,
    symbol: 'LINK',
    name: 'ChainLink Token',
}, token_addresses_js_1.LINK_ADDRESS);
exports.USDB = addressMapToTokenMap({
    decimals: 18,
    symbol: 'USDB',
    name: 'USD Blast',
}, token_addresses_js_1.USDB_ADDRESS);
exports.WORMHOLE_USDC = addressMapToTokenMap({
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin (Wormhole)',
}, token_addresses_js_1.WORMHOLE_USDC_ADDRESS);
exports.WORMHOLE_WBTC = addressMapToTokenMap({
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC (Wormhole)',
}, token_addresses_js_1.WORMHOLE_WBTC_ADDRESS);
exports.WORMHOLE_WETH = addressMapToTokenMap({
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether (Wormhole)',
}, token_addresses_js_1.WORMHOLE_WETH_ADDRESS);
exports.JUGNI = addressMapToTokenMap({
    decimals: 18,
    symbol: 'JUGNI',
    name: 'Jugni',
}, token_addresses_js_1.JUGNI_ADDRESS);
exports.OPTICS_USDC = addressMapToTokenMap({
    decimals: 6,
    symbol: 'USDC',
    name: 'USD Coin (Optics)',
}, token_addresses_js_1.OPTICS_USDC_ADDRESS);
exports.THUNDERCORE_ANY_USDT = new Token_js_1.Token({
    chainId: index_js_1.ChainId.THUNDERCORE,
    address: '0x0dcb0cb0120d355cde1ce56040be57add0185baa',
    decimals: 6,
    symbol: 'anyUSDT',
    name: 'Any Tether USD',
});
exports.THUNDERCORE_ANY_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.THUNDERCORE,
    address: '0xdc42728b0ea910349ed3c6e1c9dc06b5fb591f98',
    decimals: 18,
    symbol: 'anyUSDC',
    name: 'Any USD Coin',
});
exports.THUNDERCORE_ANY_BUSD = new Token_js_1.Token({
    chainId: index_js_1.ChainId.THUNDERCORE,
    address: '0xb12c13e66ade1f72f71834f2fc5082db8c091358',
    decimals: 18,
    symbol: 'anyBUSD',
    name: 'Any BUSD Token',
});
exports.BTTC_BSC_BRIDGE_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BTTC,
    address: '0xca424b845497f7204d9301bd13ff87c0e2e86fcf',
    decimals: 18,
    symbol: 'USDC (BSC)',
    name: 'USD Coin (BSC)',
});
exports.BTTC_ETHEREUM_BRIDGE_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BTTC,
    address: '0xae17940943ba9440540940db0f1877f101d39e8b',
    decimals: 6,
    symbol: 'USDC (Ethereum)',
    name: 'USD Coin (Ethereum)',
});
exports.BTTC_TRON_BRIDGE_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BTTC,
    address: '0x935faa2fcec6ab81265b301a30467bbc804b43d3',
    decimals: 6,
    symbol: 'USDC (Tron)',
    name: 'USD Coin (Tron)',
});
exports.BTTC_BSC_BRIDGE_USDT = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BTTC,
    address: '0x9b5f27f6ea9bbd753ce3793a07cba3c74644330d',
    decimals: 18,
    symbol: 'USDT (BSC)',
    name: 'Tether USD (BSC)',
});
exports.BTTC_ETHEREUM_BRIDGE_USDT = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BTTC,
    address: '0xe887512ab8bc60bcc9224e1c3b5be68e26048b8b',
    decimals: 6,
    symbol: 'USDT (Ethereum)',
    name: 'Tether USD (Ethereum)',
});
exports.BTTC_TRON_BRIDGE_USDT = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BTTC,
    address: '0xdb28719f7f938507dbfe4f0eae55668903d34a15',
    decimals: 6,
    symbol: 'USDT (Tron)',
    name: 'Tether USD (Tron)',
});
exports.BASE_BRIDGE_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BASE,
    address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    decimals: 6,
    symbol: 'USDbC',
    name: 'USD Base Coin',
});
exports.ZETA_ETH_BRIDGE_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.ZETACHAIN,
    address: '0x0cbe0dF132a6c6B4a2974Fa1b7Fb953CF0Cc798a',
    decimals: 6,
    symbol: 'USDC.ETH',
    name: 'ZetaChain ZRC20 USDC on ETH',
});
exports.ZETA_BSC_BRIDGE_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.ZETACHAIN,
    address: '0x05BA149A7bd6dC1F937fA9046A9e05C05f3b18b0',
    decimals: 18,
    symbol: 'USDC.BSC',
    name: 'ZetaChain ZRC20 USDC on BSC',
});
exports.ZETA_ETH_BRIDGE_USDT = new Token_js_1.Token({
    chainId: index_js_1.ChainId.ZETACHAIN,
    address: '0x7c8dDa80bbBE1254a7aACf3219EBe1481c6E01d7',
    decimals: 6,
    symbol: 'USDT.ETH',
    name: 'ZetaChain ZRC20 USDT on ETH',
});
exports.ZETA_BSC_BRIDGE_USDT = new Token_js_1.Token({
    chainId: index_js_1.ChainId.ZETACHAIN,
    address: '0x91d4F0D54090Df2D81e834c3c8CE71C6c865e79F',
    decimals: 18,
    symbol: 'USDT.BSC',
    name: 'ZetaChain ZRC20 USDT on BSC',
});
exports.FILECOIN_CELER_BRIDGE_USDC = new Token_js_1.Token({
    chainId: index_js_1.ChainId.FILECOIN,
    address: '0x2421db204968A367CC2C866CD057fA754Cb84EdF',
    decimals: 6,
    symbol: 'ceUSDC',
    name: 'USD Coin (Celer)',
});
exports.FILECOIN_CELER_BRIDGE_USDT = new Token_js_1.Token({
    chainId: index_js_1.ChainId.FILECOIN,
    address: '0x422849b355039bc58f2780cc4854919fc9cfaf94',
    decimals: 6,
    symbol: 'ceUSDT',
    name: 'Tether USD (Celer)',
});
exports.MUSD = new Token_js_1.Token({
    chainId: index_js_1.ChainId.BLAST,
    address: '0x837fE561e9C5DFa73F607fDa679295DBC2Be5E40',
    name: 'Monoswap USD',
    symbol: 'MUSD',
    decimals: 18,
});
//# sourceMappingURL=tokens.js.map