"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDITIONAL_BASES = void 0;
const index_js_1 = require("../chain/index.js");
const token_addresses_js_1 = require("../currency/token-addresses.js");
const tokens_js_1 = require("../currency/tokens.js");
exports.ADDITIONAL_BASES = {
    [index_js_1.ChainId.ETHEREUM]: {
        [token_addresses_js_1.rETH2_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.sETH2[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.SWISE_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.sETH2[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.FEI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.TRIBE[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.TRIBE_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.FEI[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.FXS[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.FRAX[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.WBTC_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.renBTC[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.renBTC_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.WBTC[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.APE_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.PRIMATE[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.PRIMATE_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.APE[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.SUSHI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.XSUSHI[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.XSUSHI_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.SUSHI[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.KP3R_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.LDO[index_js_1.ChainId.ETHEREUM]],
        [token_addresses_js_1.LDO_ADDRESS[index_js_1.ChainId.ETHEREUM]]: [tokens_js_1.KP3R[index_js_1.ChainId.ETHEREUM]],
        ['0x1e0275806C3CD0bDb5C99916A064d36b5e8eAE8d']: [
            // TWO
            tokens_js_1.AAVE[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.MKR[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.SNX[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.CRV[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.YFI[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.ENJ[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.COMP[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.GALA[index_js_1.ChainId.ETHEREUM],
            tokens_js_1.XSUSHI[index_js_1.ChainId.ETHEREUM],
        ],
    },
    [index_js_1.ChainId.POLYGON]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.POLYGON]]: [tokens_js_1.FXS[index_js_1.ChainId.POLYGON]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.POLYGON]]: [tokens_js_1.FRAX[index_js_1.ChainId.POLYGON]],
        [token_addresses_js_1.BCT_ADDRESS[index_js_1.ChainId.POLYGON]]: [tokens_js_1.KLIMA[index_js_1.ChainId.POLYGON]],
        [token_addresses_js_1.KLIMA_ADDRESS[index_js_1.ChainId.POLYGON]]: [tokens_js_1.BCT[index_js_1.ChainId.POLYGON]],
        // THREE
        ['0x9B034262e0095210ab9ddec60199741a8a1FbFe7']: [
            tokens_js_1.AAVE[index_js_1.ChainId.POLYGON],
            tokens_js_1.LINK[index_js_1.ChainId.POLYGON],
            tokens_js_1.MANA[index_js_1.ChainId.POLYGON],
            tokens_js_1.SNX[index_js_1.ChainId.POLYGON],
            tokens_js_1.CRV[index_js_1.ChainId.POLYGON],
            tokens_js_1.YFI[index_js_1.ChainId.POLYGON],
            tokens_js_1.GNS[index_js_1.ChainId.POLYGON],
            tokens_js_1.SAND[index_js_1.ChainId.POLYGON],
            tokens_js_1.STG[index_js_1.ChainId.POLYGON],
            tokens_js_1.UNI[index_js_1.ChainId.POLYGON],
            tokens_js_1.SUSHI[index_js_1.ChainId.POLYGON],
            tokens_js_1.RNDR[index_js_1.ChainId.POLYGON],
            tokens_js_1.TEL[index_js_1.ChainId.POLYGON],
            tokens_js_1.GRT[index_js_1.ChainId.POLYGON],
            tokens_js_1.BAL[index_js_1.ChainId.POLYGON],
            tokens_js_1.QUICK[index_js_1.ChainId.POLYGON],
            tokens_js_1.OCEAN[index_js_1.ChainId.POLYGON],
            tokens_js_1.XSUSHI[index_js_1.ChainId.POLYGON],
            tokens_js_1.KNCv2[index_js_1.ChainId.POLYGON],
            tokens_js_1.WAVAX[index_js_1.ChainId.POLYGON],
            tokens_js_1.JUGNI[index_js_1.ChainId.POLYGON],
        ],
    },
    [index_js_1.ChainId.ARBITRUM]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.ARBITRUM]]: [tokens_js_1.FXS[index_js_1.ChainId.ARBITRUM]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.ARBITRUM]]: [tokens_js_1.FRAX[index_js_1.ChainId.ARBITRUM]],
    },
    [index_js_1.ChainId.FANTOM]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.FANTOM]]: [tokens_js_1.FXS[index_js_1.ChainId.FANTOM]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.FANTOM]]: [tokens_js_1.FRAX[index_js_1.ChainId.FANTOM]],
    },
    [index_js_1.ChainId.BSC]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.BSC]]: [tokens_js_1.FXS[index_js_1.ChainId.BSC]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.BSC]]: [tokens_js_1.FRAX[index_js_1.ChainId.BSC]],
    },
    [index_js_1.ChainId.AVALANCHE]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.AVALANCHE]]: [tokens_js_1.FXS[index_js_1.ChainId.AVALANCHE]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.AVALANCHE]]: [tokens_js_1.FRAX[index_js_1.ChainId.AVALANCHE]],
    },
    [index_js_1.ChainId.MOONRIVER]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.MOONRIVER]]: [tokens_js_1.FXS[index_js_1.ChainId.MOONRIVER]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.MOONRIVER]]: [tokens_js_1.FRAX[index_js_1.ChainId.MOONRIVER]],
    },
    [index_js_1.ChainId.MOONBEAM]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.MOONBEAM]]: [tokens_js_1.FXS[index_js_1.ChainId.MOONBEAM]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.MOONBEAM]]: [tokens_js_1.FRAX[index_js_1.ChainId.MOONBEAM]],
    },
    [index_js_1.ChainId.HARMONY]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.HARMONY]]: [tokens_js_1.FXS[index_js_1.ChainId.HARMONY]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.HARMONY]]: [tokens_js_1.FRAX[index_js_1.ChainId.HARMONY]],
    },
    [index_js_1.ChainId.BOBA]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.BOBA]]: [tokens_js_1.FXS[index_js_1.ChainId.BOBA]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.BOBA]]: [tokens_js_1.FRAX[index_js_1.ChainId.BOBA]],
    },
    [index_js_1.ChainId.OPTIMISM]: {
        [token_addresses_js_1.FRAX_ADDRESS[index_js_1.ChainId.OPTIMISM]]: [tokens_js_1.FXS[index_js_1.ChainId.OPTIMISM]],
        [token_addresses_js_1.FXS_ADDRESS[index_js_1.ChainId.OPTIMISM]]: [tokens_js_1.FRAX[index_js_1.ChainId.OPTIMISM]],
    },
};
//# sourceMappingURL=additional-bases.js.map