"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SushiSwapV3Provider = void 0;
const index_js_1 = require("../../chain/index.js");
const LiquidityProvider_js_1 = require("./LiquidityProvider.js");
const UniswapV3Base_js_1 = require("./UniswapV3Base.js");
class SushiSwapV3Provider extends UniswapV3Base_js_1.UniswapV3BaseProvider {
    constructor(chainId, web3Client) {
        const factory = {
            [index_js_1.ChainId.ARBITRUM_NOVA]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
            [index_js_1.ChainId.ARBITRUM]: '0x1af415a1EbA07a4986a52B6f2e7dE7003D82231e',
            [index_js_1.ChainId.AVALANCHE]: '0x3e603C14aF37EBdaD31709C4f848Fc6aD5BEc715',
            [index_js_1.ChainId.BSC]: '0x126555dd55a39328F69400d6aE4F782Bd4C34ABb',
            [index_js_1.ChainId.ETHEREUM]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
            [index_js_1.ChainId.FANTOM]: '0x7770978eED668a3ba661d51a773d3a992Fc9DDCB',
            [index_js_1.ChainId.FUSE]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
            [index_js_1.ChainId.GNOSIS]: '0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf',
            [index_js_1.ChainId.MOONRIVER]: '0x2F255d3f3C0A3726c6c99E74566c4b18E36E3ce6',
            [index_js_1.ChainId.OPTIMISM]: '0x9c6522117e2ed1fE5bdb72bb0eD5E3f2bdE7DBe0',
            [index_js_1.ChainId.POLYGON]: '0x917933899c6a5F8E37F31E19f92CdBFF7e8FF0e2',
            [index_js_1.ChainId.BOBA]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
            [index_js_1.ChainId.POLYGON_ZKEVM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
            [index_js_1.ChainId.THUNDERCORE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
            [index_js_1.ChainId.CORE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
            [index_js_1.ChainId.BASE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
            [index_js_1.ChainId.LINEA]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
            [index_js_1.ChainId.SCROLL]: '0x46B3fDF7b5CDe91Ac049936bF0bDb12c5d22202e',
            [index_js_1.ChainId.KAVA]: '0x1e9B24073183d5c6B7aE5FB4b8f0b1dd83FDC77a',
            [index_js_1.ChainId.METIS]: '0x145d82bCa93cCa2AE057D1c6f26245d1b9522E6F',
            [index_js_1.ChainId.BTTC]: '0xBBDe1d67297329148Fe1ED5e6B00114842728e65',
            [index_js_1.ChainId.FILECOIN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
            [index_js_1.ChainId.HAQQ]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
            [index_js_1.ChainId.ZETACHAIN]: '0xB45e53277a7e0F1D35f2a77160e91e25507f1763',
            [index_js_1.ChainId.BLAST]: '0x7680D4B43f3d1d54d6cfEeB2169463bFa7a6cf0d',
        };
        const initCodeHash = {
            [index_js_1.ChainId.ARBITRUM_NOVA]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.ARBITRUM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.AVALANCHE]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.BSC]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.ETHEREUM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.FANTOM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.FUSE]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.GNOSIS]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.MOONRIVER]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.OPTIMISM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.POLYGON]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.BOBA]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.POLYGON_ZKEVM]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.THUNDERCORE]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.CORE]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.BASE]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.LINEA]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.SCROLL]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.KAVA]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.METIS]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.BTTC]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.FILECOIN]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.HAQQ]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.ZETACHAIN]: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
            [index_js_1.ChainId.BLAST]: '0x8e13daee7f5a62e37e71bf852bcd44e7d16b90617ed2b17c24c2ee62411c5bae',
        };
        const tickLens = {
            [index_js_1.ChainId.ARBITRUM_NOVA]: '0xF60e5f4A44a510742457D8064ffd360B12d8D9AF',
            [index_js_1.ChainId.ARBITRUM]: '0x8516944E89f296eb6473d79aED1Ba12088016c9e',
            [index_js_1.ChainId.AVALANCHE]: '0xDdC1b5920723F774d2Ec2C3c9355251A20819776',
            [index_js_1.ChainId.BSC]: '0x10c19390E1Ac2Fd6D0c3643a2320b0abA38E5bAA',
            [index_js_1.ChainId.ETHEREUM]: '0xFB70AD5a200d784E7901230E6875d91d5Fa6B68c',
            [index_js_1.ChainId.FANTOM]: '0xD75F5369724b513b497101fb15211160c1d96550',
            [index_js_1.ChainId.FUSE]: '0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf',
            [index_js_1.ChainId.GNOSIS]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
            [index_js_1.ChainId.MOONRIVER]: '0x6E9Aed2C4cF5ed7E8AB851435225fE1601a1Bc56',
            [index_js_1.ChainId.OPTIMISM]: '0x0367a647A68f304f2A6e453c25033a4249d7F2C6',
            [index_js_1.ChainId.POLYGON]: '0x9fdeA1412e50D78B25aCE4f96d35801647Fdf7dA',
            [index_js_1.ChainId.BOBA]: '0x9B3fF703FA9C8B467F5886d7b61E61ba07a9b51c',
            [index_js_1.ChainId.POLYGON_ZKEVM]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
            [index_js_1.ChainId.THUNDERCORE]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
            [index_js_1.ChainId.CORE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
            [index_js_1.ChainId.BASE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
            [index_js_1.ChainId.LINEA]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
            [index_js_1.ChainId.SCROLL]: '0x1f2FCf1d036b375b384012e61D3AA33F8C256bbE',
            [index_js_1.ChainId.KAVA]: '0xA62eC622DbA415Aa94110739B1f951B1202Cf322',
            [index_js_1.ChainId.METIS]: '0x078047150F8efa223B3d407f00E462e38f4B1b9C',
            [index_js_1.ChainId.BTTC]: '0x1400feFD6F9b897970f00Df6237Ff2B8b27Dc82C',
            [index_js_1.ChainId.FILECOIN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
            [index_js_1.ChainId.HAQQ]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
            [index_js_1.ChainId.ZETACHAIN]: '0xe43ca1Dee3F0fc1e2df73A0745674545F11A59F5',
            [index_js_1.ChainId.BLAST]: '0x039e87AB90205F9d87c5b40d4B28e2Be45dA4a20',
        };
        super(chainId, web3Client, factory, initCodeHash, tickLens);
    }
    getType() {
        return LiquidityProvider_js_1.LiquidityProviders.SushiSwapV3;
    }
    getPoolProviderName() {
        return 'SushiSwapV3';
    }
}
exports.SushiSwapV3Provider = SushiSwapV3Provider;
//# sourceMappingURL=SushiSwapV3.js.map