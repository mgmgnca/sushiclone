"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenQuantityString = exports.Router = void 0;
const viem_1 = require("viem");
const routeProcessor2Abi_js_1 = require("../abi/routeProcessor2Abi.js");
const routeProcessor4Abi_js_1 = require("../abi/routeProcessor4Abi.js");
const routeProcessorAbi_js_1 = require("../abi/routeProcessorAbi.js");
const index_js_1 = require("../chain/index.js");
const index_js_2 = require("../currency/index.js");
const index_js_3 = require("../currency/index.js");
const index_js_4 = require("../tines/index.js");
const index_js_5 = require("./liquidity-providers/index.js");
const tines_to_route_processor_2_js_1 = require("./tines-to-route-processor-2.js");
const tines_to_route_processor_4_js_1 = require("./tines-to-route-processor-4.js");
const tines_to_route_processor_js_1 = require("./tines-to-route-processor.js");
function TokenToRToken(t) {
    if (t instanceof index_js_3.Token)
        return t;
    const nativeRToken = {
        address: '',
        name: t.name,
        symbol: t.symbol,
        chainId: t.chainId,
        decimals: 18,
    };
    return nativeRToken;
}
const RPprocessRouteEncodeData = (0, viem_1.prepareEncodeFunctionData)({
    abi: routeProcessorAbi_js_1.routeProcessorAbi,
    functionName: 'processRoute',
});
const RP2processRouteEncodeData = (0, viem_1.prepareEncodeFunctionData)({
    abi: routeProcessor2Abi_js_1.routeProcessor2Abi,
    functionName: 'processRoute',
});
const RP4processRouteEncodeData = (0, viem_1.prepareEncodeFunctionData)({
    abi: routeProcessor4Abi_js_1.routeProcessor4Abi,
    functionName: 'processRoute',
});
const isWrap = ({ fromToken, toToken }) => fromToken.isNative &&
    toToken.wrapped.address === index_js_2.Native.onChain(toToken.chainId).wrapped.address;
const isUnwrap = ({ fromToken, toToken }) => toToken.isNative &&
    fromToken.wrapped.address ===
        index_js_2.Native.onChain(fromToken.chainId).wrapped.address;
