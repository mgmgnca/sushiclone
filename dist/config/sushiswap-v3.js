"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSushiSwapV3ChainId = exports.SushiSwapV3ChainIds = exports.SUSHISWAP_V3_SUPPORTED_CHAIN_IDS = exports.SUSHISWAP_V3_TICK_LENS = exports.SUSHISWAP_V3_POSTIION_MANAGER = exports.SUSHISWAP_V3_INIT_CODE_HASH = exports.SUSHISWAP_V3_FACTORY_ADDRESS = exports.TICK_SPACINGS = exports.SushiSwapV3FeeAmount = void 0;
const index_js_1 = require("../chain/index.js");
const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54';
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
var SushiSwapV3FeeAmount;
(function (SushiSwapV3FeeAmount) {
    /** 0.01% */
    SushiSwapV3FeeAmount[SushiSwapV3FeeAmount["LOWEST"] = 100] = "LOWEST";
    /** 0.1% */
    SushiSwapV3FeeAmount[SushiSwapV3FeeAmount["LOW"] = 500] = "LOW";
    /** 0.3% */
    SushiSwapV3FeeAmount[SushiSwapV3FeeAmount["MEDIUM"] = 3000] = "MEDIUM";
    /** 1% */
    SushiSwapV3FeeAmount[SushiSwapV3FeeAmount["HIGH"] = 10000] = "HIGH";
})(SushiSwapV3FeeAmount || (exports.SushiSwapV3FeeAmount = SushiSwapV3FeeAmount = {}));
/**
 * The default factory tick spacings by fee amount.
 */
