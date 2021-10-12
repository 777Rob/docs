(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[9677],{9747:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={id:"building-an-oracle",title:"Building an Oracle",tags:"oracles, documentation"},s=void 0,l={unversionedId:"guides/smart-contract-integration/building-an-oracle",id:"version-V2/guides/smart-contract-integration/building-an-oracle",isDocsHomePage:!1,title:"Building an Oracle",description:"To build a price oracle on Uniswap V2, you must first understand the",source:"@site/versioned_docs/version-V2/guides/smart-contract-integration/04-building-an-oracle.md",sourceDirName:"guides/smart-contract-integration",slug:"/guides/smart-contract-integration/building-an-oracle",permalink:"/protocol/V2/guides/smart-contract-integration/building-an-oracle",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V2/guides/smart-contract-integration/04-building-an-oracle.md",version:"V2",sidebarPosition:4,frontMatter:{id:"building-an-oracle",title:"Building an Oracle",tags:"oracles, documentation"},sidebar:"version-V2/mySidebar",previous:{title:"Providing Liquidity",permalink:"/protocol/V2/guides/smart-contract-integration/providing-liquidity"},next:{title:"Flash Swaps",permalink:"/protocol/V2/guides/smart-contract-integration/using-flash-swaps"}},c=[{value:"Fixed windows",id:"fixed-windows",children:[]},{value:"Moving averages",id:"moving-averages",children:[]},{value:"Computing average prices",id:"computing-average-prices",children:[]},{value:"Integrating the oracle",id:"integrating-the-oracle",children:[]},{value:"Oracle maintenance",id:"oracle-maintenance",children:[]},{value:"No-maintenance option",id:"no-maintenance-option",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To build a price oracle on Uniswap V2, you must first understand the\nrequirements for your use case. Once you understand the kind of price\naverage you require, it is a matter of storing the cumulative price\nvariable from the pair as often as necessary, and computing\nthe average price using two or more observations of the\ncumulative price variables."),(0,r.kt)("h1",{id:"understanding-requirements"},"Understanding requirements"),(0,r.kt)("p",null,"To understand your requirements, you should first research the answer to the\nfollowing questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is data freshness important?\nI.e.: must the price average include the current price?"),(0,r.kt)("li",{parentName:"ul"},"Are recent prices more important than historical prices?\nI.e.: is the current price given more weight than historical prices?")),(0,r.kt)("p",null,"Note your answers for the following discussion."),(0,r.kt)("h1",{id:"oracle-strategies"},"Oracle Strategies"),(0,r.kt)("h2",{id:"fixed-windows"},"Fixed windows"),(0,r.kt)("p",null,"In the case where data freshness is not important and recent prices\nare weighted equally with historical prices, it is enough to\nstore the cumulative price once per period (e.g. once per 24 hours.)"),(0,r.kt)("p",null,"Computing the average price over these data points gives you 'fixed windows',\nwhich can be updated after the lapse of each period. We wrote\nan example oracle of this kind\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleOracleSimple.sol"},"here"),"."),(0,r.kt)("p",null,"This example does not limit the maximum size of the fixed window, i.e.\nit only requires that the window size is greater than 1 period (e.g. 24 hours)."),(0,r.kt)("h2",{id:"moving-averages"},"Moving averages"),(0,r.kt)("p",null,"In the case where data freshness is important, you can use a sliding\nwindow in which the cumulative price variable is measured more often\nthan once per period."),(0,r.kt)("p",null,"There are at least\n",(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/m/movingaverage.asp#types-of-moving-averages"},"two kinds of moving averages"),"\nthat you can compute using the Uniswap cumulative price variable."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/s/sma.asp"},"Simple moving averages"),"\ngive equal weight to each price measurement. We have built\nan example of a sliding window oracle\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/e/ema.asp"},"Exponential moving averages"),"\ngive more weight to the most recent price measurements. We do not yet have an example written for this type of oracle."),(0,r.kt)("p",null,"You may wish to use exponential moving averages where recent prices\nare more important than historical prices, e.g. in case of liquidations. However, note that\nputting more weight on recent prices makes the oracle cheaper to manipulate\nthan weighting all price measurements equally."),(0,r.kt)("h2",{id:"computing-average-prices"},"Computing average prices"),(0,r.kt)("p",null,"To compute the average price given two cumulative price observations, take the difference between\nthe cumulative price at the beginning and end of the period, and\ndivide by the elapsed time between them in seconds. This will produce a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fixed-point_arithmetic#Notation"},"fixed point unsigned Q112x112"),"\nnumber that represents the price of one asset relative to the other. This number is represented as a ",(0,r.kt)("inlineCode",{parentName:"p"},"uint224")," where\nthe upper 112 bits represent the integer amount, and the lower 112 bits represent the fractional amount."),(0,r.kt)("p",null,"Pairs contain both ",(0,r.kt)("inlineCode",{parentName:"p"},"price0CumulativeLast")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"price1CumulativeLast"),", which are ratios of reserves\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"token0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"token1")," respectively. I.e. the price of ",(0,r.kt)("inlineCode",{parentName:"p"},"token0")," is expressed in terms of\n",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),", while the price of ",(0,r.kt)("inlineCode",{parentName:"p"},"token1")," is expressed in terms of ",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"."),(0,r.kt)("h1",{id:"getting-the-latest-cumulative-price"},"Getting the latest cumulative price"),(0,r.kt)("p",null,"If you wish to compute the average price between a historical price cumulative observation and the current cumulative\nprice, you should use the cumulative price values from the current block. If the cumulative price has not been updated\nin the current block, e.g. because there has not been any liquidity event (",(0,r.kt)("inlineCode",{parentName:"p"},"mint"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"burn"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"swap"),") on the pair in the current\nblock, you can compute the cumulative price counterfactually."),(0,r.kt)("p",null,"We provide a library for use in oracle contracts that has the method\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/libraries/UniswapV2OracleLibrary.sol#L16"},(0,r.kt)("inlineCode",{parentName:"a"},"UniswapV2OracleLibrary#currentCumulativePrices")),"\nfor getting the cumulative price as of the current block.\nThe current cumulative price returned by this method is computed ",(0,r.kt)("em",{parentName:"p"},"counterfactually"),", meaning it requires no call to\nthe relative gas-expensive ",(0,r.kt)("inlineCode",{parentName:"p"},"#sync")," method on the pair.\nIt is correct regardless of whether a swap has already executed in the current block."),(0,r.kt)("h1",{id:"notes-on-overflow"},"Notes on overflow"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UniswapV2Pair")," cumulative price variables are designed to eventually overflow,\ni.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"price0CumulativeLast")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"price1CumulativeLast")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"blockTimestampLast")," will overflow through 0."),(0,r.kt)("p",null,"This should not pose an issue to your oracle design, as the price average computation is concerned with differences\n(i.e. subtraction) between two separate observations of a cumulative price variable.\nSubtracting between two cumulative price values will result in a number that fits within the range of ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256")," as long\nas the observations are made for periods of max ",(0,r.kt)("inlineCode",{parentName:"p"},"2^32")," seconds, or ~136 years."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"blockTimestampLast")," is stored only in a ",(0,r.kt)("inlineCode",{parentName:"p"},"uint32"),". For the same reason as described above, the pair can save a\nstorage slot, and many SSTORES over the life of the pair, by storing only ",(0,r.kt)("inlineCode",{parentName:"p"},"block.timestamp % uint32(-1)"),".\nThis is feasible because the pair is only concerned with the time that elapses between each liquidity event when updating\nthe cumulative prices, which is always expected to be less than ",(0,r.kt)("inlineCode",{parentName:"p"},"2^32")," seconds."),(0,r.kt)("p",null,"When computing time elapsed within your own oracle, you can simply store the ",(0,r.kt)("inlineCode",{parentName:"p"},"block.timestamp")," of your observations\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"uint256"),", and avoid dealing with overflow math for computing the time elapsed between observations. This is how the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol"},"ExampleSlidingWindowOracle"),"\nhandles observation timestamps."),(0,r.kt)("h2",{id:"integrating-the-oracle"},"Integrating the oracle"),(0,r.kt)("p",null,"To integrate an oracle into your contracts, you must ensure the oracle's observations of the cumulative price variable\nare kept up to date.\nAs long as your oracle is up to date, you can depend on it to produce average prices.\nThe process of keeping your oracle up to date is called 'maintenance'."),(0,r.kt)("h2",{id:"oracle-maintenance"},"Oracle maintenance"),(0,r.kt)("p",null,"In order to measure average prices over a period, the oracle must have a way\nof referencing the cumulative price at the start and end of a period.\nThe recommended way of doing this is by storing these prices in the oracle contract,\nand calling the oracle frequently enough to store the latest cumulative price."),(0,r.kt)("p",null,"Reliable oracle maintenance is a difficult task,\nand can become a point of failure in times of congestion.\nInstead, consider building this functionality directly into the\ncritical calls of your own smart contracts, or incentivize oracle\nmaintenance calls by other parties."),(0,r.kt)("h2",{id:"no-maintenance-option"},"No-maintenance option"),(0,r.kt)("p",null,"It is possible to avoid regularly storing this cumulative price at the\nstart of the period by utilizing storage proofs. However, this approach has limitations,\nespecially in regard to gas cost and maximum length of the time period over which the average price can be measured.\nIf you wish to try this approach, you can follow\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Keydonix/uniswap-oracle/"},"this repository by Keydonix"),"."),(0,r.kt)("p",null,"Keydonix has developed a general purpose price feed oracle built on Uniswap v2 that supports arbitrary time windows (up to 256 blocks) and doesn't require any active maintenance."))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);