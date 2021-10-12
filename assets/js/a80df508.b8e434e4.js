(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[5436],{2773:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l={id:"governance-reference",title:"Governance Reference",tags:"governance, documentation"},i=void 0,d={unversionedId:"reference/Governance/governance-reference",id:"version-V3/reference/Governance/governance-reference",isDocsHomePage:!1,title:"Governance Reference",description:"The updated reference for the newly deployed Governor Bravo is available via Etherscan, some of the reference material below may be out of date.",source:"@site/versioned_docs/version-V3/reference/Governance/governance-reference.md",sourceDirName:"reference/Governance",slug:"/reference/Governance/governance-reference",permalink:"/protocol/reference/Governance/governance-reference",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/reference/Governance/governance-reference.md",version:"V3",frontMatter:{id:"governance-reference",title:"Governance Reference",tags:"governance, documentation"},sidebar:"version-V3/mySidebar",previous:{title:"Smart Contracts Overview",permalink:"/protocol/reference/smart-contracts"},next:{title:"UniswapV3Factory",permalink:"/protocol/reference/core/UniswapV3Factory"}},p=[{value:"Timelock",id:"timelock",children:[]},{value:"DelegateChanged",id:"delegatechanged",children:[]},{value:"DelegateVotesChanged",id:"delegatevoteschanged",children:[]},{value:"ProposalCreated",id:"proposalcreated",children:[]},{value:"VoteCast",id:"votecast",children:[]},{value:"ProposalCanceled",id:"proposalcanceled",children:[]},{value:"ProposalQueued",id:"proposalqueued",children:[]},{value:"ProposalExecuted",id:"proposalexecuted",children:[]},{value:"Get Current Votes",id:"get-current-votes",children:[]},{value:"Get Prior Votes",id:"get-prior-votes",children:[]},{value:"Delegate",id:"delegate",children:[]},{value:"Delegate By Signature",id:"delegate-by-signature",children:[]},{value:"Quorum Votes",id:"quorum-votes",children:[]},{value:"Proposal Threshold",id:"proposal-threshold",children:[]},{value:"Proposal Max Operations",id:"proposal-max-operations",children:[]},{value:"Voting Delay",id:"voting-delay",children:[]},{value:"Voting Period",id:"voting-period",children:[]},{value:"Get Actions",id:"get-actions",children:[]},{value:"Get Receipt",id:"get-receipt",children:[]},{value:"State",id:"state",children:[]},{value:"Propose",id:"propose",children:[]},{value:"Queue",id:"queue",children:[]},{value:"Execute",id:"execute",children:[]},{value:"Cancel",id:"cancel",children:[]},{value:"Cast Vote",id:"cast-vote",children:[]},{value:"Cast Vote By Signature",id:"cast-vote-by-signature",children:[]}],s={toc:p};function c(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The updated reference for the newly deployed Governor Bravo is available via ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x408ED6354d4973f66138C91495F2f2FCbd8724C3"},"Etherscan"),", some of the reference material below may be out of date.")),(0,o.kt)("p",null,"The Uniswap protocol is governed and upgraded by UNI token holders, using three distinct components; the UNI token, governance module, and Timelock. Together, these contracts allow the community to propose, vote, and implement changes to the uniswap protocol."),(0,o.kt)("p",null,"Any addresses with more than 2.5M UNI delegated to it may propose governance actions, which contain finished, executable code. When a proposal is created, the community can cast their votes during a 3 day voting period. If a majority, and at least 4M votes are cast for the proposal, it is queued in the Timelock, and may be executed in a minimum of 2 days."),(0,o.kt)("h2",{id:"timelock"},"Timelock"),(0,o.kt)("p",null,"The Timelock contract can modify system parameters, logic, and contracts in a 'time-delayed, opt-out' upgrade pattern. Timelock has a hard-coded minimum delay of 2 days, which is the least amount of notice possible for a governance action. Each proposed action will be published at a minimum of 2 days in the future from the time of announcement. Major upgrades, such as changing the risk system, may have up to a 30 day delay. Timelock is controlled by the governance module; pending and completed governance actions can be monitored on the Timelock Dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4659).Z})),(0,o.kt)("h1",{id:"key-events"},"Key Events"),(0,o.kt)("h2",{id:"delegatechanged"},"DelegateChanged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)\n")),(0,o.kt)("p",null,"Emitted when an account changes its delegate."),(0,o.kt)("h2",{id:"delegatevoteschanged"},"DelegateVotesChanged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"DelegateVotesChanged(address indexed delegate, uint previousBalance, uint newBalance)\n")),(0,o.kt)("p",null,"Emitted when a delegate account's vote balance changes."),(0,o.kt)("h2",{id:"proposalcreated"},"ProposalCreated"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"ProposalCreated(uint id, address proposer, address[] targets, uint[] values, string[] signatures, bytes[] calldatas, uint startBlock, uint endBlock, string description)\n")),(0,o.kt)("p",null,"Emitted when a new proposal is created."),(0,o.kt)("h2",{id:"votecast"},"VoteCast"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"VoteCast(address voter, uint proposalId, bool support, uint votes)\n")),(0,o.kt)("p",null,"Emitted when a vote has been cast on a proposal."),(0,o.kt)("h2",{id:"proposalcanceled"},"ProposalCanceled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"ProposalCanceled(uint id)\n")),(0,o.kt)("p",null,"Emitted when a proposal has been canceled."),(0,o.kt)("h2",{id:"proposalqueued"},"ProposalQueued"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"ProposalQueued(uint id, uint eta)\n")),(0,o.kt)("p",null,"Emitted when a proposal has been queued in the Timelock."),(0,o.kt)("h2",{id:"proposalexecuted"},"ProposalExecuted"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"ProposalExecuted(uint id)\n")),(0,o.kt)("p",null,"Emitted when a proposal has been executed in the Timelock."),(0,o.kt)("h1",{id:"read-only-functions-uni"},"Read-Only Functions: UNI"),(0,o.kt)("h2",{id:"get-current-votes"},"Get Current Votes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getCurrentVotes(address account) returns (uint96)\n")),(0,o.kt)("p",null,"Returns the balance of votes for an account as of the current block."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"account"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"address")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Address of the account of which to retrieve the number of votes.")))),(0,o.kt)("h2",{id:"get-prior-votes"},"Get Prior Votes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getPriorVotes(address account, uint blockNumber) returns (uint96)\n")),(0,o.kt)("p",null,"Returns the prior number of votes for an account at a specific block number. The block number passed must be a finalized block or the function will revert."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"account"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"address")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Address of the account of which to retrieve the prior number of votes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"blocknumber"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The block number at which to retrieve the prior number of votes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"unnamed"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint96")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The number of prior votes")))),(0,o.kt)("h1",{id:"state-changing-functions-uni"},"State-Changing Functions: UNI"),(0,o.kt)("h2",{id:"delegate"},"Delegate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function delegate(address delegatee)\n")),(0,o.kt)("p",null,"Delegate votes from the sender to the delegatee. Users can delegate to 1 address at a time, and the number of votes added to the delegatee\u2019s vote count is equivalent to the balance of UNI in the user\u2019s account. Votes are delegated from the current block and onward, until the sender delegates again, or transfers their UNI."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"delegatee"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"address")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The address to which msg.sender wishes to delegate their votes to.")))),(0,o.kt)("h2",{id:"delegate-by-signature"},"Delegate By Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function delegateBySig(address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r, bytes32 s)\n")),(0,o.kt)("p",null,"Delegate votes from the sender to the delegatee. Users can delegate to 1 address at a time, and the number of votes added to the delegatee\u2019s vote count is equivalent to the balance of UNI in the user\u2019s account. Votes are delegated from the current block and onward, until the sender delegates again, or transfers their UNI."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"delegatee"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"address")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The address to which msg.sender wishis to delegate their vote to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nonce"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The contract state required to match the signature. This can be retrieved from the contract\u2019s public nonces mapping")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"expiry"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The time when the signature expires. A block timestamp in seconds since the unix epoch.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"v"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The recovery byte of the signature.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"r"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"s"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair.")))),(0,o.kt)("h1",{id:"read-only-functions-governor-alpha"},"Read-Only Functions: Governor Alpha"),(0,o.kt)("h2",{id:"quorum-votes"},"Quorum Votes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function quorumVotes() public pure returns (uint)\n")),(0,o.kt)("p",null,"Returns the minimum number of votes required for a proposal to succeed."),(0,o.kt)("h2",{id:"proposal-threshold"},"Proposal Threshold"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function proposalThreshold() returns (uint)\n")),(0,o.kt)("p",null,"Returns the minimum number of votes required for an account to create a proposal."),(0,o.kt)("h2",{id:"proposal-max-operations"},"Proposal Max Operations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function proposalMaxOperations() returns (uint)\n")),(0,o.kt)("p",null,"Returns the maximum number of actions that can be included in a proposal. Actions are functions calls that will be made when a proposal succeeds and executes."),(0,o.kt)("h2",{id:"voting-delay"},"Voting Delay"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function votingDelay() returns (uint)\n")),(0,o.kt)("p",null,"Returns the number of blocks to wait before voting on a proposal may begin. This value is added to the current block number when a proposal is created."),(0,o.kt)("h2",{id:"voting-period"},"Voting Period"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function votingPeriod() returns (uint)\n")),(0,o.kt)("p",null,"Returns the duration of voting on a proposal, in blocks."),(0,o.kt)("h2",{id:"get-actions"},"Get Actions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getActions(uint proposalId) returns (uint proposalId) public view returns (address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas)\n")),(0,o.kt)("p",null,"Gets the actions of a selected proposal. Pass a proposal ID and get the targets, values, signatures and calldatas of that proposal."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of the proposal")))),(0,o.kt)("p",null,"Returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Array of addresses of contracts the proposal calls."),(0,o.kt)("li",{parentName:"ul"},"Array of unsigned integers the proposal uses as values."),(0,o.kt)("li",{parentName:"ul"},"Array of strings of the proposal\u2019s signatures."),(0,o.kt)("li",{parentName:"ul"},"Array of calldata bytes of the proposal.")),(0,o.kt)("h2",{id:"get-receipt"},"Get Receipt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getReceipt(uint proposalId, address voter) returns (Receipt memory)\n")),(0,o.kt)("p",null,"Returns a proposal ballot receipt of a given voter."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of the proposal in which to get a voter\u2019s ballot receipt.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"voter"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"address")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Address of the account of a proposal voter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Receipt"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"struct")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A Receipt struct for the ballot of the voter address.")))),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function state(uint proposalId) returns (ProposalState)\n")),(0,o.kt)("p",null,"Returns enum of type ProposalState, possible types are:\n-Pending\n-Active\n-Canceled\n-Defeated\n-Succeeded\n-Queued\n-Expired\n-andExecuted"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of the proposal")))),(0,o.kt)("h1",{id:"state-changing-functions-governor-alpha"},"State-Changing Functions: Governor Alpha"),(0,o.kt)("h2",{id:"propose"},"Propose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function propose(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas, string memory description) returns (uint)\n")),(0,o.kt)("p",null,"Creates a Proposal to change the protocol."),(0,o.kt)("p",null,"Proposals will be voted on by delegated voters. If there is sufficient support before the voting period ends, the proposal shall be automatically enacted. Enacted proposals are queued and executed in the Timelock contract."),(0,o.kt)("p",null,"The sender must hold more UNI than the current proposal threshold (proposalThreshold()) as of the immediately previous block. The proposal can have up to 10 actions (based on proposalMaxOperations())."),(0,o.kt)("p",null,"The proposer cannot create another proposal if they currently have a pending or active proposal. It is not possible to queue two identical actions in the same block (due to a restriction in the Timelock), therefore actions in a single proposal must be unique, and unique proposals that share an identical action must be queued in different blocks."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"targets"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"address")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ordered list of target addresses for calls to be made during proposal execution. This array must be the same length as all other array parameters in this function.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"values"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ordered list of values (i.e. msg.value) to be passed to the calls made during proposal execution. This array must be the same length as all other array parameters in this function")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"signatures"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ordered list of function signatures to be passed during execution. This array must be the same length as all other array parameters in this function.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"calldatas"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bytes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ordered list of data to be passed to each individual function call during proposal execution. This array must be the same length as all other array parameters in this function.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"description"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A human readable description of the proposal and the changes it will enact.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Unnamed"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Returns ID of the new proposal")))),(0,o.kt)("h2",{id:"queue"},"Queue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function queue(uint proposalId)\n")),(0,o.kt)("p",null,"After a proposal has succeeded, any address can call the queue method to move the proposal into the Timelock queue. A proposal can only be queued if it has succeeded."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of a given successful proposal")))),(0,o.kt)("h2",{id:"execute"},"Execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function execute(uint proposalId) payable\n")),(0,o.kt)("p",null,"After the Timelock delay period, any account may invoke the execute method to apply the changes from the proposal to the target contracts. This will invoke each of the actions described in the proposal.\nThis function is payable so the Timelock contract can invoke payable functions that were selected in the proposal."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of a given successful proposal")))),(0,o.kt)("h2",{id:"cancel"},"Cancel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function queue(uint proposalId)\n")),(0,o.kt)("p",null,"Cancel a proposal that has not yet been executed. The Guardian is the only one who may execute this unless the proposer does not maintain the delegates required to create a proposal. If the proposer does not have more delegates than the proposal threshold, anyone can cancel the proposal."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of a proposal to cancel")))),(0,o.kt)("h2",{id:"cast-vote"},"Cast Vote"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function castVote(uint proposalId, bool support)\n")),(0,o.kt)("p",null,"Cast a vote on a proposal. The account's voting weight is determined by it's number of delegated votes at the time the proposal becomes active."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of a given successful proposal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"support"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A boolean of true for 'yes' or false for 'no' on the proposal vote.")))),(0,o.kt)("h2",{id:"cast-vote-by-signature"},"Cast Vote By Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function castVoteBySig(uint proposalId, bool support, uint8 v, bytes32 r, bytes32 s)\n")),(0,o.kt)("p",null,"Cast a vote on a proposal. The account's voting weight is determined its number of delegated votes at the time the proposal became active. This method has the same purpose as Cast Vote, but instead enables offline signatures to participate in governance voting. For more details on how to create an offline signature, review EIP-712."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"proposalId"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of a given successful proposal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"support"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A boolean of true for 'yes' or false for 'no' on the proposal vote.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"expiry"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The time when the signature expires. A block timestamp in seconds since the unix epoch.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"v"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The recovery byte of the signature.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"r"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"s"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"bytes32")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Half of the ECDSA signature pair.")))))}c.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4659:function(e,t,a){"use strict";t.Z=a.p+"assets/images/gov_diagram-1-9bc9f7797121de9e8c8210d39b1c0dc3.png"}}]);