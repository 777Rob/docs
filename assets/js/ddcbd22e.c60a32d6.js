(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[6637],{9786:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"introduction",title:"The Uniswap V1 Protocol",sidebar_position:1},s=void 0,l={unversionedId:"introduction",id:"version-V1/introduction",isDocsHomePage:!1,title:"The Uniswap V1 Protocol",description:"Uniswap V1 is the first version of the protocol, launched in November 2018 at Devcon 4. Because of its permissionless nature, it will exist for as long as Ethereum does.",source:"@site/versioned_docs/version-V1/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/protocol/V1/introduction",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V1/introduction.md",version:"V1",sidebarPosition:1,frontMatter:{id:"introduction",title:"The Uniswap V1 Protocol",sidebar_position:1},sidebar:"version-V1/mySidebar",next:{title:"Connect to Uniswap",permalink:"/protocol/V1/guides/connect-to-uniswap"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uniswap V1 is the first version of the protocol, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/haydenzadams/status/1058376395108376577"},"launched in November 2018")," at Devcon 4. Because of its permissionless nature, it will exist for as long as Ethereum does. "),(0,a.kt)("p",null,"Designed with simplicity in mind, the Uniswap protocol provides an interface for seamless exchange of ERC20 tokens on Ethereum. By eliminating unnecessary forms of rent extraction and middlemen it allows faster, more efficient exchange. Where it makes tradeoffs, decentralization, censorship resistance, and security are prioritized."),(0,a.kt)("p",null,"Uniswap is open source and functions as a public good. There is no central token or platform fee. No special treatment is given to early investors, adopters, or developers. Token listing is open and free. All smart contract functions are public and all upgrades are opt-in."),(0,a.kt)("p",null,"This site will serve as a project overview for Uniswap - explaining how it works, how to use it, and how to build on top of it. These docs are actively being worked on and more information will be added on an ongoing basis."),(0,a.kt)("h1",{id:"v1-features"},"V1 Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add support for any ERC20 token using the Uniswap ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-v1/blob/master/contracts/uniswap_factory.vy"},"factory")),(0,a.kt)("li",{parentName:"ul"},"Join liquidity pools to collect fees on ETH-ERC20 pairs"),(0,a.kt)("li",{parentName:"ul"},"Liquidity-sensitive automated pricing using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf"},"constant product formula")),(0,a.kt)("li",{parentName:"ul"},"Trade ETH for any ERC20 without wrapping"),(0,a.kt)("li",{parentName:"ul"},"Trade any ERC20 for any ERC20 in a single transaction"),(0,a.kt)("li",{parentName:"ul"},"Trade and transfer to a different address in a single transaction"),(0,a.kt)("li",{parentName:"ul"},"Lowest gas cost of any decentralized exchange"),(0,a.kt)("li",{parentName:"ul"},"Support for private and custom uniswap exchanges"),(0,a.kt)("li",{parentName:"ul"},"Buy ERC20 tokens from any wallet using ENS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/runtimeverification/verified-smart-contracts/tree/uniswap/uniswap"},"Partially verified")," smart contracts written in Vyper"),(0,a.kt)("li",{parentName:"ul"},"Mobile-optimized open source ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/uniswap-interface"},"frontend implementation")),(0,a.kt)("li",{parentName:"ul"},"Funded through an ",(0,a.kt)("a",{parentName:"li",href:"https://blog.ethereum.org/2018/08/17/ethereum-foundation-grants-update-wave-3/"},"Ethereum Foundation grant"))),(0,a.kt)("h1",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://uniswap.org"},"Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Uniswap"},"GitHub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/Uniswap"},"Twitter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/Uniswap"},"Reddit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:contact@uniswap.org"},"Email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/s/HJ9jLsfTz"},"Whitepaper"))),(0,a.kt)("h1",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Uniswap is made up of a series of ETH-ERC20 exchange contracts. There is exactly one exchange contract per ERC20 token. If a token does not yet have an exchange it can be created by anyone using the Uniswap factory contract. The factory serves as a public registry and is used to look up all token and exchange addresses added to the system."),(0,a.kt)("p",null,'Each exchange holds reserves of both ETH and its associated ERC20 token. Anyone can become a liquidity provider on an exchange and contribute to its reserves. This is different than buying or selling; it requires depositing an equivalent value of both ETH and the relevant ERC20 token. Liquidity is pooled across all providers and an internal "pool token" (ERC20) is used to track each providers relative contribution. Pool tokens are minted when liquidity is deposited into the system and can be burned at any time to withdraw a proportional share of the reserves.'),(0,a.kt)("p",null,"Exchange contracts are automated market makers between an ETH-ERC20 pair. Traders can swap between the two in either direction by adding to the liquidity reserve of one and withdrawing from the reserve of the other. Since ETH is a common pair for all ERC20 exchanges, it can be used as an intermediary allowing direct ERC20-ERC20 trades in a single transaction. Users can specify a recipient address if they want to receive purchased tokens at a different address from the one used to make a transaction."),(0,a.kt)("p",null,'Uniswap uses a "constant product" market making formula which sets the exchange rate based off of the relative size of the ETH and ERC20 reserves, and the amount with which an incoming trade shifts this ratio. Selling ETH for ERC20 tokens increases the size of the ETH reserve and decreases the size of the ERC20 reserve. This shifts the reserve ratio, increasing the ERC20 token\'s price relative to ETH for subsequent transactions. The larger a trade relative to the total size of the reserves, the more price slippage will occur. Essentially, exchange contracts use the open financial market to decide on the relative value of a pair and uses that as a market making strategy.'),(0,a.kt)("p",null,"A small liquidity provider fee ","(","0.30%",")"," is taken out of each trade and added to the reserves. While the ETH-ERC20 reserve ratio is constantly shifting, fees makes sure that the total combined reserve size increases with every trade. This functions as a payout to liquidity providers that is collected when they burn their pool tokens to withdraw their portion of total reserves. Guaranteed arbitrage opportunities from price fluctuations should push a steady flow of transactions through the system and increase the amount of fee revenue generated."),(0,a.kt)("p",null,"Since Uniswap is entirely on-chain, prices can change between when a transaction is signed and when it is included in a block. Traders can bound price fluctuations by specifying the minimum amount bought on sell orders, or the maximum amount sold on buy orders. This acts as a limit order that will automatically cancel if it is not filled. It is also possible to set transaction deadlines which will cancel orders if they are not executed fast enough."),(0,a.kt)("p",null,"The reason only one exchange per token can be registered to the factory is to encourage providers to pool their liquidity into a single reserve. However, Uniswap has built in support for ERC20-to-ERC20 trades using the public pools from the factory on one side of the transaction and custom, user-specified pool on the other. Custom pools could have fund managers, use alternate pricing mechanisms, remove liquidity provider fees, integrate complex three dimensional fomo-based ponzi-schemes and more. They just need to implement the Uniswap interface and accept ETH as an intermediary asset. Custom pools do not have the same safety properties as the public ones. It is recommended users only interact with audited, open-source smart contracts."),(0,a.kt)("p",null,"Upgrading censorship resistant, decentralized smart contracts is difficult. If significant improvements are made to the system a new version will be released. Liquidity providers can choose between moving to the new system or staying in the old one. If possible, new versions will be backwards compatible and able to trade ERC20-to-ERC20 with the old versions similar to a custom pool."),(0,a.kt)("h1",{id:"how-to-use-it"},"How to use it"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org"},"uniswap.org")," is the landing page for the Uniswap protocol. It describes the project and directs users where they need to go."),(0,a.kt)("p",null,"The Uniswap smart contracts live on Ethereum. Anyone can interact with them directly."),(0,a.kt)("p",null,"The Uniswap frontend is an open source interface designed to improve user experience when interacting with the smart contracts. Anyone can use the source code to host an interface, or build their own. Hosted interfaces are independent of Uniswap, and should comply with their jurisdictional laws and regulations."))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);