(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[7708],{1659:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"computation",title:"Computation"},s="getMarketDetails",l={unversionedId:"reference/computation",id:"version-1.0.0/reference/computation",isDocsHomePage:!1,title:"Computation",description:"This function computes market details for the passed reserves data. Markets are defined as ETH&lt;&gt;ERC20, ERC20&lt;&gt;ETH, or ERC20&lt;&gt;ERC20 pairs, where the first currency is the input and the second is the output. Reserves must be specified for both the input and output currency.",source:"@site/SDK_versioned_docs/version-1.0.0/reference/03-computation.md",sourceDirName:"reference",slug:"/reference/computation",permalink:"/sdk/1.0.0/reference/computation",version:"1.0.0",sidebarPosition:3,frontMatter:{id:"computation",title:"Computation"},sidebar:"version-V1/sdksidebar",previous:{title:"Data",permalink:"/sdk/1.0.0/reference/data"},next:{title:"Format",permalink:"/sdk/1.0.0/reference/format"}},u=[{value:"Function Signature",id:"function-signature",children:[]},{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Function Signature",id:"function-signature-1",children:[]},{value:"Input Parameters",id:"input-parameters-1",children:[]},{value:"Example Usage",id:"example-usage-1",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getmarketdetails"},"getMarketDetails"),(0,i.kt)("p",null,"This function computes market details for the passed reserves data. Markets are defined as ETH","<",">","ERC20, ERC20","<",">","ETH, or ERC20","<",">","ERC20 pairs, where the first currency is the input and the second is the output. Reserves must be specified for both the input and output currency."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the case of ETH, ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," should be passed as the reserves data. ",(0,i.kt)("a",{parentName:"p",href:"/sdk/1.0.0/reference/data/#getttokenreserves"},(0,i.kt)("inlineCode",{parentName:"a"},"getTokenReserves"))," formatted ERC20 reserves, or the requisite data can be fetched manually and passed in.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rates are calculated to 18 decimal places of precision."))),(0,i.kt)("h2",{id:"function-signature"},"Function Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function getMarketDetails(\n  optionalReservesInput: OptionalReserves,\n  optionalReservesOutput: OptionalReserves\n): MarketDetails;\n")),(0,i.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"optionalReservesInput"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"OptionalReserves")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reserves data for the input currency.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"optionalReservesOutput"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"OptionalReserves")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reserves data for the output currency.")))),(0,i.kt)("h2",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const reserves: ChainIdOrProvider = await getTokenReserves(tokenAddress);\n\nconst marketDetails: MarketDetails = getMarketDetails(undefined, reserves); // ETH<>ERC20\n\n/*\n{\n  // market type\n  tradeType: 'ETH_TO_TOKEN',\n\n  // dummy ETH reserves\n  inputReserves: {\n    token: {\n      chainId: 1,\n      address: 'ETH',\n      decimals: 18\n    }\n  },\n\n  // normalized token reserves\n  outputReserves: <NormalizedReserves>,\n\n  // market rate calculated to 18 decimals of precision\n  marketRate: {\n    rate: <BigNumber>,        // x output / 1 input\n    rateInverted: <BigNumber> // x input / 1 output\n  }\n}\n*/\n")),(0,i.kt)("h1",{id:"gettradedetails"},"getTradeDetails"),(0,i.kt)("p",null,"This function computes trade details for the passed market data."),(0,i.kt)("p",null,"-This function throws an error if the passed ","_","tradeAmount is greater than the amount of ETH/tokens in the relevant Uniswap exchange."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trade amounts must be passed in non-decimal form ","(","where e.g. 1 ETH is represented as 1000000000000000000 wei",")",".")),(0,i.kt)("h2",{id:"function-signature-1"},"Function Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function getTradeDetails(\n  tradeExact: TRADE_EXACT,\n  _tradeAmount: BigNumberish,\n  marketDetails: MarketDetails\n): TradeDetails;\n")),(0,i.kt)("h2",{id:"input-parameters-1"},"Input Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tradeExact"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TRADE_EXACT")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether either the input or the output currency is the exact amount.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_","tradeAmount"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount to buy/sell ","(","of the output/input currency, depending on tradeExact",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"marketDetails"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MarketDetails")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Market details.")))),(0,i.kt)("h2",{id:"example-usage-1"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const _purchaseAmount: BigNumber = new BigNumber(\"2.5\");\nconst _decimals: number = 18;\nconst tradeAmount: BigNumber = _purchaseAmount.multipliedBy(10 ** _decimals);\nconst marketDetails: MarketDetails = getMarketDetails(undefined, reserves); // ETH<>ERC20\n\n// buy exactly 2.5 of an 18 decimal ERC20 with ETH\nconst tradeDetails: TradeDetails = getTradeDetails(\n  TRADE_EXACT.OUTPUT,\n  tradeAmount,\n  marketDetails\n);\n\n/*\n{\n  marketDetailsPre: <MarketDetails>,\n\n  marketDetailsPost: <MarketDetails>,\n\n  tradeType: 'ETH_TO_TOKEN',\n\n  tradeExact: 'OUTPUT',\n\n  inputAmount: {\n    token: <Token>,\n    amount: <BigNumber>\n  },\n\n  outputAmount: {\n    token: <Token>,\n    amount: <BigNumber>\n  },\n\n  // execution rate calculated to 18 decimals of precision\n  executionRate: {\n    rate: <BigNumber>         // x output / 1 input\n    rateInverted: <BigNumber> // x input / 1 output\n  },\n\n  // slippage between the pre- and post-trade market rates, in basis points, calculated to 18 decimals of precision\n  marketRateSlippage: <BigNumber>,\n\n  // slippage between the execution and pre-trade market rate, in basis points, calculated to 18 decimals of precision\n  executionRateSlippage: <BigNumber>\n}\n*/\n")))}c.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);