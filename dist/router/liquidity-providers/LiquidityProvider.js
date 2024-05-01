"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidityProvider = exports.LiquidityProviders = void 0;
const index_js_1 = require("../../chain/index.js");
var LiquidityProviders;
(function (LiquidityProviders) {
    LiquidityProviders["SushiSwapV2"] = "SushiSwapV2";
    LiquidityProviders["SushiSwapV3"] = "SushiSwapV3";
    LiquidityProviders["UniswapV2"] = "UniswapV2";
    LiquidityProviders["UniswapV3"] = "UniswapV3";
    LiquidityProviders["Trident"] = "Trident";
    LiquidityProviders["QuickSwap"] = "QuickSwap";
    LiquidityProviders["ApeSwap"] = "ApeSwap";
    LiquidityProviders["PancakeSwap"] = "PancakeSwap";
    LiquidityProviders["PancakeSwapV3"] = "PancakeSwapV3";
    LiquidityProviders["TraderJoe"] = "TraderJoe";
    LiquidityProviders["Dfyn"] = "Dfyn";
    LiquidityProviders["Elk"] = "Elk";
    LiquidityProviders["JetSwap"] = "JetSwap";
    LiquidityProviders["SpookySwap"] = "SpookySwap";
    LiquidityProviders["NetSwap"] = "NetSwap";
    LiquidityProviders["NativeWrap"] = "NativeWrap";
    LiquidityProviders["HoneySwap"] = "HoneySwap";
    LiquidityProviders["UbeSwap"] = "UbeSwap";
    LiquidityProviders["Biswap"] = "Biswap";
    LiquidityProviders["CurveSwap"] = "CurveSwap";
    LiquidityProviders["DovishV3"] = "DovishV3";
    LiquidityProviders["Wagmi"] = "Wagmi";
    LiquidityProviders["LaserSwap"] = "LaserSwap";
    LiquidityProviders["BaseSwap"] = "BaseSwap";
    LiquidityProviders["AlgebraIntegral"] = "AlgebraIntegral";
    LiquidityProviders["Solarbeam"] = "Solarbeam";
    LiquidityProviders["Swapsicle"] = "Swapsicle";
    LiquidityProviders["VVSStandard"] = "VVSStandard";
    LiquidityProviders["Fraxswap"] = "Fraxswap";
    LiquidityProviders["SwapBlast"] = "SwapBlast";
    LiquidityProviders["BlastDEX"] = "BlastDEX";
    LiquidityProviders["MonoswapV2"] = "MonoswapV2";
    LiquidityProviders["MonoswapV3"] = "MonoswapV3";
    LiquidityProviders["ThrusterV2"] = "ThrusterV2";
    LiquidityProviders["ThrusterV3"] = "ThrusterV3";
    LiquidityProviders["DyorV2"] = "DyorV2";
    LiquidityProviders["HyperBlast"] = "HyperBlast";
    LiquidityProviders["KinetixV3"] = "KinetixV3";
})(LiquidityProviders || (exports.LiquidityProviders = LiquidityProviders = {}));
class LiquidityProvider {
    chainId;
    client;
    lastUpdateBlock = 0;
    isTest = false;
    ON_DEMAND_POOLS_LIFETIME_IN_SECONDS = 60;
    FETCH_AVAILABLE_POOLS_AFTER_SECONDS = 900;
    constructor(chainId, client, isTest = false) {
        this.chainId = chainId;
        this.client = client;
        this.isTest = isTest;
    }
    /**
     * Returns last processed block number
     * @returns last processed block number
     */
    getLastUpdateBlock() {
        return this.lastUpdateBlock;
    }
    /**
     * Logs a message with the following format:
     * <chainId>~<lastUpdateBlock>~<providerName>
     * Example: 1~123456~SushiSwap
     * @returns string
     */
    getLogPrefix() {
        return `${index_js_1.chainShortName[this.chainId]}/${this.chainId}~${this.lastUpdateBlock}~${this.getType()}`;
    }
    getTradeId = (t0, t1) => [t0.address.toLowerCase(), t1.address.toLowerCase()]
        .sort((first, second) => (first > second ? -1 : 1))
        .join(':');
}
exports.LiquidityProvider = LiquidityProvider;
//# sourceMappingURL=LiquidityProvider.js.map