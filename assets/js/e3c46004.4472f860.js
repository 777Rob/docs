(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[7902],{9944:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"fractions",title:"Fractions",tags:"sdk, documentation"},l="Fraction",c={unversionedId:"reference/fractions",id:"version-2.0.0/reference/fractions",isDocsHomePage:!1,title:"Fractions",description:"`typescript",source:"@site/SDK_versioned_docs/version-2.0.0/reference/06-fractions.md",sourceDirName:"reference",slug:"/reference/fractions",permalink:"/sdk/2.0.0/reference/fractions",version:"2.0.0",sidebarPosition:6,frontMatter:{id:"fractions",title:"Fractions",tags:"sdk, documentation"},sidebar:"version-V2/sdksidebar",previous:{title:"Trade",permalink:"/sdk/2.0.0/reference/trade"},next:{title:"Fetcher",permalink:"/sdk/2.0.0/reference/fetcher"}},s=[{value:"Properties",id:"properties",children:[{value:"numerator",id:"numerator",children:[]},{value:"denominator",id:"denominator",children:[]},{value:"quotient",id:"quotient",children:[]}]},{value:"Methods",id:"methods",children:[{value:"invert",id:"invert",children:[]},{value:"add",id:"add",children:[]},{value:"subtract",id:"subtract",children:[]},{value:"multiply",id:"multiply",children:[]},{value:"divide",id:"divide",children:[]},{value:"toSignificant",id:"tosignificant",children:[]},{value:"toFixed",id:"tofixed",children:[]}]},{value:"Example",id:"example",children:[{value:"toSignificant",id:"tosignificant-1",children:[]},{value:"toFixed",id:"tofixed-1",children:[]}]},{value:"Example",id:"example-1",children:[]},{value:"Properties",id:"properties-1",children:[{value:"token",id:"token",children:[]},{value:"raw",id:"raw",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"add",id:"add-1",children:[]},{value:"subtract",id:"subtract-1",children:[]},{value:"toSignificant",id:"tosignificant-2",children:[]},{value:"toFixed",id:"tofixed-2",children:[]},{value:"toExact",id:"toexact",children:[]}]},{value:"Example",id:"example-2",children:[]},{value:"Static Methods",id:"static-methods",children:[{value:"fromRoute",id:"fromroute",children:[]}]},{value:"Properties",id:"properties-2",children:[{value:"baseToken",id:"basetoken",children:[]},{value:"quoteToken",id:"quotetoken",children:[]},{value:"scalar",id:"scalar",children:[]},{value:"raw",id:"raw-1",children:[]},{value:"adjusted",id:"adjusted",children:[]}]},{value:"Methods",id:"methods-2",children:[{value:"invert",id:"invert-1",children:[]},{value:"multiply",id:"multiply-1",children:[]},{value:"quote",id:"quote",children:[]},{value:"toSignificant",id:"tosignificant-3",children:[]},{value:"toFixed",id:"tofixed-3",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fraction"},"Fraction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(numerator: BigintIsh, denominator: BigintIsh = ONE)\n")),(0,i.kt)("p",null,"The base class which all subsequent fraction classes extend. ",(0,i.kt)("strong",{parentName:"p"},"Not meant to be used directly.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"numerator"},"numerator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"numerator: JSBI;\n")),(0,i.kt)("h3",{id:"denominator"},"denominator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"denominator: JSBI;\n")),(0,i.kt)("h3",{id:"quotient"},"quotient"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"quotient: JSBI;\n")),(0,i.kt)("p",null,"Performs floor division."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"invert"},"invert"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"invert(): Fraction\n")),(0,i.kt)("h3",{id:"add"},"add"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"add(other: Fraction | BigintIsh): Fraction\n")),(0,i.kt)("h3",{id:"subtract"},"subtract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"subtract(other: Fraction | BigintIsh): Fraction\n")),(0,i.kt)("h3",{id:"multiply"},"multiply"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"multiply(other: Fraction | BigintIsh): Fraction\n")),(0,i.kt)("h3",{id:"divide"},"divide"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"divide(other: Fraction | BigintIsh): Fraction\n")),(0,i.kt)("h3",{id:"tosignificant"},"toSignificant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"toSignificant(\n  significantDigits: number,\n  format: object = { groupSeparator: '' },\n  rounding: Rounding = Rounding.ROUND_HALF_UP\n): string\n")),(0,i.kt)("p",null,"Formats a fraction to the specified number of significant digits."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For format options, see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/MikeMcl/toFormat"},"toFormat"),".")),(0,i.kt)("h3",{id:"tofixed"},"toFixed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"toFixed(\n  decimalPlaces: number,\n  format: object = { groupSeparator: '' },\n  rounding: Rounding = Rounding.ROUND_HALF_UP\n): string\n")),(0,i.kt)("p",null,"Formats a fraction to the specified number of decimal places."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For format options, see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/MikeMcl/toFormat"},"toFormat"),".")),(0,i.kt)("h1",{id:"percent"},"Percent"),(0,i.kt)("p",null,"Responsible for formatting percentages (10% instead of 0.1)."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Percent } from "@uniswap/sdk";\n\nconst percent = new Percent("60", "100");\nconsole.log(percent.toSignificant(2)); // 60\n')),(0,i.kt)("h3",{id:"tosignificant-1"},"toSignificant"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#tosignificant"},"toSignificant"),"."),(0,i.kt)("h3",{id:"tofixed-1"},"toFixed"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#tofixed"},"toFixed"),"."),(0,i.kt)("h1",{id:"tokenamount"},"TokenAmount"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(token: Token, amount: BigintIsh)\n")),(0,i.kt)("p",null,"Responsible for formatting token amounts with specific decimal places."),(0,i.kt)("h2",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Token, TokenAmount } from "@uniswap/sdk";\n\nconst FRIED = new Token(\n  ChainId.MAINNET,\n  "0xfa1aFe1000000000000000000000000000000000",\n  18,\n  "FRIED",\n  "Beans"\n);\n\nconst tokenAmount = new TokenAmount(FRIED, "3000000000000000000");\nconsole.log(tokenAmount.toExact()); // 3\n')),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"token"},"token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"token: Token;\n")),(0,i.kt)("h3",{id:"raw"},"raw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"raw: JSBI;\n")),(0,i.kt)("p",null,"Returns the full token amount, unadjusted for decimals."),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"add-1"},"add"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"add(other: TokenAmount): TokenAmount\n")),(0,i.kt)("h3",{id:"subtract-1"},"subtract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"subtract(other: TokenAmount): TokenAmount\n")),(0,i.kt)("h3",{id:"tosignificant-2"},"toSignificant"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#tosignificant"},"toSignificant"),"."),(0,i.kt)("h3",{id:"tofixed-2"},"toFixed"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#tofixed"},"toFixed"),"."),(0,i.kt)("h3",{id:"toexact"},"toExact"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"toExact(format: object = { groupSeparator: '' }): string\n")),(0,i.kt)("h1",{id:"price"},"Price"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(baseToken: Token, quoteToken: Token, denominator: BigintIsh, numerator: BigintIsh)\n")),(0,i.kt)("p",null,"Responsible for denominating the relative price between two tokens. Denominator and numerator must be unadjusted for decimals."),(0,i.kt)("h2",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { ChainId, WETH as WETHs, Token, Price } from "@uniswap/sdk";\n\nconst WETH = WETHs[ChainId.MAINNET];\nconst ABC = new Token(\n  ChainId.MAINNET,\n  "0xabc0000000000000000000000000000000000000",\n  18,\n  "ABC"\n);\n\nconst price = new Price(\n  WETH,\n  ABC,\n  "1000000000000000000",\n  "123000000000000000000"\n);\nconsole.log(price.toSignificant(3)); // 123\n')),(0,i.kt)("p",null,"This example shows the\xa0ETH/XYZ price, where ETH is the base token, and XYZ is the quote token. The price is constructed from an amount of XYZ (the numerator) / an amount of WETH (the denominator)."),(0,i.kt)("h2",{id:"static-methods"},"Static Methods"),(0,i.kt)("h3",{id:"fromroute"},"fromRoute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"fromRoute(route: Route): Price\n")),(0,i.kt)("h2",{id:"properties-2"},"Properties"),(0,i.kt)("h3",{id:"basetoken"},"baseToken"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"baseToken: Token;\n")),(0,i.kt)("h3",{id:"quotetoken"},"quoteToken"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"quoteToken: Token;\n")),(0,i.kt)("h3",{id:"scalar"},"scalar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"scalar: Fraction;\n")),(0,i.kt)("p",null,"Used to adjust the price for the decimals of the base and quote tokens."),(0,i.kt)("h3",{id:"raw-1"},"raw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"raw: Fraction;\n")),(0,i.kt)("p",null,"Returns the raw price, unadjusted for decimals."),(0,i.kt)("h3",{id:"adjusted"},"adjusted"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"adjusted: Fraction;\n")),(0,i.kt)("p",null,"Returns the price, adjusted for decimals."),(0,i.kt)("h2",{id:"methods-2"},"Methods"),(0,i.kt)("h3",{id:"invert-1"},"invert"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"invert(): Price\n")),(0,i.kt)("h3",{id:"multiply-1"},"multiply"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"multiply(other: Price): Price\n")),(0,i.kt)("h3",{id:"quote"},"quote"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"quote(tokenAmount: TokenAmount): TokenAmount\n")),(0,i.kt)("p",null,"Given an asset amount, returns an equivalent value of the other asset, according to the current price."),(0,i.kt)("h3",{id:"tosignificant-3"},"toSignificant"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#tosignificant"},"toSignificant"),"."),(0,i.kt)("h3",{id:"tofixed-3"},"toFixed"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#tofixed"},"toFixed"),"."))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);