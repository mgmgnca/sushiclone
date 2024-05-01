"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASES_TO_CHECK_TRADES_AGAINST = void 0;
const index_js_1 = require("../chain/index.js");
const index_js_2 = require("../currency/index.js");
const index_js_3 = require("../currency/index.js");
const stargate_js_1 = require("./stargate.js");
exports.BASES_TO_CHECK_TRADES_AGAINST = {
    [index_js_1.ChainId.ETHEREUM]: [
        index_js_3.WNATIVE[index_js_1.ChainId.ETHEREUM],
        index_js_3.WBTC[index_js_1.ChainId.ETHEREUM],
        index_js_3.USDC[index_js_1.ChainId.ETHEREUM],
        index_js_3.USDT[index_js_1.ChainId.ETHEREUM],
        index_js_3.DAI[index_js_1.ChainId.ETHEREUM],
        index_js_3.MIM[index_js_1.ChainId.ETHEREUM],
        index_js_3.FRAX[index_js_1.ChainId.ETHEREUM],
        index_js_3.OHM[index_js_1.ChainId.ETHEREUM],
        index_js_3.LINK[index_js_1.ChainId.ETHEREUM],
        index_js_3.SUSHI[index_js_1.ChainId.ETHEREUM],
    ],
    // [ChainId.RINKEBY]: [WNATIVE[ChainId.RINKEBY], USDC[ChainId.RINKEBY]],
    // [ChainId.KOVAN]: [WNATIVE[ChainId.KOVAN], USDC[ChainId.KOVAN]],
    [index_js_1.ChainId.POLYGON]: [
        index_js_3.WNATIVE[index_js_1.ChainId.POLYGON],
        index_js_3.WETH9[index_js_1.ChainId.POLYGON],
        index_js_3.WBTC[index_js_1.ChainId.POLYGON],
        index_js_3.USDC[index_js_1.ChainId.POLYGON],
        index_js_3.USDT[index_js_1.ChainId.POLYGON],
        index_js_3.DAI[index_js_1.ChainId.POLYGON],
        index_js_3.FRAX[index_js_1.ChainId.POLYGON],
        index_js_3.QUICK[index_js_1.ChainId.POLYGON],
        index_js_3.LINK[index_js_1.ChainId.POLYGON],
        index_js_3.AAVE[index_js_1.ChainId.POLYGON],
        new index_js_2.Token({
            address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
            chainId: index_js_1.ChainId.POLYGON,
            decimals: 6,
            symbol: 'USD Coin',
            name: 'USDC.e',
        }),
    ],
    [index_js_1.ChainId.POLYGON_TESTNET]: [
        index_js_3.WNATIVE[index_js_1.ChainId.POLYGON_TESTNET],
        index_js_3.USDC[index_js_1.ChainId.POLYGON_TESTNET],
    ],
    [index_js_1.ChainId.FANTOM]: [
        index_js_3.WNATIVE[index_js_1.ChainId.FANTOM],
        stargate_js_1.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        stargate_js_1.STARGATE_USDT[index_js_1.ChainId.FANTOM],
        stargate_js_1.STARGATE_WETH[index_js_1.ChainId.FANTOM],
        stargate_js_1.STARGATE_WBTC[index_js_1.ChainId.FANTOM],
        index_js_3.axlUSDC[index_js_1.ChainId.FANTOM],
        index_js_3.MIM[index_js_1.ChainId.FANTOM],
    ],
    [index_js_1.ChainId.GNOSIS]: [
        index_js_3.WNATIVE[index_js_1.ChainId.GNOSIS],
        index_js_3.WETH9[index_js_1.ChainId.GNOSIS],
        index_js_3.USDC[index_js_1.ChainId.GNOSIS],
        index_js_3.USDT[index_js_1.ChainId.GNOSIS],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.GNOSIS,
            address: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
            decimals: 18,
            symbol: 'GNO',
            name: 'Gnosis',
        }),
    ],
    [index_js_1.ChainId.BSC]: [
        index_js_3.WNATIVE[index_js_1.ChainId.BSC],
        index_js_3.WETH9[index_js_1.ChainId.BSC],
        index_js_3.USDC[index_js_1.ChainId.BSC],
        index_js_3.USDT[index_js_1.ChainId.BSC],
        index_js_3.DAI[index_js_1.ChainId.BSC],
        index_js_3.BUSD[index_js_1.ChainId.BSC],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.BSC,
            address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
            decimals: 18,
            symbol: 'BTCB',
            name: 'Binance-Peg BTCB Token',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.BSC,
            address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
            decimals: 18,
            symbol: 'Cake',
            name: 'PancakeSwap Token',
        }),
    ],
    [index_js_1.ChainId.ARBITRUM]: [
        index_js_3.WNATIVE[index_js_1.ChainId.ARBITRUM],
        index_js_3.WBTC[index_js_1.ChainId.ARBITRUM],
        index_js_3.USDC[index_js_1.ChainId.ARBITRUM],
        index_js_3.USDT[index_js_1.ChainId.ARBITRUM],
        index_js_3.DAI[index_js_1.ChainId.ARBITRUM],
        index_js_3.MIM[index_js_1.ChainId.ARBITRUM],
        index_js_3.FRAX[index_js_1.ChainId.ARBITRUM],
        index_js_3.LINK[index_js_1.ChainId.ARBITRUM],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.ARBITRUM,
            address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
            decimals: 6,
            symbol: 'USDC.e',
            name: 'Bridged USDC (Arb1)',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.ARBITRUM,
            address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
            decimals: 18,
            symbol: 'ARB',
            name: 'Arbitrum',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.ARBITRUM,
            address: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
            decimals: 18,
            symbol: 'GMX',
            name: 'GMX',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.ARBITRUM,
            address: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
            decimals: 18,
            symbol: 'MAGIC',
            name: 'MAGIC',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.ARBITRUM,
            address: '0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1',
            decimals: 18,
            symbol: 'gOHM',
            name: 'Governance OHM',
        }),
    ],
    [index_js_1.ChainId.ARBITRUM_NOVA]: [
        index_js_3.WNATIVE[index_js_1.ChainId.ARBITRUM_NOVA],
        index_js_3.WBTC[index_js_1.ChainId.ARBITRUM_NOVA],
        index_js_3.USDC[index_js_1.ChainId.ARBITRUM_NOVA],
        index_js_3.USDT[index_js_1.ChainId.ARBITRUM_NOVA],
        index_js_3.DAI[index_js_1.ChainId.ARBITRUM_NOVA],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.ARBITRUM_NOVA,
            address: '0xf823C3cD3CeBE0a1fA952ba88Dc9EEf8e0Bf46AD',
            decimals: 18,
            symbol: 'ARB',
            name: 'Arbitrum',
        }),
        index_js_3.SUSHI[index_js_1.ChainId.ARBITRUM_NOVA],
    ],
    [index_js_1.ChainId.AVALANCHE]: [
        index_js_3.WNATIVE[index_js_1.ChainId.AVALANCHE],
        index_js_3.WETH9[index_js_1.ChainId.AVALANCHE],
        index_js_3.WBTC[index_js_1.ChainId.AVALANCHE],
        index_js_3.USDC[index_js_1.ChainId.AVALANCHE],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.AVALANCHE,
            address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
            decimals: 6,
            symbol: 'USDC.e',
            name: 'USD Coin',
        }),
        index_js_3.USDT[index_js_1.ChainId.AVALANCHE],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.AVALANCHE,
            address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
            decimals: 6,
            symbol: 'USDT.e',
            name: 'Tether USD',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.AVALANCHE,
            address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
            decimals: 18,
            symbol: 'DAI.e',
            name: 'Dai Stablecoin',
        }),
        index_js_3.MIM[index_js_1.ChainId.AVALANCHE],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.AVALANCHE,
            address: '0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b',
            decimals: 18,
            name: 'Wrapped MEMO',
            symbol: 'WMEMO',
        }),
    ],
    [index_js_1.ChainId.HECO]: [
        index_js_3.WNATIVE[index_js_1.ChainId.HECO],
        index_js_3.USDC[index_js_1.ChainId.HECO],
        index_js_3.USDT[index_js_1.ChainId.HECO],
        index_js_3.DAI[index_js_1.ChainId.HECO],
    ],
    [index_js_1.ChainId.HARMONY]: [
        index_js_3.WNATIVE[index_js_1.ChainId.HARMONY],
        index_js_3.USDC[index_js_1.ChainId.HARMONY],
        index_js_3.USDT[index_js_1.ChainId.HARMONY],
        index_js_3.DAI[index_js_1.ChainId.HARMONY],
        index_js_3.FRAX[index_js_1.ChainId.HARMONY],
    ],
    [index_js_1.ChainId.OKEX]: [
        index_js_3.WNATIVE[index_js_1.ChainId.OKEX],
        index_js_3.USDC[index_js_1.ChainId.OKEX],
        index_js_3.USDT[index_js_1.ChainId.OKEX],
        index_js_3.DAI[index_js_1.ChainId.OKEX],
    ],
    [index_js_1.ChainId.CELO]: [
        index_js_3.WNATIVE[index_js_1.ChainId.CELO],
        index_js_3.WETH9[index_js_1.ChainId.CELO],
        index_js_3.WBTC[index_js_1.ChainId.CELO],
        index_js_3.USDC[index_js_1.ChainId.CELO],
        index_js_3.USDT[index_js_1.ChainId.CELO],
        index_js_3.DAI[index_js_1.ChainId.CELO],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.CELO,
            address: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
            decimals: 18,
            symbol: 'cEUR',
            name: 'Celo Euro',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.CELO,
            address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
            decimals: 18,
            symbol: 'cUSD',
            name: 'Celo Dollar',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.CELO,
            address: '0x2DEf4285787d58a2f811AF24755A8150622f4361',
            decimals: 18,
            symbol: 'cETH',
            name: 'Celo Ether',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.CELO,
            address: '0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207',
            decimals: 18,
            symbol: 'WETH',
            name: 'Wrapped Ether (Wormhole)',
        }),
    ],
    [index_js_1.ChainId.PALM]: [index_js_3.WNATIVE[index_js_1.ChainId.PALM]],
    [index_js_1.ChainId.MOONRIVER]: [
        index_js_3.WNATIVE[index_js_1.ChainId.MOONRIVER],
        index_js_3.USDC[index_js_1.ChainId.MOONRIVER],
        index_js_3.USDT[index_js_1.ChainId.MOONRIVER],
        index_js_3.DAI[index_js_1.ChainId.MOONRIVER],
        index_js_3.MIM[index_js_1.ChainId.MOONRIVER],
        index_js_3.FRAX[index_js_1.ChainId.MOONRIVER],
    ],
    [index_js_1.ChainId.FUSE]: [
        index_js_3.WNATIVE[index_js_1.ChainId.FUSE],
        index_js_3.USDC[index_js_1.ChainId.FUSE],
        index_js_3.USDT[index_js_1.ChainId.FUSE],
        index_js_3.DAI[index_js_1.ChainId.FUSE],
    ],
    [index_js_1.ChainId.TELOS]: [
        index_js_3.WNATIVE[index_js_1.ChainId.TELOS],
        index_js_3.USDC[index_js_1.ChainId.TELOS],
        index_js_3.USDT[index_js_1.ChainId.TELOS],
    ],
    [index_js_1.ChainId.MOONBEAM]: [
        index_js_3.WNATIVE[index_js_1.ChainId.MOONBEAM],
        index_js_3.axlUSDC[index_js_1.ChainId.MOONBEAM],
        index_js_3.WORMHOLE_USDC[index_js_1.ChainId.MOONBEAM],
        index_js_3.WORMHOLE_WETH[index_js_1.ChainId.MOONBEAM],
        index_js_3.WORMHOLE_WBTC[index_js_1.ChainId.MOONBEAM],
        index_js_3.FRAX[index_js_1.ChainId.MOONBEAM],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.MOONBEAM,
            address: '0xFFfffffF7D2B0B761Af01Ca8e25242976ac0aD7D',
            decimals: 6,
            name: 'USD Coin',
            symbol: 'xcUSDC',
        }),
        new index_js_2.Token({
            chainId: index_js_1.ChainId.MOONBEAM,
            address: '0xFFFFFFfFea09FB06d082fd1275CD48b191cbCD1d',
            decimals: 6,
            name: 'Tether USD',
            symbol: 'xcUSDT',
        }),
    ],
    [index_js_1.ChainId.OPTIMISM]: [
        index_js_3.WNATIVE[index_js_1.ChainId.OPTIMISM],
        index_js_3.WBTC[index_js_1.ChainId.OPTIMISM],
        index_js_3.USDC[index_js_1.ChainId.OPTIMISM],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.OPTIMISM,
            address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
            decimals: 6,
            symbol: 'USDC',
            name: 'USD Coin (Bridged from Ethereum)',
        }),
        index_js_3.USDT[index_js_1.ChainId.OPTIMISM],
        index_js_3.DAI[index_js_1.ChainId.OPTIMISM],
        index_js_3.LUSD[index_js_1.ChainId.OPTIMISM],
        index_js_3.FRAX[index_js_1.ChainId.OPTIMISM],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.OPTIMISM,
            address: '0xC84Da6c8ec7A57cD10B939E79eaF9d2D17834E04',
            decimals: 18,
            symbol: 'vUSD',
            name: 'vUSD',
        }),
        index_js_3.OP[index_js_1.ChainId.OPTIMISM],
    ],
    [index_js_1.ChainId.KAVA]: [
        index_js_3.WNATIVE[index_js_1.ChainId.KAVA],
        stargate_js_1.STARGATE_WETH[index_js_1.ChainId.KAVA],
        stargate_js_1.STARGATE_USDT[index_js_1.ChainId.KAVA],
        index_js_3.axlUSDC[index_js_1.ChainId.KAVA],
        index_js_3.axlETH[index_js_1.ChainId.KAVA],
        index_js_3.axlWBTC[index_js_1.ChainId.KAVA],
    ],
    [index_js_1.ChainId.METIS]: [
        index_js_3.WNATIVE[index_js_1.ChainId.METIS],
        index_js_3.WETH9[index_js_1.ChainId.METIS],
        index_js_3.WBTC[index_js_1.ChainId.METIS],
        index_js_3.USDC[index_js_1.ChainId.METIS],
        index_js_3.USDT[index_js_1.ChainId.METIS],
        index_js_3.DAI[index_js_1.ChainId.METIS],
    ],
    [index_js_1.ChainId.BOBA]: [
        index_js_3.WNATIVE[index_js_1.ChainId.BOBA],
        index_js_3.WBTC[index_js_1.ChainId.BOBA],
        index_js_3.USDC[index_js_1.ChainId.BOBA],
        index_js_3.USDT[index_js_1.ChainId.BOBA],
        index_js_3.DAI[index_js_1.ChainId.BOBA],
        index_js_3.FRAX[index_js_1.ChainId.BOBA],
    ],
    [index_js_1.ChainId.BOBA_AVAX]: [
        index_js_3.WNATIVE[index_js_1.ChainId.BOBA_AVAX],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.BOBA_AVAX,
            address: '0x4200000000000000000000000000000000000023',
            decimals: 18,
            symbol: 'AVAX',
            name: 'Avax',
        }),
        index_js_3.USDT[index_js_1.ChainId.BOBA_AVAX],
        index_js_3.USDC[index_js_1.ChainId.BOBA_AVAX],
    ],
    [index_js_1.ChainId.BOBA_BNB]: [
        index_js_3.WNATIVE[index_js_1.ChainId.BOBA_BNB],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.BOBA_BNB,
            address: '0x4200000000000000000000000000000000000023',
            decimals: 18,
            symbol: 'BNB',
            name: 'Binance Coin',
        }),
        index_js_3.USDT[index_js_1.ChainId.BOBA_BNB],
        index_js_3.USDC[index_js_1.ChainId.BOBA_BNB],
    ],
    [index_js_1.ChainId.BTTC]: [
        index_js_3.WNATIVE[index_js_1.ChainId.BTTC],
        index_js_3.WETH9[index_js_1.ChainId.BTTC],
        index_js_3.USDC[index_js_1.ChainId.BTTC],
        index_js_3.USDT[index_js_1.ChainId.BTTC],
    ],
    [index_js_1.ChainId.POLYGON_ZKEVM]: [
        index_js_3.WNATIVE[index_js_1.ChainId.POLYGON_ZKEVM],
        index_js_3.MATIC[index_js_1.ChainId.POLYGON_ZKEVM],
        index_js_3.USDC[index_js_1.ChainId.POLYGON_ZKEVM],
        index_js_3.USDT[index_js_1.ChainId.POLYGON_ZKEVM],
        index_js_3.DAI[index_js_1.ChainId.POLYGON_ZKEVM],
        index_js_3.WBTC[index_js_1.ChainId.POLYGON_ZKEVM],
        index_js_3.FRAX[index_js_1.ChainId.POLYGON_ZKEVM],
    ],
    [index_js_1.ChainId.THUNDERCORE]: [
        index_js_3.WNATIVE[index_js_1.ChainId.THUNDERCORE],
        index_js_3.WETH9[index_js_1.ChainId.THUNDERCORE],
        index_js_3.WBTC[index_js_1.ChainId.THUNDERCORE],
        index_js_3.USDC[index_js_1.ChainId.THUNDERCORE],
        index_js_3.USDT[index_js_1.ChainId.THUNDERCORE],
    ],
    [index_js_1.ChainId.HAQQ]: [
        index_js_3.WNATIVE[index_js_1.ChainId.HAQQ],
        index_js_3.WETH9[index_js_1.ChainId.HAQQ],
        index_js_3.WBTC[index_js_1.ChainId.HAQQ],
        index_js_3.USDC[index_js_1.ChainId.HAQQ],
        index_js_3.USDT[index_js_1.ChainId.HAQQ],
        index_js_3.DAI[index_js_1.ChainId.HAQQ],
    ],
    [index_js_1.ChainId.CORE]: [
        index_js_3.WNATIVE[index_js_1.ChainId.CORE],
        index_js_3.WETH9[index_js_1.ChainId.CORE],
        index_js_3.USDC[index_js_1.ChainId.CORE],
        index_js_3.USDT[index_js_1.ChainId.CORE],
    ],
    [index_js_1.ChainId.ZKSYNC_ERA]: [
        index_js_3.WNATIVE[index_js_1.ChainId.ZKSYNC_ERA],
        index_js_3.WBTC[index_js_1.ChainId.ZKSYNC_ERA],
        index_js_3.USDC[index_js_1.ChainId.ZKSYNC_ERA],
    ],
    [index_js_1.ChainId.LINEA]: [
        index_js_3.WNATIVE[index_js_1.ChainId.LINEA],
        index_js_3.USDC[index_js_1.ChainId.LINEA],
        index_js_3.DAI[index_js_1.ChainId.LINEA],
    ],
    [index_js_1.ChainId.BASE]: [
        index_js_3.WNATIVE[index_js_1.ChainId.BASE],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.BASE,
            address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
            decimals: 18,
            symbol: 'cbETH',
            name: 'Coinbase Wrapped Staked ETH',
        }),
        index_js_3.USDC[index_js_1.ChainId.BASE],
        new index_js_2.Token({
            chainId: index_js_1.ChainId.BASE,
            address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
            decimals: 6,
            symbol: 'USDbC',
            name: 'USD Base Coin',
        }),
        index_js_3.axlUSDC[index_js_1.ChainId.BASE],
        index_js_3.DAI[index_js_1.ChainId.BASE],
    ],
    [index_js_1.ChainId.SCROLL]: [
        index_js_3.WNATIVE[index_js_1.ChainId.SCROLL],
        index_js_3.WBTC[index_js_1.ChainId.SCROLL],
        index_js_3.USDC[index_js_1.ChainId.SCROLL],
        index_js_3.USDT[index_js_1.ChainId.SCROLL],
    ],
    [index_js_1.ChainId.FILECOIN]: [
        index_js_3.WNATIVE[index_js_1.ChainId.FILECOIN],
        index_js_3.USDC[index_js_1.ChainId.FILECOIN],
        index_js_3.DAI[index_js_1.ChainId.FILECOIN],
    ],
    [index_js_1.ChainId.ZETACHAIN]: [
        index_js_3.WNATIVE[index_js_1.ChainId.ZETACHAIN],
        index_js_3.WETH9[index_js_1.ChainId.ZETACHAIN],
        index_js_3.WBTC[index_js_1.ChainId.ZETACHAIN],
        index_js_3.ZETA_ETH_BRIDGE_USDC,
        index_js_3.ZETA_ETH_BRIDGE_USDT,
        index_js_3.ZETA_BSC_BRIDGE_USDC,
        index_js_3.ZETA_BSC_BRIDGE_USDT,
    ],
    [index_js_1.ChainId.CRONOS]: [
        index_js_3.WNATIVE[index_js_1.ChainId.CRONOS],
        index_js_3.WETH9[index_js_1.ChainId.CRONOS],
        index_js_3.WBTC[index_js_1.ChainId.CRONOS],
        index_js_3.USDC[index_js_1.ChainId.CRONOS],
    ],
    [index_js_1.ChainId.BLAST]: [index_js_3.WNATIVE[index_js_1.ChainId.BLAST], index_js_2.USDB[index_js_1.ChainId.BLAST], index_js_2.MUSD],
};
//# sourceMappingURL=bases-to-check-trades-against.js.map