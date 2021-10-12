(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[9615],{2745:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"getting-started",title:"Getting Started",sidebar_position:1},s=void 0,p={unversionedId:"guides/getting-started",id:"version-1.0.0/guides/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The Uniswap SDK is meant to simplify every aspect of integrating Uniswap into your project. It's written in TypeScript, has a robust test suite, uses bignumber.js for math, and includes an optional data-fetching module which relies on ethers.js.",source:"@site/SDK_versioned_docs/version-1.0.0/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/sdk/1.0.0/guides/getting-started",version:"1.0.0",sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting Started",sidebar_position:1},sidebar:"version-V1/sdksidebar",previous:{title:"The Uniswap V1 SDK",permalink:"/sdk/1.0.0/introduction"},next:{title:"Data",permalink:"/sdk/1.0.0/reference/data"}},l=[],u={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-sdk/tree/v1"},"Uniswap SDK")," is meant to simplify every aspect of integrating Uniswap into your project. It's written in ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org"},"TypeScript"),", has a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-sdk/tree/v1/src/__tests__"},"robust test suite"),", uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js"},"bignumber.js")," for math, and includes an optional data-fetching module which relies on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethers-io/ethers.js/"},"ethers.js"),"."),(0,i.kt)("p",null,"The SDK was built to be extremely easy to use, but also feature-rich. It offers various levels of abstraction that make it suitable for use nearly anywhere, from hackathon projects to production applications."),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The SDK is divided into several modular components that perform tightly scoped tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/1.0.0/reference/data"},"Data")," - Fetches Uniswap data from the blockchain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/1.0.0/reference/computation"},"Computation")," - Computes market- and trade-specific statistics using blockchain data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/1.0.0/reference/format"},"Format")," - Formats data for display"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/1.0.0/reference/orchestration"},"Orchestration")," - Offers named abstraction functions that seamlessly combine lower-level data- and computation-related functions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/1.0.0/reference/transact"},"Transact")," - Prepares computed trades for execution against Uniswap smart contracts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/1.0.0/reference/constants"},"Constants")," - Exports various helpful constants for use throughout the SDK")),(0,i.kt)("p",null,"Additionally, it exports a number of custom types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk/1.0.0/reference/types"},"Types")," - Exports all types used by the SDK")),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To start using the SDK, simply install it into your project..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @uniswap/sdk\n")),(0,i.kt)("p",null,"...import some functions..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ... } from '@uniswap/sdk'\n")),(0,i.kt)("p",null,"...and dive into the rest of the documentation to learn more!"))}c.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);