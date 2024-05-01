"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STARGATE_CHAIN_PATHS = exports.STARGATE_SUPPORTED_CHAIN_IDS = exports.STARGATE_TOKEN = exports.isStargateBridgeToken = exports.STARGATE_POOL_ADDRESS = exports.STARGATE_POOL_ID = exports.STARGATE_BRIDGE_TOKEN_ADDRESSES = exports.STARGATE_BRIDGE_TOKENS = exports.STARGATE_MAI = exports.STARGATE_MAI_ADDRESS = exports.STARGATE_BUSD = exports.STARGATE_BUSD_ADDRESS = exports.STARGATE_FRAX = exports.STARGATE_FRAX_ADDRESS = exports.STARGATE_DAI = exports.STARGATE_DAI_ADDRESS = exports.STARGATE_USDT = exports.STARGATE_USDT_ADDRESS = exports.STARGATE_USDC = exports.STARGATE_USDC_ADDRESS = exports.STARGATE_WBTC = exports.STARGATE_WBTC_ADDRESS = exports.STARGATE_WETH = exports.STARGATE_WETH_ADDRESS = exports.STARGATE_ETH = exports.STARGATE_ETH_ADDRESS = exports.STARGATE_COMPOSER_ADDRESS = exports.STARGATE_WIDGET_ADDRESS = exports.STARGATE_CHAIN_ID = void 0;
const index_js_1 = require("../chain/index.js");
const index_js_2 = require("../currency/index.js");
exports.STARGATE_CHAIN_ID = {
    [index_js_1.ChainId.ETHEREUM]: 101,
    [index_js_1.ChainId.BSC]: 102,
    [index_js_1.ChainId.AVALANCHE]: 106,
    [index_js_1.ChainId.POLYGON]: 109,
    [index_js_1.ChainId.ARBITRUM]: 110,
    [index_js_1.ChainId.OPTIMISM]: 111,
    [index_js_1.ChainId.FANTOM]: 112,
    [index_js_1.ChainId.METIS]: 151,
    [index_js_1.ChainId.BASE]: 184,
    [index_js_1.ChainId.LINEA]: 183,
    [index_js_1.ChainId.KAVA]: 177,
};
exports.STARGATE_WIDGET_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.BSC]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.AVALANCHE]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.ARBITRUM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.POLYGON]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.OPTIMISM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.FANTOM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.METIS]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.BASE]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.LINEA]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
    [index_js_1.ChainId.KAVA]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
};
exports.STARGATE_COMPOSER_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.BSC]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.AVALANCHE]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.ARBITRUM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.POLYGON]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.OPTIMISM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.FANTOM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.METIS]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.BASE]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.LINEA]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
    [index_js_1.ChainId.KAVA]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
};
exports.STARGATE_ETH_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: '0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c',
    [index_js_1.ChainId.ARBITRUM]: '0x82CbeCF39bEe528B5476FE6d1550af59a9dB6Fc0',
    [index_js_1.ChainId.OPTIMISM]: '0xb69c8CBCD90A39D8D3d3ccf0a3E968511C3856A0',
    [index_js_1.ChainId.BASE]: '0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03',
    [index_js_1.ChainId.LINEA]: '0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03',
};
exports.STARGATE_ETH = {
    [index_js_1.ChainId.ETHEREUM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.ETHEREUM,
        address: exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ETHEREUM],
        decimals: 18,
        symbol: 'SGETH',
        name: 'Stargate Ether',
    }),
    [index_js_1.ChainId.ARBITRUM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.ARBITRUM,
        address: exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ARBITRUM],
        decimals: 18,
        symbol: 'SGETH',
        name: 'Stargate Ether',
    }),
    [index_js_1.ChainId.OPTIMISM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.OPTIMISM,
        address: exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.OPTIMISM],
        decimals: 18,
        symbol: 'SGETH',
        name: 'Stargate Ether',
    }),
    [index_js_1.ChainId.BASE]: new index_js_2.Token({
        chainId: index_js_1.ChainId.BASE,
        address: exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.BASE],
        decimals: 18,
        symbol: 'SGETH',
        name: 'Stargate Ether',
    }),
    [index_js_1.ChainId.LINEA]: new index_js_2.Token({
        chainId: index_js_1.ChainId.LINEA,
        address: exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.LINEA],
        decimals: 18,
        symbol: 'SGETH',
        name: 'Stargate Ether',
    }),
};
exports.STARGATE_WETH_ADDRESS = {
    [index_js_1.ChainId.FANTOM]: '0x695921034f0387eAc4e11620EE91b1b15A6A09fE',
    [index_js_1.ChainId.KAVA]: '0x2DfD4dE5AE386Cd3f4fC8e2cb39240852E47F5E8',
};
exports.STARGATE_WETH = {
    [index_js_1.ChainId.FANTOM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.FANTOM,
        address: exports.STARGATE_WETH_ADDRESS[index_js_1.ChainId.FANTOM],
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
    }),
    [index_js_1.ChainId.KAVA]: new index_js_2.Token({
        chainId: index_js_1.ChainId.KAVA,
        address: exports.STARGATE_WETH_ADDRESS[index_js_1.ChainId.KAVA],
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
    }),
};
exports.STARGATE_WBTC_ADDRESS = {
    [index_js_1.ChainId.FANTOM]: '0xf1648C50d2863f780c57849D812b4B7686031A3D',
};
exports.STARGATE_WBTC = {
    [index_js_1.ChainId.FANTOM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.FANTOM,
        address: exports.STARGATE_WBTC_ADDRESS[index_js_1.ChainId.FANTOM],
        decimals: 18,
        symbol: 'WBTC',
        name: 'Wrapped BTC',
    }),
};
exports.STARGATE_USDC_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.USDC_ADDRESS[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.USDC_ADDRESS[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.POLYGON]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    [index_js_1.ChainId.ARBITRUM]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    [index_js_1.ChainId.OPTIMISM]: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    // [ChainId.FANTOM]: USDC_ADDRESS[ChainId.FANTOM],
    [index_js_1.ChainId.FANTOM]: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf',
    // [ChainId.BASE]: USDC_ADDRESS[ChainId.BASE],
    [index_js_1.ChainId.BASE]: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
};
exports.STARGATE_USDC = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.USDC[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.USDC[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.POLYGON]: new index_js_2.Token({
        chainId: index_js_1.ChainId.POLYGON,
        address: exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.POLYGON],
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
    }),
    [index_js_1.ChainId.ARBITRUM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.ARBITRUM,
        address: exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ARBITRUM],
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
    }),
    [index_js_1.ChainId.OPTIMISM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.OPTIMISM,
        address: exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.OPTIMISM],
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
    }),
    // [ChainId.FANTOM]: USDC[ChainId.FANTOM],
    [index_js_1.ChainId.FANTOM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.FANTOM,
        address: exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.FANTOM],
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
    }),
    // [ChainId.BASE]: USDC[ChainId.BASE],
    [index_js_1.ChainId.BASE]: new index_js_2.Token({
        chainId: index_js_1.ChainId.BASE,
        address: exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.BASE],
        decimals: 6,
        symbol: 'USDC',
        name: 'USD Coin',
    }),
};
exports.STARGATE_USDT_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.USDT_ADDRESS[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.BSC]: index_js_2.USDT_ADDRESS[index_js_1.ChainId.BSC],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.USDT_ADDRESS[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.POLYGON]: index_js_2.USDT_ADDRESS[index_js_1.ChainId.POLYGON],
    [index_js_1.ChainId.ARBITRUM]: index_js_2.USDT_ADDRESS[index_js_1.ChainId.ARBITRUM],
    [index_js_1.ChainId.FANTOM]: '0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C',
    [index_js_1.ChainId.METIS]: index_js_2.USDT_ADDRESS[index_js_1.ChainId.METIS],
    [index_js_1.ChainId.KAVA]: '0xAad094F6A75A14417d39f04E690fC216f080A41a',
};
exports.STARGATE_USDT = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.USDT[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.BSC]: index_js_2.USDT[index_js_1.ChainId.BSC],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.USDT[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.POLYGON]: index_js_2.USDT[index_js_1.ChainId.POLYGON],
    [index_js_1.ChainId.ARBITRUM]: index_js_2.USDT[index_js_1.ChainId.ARBITRUM],
    [index_js_1.ChainId.FANTOM]: new index_js_2.Token({
        chainId: index_js_1.ChainId.FANTOM,
        address: exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.FANTOM],
        decimals: 6,
        symbol: 'USDT',
        name: 'Tether USD',
    }),
    [index_js_1.ChainId.METIS]: index_js_2.USDT[index_js_1.ChainId.METIS],
    [index_js_1.ChainId.KAVA]: new index_js_2.Token({
        chainId: index_js_1.ChainId.KAVA,
        address: exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.KAVA],
        decimals: 6,
        symbol: 'USDT',
        name: 'Tether USD',
    }),
};
exports.STARGATE_DAI_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.DAI_ADDRESS[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.POLYGON]: index_js_2.DAI_ADDRESS[index_js_1.ChainId.POLYGON],
    [index_js_1.ChainId.OPTIMISM]: index_js_2.DAI_ADDRESS[index_js_1.ChainId.OPTIMISM],
};
exports.STARGATE_DAI = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.DAI[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.POLYGON]: index_js_2.DAI[index_js_1.ChainId.POLYGON],
    [index_js_1.ChainId.OPTIMISM]: index_js_2.DAI[index_js_1.ChainId.OPTIMISM],
};
exports.STARGATE_FRAX_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.FRAX_ADDRESS[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.FRAX_ADDRESS[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.ARBITRUM]: index_js_2.FRAX_ADDRESS[index_js_1.ChainId.ARBITRUM],
    [index_js_1.ChainId.OPTIMISM]: index_js_2.FRAX_ADDRESS[index_js_1.ChainId.OPTIMISM],
};
exports.STARGATE_FRAX = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.FRAX[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.FRAX[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.ARBITRUM]: index_js_2.FRAX[index_js_1.ChainId.ARBITRUM],
    [index_js_1.ChainId.OPTIMISM]: index_js_2.FRAX[index_js_1.ChainId.OPTIMISM],
};
exports.STARGATE_BUSD_ADDRESS = {
    [index_js_1.ChainId.BSC]: index_js_2.BUSD_ADDRESS[index_js_1.ChainId.BSC],
};
exports.STARGATE_BUSD = {
    [index_js_1.ChainId.BSC]: index_js_2.BUSD[index_js_1.ChainId.BSC],
};
exports.STARGATE_MAI_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.MAI_ADDRESS[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.BSC]: index_js_2.MAI_ADDRESS[index_js_1.ChainId.BSC],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.MAI_ADDRESS[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.POLYGON]: index_js_2.MAI_ADDRESS[index_js_1.ChainId.POLYGON],
    [index_js_1.ChainId.ARBITRUM]: index_js_2.MAI_ADDRESS[index_js_1.ChainId.ARBITRUM],
    [index_js_1.ChainId.OPTIMISM]: index_js_2.MAI_ADDRESS[index_js_1.ChainId.OPTIMISM],
};
exports.STARGATE_MAI = {
    [index_js_1.ChainId.ETHEREUM]: index_js_2.MAI[index_js_1.ChainId.ETHEREUM],
    [index_js_1.ChainId.BSC]: index_js_2.MAI[index_js_1.ChainId.BSC],
    [index_js_1.ChainId.AVALANCHE]: index_js_2.MAI[index_js_1.ChainId.AVALANCHE],
    [index_js_1.ChainId.POLYGON]: index_js_2.MAI[index_js_1.ChainId.POLYGON],
    [index_js_1.ChainId.ARBITRUM]: index_js_2.MAI[index_js_1.ChainId.ARBITRUM],
    [index_js_1.ChainId.OPTIMISM]: index_js_2.MAI[index_js_1.ChainId.OPTIMISM],
};
exports.STARGATE_BRIDGE_TOKENS = {
    [index_js_1.ChainId.ETHEREUM]: [
        exports.STARGATE_ETH[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_DAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_FRAX[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_MAI[index_js_1.ChainId.ETHEREUM],
    ],
    [index_js_1.ChainId.BSC]: [
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_MAI[index_js_1.ChainId.BSC],
    ],
    [index_js_1.ChainId.AVALANCHE]: [
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_FRAX[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_MAI[index_js_1.ChainId.AVALANCHE],
    ],
    [index_js_1.ChainId.POLYGON]: [
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_DAI[index_js_1.ChainId.POLYGON],
        exports.STARGATE_MAI[index_js_1.ChainId.POLYGON],
    ],
    [index_js_1.ChainId.ARBITRUM]: [
        exports.STARGATE_ETH[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_FRAX[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_MAI[index_js_1.ChainId.ARBITRUM],
    ],
    [index_js_1.ChainId.OPTIMISM]: [
        exports.STARGATE_ETH[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_DAI[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_FRAX[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_MAI[index_js_1.ChainId.OPTIMISM],
    ],
    [index_js_1.ChainId.FANTOM]: [exports.STARGATE_USDC[index_js_1.ChainId.FANTOM]],
    [index_js_1.ChainId.METIS]: [exports.STARGATE_USDT[index_js_1.ChainId.METIS]],
    [index_js_1.ChainId.BASE]: [exports.STARGATE_ETH[index_js_1.ChainId.BASE], exports.STARGATE_USDC[index_js_1.ChainId.BASE]],
    [index_js_1.ChainId.LINEA]: [exports.STARGATE_ETH[index_js_1.ChainId.LINEA]],
};
exports.STARGATE_BRIDGE_TOKEN_ADDRESSES = {
    [index_js_1.ChainId.ETHEREUM]: [
        exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ETHEREUM],
    ],
    [index_js_1.ChainId.BSC]: [
        exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.BSC],
        exports.STARGATE_BUSD_ADDRESS[index_js_1.ChainId.BSC],
        exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.BSC],
    ],
    [index_js_1.ChainId.AVALANCHE]: [
        exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.AVALANCHE],
    ],
    [index_js_1.ChainId.POLYGON]: [
        exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.POLYGON],
        exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.POLYGON],
        exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.POLYGON],
    ],
    [index_js_1.ChainId.ARBITRUM]: [
        exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ARBITRUM],
    ],
    [index_js_1.ChainId.OPTIMISM]: [
        exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.OPTIMISM],
    ],
    [index_js_1.ChainId.FANTOM]: [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.FANTOM]],
    [index_js_1.ChainId.METIS]: [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.METIS]],
    [index_js_1.ChainId.BASE]: [
        exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.BASE],
        exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.BASE],
    ],
    [index_js_1.ChainId.LINEA]: [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.LINEA]],
};
exports.STARGATE_POOL_ID = {
    [index_js_1.ChainId.ETHEREUM]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ETHEREUM]]: 13,
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ETHEREUM]]: 1,
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ETHEREUM]]: 2,
        [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: 3,
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ETHEREUM]]: 7,
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: 16,
    },
    [index_js_1.ChainId.BSC]: {
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.BSC]]: 2,
        [exports.STARGATE_BUSD_ADDRESS[index_js_1.ChainId.BSC]]: 5,
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.BSC]]: 16,
    },
    [index_js_1.ChainId.AVALANCHE]: {
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.AVALANCHE]]: 1,
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.AVALANCHE]]: 2,
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.AVALANCHE]]: 7,
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.AVALANCHE]]: 16,
    },
    [index_js_1.ChainId.POLYGON]: {
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.POLYGON]]: 1,
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.POLYGON]]: 2,
        [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.POLYGON]]: 3,
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.POLYGON]]: 16,
    },
    [index_js_1.ChainId.ARBITRUM]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ARBITRUM]]: 13,
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ARBITRUM]]: 1,
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ARBITRUM]]: 2,
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ARBITRUM]]: 7,
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ARBITRUM]]: 16,
    },
    [index_js_1.ChainId.OPTIMISM]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.OPTIMISM]]: 13,
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.OPTIMISM]]: 1,
        [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.OPTIMISM]]: 3,
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.OPTIMISM]]: 7,
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.OPTIMISM]]: 16,
    },
    [index_js_1.ChainId.FANTOM]: { [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.FANTOM]]: 21 },
    [index_js_1.ChainId.METIS]: { [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.METIS]]: 19 },
    [index_js_1.ChainId.BASE]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.BASE]]: 13,
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.BASE]]: 1,
    },
    [index_js_1.ChainId.LINEA]: { [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.LINEA]]: 13 },
};
exports.STARGATE_POOL_ADDRESS = {
    [index_js_1.ChainId.ETHEREUM]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ETHEREUM]]: '0x101816545F6bd2b1076434B54383a1E633390A2E',
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ETHEREUM]]: '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56',
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ETHEREUM]]: '0x38ea452219524bb87e18de1c24d3bb59510bd783',
        [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: '0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d',
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ETHEREUM]]: '0xfA0F307783AC21C39E939ACFF795e27b650F6e68',
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: '0x9cef9a0b1be0d289ac9f4a98ff317c33eaa84eb8',
    },
    [index_js_1.ChainId.BSC]: {
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.BSC]]: '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda',
        [exports.STARGATE_BUSD_ADDRESS[index_js_1.ChainId.BSC]]: '0x98a5737749490856b401DB5Dc27F522fC314A4e1',
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.BSC]]: '0x7BfD7f2498C4796f10b6C611D9db393D3052510C',
    },
    [index_js_1.ChainId.AVALANCHE]: {
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.AVALANCHE]]: '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.AVALANCHE]]: '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.AVALANCHE]]: '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea',
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.AVALANCHE]]: '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B',
    },
    [index_js_1.ChainId.POLYGON]: {
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.POLYGON]]: '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.POLYGON]]: '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
        [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.POLYGON]]: '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea',
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.POLYGON]]: '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B',
    },
    [index_js_1.ChainId.ARBITRUM]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ARBITRUM]]: '0x915A55e36A01285A14f05dE6e81ED9cE89772f8e',
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ARBITRUM]]: '0x892785f33CdeE22A30AEF750F285E18c18040c3e',
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ARBITRUM]]: '0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641',
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ARBITRUM]]: '0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C',
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ARBITRUM]]: '0xF39B7Be294cB36dE8c510e267B82bb588705d977',
    },
    [index_js_1.ChainId.OPTIMISM]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.OPTIMISM]]: '0xd22363e3762cA7339569F3d33EADe20127D5F98C',
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.OPTIMISM]]: '0xDecC0c09c3B5f6e92EF4184125D5648a66E35298',
        [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.OPTIMISM]]: '0x165137624F1f692e69659f944BF69DE02874ee27',
        [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.OPTIMISM]]: '0x368605D9C6243A80903b9e326f1Cddde088B8924',
        [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.OPTIMISM]]: '0x5421FA1A48f9FF81e4580557E86C7C0D24C18036',
    },
    [index_js_1.ChainId.FANTOM]: {
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.FANTOM]]: '0xc647ce76ec30033aa319d472ae9f4462068f2ad7',
    },
    [index_js_1.ChainId.METIS]: {
        [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.METIS]]: '0x2b60473a7C41Deb80EDdaafD5560e963440eb632',
    },
    [index_js_1.ChainId.BASE]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.BASE]]: '0x28fc411f9e1c480AD312b3d9C60c22b965015c6B',
        [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.BASE]]: '0x4c80e24119cfb836cdf0a6b53dc23f04f7e652ca',
    },
    [index_js_1.ChainId.LINEA]: {
        [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.LINEA]]: '0xAad094F6A75A14417d39f04E690fC216f080A41a',
    },
};
function isStargateBridgeToken(currency) {
    if (!currency)
        return false;
    if (currency.isNative && currency.chainId in exports.STARGATE_ETH_ADDRESS)
        return true;
    if (!exports.STARGATE_BRIDGE_TOKEN_ADDRESSES[currency.chainId])
        return false;
    return exports.STARGATE_BRIDGE_TOKEN_ADDRESSES?.[currency.chainId]?.includes(currency.wrapped.address);
}
exports.isStargateBridgeToken = isStargateBridgeToken;
exports.STARGATE_TOKEN = new index_js_2.Token({
    chainId: index_js_1.ChainId.ETHEREUM,
    address: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
    decimals: 18,
    symbol: 'STG',
    name: 'StargateToken',
});
exports.STARGATE_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.OPTIMISM,
    // ChainId.FANTOM,
    index_js_1.ChainId.BASE,
    index_js_1.ChainId.LINEA,
];
// https://stargateprotocol.gitbook.io/stargate/developers/stargate-chain-paths
const ETHEREUM_CHAIN_PATHS = {
    [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [
        exports.STARGATE_DAI[index_js_1.ChainId.POLYGON],
        exports.STARGATE_DAI[index_js_1.ChainId.OPTIMISM],
    ],
    [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [
        exports.STARGATE_FRAX[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_FRAX[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_FRAX[index_js_1.ChainId.OPTIMISM],
    ],
    [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [
        exports.STARGATE_ETH[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_ETH[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_ETH[index_js_1.ChainId.BASE],
        exports.STARGATE_ETH[index_js_1.ChainId.LINEA],
    ],
    [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [
        exports.STARGATE_MAI[index_js_1.ChainId.BSC],
        exports.STARGATE_MAI[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_MAI[index_js_1.ChainId.POLYGON],
        exports.STARGATE_MAI[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_MAI[index_js_1.ChainId.OPTIMISM],
    ],
};
const BSC_CHAIN_PATHS = {
    [exports.STARGATE_BUSD_ADDRESS[index_js_1.ChainId.BSC]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.BSC]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.BSC]]: [
        exports.STARGATE_MAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_MAI[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_MAI[index_js_1.ChainId.POLYGON],
        exports.STARGATE_MAI[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_MAI[index_js_1.ChainId.OPTIMISM],
    ],
};
const AVALANCE_CHAIN_PATHS = {
    [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.AVALANCHE]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.AVALANCHE]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.AVALANCHE]]: [
        exports.STARGATE_FRAX[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_FRAX[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_FRAX[index_js_1.ChainId.OPTIMISM],
    ],
    [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.AVALANCHE]]: [
        exports.STARGATE_MAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_MAI[index_js_1.ChainId.BSC],
        exports.STARGATE_MAI[index_js_1.ChainId.POLYGON],
        exports.STARGATE_MAI[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_MAI[index_js_1.ChainId.OPTIMISM],
    ],
};
const POLYGON_CHAIN_PATHS = {
    [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.POLYGON]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.POLYGON]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.POLYGON]]: [
        exports.STARGATE_DAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_DAI[index_js_1.ChainId.OPTIMISM],
    ],
    [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.POLYGON]]: [
        exports.STARGATE_MAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_MAI[index_js_1.ChainId.BSC],
        exports.STARGATE_MAI[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_MAI[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_MAI[index_js_1.ChainId.OPTIMISM],
    ],
};
const ARBITRUM_CHAIN_PATHS = {
    [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.ARBITRUM]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_USDT_ADDRESS[index_js_1.ChainId.ARBITRUM]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.ARBITRUM]]: [
        exports.STARGATE_FRAX[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_FRAX[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_FRAX[index_js_1.ChainId.OPTIMISM],
    ],
    [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.ARBITRUM]]: [
        exports.STARGATE_ETH[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_ETH[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_ETH[index_js_1.ChainId.BASE],
        exports.STARGATE_ETH[index_js_1.ChainId.LINEA],
    ],
    [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.ARBITRUM]]: [
        exports.STARGATE_MAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_MAI[index_js_1.ChainId.BSC],
        exports.STARGATE_MAI[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_MAI[index_js_1.ChainId.POLYGON],
        exports.STARGATE_MAI[index_js_1.ChainId.OPTIMISM],
    ],
};
const OPTIMISM_CHAIN_PATHS = {
    [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.OPTIMISM]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_BUSD[index_js_1.ChainId.BSC],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.FANTOM],
        exports.STARGATE_USDC[index_js_1.ChainId.BASE],
    ],
    [exports.STARGATE_DAI_ADDRESS[index_js_1.ChainId.OPTIMISM]]: [
        exports.STARGATE_DAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_DAI[index_js_1.ChainId.POLYGON],
    ],
    [exports.STARGATE_FRAX_ADDRESS[index_js_1.ChainId.OPTIMISM]]: [
        exports.STARGATE_FRAX[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_FRAX[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_FRAX[index_js_1.ChainId.ARBITRUM],
    ],
    [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.OPTIMISM]]: [
        exports.STARGATE_ETH[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_ETH[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_ETH[index_js_1.ChainId.BASE],
        exports.STARGATE_ETH[index_js_1.ChainId.LINEA],
    ],
    [exports.STARGATE_MAI_ADDRESS[index_js_1.ChainId.OPTIMISM]]: [
        exports.STARGATE_MAI[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_MAI[index_js_1.ChainId.BSC],
        exports.STARGATE_MAI[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_MAI[index_js_1.ChainId.POLYGON],
        exports.STARGATE_MAI[index_js_1.ChainId.ARBITRUM],
    ],
};
// const FANTOM_CHAIN_PATHS = {
//   [STARGATE_USDC_ADDRESS[ChainId.FANTOM]]: [
//     STARGATE_USDC[ChainId.ETHEREUM],
//     STARGATE_USDT[ChainId.ETHEREUM],
//     STARGATE_BUSD[ChainId.BSC],
//     STARGATE_USDT[ChainId.BSC],
//     STARGATE_USDC[ChainId.AVALANCHE],
//     STARGATE_USDT[ChainId.AVALANCHE],
//     STARGATE_USDC[ChainId.POLYGON],
//     STARGATE_USDT[ChainId.POLYGON],
//     STARGATE_USDC[ChainId.ARBITRUM],
//     STARGATE_USDT[ChainId.ARBITRUM],
//     STARGATE_USDC[ChainId.OPTIMISM],
//   ],
// }
const BASE_CHAIN_PATHS = {
    [exports.STARGATE_USDC_ADDRESS[index_js_1.ChainId.BASE]]: [
        exports.STARGATE_USDC[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_USDT[index_js_1.ChainId.BSC],
        exports.STARGATE_USDC[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDT[index_js_1.ChainId.AVALANCHE],
        exports.STARGATE_USDC[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDT[index_js_1.ChainId.POLYGON],
        exports.STARGATE_USDC[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDT[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_USDC[index_js_1.ChainId.OPTIMISM],
    ],
    [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.BASE]]: [
        exports.STARGATE_ETH[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_ETH[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_ETH[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_ETH[index_js_1.ChainId.LINEA],
    ],
};
const LINEA_CHAIN_PATHS = {
    [exports.STARGATE_ETH_ADDRESS[index_js_1.ChainId.LINEA]]: [
        exports.STARGATE_ETH[index_js_1.ChainId.ETHEREUM],
        exports.STARGATE_ETH[index_js_1.ChainId.ARBITRUM],
        exports.STARGATE_ETH[index_js_1.ChainId.OPTIMISM],
        exports.STARGATE_ETH[index_js_1.ChainId.BASE],
    ],
};
exports.STARGATE_CHAIN_PATHS = {
    [index_js_1.ChainId.ETHEREUM]: ETHEREUM_CHAIN_PATHS,
    [index_js_1.ChainId.BSC]: BSC_CHAIN_PATHS,
    [index_js_1.ChainId.AVALANCHE]: AVALANCE_CHAIN_PATHS,
    [index_js_1.ChainId.POLYGON]: POLYGON_CHAIN_PATHS,
    [index_js_1.ChainId.ARBITRUM]: ARBITRUM_CHAIN_PATHS,
    [index_js_1.ChainId.OPTIMISM]: OPTIMISM_CHAIN_PATHS,
    // [ChainId.FANTOM]: FANTOM_CHAIN_PATHS,
    [index_js_1.ChainId.BASE]: BASE_CHAIN_PATHS,
    [index_js_1.ChainId.LINEA]: LINEA_CHAIN_PATHS,
};
//# sourceMappingURL=stargate.js.map