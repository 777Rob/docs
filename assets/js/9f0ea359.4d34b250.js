(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[6400],{5477:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a={id:"tickToPrice"},c=void 0,p={unversionedId:"reference/functions/tickToPrice",id:"version-3.0.0/reference/functions/tickToPrice",isDocsHomePage:!1,title:"tickToPrice",description:"@uniswap/v3-sdk / Exports / utils/priceTickConversions / tickToPrice",source:"@site/SDK_versioned_docs/version-3.0.0/reference/functions/utils_pricetickconversions.ticktoprice.md",sourceDirName:"reference/functions",slug:"/reference/functions/tickToPrice",permalink:"/sdk/reference/functions/tickToPrice",version:"3.0.0",frontMatter:{id:"tickToPrice"},sidebar:"version-V3/sdksidebar",previous:{title:"priceToClosestTick",permalink:"/sdk/reference/functions/priceToClosestTick"},next:{title:"TickConstructorArgs",permalink:"/sdk/reference/interfaces/TickConstructorArgs"}},s=[],l={toc:s};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../README.md"},"@uniswap/v3-sdk")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules.md"},"Exports")," / ",(0,o.kt)("a",{parentName:"p",href:"../modules/utils_pricetickconversions.md"},"utils/priceTickConversions")," / tickToPrice"),(0,o.kt)("h1",{id:"ticktoprice"},"tickToPrice"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"tickToPrice"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"baseToken"),": Token, ",(0,o.kt)("inlineCode",{parentName:"p"},"quoteToken"),": Token, ",(0,o.kt)("inlineCode",{parentName:"p"},"tick"),": ",(0,o.kt)("em",{parentName:"p"},"number"),"): ",(0,o.kt)("em",{parentName:"p"},"Price"),"<Token, Token",">"),(0,o.kt)("p",null,"Returns a price object corresponding to the input tick and the base/quote token\nInputs must be tokens because the address order is used to interpret the price represented by the tick"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"baseToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"the base token of the price")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"quoteToken")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"the quote token of the price")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tick")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the tick for which to return the price")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Price"),"<Token, Token",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/blob/aeb1b09/src/utils/priceTickConversions.ts#L14"},"utils/priceTickConversions.ts:14")))}u.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),k=s(r),f=i,m=k["".concat(p,".").concat(f)]||k[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);