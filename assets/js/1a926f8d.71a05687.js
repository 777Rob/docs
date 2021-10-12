(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[5941],{1017:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var i=o(2122),n=o(9756),r=(o(7294),o(3905)),a={id:"pools",title:"Pools",tags:"pools, documentation"},s=void 0,l={unversionedId:"concepts/core-concepts/pools",id:"version-V2/concepts/core-concepts/pools",isDocsHomePage:!1,title:"Pools",description:"Each Uniswap liquidity pool is a trading venue for a pair of ERC20 tokens. When a pool contract is created, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool. They are incentivized to deposit an equal value of both tokens into the pool. To see why, consider the case where the first liquidity provider deposits tokens at a ratio different from the current market rate. This immediately creates a profitable arbitrage opportunity, which is likely to be taken by an external party.",source:"@site/versioned_docs/version-V2/concepts/02-core-concepts/02-pools.md",sourceDirName:"concepts/02-core-concepts",slug:"/concepts/core-concepts/pools",permalink:"/protocol/V2/concepts/core-concepts/pools",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V2/concepts/02-core-concepts/02-pools.md",version:"V2",sidebarPosition:2,frontMatter:{id:"pools",title:"Pools",tags:"pools, documentation"},sidebar:"version-V2/mySidebar",previous:{title:"Swaps",permalink:"/protocol/V2/concepts/core-concepts/swaps"},next:{title:"Flash Swaps",permalink:"/protocol/V2/concepts/core-concepts/flash-swaps"}},c=[],p={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(2932).Z})),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Each Uniswap liquidity pool is a trading venue for a pair of ERC20 tokens. When a pool contract is created, its balances of each token are 0; in order for the pool to begin facilitating trades, someone must seed it with an initial deposit of each token. This first liquidity provider is the one who sets the initial price of the pool. They are incentivized to deposit an equal ",(0,r.kt)("em",{parentName:"p"},"value")," of both tokens into the pool. To see why, consider the case where the first liquidity provider deposits tokens at a ratio different from the current market rate. This immediately creates a profitable arbitrage opportunity, which is likely to be taken by an external party."),(0,r.kt)("p",null,"When other liquidity providers add to an existing pool, they must deposit pair tokens proportional to the current price. If they don\u2019t, the liquidity they added is at risk of being arbitraged as well. If they believe the current price is not correct, they may arbitrage it to the level they desire, and add liquidity at that price."),(0,r.kt)("h1",{id:"pool-tokens"},"Pool tokens"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(3638).Z})),(0,r.kt)("p",null,"Whenever liquidity is deposited into a pool, unique tokens known as ",(0,r.kt)("em",{parentName:"p"},"liquidity tokens")," are minted and sent to the provider's address. These tokens represent a given liquidity provider's contribution to a pool. The proportion of the pool's liquidity provided determines the number of liquidity tokens the provider receives. If the provider is minting a new pool, the number of liquidity tokens they will receive will equal sqrt(x ","*"," y), where x and y represent the amount of each token provided."),(0,r.kt)("p",null,"Whenever a trade occurs, a 0.3% fee is charged to the transaction sender. This fee is distributed ",(0,r.kt)("em",{parentName:"p"},"pro-rata")," to all LPs in the pool upon completion of the trade."),(0,r.kt)("p",null,'To retrieve the underlying liquidity, plus any fees accrued, liquidity providers must "burn" their liquidity tokens, effectively exchanging them for their portion of the liquidity pool, plus the proportional fee allocation.'),(0,r.kt)("p",null,"As liquidity tokens are themselves tradable assets, liquidity providers may sell, transfer, or otherwise use their liquidity tokens in any way they see fit."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more with advanced topics:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../concepts/advanced-topics/understanding-returns"},"Understanding Returns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../concepts/advanced-topics/fees"},"Fees"))),(0,r.kt)("h1",{id:"why-pools"},"Why pools?"),(0,r.kt)("p",null,"Uniswap is unique in that it doesn\u2019t use an order book to derive the price of an asset or to match buyers and sellers of tokens. Instead, Uniswap uses what are called Liquidity Pools."),(0,r.kt)("p",null,"Liquidity is typically represented by discrete orders placed by individuals onto a centrally operated order book. A participant looking to provide liquidity or make markets must actively manage their orders, continuously updating them in response to the activity of others in the marketplace."),(0,r.kt)("p",null,"While order books are foundational to finance and work great for certain usecases, they suffer from a few important limitations that are especially magnified when applied to a decentralized or blockchain-native setting. Order books require intermediary infrastructure to host the orderbook and match orders. This creates points of control and adds additional layers of complexity. They also require active participation and management from market makers who usually use sophisticated infrastructure and algorithms, limiting participation to advanced traders. Order books were invented in a world with relatively few assets being traded, so it is not surprising they aren't ideal for an ecosystem where anyone can create their own token, and those tokens usually have low liquidity. In sum, with the infrastructural trade-offs presented by a platform like Ethereum, order books are not the native architecture for implementing a liquidity protocol on a blockchain."),(0,r.kt)("p",null,"Uniswap focuses on the strengths of Ethereum to reimagine token swaps from first principles."),(0,r.kt)("p",null,"A blockchain-native liquidity protocol should take advantage of the trusted code execution environment, the autonomous and perpetually running virtual machine, and an open, permissionless, and inclusive access model that produces an exponentially growing ecosystem of virtual assets."),(0,r.kt)("p",null,"It is important to reiterate that a Pool is just a smart contract, operated by users calling functions on it. Swapping tokens is calling ",(0,r.kt)("inlineCode",{parentName:"p"},"swap")," on a Pool contract instance, while providing liquidity is calling ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit"),"."),(0,r.kt)("p",null,"Just how end-users can interact with the Uniswap protocol through the Interface (which in turn interacts with the underlying contracts), developers can interact directly with the smart contracts and integrate Uniswap functionality into their own applications without relying on intermediaries or needing permission."),(0,r.kt)("h1",{id:"developer-resources"},"Developer resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To see how to pool tokens in a smart contract read ",(0,r.kt)("a",{parentName:"li",href:"../../guides/smart-contract-integration/providing-liquidity"},"Providing Liquidity"),".")))}d.isMDXComponent=!0},3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return h}});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=n,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return o?i.createElement(f,a(a({ref:t},p),{},{components:o})):i.createElement(f,a({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2932:function(e,t,o){"use strict";t.Z=o.p+"assets/images/anatomy-82d82239e5417e36ca9da17d14961434.jpg"},3638:function(e,t,o){"use strict";t.Z=o.p+"assets/images/lp-c0b1b03ef921f1325971fa8ab6e9a4f1.jpg"}}]);