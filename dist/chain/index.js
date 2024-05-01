"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainName = exports.chainShortName = exports.chainShortNameToChainId = exports.chainIds = exports.chainsL2 = exports.chains = exports.natives = exports.Chain = void 0;
const constants_js_1 = require("./constants.js");
const generated_js_1 = __importDefault(require("./generated.js"));
const additional = [];
const RAW = [...generated_js_1.default, ...additional];
const EIP3091_OVERRIDE = [
    constants_js_1.ChainId.OPTIMISM,
    constants_js_1.ChainId.BOBA,
    constants_js_1.ChainId.BASE,
    constants_js_1.ChainId.FILECOIN,
];
const Standard = {
    Eip3091: 'EIP3091',
    None: 'none',
};
const Type = {
    L2: 'L2',
    Shard: 'shard',
};
// biome-ignore lint/suspicious/noUnsafeDeclarationMerging: explaination
class Chain {
    static fromRaw(data) {
        return new Chain(data);
    }
    static from(chainId) {
        return exports.chains[chainId];
    }
    static fromShortName(shortName) {
        const chainId = exports.chainShortNameToChainId[shortName];
        if (!chainId)
            throw new Error(`Unknown chain short name: ${shortName}`);
        return Chain.from(chainId);
    }
    static fromChainId(chainId) {
        return Chain.from(chainId);
    }
    static txUrl(chainId, txHash) {
        return Chain.fromChainId(chainId)?.getTxUrl(txHash) ?? '';
    }
    static blockUrl(chainId, blockHashOrHeight) {
        return Chain.fromChainId(chainId)?.getBlockUrl(blockHashOrHeight) ?? '';
    }
    static tokenUrl(chainId, tokenAddress) {
        return Chain.fromChainId(chainId)?.getTokenUrl(tokenAddress) ?? '';
    }
    static accountUrl(chainId, accountAddress) {
        return Chain.fromChainId(chainId)?.getAccountUrl(accountAddress) ?? '';
    }
    constructor(data) {
        Object.assign(this, data);
        // process name overrides
        const targets = ['Mainnet', 'Opera', 'Mainnet Shard 0'];
        for (const target of targets) {
            if (data.name.includes(target)) {
                this.name = data.name.replace(target, '').trim();
            }
        }
        if (data.name === 'Boba Network') {
            this.name = 'Boba Eth';
        }
        // process explorer overrides etc...
        if (data.chainId === constants_js_1.ChainId.SCROLL) {
            this.explorers?.sort((explorer) => explorer.name === 'Scrollscan' ? -1 : 1);
        }
        else if (data.chainId === constants_js_1.ChainId.ARBITRUM_NOVA) {
            this.explorers = [
                {
                    name: 'Arbitrum Nova Explorer',
                    url: 'https://nova.arbiscan.io',
                    standard: 'EIP3091',
                },
                ...(this.explorers ?? []),
            ];
        }
        else if (data.chainId === constants_js_1.ChainId.FILECOIN) {
            this.name = 'Filecoin';
            this.explorers?.sort((explorer) => (explorer.name === 'Filfox' ? -1 : 1));
        }
        else if (data.chainId === constants_js_1.ChainId.ZETACHAIN) {
            this.name = 'ZetaChain';
            this.explorers = [
                {
                    name: 'ZetaChain Mainnet Explorer',
                    url: 'https://zetachain.blockscout.com',
                    standard: 'EIP3091',
                },
            ];
        }
        else if (data.chainId === constants_js_1.ChainId.BLAST) {
            this.explorers = [
                {
                    name: 'Blast Explorer',
                    url: 'https://blastscan.io',
                    standard: 'EIP3091',
                },
            ];
        }
    }
    getTxUrl(txHash) {
        if (!this.explorers)
            return '';
        for (const explorer of this.explorers) {
            if (explorer.standard === Standard.Eip3091 ||
                EIP3091_OVERRIDE.includes(this.chainId)) {
                return `${explorer.url}/tx/${txHash}`;
            }
        }
        return '';
    }
    getBlockUrl(blockHashOrHeight) {
        if (!this.explorers)
            return '';
        for (const explorer of this.explorers) {
            if (explorer.standard === Standard.Eip3091) {
                return `${explorer.url}/block/${blockHashOrHeight}`;
            }
        }
        return '';
    }
    getTokenUrl(tokenAddress) {
        if (!this.explorers)
            return '';
        for (const explorer of this.explorers) {
            if (explorer.standard === Standard.Eip3091 ||
                EIP3091_OVERRIDE.includes(this.chainId)) {
                return `${explorer.url}/token/${tokenAddress}`;
            }
        }
        return '';
    }
    getAccountUrl(accountAddress) {
        if (!this.explorers)
            return '';
        for (const explorer of this.explorers) {
            if (explorer.standard === Standard.Eip3091 ||
                EIP3091_OVERRIDE.includes(this.chainId)) {
                return `${explorer.url}/address/${accountAddress}`;
            }
        }
        return '';
    }
}
exports.Chain = Chain;
exports.natives = Object.fromEntries(RAW.map((data) => [
    data.chainId,
    data.nativeCurrency,
]));
// Chain Id => Chain mapping
exports.chains = Object.fromEntries(RAW.map((data) => [data.chainId, new Chain(data)]));
// Chain Id => Chain mapping
exports.chainsL2 = Object.fromEntries(RAW.filter((data) => 'parent' in data && data.parent.type === Type.L2).map((data) => [data.chainId, new Chain(data)]));
// ChainId array
exports.chainIds = RAW.map((chain) => chain.chainId);
// Chain Short Name => Chain Id mapping
exports.chainShortNameToChainId = Object.fromEntries(RAW.map((data) => [data.shortName, data.chainId]));
// Chain Id => Short Name mapping
exports.chainShortName = Object.fromEntries(RAW.map((data) => [
    data.chainId,
    Chain.fromRaw(data).shortName,
]));
// Chain Id => Chain Name mapping
exports.chainName = Object.fromEntries(RAW.map((data) => [data.chainId, Chain.fromRaw(data).name]));
__exportStar(require("./constants.js"), exports);
exports.default = exports.chains;
//# sourceMappingURL=index.js.map