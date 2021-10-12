(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[4177],{5165:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l={},i=void 0,c={unversionedId:"reference/core/interfaces/pool/IUniswapV3PoolOwnerActions",id:"version-V3/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions",isDocsHomePage:!1,title:"IUniswapV3PoolOwnerActions",description:"Contains pool methods that may only be called by the factory owner",source:"@site/versioned_docs/version-V3/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions.md",sourceDirName:"reference/core/interfaces/pool",slug:"/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions",permalink:"/protocol/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"IUniswapV3PoolImmutables",permalink:"/protocol/reference/core/interfaces/pool/IUniswapV3PoolImmutables"},next:{title:"IUniswapV3PoolState",permalink:"/protocol/reference/core/interfaces/pool/IUniswapV3PoolState"}},p=[{value:"Functions",id:"functions",children:[{value:"setFeeProtocol",id:"setfeeprotocol",children:[]},{value:"collectProtocol",id:"collectprotocol",children:[]}]}],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains pool methods that may only be called by the factory owner"),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"setfeeprotocol"},"setFeeProtocol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setFeeProtocol(\n    uint8 feeProtocol0,\n    uint8 feeProtocol1\n  ) external\n")),(0,a.kt)("p",null,"Set the denominator of the protocol's % share of the fees"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"feeProtocol0")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"new protocol fee for token0 of the pool")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"feeProtocol1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"new protocol fee for token1 of the pool")))),(0,a.kt)("h3",{id:"collectprotocol"},"collectProtocol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function collectProtocol(\n    address recipient,\n    uint128 amount0Requested,\n    uint128 amount1Requested\n  ) external returns (uint128 amount0, uint128 amount1)\n")),(0,a.kt)("p",null,"Collect the protocol fee accrued to the pool"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"recipient")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The address to which collected protocol fees should be sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"amount0Requested")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The maximum amount of token0 to send, can be 0 to collect fees in only token1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"amount1Requested")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The maximum amount of token1 to send, can be 0 to collect fees in only token0")))),(0,a.kt)("h4",{id:"return-values"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"amount0")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The protocol fee collected in token0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"amount1")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The protocol fee collected in token1")))))}f.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);