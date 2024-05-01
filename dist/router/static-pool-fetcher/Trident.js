"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TridentStaticPoolFetcher = void 0;
const index_js_1 = require("../../abi/index.js");
const index_js_2 = require("../../config/index.js");
const get_currency_combinations_js_1 = require("../get-currency-combinations.js");
class TridentStaticPoolFetcher {
    static async getStaticPools(client, chainId, t1, t2) {
        const pools = await Promise.all([
            this.getPools(client, chainId, t1, t2, 'CONSTANT_PRODUCT_POOL'),
            this.getPools(client, chainId, t1, t2, 'STABLE_POOL'),
        ]);
        return pools;
    }
    static async getPools(client, chainId, t1, t2, type) {
        const currencies = (0, get_currency_combinations_js_1.getCurrencyCombinations)(chainId, t1, t2);
        const _pairsUnique = pairsUnique(currencies);
        const _pairsUniqueAddr = _pairsUnique.map(([t0, t1]) => [
            t0.address,
            t1.address,
        ]);
        const factoryAddress = type === 'STABLE_POOL'
            ? index_js_2.TRIDENT_STABLE_POOL_FACTORY_ADDRESS[chainId]
            : index_js_2.TRIDENT_CONSTANT_POOL_FACTORY_ADDRESS[chainId];
        const callStatePoolsCount = await client.multicall({
            multicallAddress: client.chain?.contracts?.multicall3?.address,
            allowFailure: true,
            contracts: _pairsUniqueAddr.map((el) => ({
                chainId,
                address: factoryAddress,
                abi: index_js_1.tridentPoolsCountAbi,
                functionName: 'poolsCount',
                args: el,
            })),
        });
        const callStatePoolsCountProcessed = callStatePoolsCount
            ?.map((s, i) => [i, s?.result ? parseInt(s.result.toString()) : 0])
            .filter(([, length]) => length)
            .map(([i, length]) => [
            _pairsUniqueAddr[i][0],
            _pairsUniqueAddr[i][1],
            BigInt(0),
            BigInt(length),
        ]);
        const pairsUniqueProcessed = callStatePoolsCount
            ?.map((s, i) => [i, s?.result ? parseInt(s.result.toString()) : 0])
            .filter(([, length]) => length)
            .map(([i]) => [_pairsUnique[i][0], _pairsUnique[i][1]]);
        const callStatePools = await client.multicall({
            multicallAddress: client.chain?.contracts?.multicall3?.address,
            allowFailure: true,
            contracts: callStatePoolsCountProcessed.map((args) => ({
                chainId,
                address: factoryAddress,
                abi: index_js_1.tridentGetPoolsAbi,
                functionName: 'getPools',
                args,
            })),
        });
        const pools = [];
        callStatePools.forEach((s, i) => {
            if (s?.result)
                s.result.forEach((address) => pools.push({
                    address: address.toLowerCase(),
                    token0: pairsUniqueProcessed?.[i][0],
                    token1: pairsUniqueProcessed?.[i][1],
                    type,
                }));
        });
        const poolsAddresses = pools.map((p) => p.address);
        const fees = await client.multicall({
            multicallAddress: client.chain?.contracts?.multicall3?.address,
            allowFailure: true,
            contracts: poolsAddresses.map((address) => ({
                chainId,
                address: address,
                abi: index_js_1.tridentSwapFeeAbi,
                functionName: 'swapFee',
            })),
        });
        const results = [];
        pools.forEach((p, i) => {
            const fee = fees?.[i]?.result;
            if (!fee)
                return;
            results.push({
                ...p,
                swapFee: Number(fee) / 10000,
            });
        });
        return results;
    }
}
exports.TridentStaticPoolFetcher = TridentStaticPoolFetcher;
const pairsUnique = (currencies) => {
    const pairsMap = new Map();
    currencies.map(([c1, c2]) => {
        if (c1 && c2) {
            const addr1 = c1.wrapped.address;
            const addr2 = c2.wrapped.address;
            if (addr1 !== undefined && addr2 !== undefined) {
                if (addr1.toLowerCase() < addr2.toLowerCase())
                    pairsMap.set(addr1 + addr2, [c1, c2]);
                else
                    pairsMap.set(addr2 + addr1, [c2, c1]);
            }
        }
    });
    return Array.from(pairsMap.values());
};
//# sourceMappingURL=Trident.js.map