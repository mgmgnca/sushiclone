import { Token, Type } from '../currency/index.js';
export declare const STARGATE_CHAIN_ID: {
    readonly 1: 101;
    readonly 56: 102;
    readonly 43114: 106;
    readonly 137: 109;
    readonly 42161: 110;
    readonly 10: 111;
    readonly 250: 112;
    readonly 1088: 151;
    readonly 8453: 184;
    readonly 59144: 183;
    readonly 2222: 177;
};
export declare const STARGATE_WIDGET_ADDRESS: {
    readonly 1: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 56: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 43114: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 42161: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 137: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 10: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 250: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 1088: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 8453: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 59144: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
    readonly 2222: "0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc";
};
export declare const STARGATE_COMPOSER_ADDRESS: {
    readonly 1: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 56: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 43114: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 42161: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 137: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 10: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 250: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 1088: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 8453: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 59144: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
    readonly 2222: "0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9";
};
export declare const STARGATE_ETH_ADDRESS: {
    readonly 1: "0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c";
    readonly 42161: "0x82CbeCF39bEe528B5476FE6d1550af59a9dB6Fc0";
    readonly 10: "0xb69c8CBCD90A39D8D3d3ccf0a3E968511C3856A0";
    readonly 8453: "0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03";
    readonly 59144: "0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03";
};
export declare const STARGATE_ETH: Record<keyof typeof STARGATE_ETH_ADDRESS, Token>;
export declare const STARGATE_WETH_ADDRESS: {
    250: string;
    2222: string;
};
export declare const STARGATE_WETH: {
    250: Token;
    2222: Token;
};
export declare const STARGATE_WBTC_ADDRESS: {
    250: string;
};
export declare const STARGATE_WBTC: {
    250: Token;
};
export declare const STARGATE_USDC_ADDRESS: {
    readonly 1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    readonly 43114: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";
    readonly 137: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
    readonly 42161: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
    readonly 10: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607";
    readonly 250: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf";
    readonly 8453: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA";
};
export declare const STARGATE_USDC: Record<keyof typeof STARGATE_USDC_ADDRESS, Token>;
export declare const STARGATE_USDT_ADDRESS: {
    readonly 1: "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    readonly 56: "0x55d398326f99059fF775485246999027B3197955";
    readonly 43114: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7";
    readonly 137: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
    readonly 42161: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9";
    readonly 250: "0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C";
    readonly 1088: "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC";
    readonly 2222: "0xAad094F6A75A14417d39f04E690fC216f080A41a";
};
export declare const STARGATE_USDT: Record<keyof typeof STARGATE_USDT_ADDRESS, Token>;
export declare const STARGATE_DAI_ADDRESS: {
    readonly 1: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    readonly 137: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
    readonly 10: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";
};
export declare const STARGATE_DAI: Record<keyof typeof STARGATE_DAI_ADDRESS, Token>;
export declare const STARGATE_FRAX_ADDRESS: {
    readonly 1: "0x853d955aCEf822Db058eb8505911ED77F175b99e";
    readonly 43114: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64";
    readonly 42161: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F";
    readonly 10: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475";
};
export declare const STARGATE_FRAX: Record<keyof typeof STARGATE_FRAX_ADDRESS, Token>;
export declare const STARGATE_BUSD_ADDRESS: {
    readonly 56: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
};
export declare const STARGATE_BUSD: Record<keyof typeof STARGATE_BUSD_ADDRESS, Token>;
export declare const STARGATE_MAI_ADDRESS: {
    readonly 1: "0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6";
    readonly 56: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d";
    readonly 43114: "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b";
    readonly 137: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1";
    readonly 42161: "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d";
    readonly 10: "0xdFA46478F9e5EA86d57387849598dbFB2e964b02";
};
export declare const STARGATE_MAI: Record<keyof typeof STARGATE_MAI_ADDRESS, Token>;
export declare const STARGATE_BRIDGE_TOKENS: Record<number, Token[]>;
export declare const STARGATE_BRIDGE_TOKEN_ADDRESSES: Record<number, string[]>;
export declare const STARGATE_POOL_ID: Record<number, Record<string, number>>;
export declare const STARGATE_POOL_ADDRESS: Record<number, Record<string, string>>;
export declare function isStargateBridgeToken(currency: Type | undefined): boolean | undefined;
export declare const STARGATE_TOKEN: Token;
export type StargateBridgeTokens = (typeof STARGATE_BRIDGE_TOKENS)[StargateChainId];
export type StargateBridgeToken = StargateBridgeTokens[number];
export declare const STARGATE_SUPPORTED_CHAIN_IDS: readonly [1, 56, 43114, 137, 42161, 10, 8453, 59144];
export type StargateChainId = (typeof STARGATE_SUPPORTED_CHAIN_IDS)[number];
export declare const STARGATE_CHAIN_PATHS: Record<StargateChainId, Record<`0x${string}`, Token[]>>;
//# sourceMappingURL=stargate.d.ts.map