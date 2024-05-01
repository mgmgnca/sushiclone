"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.quote1InchV5 = void 0;
const https_1 = __importDefault(require("https"));
const index_js_1 = require("../../chain/index.js");
const index_js_2 = require("../../currency/index.js");
const data_fetcher_js_1 = require("../data-fetcher.js");
const index_js_3 = require("../liquidity-providers/index.js");
const router_js_1 = require("../router.js");
const delay = async (ms) => new Promise((res) => setTimeout(res, ms));
async function getAPIObject(url, data) {
    const params = Object.keys(data)
        .map((k) => (data[k] !== undefined ? `${k}=${data[k]}` : undefined))
        .filter((k) => k !== undefined)
        .join('&');
    const urlWithParams = `${url}?${params}`;
    return new Promise((result, reject) => {
        https_1.default
            .get(urlWithParams, (res) => {
            let out = '';
            res.on('data', (chunk) => {
                out += chunk;
            });
            res.on('end', () => {
                const r = JSON.parse(out);
                if (r.statusCode !== undefined && r.statusCode !== 200)
                    reject(r);
                else
                    result(r);
            });
        })
            .on('error', (err) => {
            reject(JSON.parse(err.message));
        });
    });
}
async function quote1InchV5(chainId, fromTokenAddress, toTokenAddress, amount, gasPrice, providers) {
    const protocolWhiteList = providers
        ? getProtocols(providers, chainId)
        : undefined;
    const resp = (await getAPIObject(`https://api.1inch.io/v5.0/${chainId}/quote`, {
        fromTokenAddress,
        toTokenAddress,
        amount,
        gasPrice,
        protocolWhiteList,
    }));
    return resp.toTokenAmount;
}
exports.quote1InchV5 = quote1InchV5;
async function quote1InchV1_4(chainId, fromTokenAddress, toTokenAddress, amount, gasPrice, providers) {
    const protocolWhiteList = providers
        ? getProtocols(providers, chainId)
        : undefined;
    const resp = (await getAPIObject(`https://pathfinder.1inch.io/v1.4/chain/${chainId}/router/v5/quotes`, {
        fromTokenAddress,
        toTokenAddress,
        amount,
        gasPrice,
        protocolWhiteList,
        preset: 'maxReturnResult',
    }));
    return resp.bestResult.toTokenAmount;
}
function getEnvironment(chainId, lps) {
    // let network
    // switch (chainId) {
    //   case ChainId.ETHEREUM:
    //     network = 'mainnet'
    //     break
    //   case ChainId.POLYGON:
    //     network = 'matic'
    //     break
    //   default:
    // }
    const dataFetcher = new data_fetcher_js_1.DataFetcher(chainId);
    dataFetcher.startDataFetching(lps);
    return {
        chainId,
        dataFetcher,
    };
}
async function route(env, from, to, amount, gasPrice, providers) {
    return router_js_1.Router.findBestRoute(env.dataFetcher.getCurrentPoolCodeMap(from, to), env.chainId, from, BigInt(amount), to, gasPrice, providers);
}
function getProtocol(lp, chainId) {
    let prefix;
    switch (chainId) {
        case index_js_1.ChainId.ETHEREUM:
            prefix = '';
            break;
        case index_js_1.ChainId.POLYGON:
            prefix = 'POLYGON_';
            break;
        default:
            throw new Error(`Unsupported network: ${chainId}`);
    }
    switch (lp) {
        case index_js_3.LiquidityProviders.SushiSwapV2:
            return `${prefix}SUSHISWAP`;
        case index_js_3.LiquidityProviders.QuickSwap:
            return `${prefix}QUICKSWAP`;
        case index_js_3.LiquidityProviders.Trident:
            return `${prefix}TRIDENT`;
        case index_js_3.LiquidityProviders.UniswapV2:
            return `${prefix}UNISWAP_V2`;
        default:
            return 'Unknown protocol';
    }
}
function getProtocols(lp, chainId) {
    return lp.map((l) => getProtocol(l, chainId)).join(',');
}
async function test(env, from, to, amount, gasPrice, providers) {
    const fromAddress = from.isNative
        ? '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
        : from.address;
    const toAddress = to.isNative
        ? '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
        : to.address;
    const [
    // res1,
    res2, res3,] = await Promise.all([
        // quote1InchV5(env.chainId, fromAddress, toAddress, amount, gasPrice, providers), // NOTE: trident not supported in v5
        quote1InchV1_4(env.chainId, fromAddress, toAddress, amount, gasPrice, providers),
        route(env, from, to, amount, gasPrice, providers),
    ]);
    return [parseInt(res2), res3.amountOut];
}
exports.test = test;
async function testTrident() {
    try {
        const chainId = index_js_1.ChainId.POLYGON;
        const from = index_js_2.USDT[chainId];
        //const divisor = Math.pow(10, from.decimals)
        const to = index_js_2.USDC[chainId];
        //const gasPrice = 100e9
        const providers = [index_js_3.LiquidityProviders.Trident];
        const env = getEnvironment(chainId, providers);
        await delay(5000);
        env.dataFetcher.fetchPoolsForToken(from, to);
        await delay(5000);
        // for (let i = 6; i < 15; ++i) {
        //   const amount = getBigInt(Math.pow(10, i)).toString()
        //   //const res = await test(env, from, to, amount, gasPrice, providers)
        //   // console.log(
        //   //   Math.pow(10, i) / divisor,
        //   //   res.map((e) => e / divisor)
        //   // )
        // }
        env.dataFetcher.stopDataFetching();
    }
    catch (e) {
        console.log('Error', e);
    }
}
testTrident();
//# sourceMappingURL=check.js.map