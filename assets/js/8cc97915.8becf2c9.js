(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[1251],{4399:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={},p=void 0,o={unversionedId:"reference/core/libraries/SecondsOutside",id:"version-V3/reference/core/libraries/SecondsOutside",isDocsHomePage:!1,title:"SecondsOutside",description:"Contains methods for working with a mapping from tick to 32 bit timestamp values, specifically seconds",source:"@site/versioned_docs/version-V3/reference/core/libraries/SecondsOutside.md",sourceDirName:"reference/core/libraries",slug:"/reference/core/libraries/SecondsOutside",permalink:"/protocol/reference/core/libraries/SecondsOutside",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/core/libraries/SecondsOutside.md",version:"V3",frontMatter:{},sidebar:"version-V3/mySidebar",previous:{title:"SafeCast",permalink:"/protocol/reference/core/libraries/SafeCast"},next:{title:"SqrtPriceMath",permalink:"/protocol/reference/core/libraries/SqrtPriceMath"}},d=[{value:"Functions",id:"functions",children:[{value:"initialize",id:"initialize",children:[]},{value:"clear",id:"clear",children:[]},{value:"cross",id:"cross",children:[]},{value:"get",id:"get",children:[]},{value:"secondsInside",id:"secondsinside",children:[]}]}],s={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains methods for working with a mapping from tick to 32 bit timestamp values, specifically seconds\nspent outside the tick."),(0,i.kt)("p",null,'The mapping uses int24 for keys since ticks are represented as int24 and there are 8 (2^3) values per word.\nNote "seconds outside" is always a relative measurement, only consistent for as long as a the lower tick and upper tick\nhave gross liquidity greater than 0.'),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n    mapping(int24 => uint256) self,\n    int24 tick,\n    int24 tickCurrent,\n    int24 tickSpacing,\n    uint32 time\n  ) internal\n")),(0,i.kt)("p",null,"Called the first time a tick is used to set the seconds outside value. Assumes the tick is not\ninitialized."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"self")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => uint256)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the packed mapping of tick to seconds outside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the tick to be initialized")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickCurrent")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the current tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the spacing between usable ticks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the current timestamp")))),(0,i.kt)("h3",{id:"clear"},"clear"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function clear(\n    mapping(int24 => uint256) self,\n    int24 tick,\n    int24 tickSpacing\n  ) internal\n")),(0,i.kt)("p",null,"Called when a tick is no longer used, to clear the seconds outside value of the tick"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"self")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => uint256)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the packed mapping of tick to seconds outside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the tick to be cleared")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the spacing between usable ticks")))),(0,i.kt)("h3",{id:"cross"},"cross"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function cross(\n    mapping(int24 => uint256) self,\n    int24 tick,\n    int24 tickSpacing,\n    uint32 time\n  ) internal\n")),(0,i.kt)("p",null,"Called when an initialized tick is crossed to update the seconds outside for that tick. Must be called\nevery time an initialized tick is crossed"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"self")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => uint256)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the packed mapping of tick to seconds outside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the tick to be crossed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the spacing between usable ticks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the current block timestamp truncated to 32 bits")))),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function get(\n    mapping(int24 => uint256) self,\n    int24 tick,\n    int24 tickSpacing\n  ) internal view returns (uint32)\n")),(0,i.kt)("p",null,"Get the seconds outside for an initialized tick. Should be called only on initialized ticks."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"self")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => uint256)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the packed mapping of tick to seconds outside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tick")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the tick to get the seconds outside value for")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the spacing between usable ticks")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"seconds outside value for that tick")))),(0,i.kt)("h3",{id:"secondsinside"},"secondsInside"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function secondsInside(\n    mapping(int24 => uint256) self,\n    int24 tickLower,\n    int24 tickUpper,\n    int24 tickCurrent,\n    int24 tickSpacing\n  ) internal view returns (uint32)\n")),(0,i.kt)("p",null,"Get the seconds inside a tick range, assuming both tickLower and tickUpper are initialized"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"self")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mapping(int24 => uint256)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the packed mapping of tick to seconds outside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the lower tick for which to get seconds inside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the upper tick for which to get seconds inside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickCurrent")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the current tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tickSpacing")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the spacing between usable ticks")))),(0,i.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"a")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"relative seconds inside value that can be snapshotted and compared to a later snapshot to compute")))),(0,i.kt)("p",null,"time spent between tickLower and tickUpper, i.e. time that a position's liquidity was in use."))}c.isMDXComponent=!0},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=d(n),m=r,u=k["".concat(o,".").concat(m)]||k[m]||c[m]||i;return n?a.createElement(u,l(l({ref:e},s),{},{components:n})):a.createElement(u,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"}}]);