class Router {
    static findSushiRoute(poolCodesMap, chainId, fromToken, amountIn, toToken, gasPrice) {
        return Router.findBestRoute(poolCodesMap, chainId, fromToken, amountIn, toToken, gasPrice, [
            index_js_5.LiquidityProviders.NativeWrap,
            index_js_5.LiquidityProviders.SushiSwapV2,
            index_js_5.LiquidityProviders.SushiSwapV3,
            index_js_5.LiquidityProviders.Trident,
        ]);
    }
    static findSpecialRoute(poolCodesMap, chainId, fromToken, amountIn, toToken, gasPrice, maxPriceImpact = 1) {
        // Find preferrable route
        const preferrableRoute = Router.findBestRoute(poolCodesMap, chainId, fromToken, amountIn, toToken, gasPrice, [
            index_js_5.LiquidityProviders.NativeWrap,
            index_js_5.LiquidityProviders.SushiSwapV2,
            index_js_5.LiquidityProviders.SushiSwapV3,
            index_js_5.LiquidityProviders.Trident,
        ]);
        // If the route is successful and the price impact is less than maxPriceImpact, then return the route
        if (preferrableRoute.status === index_js_4.RouteStatus.Success &&
            preferrableRoute.priceImpact !== undefined &&
            preferrableRoute.priceImpact < maxPriceImpact / 100) {
            return preferrableRoute;
        }
        // Otherwise, find the route using all possible liquidity providers
        return Router.findBestRoute(poolCodesMap, chainId, fromToken, amountIn, toToken, gasPrice);
    }
    static findBestRoute(poolCodes, chainId, fromToken, amountIn, toToken, gasPrice, providers, // all providers if undefined
    poolFilter) {
        const networks = [
            {
                chainId: Number(chainId),
                baseToken: index_js_2.WNATIVE[chainId],
                gasPrice: gasPrice,
            },
            {
                chainId: (0, index_js_4.getBentoChainId)(chainId),
                baseToken: (0, index_js_4.convertTokenToBento)(index_js_2.WNATIVE[chainId]),
                gasPrice: gasPrice,
            },
        ];
        let poolCodesMap;
        if (poolCodes instanceof Map)
            poolCodesMap = poolCodes;
        else {
            poolCodesMap = new Map();
            poolCodes.forEach((p) => poolCodesMap.set(p.pool.uniqueID(), p));
        }
        let poolCodesList = poolCodes instanceof Map ? Array.from(poolCodes.values()) : poolCodes;
        if (providers) {
            poolCodesList = poolCodesList.filter((pc) => [...providers, index_js_5.LiquidityProviders.NativeWrap].includes(pc.liquidityProvider));
        }
        let pools = Array.from(poolCodesList).map((pc) => pc.pool);
        if (poolFilter)
            pools = pools.filter(poolFilter);
        const route = (0, index_js_4.findMultiRouteExactIn)(TokenToRToken(fromToken), TokenToRToken(toToken), amountIn, pools, networks, gasPrice);
        return {
            ...route,
            legs: route.legs.map((l) => ({
                ...l,
                poolName: poolCodesMap.get(l.poolAddress)?.poolName ?? 'Unknown Pool',
            })),
        };
    }
    static routeProcessorParams(poolCodesMap, route, fromToken, toToken, to, RPAddr, maxPriceImpact = 0.005) {
        const tokenIn = fromToken instanceof index_js_3.Token
            ? fromToken.address
            : fromToken.chainId === index_js_1.ChainId.CELO
                ? index_js_2.WNATIVE_ADDRESS[index_js_1.ChainId.CELO] /*CELO native coin has ERC20 interface*/
                : '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
        const tokenOut = toToken instanceof index_js_3.Token
            ? toToken.address
            : '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
        const isWrapOrUnwap = isWrap({ fromToken, toToken }) || isUnwrap({ fromToken, toToken });
        const amountOutMin = isWrapOrUnwap
            ? route.amountOutBI
            : (route.amountOutBI * (0, index_js_4.getBigInt)((1 - maxPriceImpact) * 1000000)) /
                1000000n;
        const routeCode = (0, tines_to_route_processor_js_1.getRouteProcessorCode)(route, RPAddr, to, poolCodesMap);
        const data = (0, viem_1.encodeFunctionData)({
            ...RPprocessRouteEncodeData,
            args: [tokenIn, route.amountInBI, tokenOut, amountOutMin, to, routeCode],
        });
        return {
            tokenIn,
            amountIn: route.amountInBI,
            tokenOut,
            amountOutMin,
            to,
            routeCode,
            data,
            value: fromToken instanceof index_js_3.Token ? undefined : route.amountInBI,
        };
    }
    static routeProcessor2Params(poolCodesMap, route, fromToken, toToken, to, RPAddr, permits = [], maxPriceImpact = 0.005, source = tines_to_route_processor_2_js_1.RouterLiquiditySource.Sender) {
        const tokenIn = fromToken instanceof index_js_3.Token
            ? fromToken.address
            : '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
        const tokenOut = toToken instanceof index_js_3.Token
            ? toToken.address
            : '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
        const isWrapOrUnwap = isWrap({ fromToken, toToken }) || isUnwrap({ fromToken, toToken });
        const amountOutMin = isWrapOrUnwap
            ? route.amountOutBI
            : (route.amountOutBI * (0, index_js_4.getBigInt)((1 - maxPriceImpact) * 1000000)) /
                1000000n;
        const routeCode = (0, tines_to_route_processor_2_js_1.getRouteProcessor2Code)(route, RPAddr, to, poolCodesMap, permits, source);
        const data = (0, viem_1.encodeFunctionData)({
            ...RP2processRouteEncodeData,
            args: [tokenIn, route.amountInBI, tokenOut, amountOutMin, to, routeCode],
        });
        return {
            tokenIn,
            amountIn: route.amountInBI,
            tokenOut,
            amountOutMin,
            to,
            routeCode,
            data,
            value: fromToken instanceof index_js_3.Token ? undefined : route.amountInBI,
        };
    }
    static routeProcessor3Params = this.routeProcessor2Params;
    static routeProcessor3_1Params = this.routeProcessor2Params;
    static routeProcessor3_2Params = this.routeProcessor2Params;
    static routeProcessor4Params(poolCodesMap, route, fromToken, toToken, to, RPAddr, permits = [], maxPriceImpact = 0.005, source = tines_to_route_processor_2_js_1.RouterLiquiditySource.Sender) {
        const tokenIn = fromToken instanceof index_js_3.Token
            ? fromToken.address
            : '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
        const tokenOut = toToken instanceof index_js_3.Token
            ? toToken.address
            : '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
        const isWrapOrUnwap = isWrap({ fromToken, toToken }) || isUnwrap({ fromToken, toToken });
        const amountOutMin = isWrapOrUnwap
            ? route.amountOutBI
            : (route.amountOutBI * (0, index_js_4.getBigInt)((1 - maxPriceImpact) * 1000000)) /
                1000000n;
        const routeCode = (0, tines_to_route_processor_4_js_1.getRouteProcessor4Code)(route, RPAddr, to, poolCodesMap, permits, source);
        const data = (0, viem_1.encodeFunctionData)({
            ...RP4processRouteEncodeData,
            args: [tokenIn, route.amountInBI, tokenOut, amountOutMin, to, routeCode],
        });
        return {
            tokenIn,
            amountIn: route.amountInBI,
            tokenOut,
            amountOutMin,
            to,
            routeCode,
            data,
            value: fromToken instanceof index_js_3.Token ? undefined : route.amountInBI,
        };
    }
    // Human-readable route printing
    static routeToHumanString(poolCodesMap, route, fromToken, toToken, shiftPrimary = '', shiftSub = '    ') {
        let res = '';
        res += `${shiftPrimary}Route Status: ${route.status}\n`;
        res += `${shiftPrimary}Input: ${route.amountIn / 10 ** fromToken.decimals} ${fromToken.symbol}\n`;
        route.legs.forEach((l, i) => {
            res += `${shiftSub}${i + 1}. ${l.tokenFrom.symbol} ${Math.round(l.absolutePortion * 100)}% -> [${poolCodesMap.get(l.uniqueId)?.poolName}] -> ${l.tokenTo.symbol}\n`;
            //console.log(l.poolAddress, l.assumedAmountIn, l.assumedAmountOut)
        });
        const output = parseInt(route.amountOutBI.toString()) / 10 ** toToken.decimals;
        res += `${shiftPrimary}Output: ${output} ${route.toToken.symbol}`;
        return res;
    }
}
exports.Router = Router;
function tokenQuantityString(token, amount) {
    const denominator = 10n ** BigInt(token.decimals);
    const integer = amount / denominator;
    const fractional = amount - integer * denominator;
    if (fractional === 0n)
        return `${integer} ${token.symbol}`;
    const paddedFractional = fractional.toString().padStart(token.decimals, '0');
    return `${integer}.${paddedFractional} ${token.symbol}`;
}
exports.tokenQuantityString = tokenQuantityString;
//# sourceMappingURL=router.js.map