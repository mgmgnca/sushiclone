"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquidMulticallCallType = exports.SQUID_MULTICALL_ADDRESS = exports.SQUID_ROUTER_ADDRESS = exports.SQUID_CHAIN_NAME = exports.SquidIntegratorId = void 0;
const chain_1 = require("../chain");
exports.SquidIntegratorId = 'sushiswap-sdk';
exports.SQUID_CHAIN_NAME = {
    [chain_1.ChainId.ARBITRUM]: 'Arbitrum',
    [chain_1.ChainId.AVALANCHE]: 'Avalanche',
    [chain_1.ChainId.BASE]: 'base',
    [chain_1.ChainId.BSC]: 'binance',
    [chain_1.ChainId.CELO]: 'celo',
    [chain_1.ChainId.ETHEREUM]: 'Ethereum',
    [chain_1.ChainId.FANTOM]: 'Fantom',
    [chain_1.ChainId.FILECOIN]: 'filecoin',
    [chain_1.ChainId.KAVA]: 'kava',
    [chain_1.ChainId.MOONBEAM]: 'Moonbeam',
    [chain_1.ChainId.OPTIMISM]: 'optimism',
    [chain_1.ChainId.POLYGON_ZKEVM]: 'polygon-zkevm',
    [chain_1.ChainId.POLYGON]: 'Polygon',
    [chain_1.ChainId.LINEA]: 'linea',
    [chain_1.ChainId.SCROLL]: 'scroll',
};
exports.SQUID_ROUTER_ADDRESS = {
    [chain_1.ChainId.ETHEREUM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.BSC]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.POLYGON]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.AVALANCHE]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.FANTOM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.MOONBEAM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.ARBITRUM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.OPTIMISM]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.BASE]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.CELO]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.KAVA]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.FILECOIN]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.LINEA]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
    [chain_1.ChainId.SCROLL]: '0xce16F69375520ab01377ce7B88f5BA8C48F8D666',
};
exports.SQUID_MULTICALL_ADDRESS = {
    [chain_1.ChainId.ETHEREUM]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.BSC]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.POLYGON]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.AVALANCHE]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.FANTOM]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.MOONBEAM]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.ARBITRUM]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.OPTIMISM]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.BASE]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.CELO]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.KAVA]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.FILECOIN]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.LINEA]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
    [chain_1.ChainId.SCROLL]: '0x4fd39C9E151e50580779bd04B1f7eCc310079fd3',
};
var SquidMulticallCallType;
(function (SquidMulticallCallType) {
    SquidMulticallCallType[SquidMulticallCallType["Default"] = 0] = "Default";
    SquidMulticallCallType[SquidMulticallCallType["FullTokenBalance"] = 1] = "FullTokenBalance";
    SquidMulticallCallType[SquidMulticallCallType["FullNativeBalance"] = 2] = "FullNativeBalance";
    SquidMulticallCallType[SquidMulticallCallType["CollectTokenBalance"] = 3] = "CollectTokenBalance";
})(SquidMulticallCallType || (exports.SquidMulticallCallType = SquidMulticallCallType = {}));
//# sourceMappingURL=squid.js.map