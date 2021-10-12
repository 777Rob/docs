(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[7080],{6563:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var i=t(2122),o=t(9756),r=(t(7294),t(3905)),a={id:"setting-up",title:"Set Up Your Contract",sidebar_position:1},s=void 0,p={unversionedId:"guides/providing-liquidity/setting-up",id:"version-V3/guides/providing-liquidity/setting-up",isDocsHomePage:!1,title:"Set Up Your Contract",description:"Setting up the Contract",source:"@site/versioned_docs/version-V3/guides/providing-liquidity/setting-up-your-contract.md",sourceDirName:"guides/providing-liquidity",slug:"/guides/providing-liquidity/setting-up",permalink:"/protocol/guides/providing-liquidity/setting-up",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/guides/providing-liquidity/setting-up-your-contract.md",version:"V3",sidebarPosition:1,frontMatter:{id:"setting-up",title:"Set Up Your Contract",sidebar_position:1},sidebar:"version-V3/mySidebar",previous:{title:"Multihop Swaps",permalink:"/protocol/guides/swaps/multihop-swaps"},next:{title:"Mint a New Position",permalink:"/protocol/guides/providing-liquidity/mint-a-position"}},l=[{value:"Setting up the Contract",id:"setting-up-the-contract",children:[]},{value:"Allowing ERC721 Interactions",id:"allowing-erc721-interactions",children:[]},{value:"The Constructor",id:"the-constructor",children:[]},{value:"Allowing custody of ERC721 tokens",id:"allowing-custody-of-erc721-tokens",children:[]},{value:"Creating a Deposit",id:"creating-a-deposit",children:[]},{value:"The Full Contract Setup",id:"the-full-contract-setup",children:[]}],c={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setting-up-the-contract"},"Setting up the Contract"),(0,r.kt)("p",null,"This guide is an example of a custodial contract Uniswap V3 positions, which allows interaction with the Uniswap V3 Periphery by minting a position, adding liquidity to a position, decreasing liquidity, and collecting fees."),(0,r.kt)("p",null,"First, declare the solidity version used to compile the contract and ",(0,r.kt)("inlineCode",{parentName:"p"},"abicoder v2")," to allow arbitrary nested arrays and structs to be encoded and decoded in calldata, a feature we use when transacting with a pool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n")),(0,r.kt)("p",null,"Import the contracts needed from the npm package installation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';\nimport '@uniswap/v3-core/contracts/libraries/TickMath.sol';\nimport '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';\nimport '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';\nimport '@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol';\nimport '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';\nimport '@uniswap/v3-periphery/contracts//base/LiquidityManagement.sol';\n")),(0,r.kt)("p",null,"Create a contract called ",(0,r.kt)("inlineCode",{parentName:"p"},"LiquidityExamples")," and inherit both ",(0,r.kt)("inlineCode",{parentName:"p"},"IERC721Receiver")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LiquidityManagement"),"."),(0,r.kt)("p",null,"We've chosen to hardcode the token contract addresses and pool fee tiers for our example. In production, you would likely use an input parameter for this, allowing you to change the pools and tokens you are interacting with on a per transaction basis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"contract LiquidityExamples is IERC721Receiver {\n\n    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;\n\n    uint24 public constant poolFee = 3000;\n")),(0,r.kt)("p",null,"Declare an immutable public variable ",(0,r.kt)("inlineCode",{parentName:"p"},"nonfungiblePositionManager")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"INonfungiblePositionManager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    INonfungiblePositionManager public immutable nonfungiblePositionManager;\n")),(0,r.kt)("h2",{id:"allowing-erc721-interactions"},"Allowing ERC721 Interactions"),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/nft/"},"NFT")," is identified by a unique uint256 ID inside the ERC-721 smart contract, declared as the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenId")),(0,r.kt)("p",null,"To allow deposits of ERC721 expressions of liquidity, create a struct called ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit"),", a mapping of ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit")," struct, then declare that mapping as a public variable ",(0,r.kt)("inlineCode",{parentName:"p"},"deposits"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    struct Deposit {\n        address owner;\n        uint128 liquidity;\n        address token0;\n        address token1;\n    }\n\n    mapping(uint256 => Deposit) public deposits;\n")),(0,r.kt)("h2",{id:"the-constructor"},"The Constructor"),(0,r.kt)("p",null,"Declare the constructor here, which is executed once when the contract is deployed. Our constructor hard codes the address of the nonfungible position manager interface, V3 router, and the periphery immutable state constructor, which requires the factory and the address of weth9 (the ",(0,r.kt)("a",{parentName:"p",href:"https://weth.io/"},"ERC-20 wrapper")," for ether)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    constructor(\n        INonfungiblePositionManager _nonfungiblePositionManager,\n        address _factory,\n        address _WETH9\n    ) PeripheryImmutableState(_factory, _WETH9) {\n        nonfungiblePositionManager = _nonfungiblePositionManager;\n    }\n")),(0,r.kt)("h2",{id:"allowing-custody-of-erc721-tokens"},"Allowing custody of ERC721 tokens"),(0,r.kt)("p",null,"To allow the contract to custody ERC721 tokens, implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"onERC721Received")," function within the inherited ",(0,r.kt)("inlineCode",{parentName:"p"},"IERC721Receiver.sol")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/IERC721Receiver.sol"},"contract"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," identifier may be omitted because it is not used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    function onERC721Received(\n        address operator,\n        address,\n        uint256 tokenId,\n        bytes calldata\n    ) external override returns (bytes4) {\n        // get position information\n        _createDeposit(operator, tokenId);\n        return this.onERC721Received.selector;\n    }\n")),(0,r.kt)("h2",{id:"creating-a-deposit"},"Creating a Deposit"),(0,r.kt)("p",null,"To add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit")," instance to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deposits")," mapping, create an internal function called ",(0,r.kt)("inlineCode",{parentName:"p"},"_createDeposit")," that destructures the ",(0,r.kt)("inlineCode",{parentName:"p"},"positions")," struct returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"positions")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"nonfungiblePositionManager.sol"),". Pass the relevant variables ",(0,r.kt)("inlineCode",{parentName:"p"},"token0")," ",(0,r.kt)("inlineCode",{parentName:"p"},"token1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"liquidity")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deposits")," mapping."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    function _createDeposit(address owner, uint256 tokenId) internal {\n        (, , address token0, address token1, , , , uint128 liquidity, , , , ) =\n            nonfungiblePositionManager.positions(tokenId);\n\n        // set the owner and data for position\n        // operator is msg.sender\n        deposits[tokenId] = Deposit({owner: owner, liquidity: liquidity, token0: token0, token1: token1});\n    }\n\n")),(0,r.kt)("h2",{id:"the-full-contract-setup"},"The Full Contract Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n\nimport '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';\nimport '@uniswap/v3-core/contracts/libraries/TickMath.sol';\nimport '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';\nimport '../libraries/TransferHelper.sol';\nimport '../interfaces/INonfungiblePositionManager.sol';\nimport '../base/LiquidityManagement.sol';\n\ncontract LiquidityExamples is IERC721Receiver {\n    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;\n\n    uint24 public constant poolFee = 3000;\n\n    INonfungiblePositionManager public immutable nonfungiblePositionManager;\n\n    /// @notice Represents the deposit of an NFT\n    struct Deposit {\n        address owner;\n        uint128 liquidity;\n        address token0;\n        address token1;\n    }\n\n    /// @dev deposits[tokenId] => Deposit\n    mapping(uint256 => Deposit) public deposits;\n\n    constructor(\n        INonfungiblePositionManager _nonfungiblePositionManager\n    ) {\n        nonfungiblePositionManager = _nonfungiblePositionManager;\n    }\n\n    // Implementing `onERC721Received` so this contract can receive custody of erc721 tokens\n    function onERC721Received(\n        address operator,\n        address,\n        uint256 tokenId,\n        bytes calldata\n    ) external override returns (bytes4) {\n        // get position information\n\n        _createDeposit(operator, tokenId);\n\n        return this.onERC721Received.selector;\n    }\n\n    function _createDeposit(address owner, uint256 tokenId) internal {\n        (, , address token0, address token1, , , , uint128 liquidity, , , , ) =\n            nonfungiblePositionManager.positions(tokenId);\n\n        // set the owner and data for position\n        // operator is msg.sender\n        deposits[tokenId] = Deposit({owner: owner, liquidity: liquidity, token0: token0, token1: token1});\n    }\n")))}d.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return g}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||r;return t?i.createElement(m,a(a({ref:n},c),{},{components:t})):i.createElement(m,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);