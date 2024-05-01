import { Hex } from 'viem';
export declare const SquidIntegratorId = "sushiswap-sdk";
export declare const SQUID_CHAIN_NAME: {
    readonly 42161: "Arbitrum";
    readonly 43114: "Avalanche";
    readonly 8453: "base";
    readonly 56: "binance";
    readonly 42220: "celo";
    readonly 1: "Ethereum";
    readonly 250: "Fantom";
    readonly 314: "filecoin";
    readonly 2222: "kava";
    readonly 1284: "Moonbeam";
    readonly 10: "optimism";
    readonly 1101: "polygon-zkevm";
    readonly 137: "Polygon";
    readonly 59144: "linea";
    readonly 534352: "scroll";
};
export declare const SQUID_ROUTER_ADDRESS: {
    readonly 1: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 56: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 137: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 43114: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 250: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 1284: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 42161: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 10: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 8453: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 42220: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 2222: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 314: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 59144: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
    readonly 534352: "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
};
export declare const SQUID_MULTICALL_ADDRESS: {
    readonly 1: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 56: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 137: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 43114: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 250: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 1284: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 42161: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 10: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 8453: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 42220: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 2222: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 314: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 59144: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
    readonly 534352: "0x4fd39C9E151e50580779bd04B1f7eCc310079fd3";
};
export declare enum SquidMulticallCallType {
    Default = 0,
    FullTokenBalance = 1,
    FullNativeBalance = 2,
    CollectTokenBalance = 3
}
export type SquidMulticallCall = {
    callType: SquidMulticallCallType;
    target: Hex;
    value: bigint;
    callData: Hex;
    payload: Hex;
};
//# sourceMappingURL=squid.d.ts.map