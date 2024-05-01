"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLACKLIST_TOKEN_IDS = exports.DEFAULT_ACTIVE_LIST_URLS = exports.DEFAULT_LIST_OF_LISTS = exports.DEFAULT_TOKEN_LIST_OF_TOKEN_LISTS_TO_DISPLAY = exports.LINEA_LIST = exports.PLASMA_BNB_LIST = exports.CELO_LIST = exports.ARBITRUM_LIST = exports.OPTIMISM_LIST = exports.UNI_EXTENDED_LIST = exports.UNI_LIST = exports.SUSHI_CHAINLINK_TOKEN_LIST = exports.SUSHI_DEFAULT_TOKEN_LIST = exports.UNSUPPORTED_TOKEN_LIST_URLS = exports.BA_LIST = void 0;
exports.BA_LIST = 'https://raw.githubusercontent.com/The-Blockchain-Association/sec-notice-list/master/ba-sec-list.json';
exports.UNSUPPORTED_TOKEN_LIST_URLS = [exports.BA_LIST];
exports.SUSHI_DEFAULT_TOKEN_LIST = 'https://token-list.sushi.com';
exports.SUSHI_CHAINLINK_TOKEN_LIST = 'https://token-list.sushi.com/chainlink';
exports.UNI_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';
exports.UNI_EXTENDED_LIST = 'https://gateway.ipfs.io/ipns/extendedtokens.uniswap.org';
const COINGECKO_LIST = 'https://tokens.coingecko.com/uniswap/all.json';
const COINGECK_BASE_LIST = 'https://tokens.coingecko.com/base/all.json';
const COINGECKO_BNB_LIST = 'https://tokens.coingecko.com/binance-smart-chain/all.json';
const COINGECKO_ARBITRUM_LIST = 'https://tokens.coingecko.com/arbitrum-one/all.json';
const COINGECKO_OPTIMISM_LIST = 'https://tokens.coingecko.com/optimistic-ethereum/all.json';
const COINGECKO_CELO_LIST = 'https://tokens.coingecko.com/celo/all.json';
const COINGECKO_POLYGON_LIST = 'https://tokens.coingecko.com/polygon-pos/all.json';
const COINGECKO_AVAX_LIST = 'https://tokens.coingecko.com/avalanche/all.json';
const COMPOUND_LIST = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json';
const GEMINI_LIST = 'https://www.gemini.com/uniswap/manifest.json';
const SET_LIST = 'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json';
exports.OPTIMISM_LIST = 'https://static.optimism.io/optimism.tokenlist.json';
exports.ARBITRUM_LIST = 'https://tokenlist.arbitrum.io/ArbTokenLists/arbed_arb_whitelist_era.json';
exports.CELO_LIST = 'https://celo-org.github.io/celo-token-list/celo.tokenlist.json';
exports.PLASMA_BNB_LIST = 'https://raw.githubusercontent.com/plasmadlt/plasma-finance-token-list/master/bnb.json';
exports.LINEA_LIST = 'https://raw.githubusercontent.com/Consensys/linea-token-list/main/json/linea-mainnet-token-fulllist.json';
// this is the default list of lists that are exposed to users
// lower index == higher priority for token import
exports.DEFAULT_TOKEN_LIST_OF_TOKEN_LISTS_TO_DISPLAY = [
    exports.SUSHI_DEFAULT_TOKEN_LIST,
    exports.UNI_LIST,
    exports.UNI_EXTENDED_LIST,
    COMPOUND_LIST,
    COINGECKO_LIST,
    COINGECK_BASE_LIST,
    COINGECKO_BNB_LIST,
    COINGECKO_ARBITRUM_LIST,
    COINGECKO_OPTIMISM_LIST,
    COINGECKO_CELO_LIST,
    COINGECKO_POLYGON_LIST,
    COINGECKO_AVAX_LIST,
    GEMINI_LIST,
    SET_LIST,
    exports.ARBITRUM_LIST,
    exports.OPTIMISM_LIST,
    exports.CELO_LIST,
    exports.PLASMA_BNB_LIST,
    exports.LINEA_LIST,
];
exports.DEFAULT_LIST_OF_LISTS = [
    ...exports.DEFAULT_TOKEN_LIST_OF_TOKEN_LISTS_TO_DISPLAY,
    ...exports.UNSUPPORTED_TOKEN_LIST_URLS, // need to load dynamic unsupported tokens as well
];
// default lists to be 'active' aka searched across
exports.DEFAULT_ACTIVE_LIST_URLS = [
    exports.SUSHI_DEFAULT_TOKEN_LIST,
    exports.SUSHI_CHAINLINK_TOKEN_LIST,
    exports.OPTIMISM_LIST,
];
exports.BLACKLIST_TOKEN_IDS = [
    // Fake Aptos token
    '0x8CDf7AF57E4c8B930e1B23c477c22f076530585e',
];
//# sourceMappingURL=constants.js.map