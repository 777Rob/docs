(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[1105],{5860:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={id:"trading-from-a-smart-contract",title:"Implement a Swap",tags:"developer-guides, documentation"},s=void 0,c={unversionedId:"guides/smart-contract-integration/trading-from-a-smart-contract",id:"version-V2/guides/smart-contract-integration/trading-from-a-smart-contract",isDocsHomePage:!1,title:"Implement a Swap",description:"When trading from a smart contract, the most important thing to keep in mind is that access to an external price source is required. Without this, trades can be frontrun for considerable loss.",source:"@site/versioned_docs/version-V2/guides/smart-contract-integration/02-trading-from-a-smart-contract.md",sourceDirName:"guides/smart-contract-integration",slug:"/guides/smart-contract-integration/trading-from-a-smart-contract",permalink:"/protocol/V2/guides/smart-contract-integration/trading-from-a-smart-contract",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V2/guides/smart-contract-integration/02-trading-from-a-smart-contract.md",version:"V2",sidebarPosition:2,frontMatter:{id:"trading-from-a-smart-contract",title:"Implement a Swap",tags:"developer-guides, documentation"},sidebar:"version-V2/mySidebar",previous:{title:"Smart Contract Quick start",permalink:"/protocol/V2/guides/smart-contract-integration/quick-start"},next:{title:"Providing Liquidity",permalink:"/protocol/V2/guides/smart-contract-integration/providing-liquidity"}},p=[{value:"transferFrom",id:"transferfrom",children:[]},{value:"approve",id:"approve",children:[]},{value:"swapExactTokensForETH",id:"swapexacttokensforeth",children:[]}],u={toc:p};function m(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When trading from a smart contract, the most important thing to keep in mind is that access to an external price source is ",(0,o.kt)("em",{parentName:"p"},"required"),". Without this, trades can be frontrun for considerable loss."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Read ",(0,o.kt)("a",{parentName:"em",href:"#safety-considerations"},"safety considerations")," for more.")),(0,o.kt)("h1",{id:"using-the-router"},"Using the Router"),(0,o.kt)("p",null,"The easiest way to safely swap tokens is to use the ",(0,o.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/router-02"},"router"),", which provides a variety of methods to safely swap to and from different assets. You'll notice that there is a function for each permutation of swapping to/from an exact amount of ETH/tokens."),(0,o.kt)("p",null,"First you must use an external price source to calculate the safety parameters for the function you'd like to call. This is either a minimum amount received when selling an exact input or the maximum amount you are willing to pay when a buying an exact output amount"),(0,o.kt)("p",null,"It is also important to ensure that your contract controls enough ETH/tokens to make the swap, and has granted approval to the router to withdraw this many tokens."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Check out the ",(0,o.kt)("a",{parentName:"em",href:"../../concepts/advanced-topics/pricing#pricing-trades"},"Pricing")," page for a more in depth discussion on getting prices.")),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("p",null,"Imagine you want to swap 50 DAI for as much ETH as possible from your smart contract."),(0,o.kt)("h2",{id:"transferfrom"},"transferFrom"),(0,o.kt)("p",null,"Before swapping, our smart contracts needs to be in control of 50 DAI. The easiest way to accomplish this is by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"transferFrom")," on DAI with the owner set to ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"uint amountIn = 50 * 10 ** DAI.decimals();\nrequire(DAI.transferFrom(msg.sender, address(this), amountIn), 'transferFrom failed.');\n")),(0,o.kt)("h2",{id:"approve"},"approve"),(0,o.kt)("p",null,"Now that our contract owns 50 DAI, we need to approve to the ",(0,o.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/router-02"},"router")," to withdraw this DAI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"require(DAI.approve(address(UniswapV2Router02), amountIn), 'approve failed.');\n")),(0,o.kt)("h2",{id:"swapexacttokensforeth"},"swapExactTokensForETH"),(0,o.kt)("p",null,"Now we're ready to swap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// amountOutMin must be retrieved from an oracle of some kind\naddress[] memory path = new address[](2);\npath[0] = address(DAI);\npath[1] = UniswapV2Router02.WETH();\nUniswapV2Router02.swapExactTokensForETH(amountIn, amountOutMin, path, msg.sender, block.timestamp);\n")),(0,o.kt)("h1",{id:"safety-considerations"},"Safety Considerations"),(0,o.kt)("p",null,"Because Ethereum transactions occur in an adversarial environment, smart contracts that do not perform safety checks ",(0,o.kt)("em",{parentName:"p"},"can be exploited for profit"),'. If a smart contract assumes that the current price on Uniswap is a "fair" price without performing safety checks, ',(0,o.kt)("em",{parentName:"p"},"it is vulnerable to manipulation"),'. A bad actor could e.g. easily insert transactions before and after the swap (a "sandwich" attack) causing the smart contract to trade at a much worse price, profit from this at the trader\'s expense, and then return the contracts to their original state. (One important caveat is that these types of attacks are mitigated by trading in extremely liquid pools, and/or at low values.)'),(0,o.kt)("p",null,'The best way to protect against these attacks is to use an external price feed or "price oracle". The best "oracle" is simply ',(0,o.kt)("em",{parentName:"p"},"traders' off-chain observation of the current price"),", which can be passed into the trade as a safety check. This strategy is best for situations ",(0,o.kt)("em",{parentName:"p"},"where users initiate trades on their own behalf"),"."),(0,o.kt)("p",null,"However, when an off-chain price can't be used, an on-chain oracle should be used instead. Determining the best oracle for a given situation is a not part of this guide, but for more details on the Uniswap V2 approach to oracles, see ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/core-concepts/oracles"},"Oracles"),"."))}m.isMDXComponent=!0},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(r),d=n,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return r?a.createElement(f,i(i({ref:e},u),{},{components:r})):a.createElement(f,i({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);