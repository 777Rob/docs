(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[4514],{1759:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"using-the-api",title:"Using the API",tags:"user-guides, documentation"},l=void 0,s={unversionedId:"guides/interface-integration/using-the-api",id:"version-V2/guides/interface-integration/using-the-api",isDocsHomePage:!1,title:"Using the API",description:"In this guide we will create a web interface that consumes and displays data from the Uniswap Subgraph. The goal is to provide a quick overview of a setup that you can extend to create your own UIs and analytics around Uniswap data.",source:"@site/versioned_docs/version-V2/guides/interface-integration/01-using-the-api.md",sourceDirName:"guides/interface-integration",slug:"/guides/interface-integration/using-the-api",permalink:"/protocol/V2/guides/interface-integration/using-the-api",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V2/guides/interface-integration/01-using-the-api.md",version:"V2",sidebarPosition:1,frontMatter:{id:"using-the-api",title:"Using the API",tags:"user-guides, documentation"},sidebar:"version-V2/mySidebar",previous:{title:"Adversarial Circumstances",permalink:"/protocol/V2/concepts/governance/adversarial-circumstances"},next:{title:"Custom Linking",permalink:"/protocol/V2/guides/interface-integration/custom-interface-linking"}},p=[{value:"Setup and Installs",id:"setup-and-installs",children:[]},{value:"Graphql Client",id:"graphql-client",children:[]},{value:"Writing the queries",id:"writing-the-queries",children:[]},{value:"Fetch data",id:"fetch-data",children:[]},{value:"Formatting Response",id:"formatting-response",children:[]},{value:"Displaying in the UI",id:"displaying-in-the-ui",children:[]},{value:"Next steps",id:"next-steps",children:[]},{value:"Review",id:"review",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide we will create a web interface that consumes and displays data from the Uniswap Subgraph. The goal is to provide a quick overview of a setup that you can extend to create your own UIs and analytics around Uniswap data."),(0,r.kt)("p",null,"Many different libraries can be used to create an interface and a connection to the subgraph graphql endpoint, but in this guide we will use ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," for the interface, and ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/"},"Apollo Client")," for sending queries. We'll also be using yarn for dependency management."),(0,r.kt)("h3",{id:"setup-and-installs"},"Setup and Installs"),(0,r.kt)("p",null,"We'll need to create the basic skeleton for the application. We'll use ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/create-a-new-react-app.html"},"create-react-app")," for this. We'll also add the dependencies we need. Navigate to your root location in your command line and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"yarn create react-app uniswap-demo\ncd uniswap-demo\nyarn add  apollo-client apollo-cache-inmemory apollo-link-http graphql graphql-tag @apollo/react-hooks\nyarn start\n")),(0,r.kt)("p",null,"In your browser you should see the default React app running. In a text editor open ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," within ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," and replace the contents with this stripped down boilerplate. We'll add to this as we go."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport "./App.css";\n\nfunction App() {\n  return <div></div>;\n}\n\nexport default App;\n')),(0,r.kt)("h3",{id:"graphql-client"},"Graphql Client"),(0,r.kt)("p",null,"We need to set up some middleware in order to make requests to the Uniswap subgraph and receive data. To do this we'll use Apollo and create a graphql client to handle this."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the imports shown below and instantiate a new client instance. Notice how we use the link to the Uniswap subgraph here.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport "./App.css";\nimport { ApolloClient } from "apollo-client";\nimport { InMemoryCache } from "apollo-cache-inmemory";\nimport { HttpLink } from "apollo-link-http";\n\nexport const client = new ApolloClient({\n  link: new HttpLink({\n    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",\n  }),\n  cache: new InMemoryCache(),\n});\n\nfunction App() {\n  return <div></div>;\n}\n\nexport default App;\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"We also need to add a context so that Apollo can handle requests properly. In your ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," file import the proper provider and wrap the root in it like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./App";\nimport registerServiceWorker from "./registerServiceWorker";\nimport "./index.css";\nimport { ApolloProvider } from "react-apollo";\nimport { client } from "./App";\n\nReactDOM.render(\n  <ApolloProvider client={client}>\n    <App />\n  </ApolloProvider>,\n  document.getElementById("root")\n);\nregisterServiceWorker();\n')),(0,r.kt)("h3",{id:"writing-the-queries"},"Writing the queries"),(0,r.kt)("p",null,"Next we'll construct our query and fetch data. For this example we will fetch some data about the Dai token on Uniswap V2. We'll get the current price, and total liquidity across all pairs. We'll be using the Dai address as an id in this query. We'll also fetch the USD price of ETH to help create USD conversion for Dai data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First we need to define the query itself. We'll use ",(0,r.kt)("inlineCode",{parentName:"li"},"gql")," to parse a query string into the GraphQL AST standard. Import the ",(0,r.kt)("inlineCode",{parentName:"li"},"gql")," helper into the app and use it to create the query. Add the following to your ",(0,r.kt)("inlineCode",{parentName:"li"},"App.js")," file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import gql from "graphql-tag";\n\nconst DAI_QUERY = gql`\n  query tokens($tokenAddress: Bytes!) {\n    tokens(where: { id: $tokenAddress }) {\n      derivedETH\n      totalLiquidity\n    }\n  }\n`;\n\nconst ETH_PRICE_QUERY = gql`\n  query ethPrice {\n    bundle(id: "1") {\n      ethPrice\n    }\n  }\n`;\n')),(0,r.kt)("p",null,"We use an id of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," for the bundle because there is only one hardcoded bundle in the subgraph."),(0,r.kt)("h3",{id:"fetch-data"},"Fetch data"),(0,r.kt)("p",null,"Now we're ready to use these queries to fetch data from the Uniswap V2 subgraph. To do this we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook which uses our client instance to fetch data, and gives us live info about the status of the request. To do this add the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useQuery } from "@apollo/react-hooks";\n\nconst { loading, error, data: ethPriceData } = useQuery(ETH_PRICE_QUERY);\nconst {\n  loading: daiLoading,\n  error: daiError,\n  data: daiData,\n} = useQuery(DAI_QUERY, {\n  variables: {\n    tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",\n  },\n});\n')),(0,r.kt)("p",null,"Notice we're using the Dai token address to fetch data about Dai."),(0,r.kt)("h3",{id:"formatting-response"},"Formatting Response"),(0,r.kt)("p",null,"Now that we have our data we can format it and display it in the UI. First, we parse the return data to get the actual data that we want. Then we'll use it to get the USD price of Dai. Lastly we'll insert this data into the UI itself."),(0,r.kt)("p",null,"These queries will return a response object for each query. Within each one we're interested in the root field we defined in the query definition. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"daiData")," response we defined this as ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens"),", and for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethPriceData")," query we defined this as ",(0,r.kt)("inlineCode",{parentName:"p"},"ethPrice"),". Within each one we'll get an array of results. Because we're only querying for single entities we'll reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," index in the data array."),(0,r.kt)("p",null,"Add the following lines to your ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file to parse the responses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const daiPriceInEth = daiData && daiData.tokens[0].derivedETH;\nconst daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity;\nconst ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice;\n")),(0,r.kt)("h3",{id:"displaying-in-the-ui"},"Displaying in the UI"),(0,r.kt)("p",null,"Finally we can use our parsed response data to hydrate the UI. We'll do this in two steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First we'll create loading states. To detect if a query is still pending a response we can reference the loading variables we've already defined. We'll add two loading states, one for the Dai price, and one for the Dai total liquidity. These may flicker fast because the time to query is fast.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Populate with loaded data. Once we detect that the queries have finished loading we can populate the UI with the real data."))),(0,r.kt)("p",null,"To do this add the following lines in the return function of your ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'return (\n  <div>\n    <div>\n      Dai price:{" "}\n      {ethLoading || daiLoading\n        ? "Loading token data..."\n        : "$" +\n          // parse responses as floats and fix to 2 decimals\n          (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}\n    </div>\n    <div>\n      Dai total liquidity:{" "}\n      {daiLoading\n        ? "Loading token data..."\n        : // display the total amount of DAI spread across all pools\n          parseFloat(daiTotalLiquidity).toFixed(0)}\n    </div>\n  </div>\n);\n')),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"This should render a very basic page with these two stats about the Dai token within Uniswap. This is a very basic example of what you can do with the Uniswap subgraph and we encourage you to build out more complex and interesting tools!"),(0,r.kt)("p",null,"You can visit our ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.info/"},"analytics site")," to see a more advanced analytics page, or visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-info"},"the github")," for more detailed examples of using the Uniswap subgraph to create UIs."),(0,r.kt)("h3",{id:"review"},"Review"),(0,r.kt)("p",null,"In the end your ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import React, { useEffect } from "react";\nimport "./App.css";\nimport { ApolloClient } from "apollo-client";\nimport { InMemoryCache } from "apollo-cache-inmemory";\nimport { HttpLink } from "apollo-link-http";\nimport { useQuery } from "@apollo/react-hooks";\nimport gql from "graphql-tag";\n\nexport const client = new ApolloClient({\n  link: new HttpLink({\n    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",\n  }),\n  fetchOptions: {\n    mode: "no-cors",\n  },\n  cache: new InMemoryCache(),\n});\n\nconst DAI_QUERY = gql`\n  query tokens($tokenAddress: Bytes!) {\n    tokens(where: { id: $tokenAddress }) {\n      derivedETH\n      totalLiquidity\n    }\n  }\n`;\n\nconst ETH_PRICE_QUERY = gql`\n  query bundles {\n    bundles(where: { id: "1" }) {\n      ethPrice\n    }\n  }\n`;\n\nfunction App() {\n  const { loading: ethLoading, data: ethPriceData } = useQuery(ETH_PRICE_QUERY);\n  const { loading: daiLoading, data: daiData } = useQuery(DAI_QUERY, {\n    variables: {\n      tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",\n    },\n  });\n\n  const daiPriceInEth = daiData && daiData.tokens[0].derivedETH;\n  const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity;\n  const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice;\n\n  return (\n    <div>\n      <div>\n        Dai price:{" "}\n        {ethLoading || daiLoading\n          ? "Loading token data..."\n          : "$" +\n            // parse responses as floats and fix to 2 decimals\n            (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}\n      </div>\n      <div>\n        Dai total liquidity:{" "}\n        {daiLoading\n          ? "Loading token data..."\n          : // display the total amount of DAI spread across all pools\n            parseFloat(daiTotalLiquidity).toFixed(0)}\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n')))}c.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);