exports.TICK_SPACINGS = {
    [SushiSwapV3FeeAmount.LOWEST]: 1,
    [SushiSwapV3FeeAmount.LOW]: 10,
    [SushiSwapV3FeeAmount.MEDIUM]: 60,
    [SushiSwapV3FeeAmount.HIGH]: 200,
};
// SUSHISWAP
exports.SUSHISWAP_V3_FACTORY_ADDRESS = {
    [index_js_1.ChainId.ARBITRUM_NOVA]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
    [index_js_1.ChainId.ARBITRUM]: '0x1af415a1EbA07a4986a52B6f2e7dE7003D82231e',
    [index_js_1.ChainId.AVALANCHE]: '0x3e603C14aF37EBdaD31709C4f848Fc6aD5BEc715',
    [index_js_1.ChainId.BSC]: '0x126555dd55a39328F69400d6aE4F782Bd4C34ABb',
    [index_js_1.ChainId.BTTC]: '0xBBDe1d67297329148Fe1ED5e6B00114842728e65',
    // [ChainId.CELO]: '',
    [index_js_1.ChainId.ETHEREUM]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
    [index_js_1.ChainId.FANTOM]: '0x7770978eED668a3ba661d51a773d3a992Fc9DDCB',
    [index_js_1.ChainId.FUSE]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
    [index_js_1.ChainId.GNOSIS]: '0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf',
    [index_js_1.ChainId.KAVA]: '0x1e9B24073183d5c6B7aE5FB4b8f0b1dd83FDC77a',
    [index_js_1.ChainId.METIS]: '0x145d82bCa93cCa2AE057D1c6f26245d1b9522E6F',
    // [ChainId.MOONBEAM]: '0x2ecd58F51819E8F8BA08A650BEA04Fc0DEa1d523',
    [index_js_1.ChainId.MOONRIVER]: '0x2F255d3f3C0A3726c6c99E74566c4b18E36E3ce6',
    [index_js_1.ChainId.OPTIMISM]: '0x9c6522117e2ed1fE5bdb72bb0eD5E3f2bdE7DBe0',
    [index_js_1.ChainId.POLYGON]: '0x917933899c6a5F8E37F31E19f92CdBFF7e8FF0e2',
    [index_js_1.ChainId.BOBA]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
    [index_js_1.ChainId.POLYGON_ZKEVM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [index_js_1.ChainId.THUNDERCORE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.HAQQ]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.CORE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    // [ChainId.ZKSYNC_ERA]: '',
    [index_js_1.ChainId.LINEA]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.BASE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.SCROLL]: '0x46b3fdf7b5cde91ac049936bf0bdb12c5d22202e',
    [index_js_1.ChainId.FILECOIN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [index_js_1.ChainId.ZETACHAIN]: '0xB45e53277a7e0F1D35f2a77160e91e25507f1763',
    [index_js_1.ChainId.BLAST]: '0x7680D4B43f3d1d54d6cfEeB2169463bFa7a6cf0d',
};
exports.SUSHISWAP_V3_INIT_CODE_HASH = {
    [index_js_1.ChainId.ARBITRUM_NOVA]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.ARBITRUM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.AVALANCHE]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BSC]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BTTC]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.FANTOM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.FUSE]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.GNOSIS]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.KAVA]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.METIS]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.MOONRIVER]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.OPTIMISM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.POLYGON]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BOBA]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.POLYGON_ZKEVM]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.THUNDERCORE]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.HAQQ]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.CORE]: POOL_INIT_CODE_HASH,
    // [ChainId.ZKSYNC_ERA]: '',
    [index_js_1.ChainId.LINEA]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BASE]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.SCROLL]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.FILECOIN]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.ZETACHAIN]: POOL_INIT_CODE_HASH,
    [index_js_1.ChainId.BLAST]: '0x8e13daee7f5a62e37e71bf852bcd44e7d16b90617ed2b17c24c2ee62411c5bae',
};
exports.SUSHISWAP_V3_POSTIION_MANAGER = {
    [index_js_1.ChainId.ARBITRUM_NOVA]: '0x258f7E97149afd7D7F84fa63b10e4A3f0C38B788',
    [index_js_1.ChainId.ARBITRUM]: '0xF0cBce1942A68BEB3d1b73F0dd86C8DCc363eF49',
    [index_js_1.ChainId.AVALANCHE]: '0x18350b048AB366ed601fFDbC669110Ecb36016f3',
    [index_js_1.ChainId.BSC]: '0xF70c086618dcf2b1A461311275e00D6B722ef914',
    [index_js_1.ChainId.BTTC]: '0x57bfFa72db682f7eb6C132DAE03FF36bBEB0c459',
    // [ChainId.CELO]: '',
    [index_js_1.ChainId.ETHEREUM]: '0x2214A42d8e2A1d20635c2cb0664422c528B6A432',
    [index_js_1.ChainId.FANTOM]: '0x10c19390E1Ac2Fd6D0c3643a2320b0abA38E5bAA',
    [index_js_1.ChainId.FUSE]: '0x93395129bd3fcf49d95730D3C2737c17990fF328',
    [index_js_1.ChainId.GNOSIS]: '0xaB235da7f52d35fb4551AfBa11BFB56e18774A65',
    [index_js_1.ChainId.KAVA]: '0xbF3B71decBCEFABB3210B9D8f18eC22e0556f5F0',
    [index_js_1.ChainId.METIS]: '0x630BE2985674D31920BAbb4F96657960F131E7b1',
    // [ChainId.MOONBEAM]: '0x8f54301F315C56c112D492D9443047D4745dbe9e',
    [index_js_1.ChainId.MOONRIVER]: '0xD045d27c1f7e7f770a807B0a85d8e3F852e0F2BE',
    [index_js_1.ChainId.OPTIMISM]: '0x1af415a1EbA07a4986a52B6f2e7dE7003D82231e',
    [index_js_1.ChainId.POLYGON]: '0xb7402ee99F0A008e461098AC3A27F4957Df89a40',
    [index_js_1.ChainId.BOBA]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
    [index_js_1.ChainId.POLYGON_ZKEVM]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    [index_js_1.ChainId.THUNDERCORE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    [index_js_1.ChainId.HAQQ]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
    [index_js_1.ChainId.CORE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    // [ChainId.ZKSYNC_ERA]: '',
    [index_js_1.ChainId.LINEA]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
    [index_js_1.ChainId.BASE]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
    [index_js_1.ChainId.SCROLL]: '0x0389879e0156033202C44BF784ac18fC02edeE4f',
    [index_js_1.ChainId.FILECOIN]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    [index_js_1.ChainId.ZETACHAIN]: '0xCdBCd51a5E8728E0AF4895ce5771b7d17fF71959',
    [index_js_1.ChainId.BLAST]: '0x51edb3e5bcE8618B77b60215F84aD3DB14709051',
};
exports.SUSHISWAP_V3_TICK_LENS = {
    [index_js_1.ChainId.ARBITRUM_NOVA]: '0xF60e5f4A44a510742457D8064ffd360B12d8D9AF',
    [index_js_1.ChainId.ARBITRUM]: '0x8516944E89f296eb6473d79aED1Ba12088016c9e',
    [index_js_1.ChainId.AVALANCHE]: '0xDdC1b5920723F774d2Ec2C3c9355251A20819776',
    [index_js_1.ChainId.BSC]: '0x10c19390E1Ac2Fd6D0c3643a2320b0abA38E5bAA',
    [index_js_1.ChainId.BTTC]: '0x1400feFD6F9b897970f00Df6237Ff2B8b27Dc82C',
    // [ChainId.CELO]: '',
    [index_js_1.ChainId.ETHEREUM]: '0xFB70AD5a200d784E7901230E6875d91d5Fa6B68c',
    [index_js_1.ChainId.FANTOM]: '0xD75F5369724b513b497101fb15211160c1d96550',
    [index_js_1.ChainId.FUSE]: '0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf',
    [index_js_1.ChainId.GNOSIS]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
    [index_js_1.ChainId.KAVA]: '0xA62eC622DbA415Aa94110739B1f951B1202Cf322',
    [index_js_1.ChainId.METIS]: '0x078047150F8efa223B3d407f00E462e38f4B1b9C',
    // [ChainId.MOONBEAM]: '0x53b08DbD70327b7Ba3B7886Fc9987BC985d27262',
    [index_js_1.ChainId.MOONRIVER]: '0x6E9Aed2C4cF5ed7E8AB851435225fE1601a1Bc56',
    [index_js_1.ChainId.OPTIMISM]: '0x0367a647A68f304f2A6e453c25033a4249d7F2C6',
    [index_js_1.ChainId.POLYGON]: '0x9fdeA1412e50D78B25aCE4f96d35801647Fdf7dA',
    [index_js_1.ChainId.BOBA]: '0x9B3fF703FA9C8B467F5886d7b61E61ba07a9b51c',
    [index_js_1.ChainId.POLYGON_ZKEVM]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
    [index_js_1.ChainId.THUNDERCORE]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
    [index_js_1.ChainId.HAQQ]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    [index_js_1.ChainId.CORE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    // [ChainId.ZKSYNC_ERA]: '',
    [index_js_1.ChainId.LINEA]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    [index_js_1.ChainId.BASE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    [index_js_1.ChainId.SCROLL]: '0x1f2FCf1d036b375b384012e61D3AA33F8C256bbE',
    [index_js_1.ChainId.FILECOIN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
    [index_js_1.ChainId.ZETACHAIN]: '0xe43ca1Dee3F0fc1e2df73A0745674545F11A59F5',
    [index_js_1.ChainId.BLAST]: '0x039e87AB90205F9d87c5b40d4B28e2Be45dA4a20',
};
exports.SUSHISWAP_V3_SUPPORTED_CHAIN_IDS = [
    index_js_1.ChainId.ARBITRUM_NOVA,
    index_js_1.ChainId.ARBITRUM,
    index_js_1.ChainId.AVALANCHE,
    index_js_1.ChainId.BSC,
    index_js_1.ChainId.BTTC,
    index_js_1.ChainId.ETHEREUM,
    index_js_1.ChainId.FANTOM,
    index_js_1.ChainId.FUSE,
    index_js_1.ChainId.GNOSIS,
    index_js_1.ChainId.MOONRIVER,
    index_js_1.ChainId.OPTIMISM,
    index_js_1.ChainId.POLYGON,
    index_js_1.ChainId.BOBA,
    index_js_1.ChainId.POLYGON_ZKEVM,
    index_js_1.ChainId.THUNDERCORE,
    index_js_1.ChainId.HAQQ,
    index_js_1.ChainId.CORE,
    // ChainId.ZKSYNC_ERA,
    index_js_1.ChainId.LINEA,
    index_js_1.ChainId.BASE,
    index_js_1.ChainId.SCROLL,
    index_js_1.ChainId.KAVA,
    index_js_1.ChainId.METIS,
    index_js_1.ChainId.FILECOIN,
    index_js_1.ChainId.ZETACHAIN,
    index_js_1.ChainId.BLAST,
];
exports.SushiSwapV3ChainIds = exports.SUSHISWAP_V3_SUPPORTED_CHAIN_IDS;
const isSushiSwapV3ChainId = (chainId) => exports.SUSHISWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId);
exports.isSushiSwapV3ChainId = isSushiSwapV3ChainId;
//# sourceMappingURL=sushiswap-v3.js.map