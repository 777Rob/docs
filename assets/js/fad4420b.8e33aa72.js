(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[6924],{1409:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var i=r(2122),n=r(9756),a=(r(7294),r(3905)),o={id:"glossary",title:"Glossary"},s=void 0,l={unversionedId:"concepts/V3-overview/glossary",id:"version-V3/concepts/V3-overview/glossary",isDocsHomePage:!1,title:"Glossary",description:"Automated Market Maker",source:"@site/versioned_docs/version-V3/concepts/V3-overview/glossary.md",sourceDirName:"concepts/V3-overview",slug:"/concepts/V3-overview/glossary",permalink:"/protocol/concepts/V3-overview/glossary",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/concepts/V3-overview/glossary.md",version:"V3",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"version-V3/mySidebar",previous:{title:"Fees",permalink:"/protocol/concepts/V3-overview/fees"},next:{title:"Oracle",permalink:"/protocol/concepts/V3-overview/oracle"}},c=[{value:"Automated Market Maker",id:"automated-market-maker",children:[]},{value:"Asset",id:"asset",children:[]},{value:"Concentrated Liquidity",id:"concentrated-liquidity",children:[]},{value:"Constant Product Formula",id:"constant-product-formula",children:[]},{value:"Core",id:"core",children:[]},{value:"ERC20",id:"erc20",children:[]},{value:"Factory",id:"factory",children:[]},{value:"Flash Swap",id:"flash-swap",children:[]},{value:"Invariant",id:"invariant",children:[]},{value:"Liquidity Provider / &quot;LP&quot;",id:"liquidity-provider--lp",children:[]},{value:"Liquidity",id:"liquidity",children:[]},{value:"Mid Price",id:"mid-price",children:[]},{value:"Observation",id:"observation",children:[]},{value:"Pair",id:"pair",children:[]},{value:"Periphery",id:"periphery",children:[]},{value:"Pool",id:"pool",children:[]},{value:"Position",id:"position",children:[]},{value:"Price Impact",id:"price-impact",children:[]},{value:"Protocol Fees",id:"protocol-fees",children:[]},{value:"Range",id:"range",children:[]},{value:"Range Order",id:"range-order",children:[]},{value:"Reserves",id:"reserves",children:[]},{value:"Slippage",id:"slippage",children:[]},{value:"Spot Price",id:"spot-price",children:[]},{value:"Swap Fees",id:"swap-fees",children:[]},{value:"Tick Interval",id:"tick-interval",children:[]},{value:"Tick",id:"tick",children:[]}],d={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"automated-market-maker"},"Automated Market Maker"),(0,a.kt)("p",null,"An automated market maker is a smart contract on Ethereum that holds liquidity reserves. Users can trade against these reserves at prices determined by a fixed formula. Anyone may contribute liquidity to these smart contracts, earning pro-rata trading fees in return."),(0,a.kt)("h2",{id:"asset"},"Asset"),(0,a.kt)("p",null,"While a digital asset can take many forms, the Uniswap Protocol supports ERC-20 token pairs, and represents a position in the form of an NFT (ERC-721)."),(0,a.kt)("h2",{id:"concentrated-liquidity"},"Concentrated Liquidity"),(0,a.kt)("p",null,"Liquidity that is allocated within a determined price range."),(0,a.kt)("h2",{id:"constant-product-formula"},"Constant Product Formula"),(0,a.kt)("p",null,"The automated market making algorithm used by Uniswap. In v1 and v2, this was x","*","y=k."),(0,a.kt)("h2",{id:"core"},"Core"),(0,a.kt)("p",null,"Smart contracts that are considered foundational, and are essential for Uniswap to exist. Upgrading to a new version of core would require deploying an entirely new set of smart contracts on Ethereum and would be considered a new version of the Uniswap Protocol."),(0,a.kt)("h2",{id:"erc20"},"ERC20"),(0,a.kt)("p",null,"ERC20 tokens are fungibile tokens on Ethereum. Uniswap supports all standard ERC20 implementations."),(0,a.kt)("h2",{id:"factory"},"Factory"),(0,a.kt)("p",null,"A smart contract that deploys a unique smart contract for any ERC20/ERC20 trading pair."),(0,a.kt)("h2",{id:"flash-swap"},"Flash Swap"),(0,a.kt)("p",null,"A trade that uses the tokens purchased before paying for them."),(0,a.kt)("h2",{id:"invariant"},"Invariant"),(0,a.kt)("p",null,"The \u201ck\u201d value in the constant product formula X","*","Y=K"),(0,a.kt)("h2",{id:"liquidity-provider--lp"},'Liquidity Provider / "LP"'),(0,a.kt)("p",null,"A liquidity provider is someone who deposits ERC20 tokens into a given liquidity pool. Liquidity providers take on price risk and are compensated with trading fees."),(0,a.kt)("h2",{id:"liquidity"},"Liquidity"),(0,a.kt)("p",null,"Digital assets that are stored in a Uniswap pool contract, and are able to be traded against by traders."),(0,a.kt)("h2",{id:"mid-price"},"Mid Price"),(0,a.kt)("p",null,"The price between the available buy and sell prices. In Uniswap V1 and V2, this is the ratio of the two ERC20 token reserves. In V3, this is the ratio of the two ERC20 token reserves available within the current active tick."),(0,a.kt)("h2",{id:"observation"},"Observation"),(0,a.kt)("p",null,"An instance of historical price and liquidity data of a given pair."),(0,a.kt)("h2",{id:"pair"},"Pair"),(0,a.kt)("p",null,"A smart contract deployed from a Uniswap V1 or V2 factory contract that enables trading between two ERC20 tokens. Pair contracts are now called Pools in V3."),(0,a.kt)("h2",{id:"periphery"},"Periphery"),(0,a.kt)("p",null,"External smart contracts that are useful, but not required for Uniswap to exist. New periphery contracts can always be deployed without migrating liquidity."),(0,a.kt)("h2",{id:"pool"},"Pool"),(0,a.kt)("p",null,"A contract deployed by the V3 factory that pairs two ERC-20 assets. Different pools may have different fees despite containing the same token pair. Pools were previously called Pairs before the introduction of multiple fee options."),(0,a.kt)("h2",{id:"position"},"Position"),(0,a.kt)("p",null,"An instance of liquidity defined by upper and lower tick. And the amount of liquidity contained therein."),(0,a.kt)("h2",{id:"price-impact"},"Price Impact"),(0,a.kt)("p",null,"The difference between the mid-price and the execution price of a trade."),(0,a.kt)("h2",{id:"protocol-fees"},"Protocol Fees"),(0,a.kt)("p",null,"Fees that are rewarded to the protocol itself, rather than to liquidity providers."),(0,a.kt)("h2",{id:"range"},"Range"),(0,a.kt)("p",null,"Any interval between two ticks of any distance."),(0,a.kt)("h2",{id:"range-order"},"Range Order"),(0,a.kt)("p",null,"An approximation of a limit order, in which a single asset is provided as liquidity across a specified range, and is continuously swapped to the destination address as the spot price crosses the range."),(0,a.kt)("h2",{id:"reserves"},"Reserves"),(0,a.kt)("p",null,"The liquidity available within a pair. This was more commonly referenced before concentrated liquidity was introduced."),(0,a.kt)("h2",{id:"slippage"},"Slippage"),(0,a.kt)("p",null,"The amount the price moves in a trading pair between when a transaction is submitted and when it is executed."),(0,a.kt)("h2",{id:"spot-price"},"Spot Price"),(0,a.kt)("p",null,"The current price of a token relative to another within a given pair."),(0,a.kt)("h2",{id:"swap-fees"},"Swap Fees"),(0,a.kt)("p",null,"The fees collected upon swapping which are rewarded to liquidity providers."),(0,a.kt)("h2",{id:"tick-interval"},"Tick Interval"),(0,a.kt)("p",null,"The price space between two nearest ticks."),(0,a.kt)("h2",{id:"tick"},"Tick"),(0,a.kt)("p",null,"The boundaries between discrete areas in price space."))}p.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return h}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return r?i.createElement(v,o(o({ref:t},d),{},{components:r})):i.createElement(v,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);