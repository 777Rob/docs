(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[3040],{4950:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"error-codes",title:"Error Codes"},l=void 0,p={unversionedId:"reference/error-codes",id:"version-V3/reference/error-codes",isDocsHomePage:!1,title:"Error Codes",description:"LiquidityMath.sol",source:"@site/versioned_docs/version-V3/reference/error-codes.md",sourceDirName:"reference",slug:"/reference/error-codes",permalink:"/protocol/reference/error-codes",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/error-codes.md",version:"V3",frontMatter:{id:"error-codes",title:"Error Codes"},sidebar:"version-V3/mySidebar",previous:{title:"Deployments",permalink:"/protocol/reference/deployments"}},u=[],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"LiquidityMath.sol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LS")," : Liquidity Sub"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LA"),": Liquidity Add")),(0,i.kt)("p",null,"Oracle.sol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OLD"),": The target must be chronologically after the oldest observation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"I"),": The pool has not been initialized"))),(0,i.kt)("p",null,"Position.sol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NP"),": Burn cannot be called for a position with 0 liquidity")),(0,i.kt)("p",null,"Tick.sol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LO")," LiquidityGrossAfter must be less than MaxLiquidity")),(0,i.kt)("p",null,"TickMath.sol "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"T"),": The given tick must be less than, or equal to, the maximum tick"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"R"),": second inequality must be < because the price can never reach the price at the max tick")),(0,i.kt)("p",null,"TransferHelper.sol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TF"),": Transfer Failed : errors with TF if transfer fails")),(0,i.kt)("p",null,"UniswapV3Pool.sol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LOK"),": The reentrancy guard. A transaction cannot re-enter the pool mid-swap.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TLU"),": The lower tick must be below the upper tick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TLM"),": The lower tick must be greater, or equal to, the minimum tick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TUM"),": The upper tick must be lesser than, or equal to, the maximum tick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AI"),": The pool is already initialized")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"M0"),": Mint 0, The balance of token0 in the given pool before minting must be less than, or equal to, the balance after minting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"M1"),": Mint 1, The balance of token1 in the given pool before minting must be less than, or equal to, the balance after minting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AS"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"amountSpecified")," cannot be zero")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SPL"),": Square root price limit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IIA"),": Insufficient input amount, an insufficient amount of input token was sent during the callback")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"L"),": Liquidity in the pool must be greater than zero for a flash to be executed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"F0"),": The balance of token0 in the given pool before the flash transaction must be less than, or equal to, the balance of token0 after the flash plus the fee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"F1"),": The balance of token1 in the given pool before the flash transaction must be less than, or equal to, the balance of token0 after the flash plus the fee"))))}s.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,f=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);