(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[7185],{5161:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r={id:"adversarial-circumstances",title:"Adversarial Circumstances",tags:"goveranance, documentation"},s=void 0,c={unversionedId:"concepts/governance/adversarial-circumstances",id:"version-V2/concepts/governance/adversarial-circumstances",isDocsHomePage:!1,title:"Adversarial Circumstances",description:"This document explores some adversarial circumstances which Uniswap Governance may encounter in the future. Its goal is to help those interested in Uniswap Governance understand the reasoning behind some of its design, its limitations, and potential avenues for growth.",source:"@site/versioned_docs/version-V2/concepts/11-governance/05-adversarial-circumstances.md",sourceDirName:"concepts/11-governance",slug:"/concepts/governance/adversarial-circumstances",permalink:"/protocol/V2/concepts/governance/adversarial-circumstances",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V2/concepts/11-governance/05-adversarial-circumstances.md",version:"V2",sidebarPosition:5,frontMatter:{id:"adversarial-circumstances",title:"Adversarial Circumstances",tags:"goveranance, documentation"},sidebar:"version-V2/mySidebar",previous:{title:"Glossary",permalink:"/protocol/V2/concepts/governance/glossary"},next:{title:"Using the API",permalink:"/protocol/V2/guides/interface-integration/using-the-api"}},l=[{value:"Circumvention",id:"circumvention",children:[]},{value:"Circumvention",id:"circumvention-1",children:[]},{value:"Circumvention",id:"circumvention-2",children:[]},{value:"Circumvention",id:"circumvention-3",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explores some adversarial circumstances which Uniswap Governance may encounter in the future. Its goal is to help those interested in Uniswap Governance understand the reasoning behind some of its design, its limitations, and potential avenues for growth."),(0,i.kt)("h1",{id:"scenario-1"},"Scenario 1"),(0,i.kt)("p",null,"A good faith proposal is brought to vote but is found to have an exploitable edge case. A bad faith actor uses a series of DeFi leveraging strategies to quickly buy enough UNI during the voting period to sway the vote in favor of the proposal, passing it and exploiting the vulnerability."),(0,i.kt)("h2",{id:"circumvention"},"Circumvention"),(0,i.kt)("p",null,"UNI voting power must be delegated to an address either entirely before a proposal has been submitted or during the proposal delay period. For now, the proposal delay is set to one block, which is about 15 seconds. A proposal delay of one block leaves no opportunity for a third party to find an exploitable edge case and opportunistically purchase uni, self delegate and sway the vote."),(0,i.kt)("p",null,"In the future, Uniswap Governance may vote to increase the proposal delay. While there are obvious benefits to an increased proposal delay, It may introduce some potential adverse outcomes such as opportunistic edge case exploitation."),(0,i.kt)("h1",{id:"scenario-2"},"Scenario 2"),(0,i.kt)("p",null,"A bad faith proposal is crafted and submitted to vote, which is unambiguously not in the best interest of Uniswap Governance. Multiple parties collude ahead of time to corner the UNI market to force the proposal through, gain access to the UNI reserves, and drain the funds."),(0,i.kt)("h2",{id:"circumvention-1"},"Circumvention"),(0,i.kt)("p",null,"Since UNI is a freely tradable asset, anyone can attempt a governance takeover via market buying. That said, to force-pass a bad faith vote would require a minimum of 40 million UNI. If not outright impossible, this amount would be prohibitively expensive and likely cost more when accounting for price fluctuation than the net gain from the attack."),(0,i.kt)("p",null,"If a group somehow achieved a bad faith takeover, Timelock's delay would give affected agents time to withdraw their assets from the protocol. This would also be an opportunity to fork the protocol, a path that would likely be taken by the remaining good-faith actors."),(0,i.kt)("h1",{id:"scenario-3"},"Scenario 3"),(0,i.kt)("p",null,"A single party uses a flash loan to push through a proposal, potentially creating a pseudo-DDOS attack by spamming governance with proposals and preventing effective use."),(0,i.kt)("h2",{id:"circumvention-2"},"Circumvention"),(0,i.kt)("p",null,"A delegated balance of 2.5 million UNI is required to submit a vote, but the balance check is set exactly one block in the past. This prevents any flash loan proposals from being created, as flash loans cannot execute outside of a single block."),(0,i.kt)("p",null,"The proposer must also maintain a minimum balance of 2.5 million UNI throughout the voting period, or anyone may cancel the proposal. This balance maintenance check prevents many highly leveraged proposal techniques that may span several blocks."),(0,i.kt)("h1",{id:"scenario-4"},"Scenario 4"),(0,i.kt)("p",null,"A bad faith proposal is created, which will genuinely incentivize bad faith voting."),(0,i.kt)("p",null,"Exmaple: ",'"',"The treasury will be drained. Any votes in favor will be sent the balance of the treasury. Any votes opposed will be locked from the funds of the treasury.",'"'),(0,i.kt)("h2",{id:"circumvention-3"},"Circumvention"),(0,i.kt)("p",null,"No mechanism explicitly prevents this type of scenario, but market forces disincentivize it."),(0,i.kt)("p",null,"Because the treasury is comprised of UNI tokens exclusively, the market would react appropriately if a vote were to pass that would jeopardize the economic viability of Uniswap Governance and the UNI token. By the time the vote would pass, UNI's price would have fallen so low as to make the attack fruitless."),(0,i.kt)("p",null,"UNI acting as the only asset of the governance treasury disincentivizes this form of bad faith voting. Uniswap Governance may choose in the future to diversify governance assets. While there are many benefits to this path, some fringe possibilities such as incentivized bad faith voting may appear."))}p.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);