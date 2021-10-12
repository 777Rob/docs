(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[9635],{7108:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=t(2122),r=t(9756),o=(t(7294),t(3905)),a={id:"decrease-liquidity",title:"Decrease Liquidity",sidebar_position:4},s=void 0,u={unversionedId:"guides/providing-liquidity/decrease-liquidity",id:"version-V3/guides/providing-liquidity/decrease-liquidity",isDocsHomePage:!1,title:"Decrease Liquidity",description:"Make sure to go through the Setting Up Your Contract before continuing to this section",source:"@site/versioned_docs/version-V3/guides/providing-liquidity/decrease-liquidity.md",sourceDirName:"guides/providing-liquidity",slug:"/guides/providing-liquidity/decrease-liquidity",permalink:"/protocol/guides/providing-liquidity/decrease-liquidity",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/guides/providing-liquidity/decrease-liquidity.md",version:"V3",sidebarPosition:4,frontMatter:{id:"decrease-liquidity",title:"Decrease Liquidity",sidebar_position:4},sidebar:"version-V3/mySidebar",previous:{title:"Collecting Fees",permalink:"/protocol/guides/providing-liquidity/collect-fees"},next:{title:"Increase Liquidity",permalink:"/protocol/guides/providing-liquidity/increase-liquidity"}},d=[{value:"Decrease Liquidity",id:"decrease-liquidity",children:[]},{value:"Sending Fees To The Calling Address",id:"sending-fees-to-the-calling-address",children:[]}],l={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Make sure to go through the ",(0,o.kt)("a",{parentName:"p",href:"/protocol/guides/providing-liquidity/setting-up"},"Setting Up Your Contract")," before continuing to this section"),(0,o.kt)("p",null,"Here we decrease the liquidity of our position without withdrawing all of it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This example assumes the contract already has possession of the position NFT, and requires the calling address to be the same address that deposited the position NFT to our contract.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In production, ",(0,o.kt)("inlineCode",{parentName:"p"},"amount0Min")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"amount1Min")," should be adjusted to create slippage protections."))),(0,o.kt)("h2",{id:"decrease-liquidity"},"Decrease Liquidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @notice A function that decreases the current liquidity by half. An example to show how to call the `decreaseLiquidity` function defined in periphery.\n    /// @param tokenId The id of the erc721 token\n    /// @return amount0 The amount received back in token0\n    /// @return amount1 The amount returned back in token1\n    function decreaseLiquidityInHalf(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {\n        // caller must be the owner of the NFT\n        require(msg.sender == deposits[tokenId].owner, 'Not the owner');\n        // get liquidity data for tokenId\n        uint128 liquidity = deposits[tokenId].liquidity;\n        uint128 halfLiquidity = liquidity / 2;\n\n        // amount0Min and amount1Min are price slippage checks\n        // if the amount received after burning is not greater than these minimums, transaction will fail\n        INonfungiblePositionManager.DecreaseLiquidityParams memory params =\n            INonfungiblePositionManager.DecreaseLiquidityParams({\n                tokenId: tokenId,\n                liquidity: halfLiquidity,\n                amount0Min: 0,\n                amount1Min: 0,\n                deadline: block.timestamp\n            });\n\n        (amount0, amount1) = nonfungiblePositionManager.decreaseLiquidity(params);\n\n        //send liquidity back to owner\n        _sendToOwner(tokenId, amount0, amount1);\n    }\n")),(0,o.kt)("h2",{id:"sending-fees-to-the-calling-address"},"Sending Fees To The Calling Address"),(0,o.kt)("p",null,"This internal helper function sends any tokens, in the form of fees or position tokens, to the owner of an NFT."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"_sendToOwner"),", we pass the amount of fees due, previously populated in the last function, as arguments to ",(0,o.kt)("inlineCode",{parentName:"p"},"safeTransfer"),", which transfers the fees to ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @notice Transfers funds to owner of NFT\n    /// @param tokenId The id of the erc721\n    /// @param amount0 The amount of token0\n    /// @param amount1 The amount of token1\n    function _sendToOwner(\n        uint256 tokenId,\n        uint256 amount0,\n        uint256 amount1\n    ) internal {\n        // get owner of contract\n        address owner = deposits[tokenId].owner;\n\n        address token0 = deposits[tokenId].token0;\n        address token1 = deposits[tokenId].token1;\n        // send collected fees to owner\n        TransferHelper.safeTransfer(token0, owner, amount0);\n        TransferHelper.safeTransfer(token1, owner, amount1);\n    }\n")))}c.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),d=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),f=r,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||o;return t?i.createElement(m,a(a({ref:n},l),{},{components:t})):i.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);