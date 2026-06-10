export const studyData = {
  units: [
    {
      id: "u3",
      title: "Unit 3 — Ethereum",
      color: "c-purple",
      topics: [
        {
          name: "Ethereum Ecosystem Components",
          marks: "7–9",
          exams: "Nov 25, May 25, Nov 24, May 24",
          idk: "IDK — What even is Ethereum and what parts make it up?",
          answer: `Ethereum is a decentralized, open-source blockchain platform for Smart Contracts and DApps.`,
          points: [
            "1. Ethereum Blockchain — Distributed ledger storing all transactions. Provides transparency, immutability, security.",
            "2. Ether (ETH) — Native cryptocurrency used to pay Gas fees, trade, and reward validators.",
            "3. Smart Contracts — Self-executing programs that run automatically when conditions are met. No intermediary needed.",
            "4. Ethereum Virtual Machine (EVM) — Executes smart contract code on all nodes with same result. Provides security and consistency.",
            "5. DApps — Applications built on Ethereum using smart contracts. No central authority. Examples: DeFi, NFT marketplaces, Voting.",
            "6. Nodes — Computers storing blockchain data. Types: Full, Light, Archive.",
            "7. Wallets — Store private keys, manage ETH. Examples: MetaMask, Trust Wallet.",
            "8. Gas — Fee paid in ETH for executing transactions. Prevents network abuse.",
            "9. Validators — Stake ETH to verify transactions and create blocks (Proof-of-Stake)."
          ]
        },
        {
          name: "Smart Contracts — Working",
          marks: "6–9",
          exams: "Nov 25, May 25, May 24",
          idk: "IDK — How does a smart contract actually work step by step?",
          answer: `A Smart Contract is a self-executing digital agreement stored on blockchain that runs automatically when predefined conditions are met.`,
          points: [
            "Step 1: Contract Creation — Developer writes code defining the rules. Example: 'If customer pays ₹500, grant course access.'",
            "Step 2: Deployment — Uploaded to blockchain permanently. Cannot be easily changed.",
            "Step 3: User Initiates Transaction — User sends a transaction with required input.",
            "Step 4: Verification — Blockchain nodes validate the transaction and check conditions.",
            "Step 5: Automatic Execution — If conditions are true, contract executes automatically. No third party needed.",
            "Step 6: Record Stored — Result is permanently recorded on blockchain for all to verify.",
            "Advantages: Automation, no intermediary, high security, transparency, faster transactions, reduced cost.",
            "Applications: Banking, Supply Chain, Insurance, Voting, Healthcare, Real Estate."
          ]
        },
        {
          name: "Block & Blockchain Platform",
          marks: "5–6",
          exams: "Nov 25, May 25",
          idk: "IDK — What is a block and how does blockchain work?",
          answer: `A Block is the basic unit storing transaction data. A Blockchain is blocks linked via cryptographic hashes.`,
          points: [
            "Block components: Block Number, Transaction Data, Timestamp, Previous Hash, Current Hash.",
            "Blockchain: Each block contains hash of previous block → creates tamper-resistant chain. If one block changes, all subsequent hashes change.",
            "Blockchain Platform features: Decentralization, Transparency, Security, Immutability, Traceability.",
            "Examples of platforms: Ethereum, Hyperledger Fabric, Corda, Quorum.",
            "Functions: Stores records, validates transactions, executes smart contracts, maintains consensus."
          ]
        },
        {
          name: "Ethereum Features",
          marks: "6–9",
          exams: "Nov 25, May 25, Nov 24",
          idk: "IDK — What makes Ethereum special/different?",
          answer: `Ethereum was proposed by Vitalik Buterin in 2013, launched 2015. Unlike Bitcoin (only payments), Ethereum supports programmable applications.`,
          points: [
            "1. Smart Contracts — Self-executing programs, no intermediary.",
            "2. Decentralization — Distributed nodes, no central authority.",
            "3. EVM (Ethereum Virtual Machine) — Runs contracts same way on all nodes.",
            "4. DApps — Apps without central server.",
            "5. Ether (ETH) — Native crypto for gas fees and staking.",
            "6. Security — Cryptographic protection, difficult to alter data.",
            "7. Transparency — All transactions publicly verifiable.",
            "8. Immutability — Data cannot be changed once stored.",
            "9. Proof of Stake (PoS) — Validators stake ETH, less energy than mining."
          ]
        },
        {
          name: "Solidity — Ethereum Programming Language",
          marks: "7",
          exams: "Nov 25, May 25",
          idk: "IDK — What language do you use to code on Ethereum?",
          answer: `Solidity is a high-level, object-oriented, contract-oriented programming language for writing smart contracts on EVM.`,
          points: [
            "1. Contract-Oriented — Specifically designed for smart contracts containing business logic.",
            "2. Object-Oriented — Supports inheritance, functions, data types.",
            "3. Statically Typed — Variable types must be declared before use.",
            "4. Supports Libraries — Reusable code to reduce duplication.",
            "5. EVM Compatible — Compiled to bytecode → runs on EVM.",
            "Working: Write → Compile to bytecode → Deploy on blockchain → EVM executes when user interacts.",
            "Basic Example: pragma solidity ^0.8.0; contract HelloWorld { string public message = 'Hello Ethereum'; }",
            "Applications: Smart Contracts, DApps, Banking, Supply Chain, Voting, NFT Platforms."
          ]
        },
        {
          name: "Bytecode & Runtime Bytecode",
          marks: "5–9",
          exams: "Nov 25, May 24",
          idk: "IDK — What is bytecode and why does it matter?",
          answer: `Bytecode is the compiled form of a smart contract that EVM can execute. Runtime Bytecode is what stays on blockchain after deployment.`,
          points: [
            "Process: Solidity Code → Compiler → Bytecode → EVM → Execution.",
            "Importance of Bytecode: EVM can't read Solidity directly; bytecode is the executable form. Platform-independent (runs same on all nodes). Secure and efficient.",
            "Runtime Bytecode: After deployment, only runtime bytecode stays on blockchain (not deployment instructions). Executed every time a user calls a contract function.",
            "Languages supported by Ethereum: Solidity (most popular), Vyper (Python-like, secure), Yul (low-level), LLL (Lisp-based), Serpent (deprecated)."
          ]
        },
        {
          name: "Ethereum vs Bitcoin",
          marks: "6–9",
          exams: "Nov 24, May 24",
          idk: "IDK — How is Ethereum different from Bitcoin?",
          answer: `Both are blockchains, but their purposes differ greatly.`,
          points: [
            "Founder: Ethereum = Vitalik Buterin | Bitcoin = Satoshi Nakamoto.",
            "Launch: Ethereum = 2015 | Bitcoin = 2009.",
            "Currency: ETH vs BTC.",
            "Main purpose: Ethereum = Smart Contracts + DApps | Bitcoin = Digital currency/payments.",
            "Smart contracts: Ethereum = Yes (Solidity) | Bitcoin = Limited.",
            "Consensus: Ethereum = Proof of Stake | Bitcoin = Proof of Work.",
            "Speed: Ethereum ≈ 12 sec/block | Bitcoin ≈ 10 minutes/block.",
            "Energy: Ethereum = Lower | Bitcoin = Higher.",
            "Supply: Ethereum = No fixed max | Bitcoin = Max 21 million BTC.",
            "Transaction fee: Ethereum = Gas fee | Bitcoin = Transaction fee."
          ]
        },
        {
          name: "Ethereum Networks",
          marks: "6",
          exams: "Nov 24",
          idk: "IDK — What are the different Ethereum networks?",
          answer: `Ethereum has different networks for different purposes.`,
          points: [
            "1. Mainnet — Official live network. Real ETH used. Permanent records.",
            "2. Testnet — For testing before mainnet. Uses free test ETH. Examples: Sepolia, Holesky.",
            "3. Private Network — Controlled by one organization. Restricted access. Used for internal/enterprise testing.",
            "4. Consortium Network — Managed by multiple organizations. Limited to approved participants. Used in banking, healthcare, supply chain.",
            "5. Development Network — Local network on developer's computer. Examples: Ganache, Hardhat. Fast and free."
          ]
        },
        {
          name: "Ethereum 4 Stages of Development",
          marks: "6",
          exams: "Nov 24",
          idk: "IDK — How did Ethereum evolve over time?",
          answer: `Ethereum developed in 4 major stages, each adding improvements.`,
          points: [
            "1. Frontier (2015) — First release. Basic mining and smart contracts. For developers/early adopters only.",
            "2. Homestead (2016) — First stable version. Improved security and stability. Suitable for public use.",
            "3. Metropolis (2017–2019) — Two upgrades: Byzantium (privacy, security, reduced complexity) + Constantinople (efficiency, lower cost, scalability).",
            "4. Serenity / Ethereum 2.0 — Introduced Proof of Stake (PoS). Reduced energy. Improved scalability, speed, and security."
          ]
        },
        {
          name: "State Transition & EVM Instructions",
          marks: "6",
          exams: "Nov 24",
          idk: "IDK — How does Ethereum update its state and what are EVM instructions?",
          answer: `Ethereum maintains state of all accounts. State Transition Function updates it when a transaction occurs.`,
          points: [
            "Formula: S' = Y(S, T) — where S=current state, T=transaction, S'=new state.",
            "Working: User submits tx → Verify → Calculate gas → EVM executes → Update balances/contracts → New state generated.",
            "EVM Instructions (Opcodes): ADD, SUB, MUL, DIV (math); PUSH/POP (stack); SSTORE/SLOAD (storage); JUMP (control flow); STOP (end).",
            "Each opcode consumes gas. Stack-based execution. Deterministic results on all nodes."
          ]
        }
      ]
    },
    {
      id: "u4",
      title: "Unit 4 — Hyperledger",
      color: "c-teal",
      topics: [
        {
          name: "Hyperledger Fabric — Benefits",
          marks: "6",
          exams: "Nov 25, May 25, May 24",
          idk: "IDK — Why use Hyperledger Fabric and what are its advantages?",
          answer: `Hyperledger Fabric is an open-source enterprise blockchain by Linux Foundation for building secure, private business applications.`,
          points: [
            "1. Permissioned Network — Only authorized users can join. Improves security.",
            "2. High Security — Digital certificates, authentication. Protects from unauthorized access.",
            "3. Privacy & Confidentiality — Private channels for selected members. Sensitive data stays confidential.",
            "4. High Performance — Faster transactions than public blockchains.",
            "5. Modular Architecture — Customizable components (consensus, membership services).",
            "6. Smart Contract (Chaincode) Support — Automates business processes.",
            "7. Scalability — Handles large number of users/transactions easily.",
            "8. No Cryptocurrency Required — No mining needed. Reduces operational cost."
          ]
        },
        {
          name: "How Hyperledger Fabric Works",
          marks: "6",
          exams: "Nov 25",
          idk: "IDK — What happens step by step when a transaction occurs in Hyperledger?",
          answer: `Hyperledger Fabric processes transactions through a defined sequence involving clients, peers, and orderers.`,
          points: [
            "Step 1: Transaction Proposal — Client sends request to endorsing peers.",
            "Step 2: Transaction Endorsement — Peers execute via chaincode, verify, generate endorsement signatures.",
            "Step 3: Proposal Response — Endorsed results sent back to client.",
            "Step 4: Transaction Ordering — Client sends to Ordering Service which sequences transactions and creates blocks.",
            "Step 5: Block Distribution — Blocks distributed to all peers.",
            "Step 6: Validation & Commitment — Peers validate endorsements → commit to ledger → update world state."
          ]
        },
        {
          name: "Applications Built on Hyperledger",
          marks: "5",
          exams: "Nov 25",
          idk: "IDK — What can you actually build with Hyperledger?",
          answer: `Hyperledger Fabric is used for secure, transparent, permission-based business applications.`,
          points: [
            "1. Supply Chain Management — Track goods from manufacturer to customer. Reduce fraud.",
            "2. Banking & Financial Services — Secure payments, fund transfers, trade finance.",
            "3. Healthcare — Store/share patient records securely with authorized access.",
            "4. Digital Identity Management — Manage user authentication, prevent identity theft.",
            "5. Insurance — Automate claim processing with smart contracts.",
            "6. Government & Public Services — Land records, voting systems, document verification.",
            "7. Asset Tracking — Track ownership and transfer. Tamper-proof records."
          ]
        },
        {
          name: "Hyperledger Fabric Architecture & Components",
          marks: "5–9",
          exams: "Nov 25, May 25, Nov 24, May 24",
          idk: "IDK — What are the building blocks of Hyperledger Fabric?",
          answer: `Hyperledger Fabric has several interconnected components that together enable secure permissioned transactions.`,
          points: [
            "1. Client Application — Sends transaction requests, receives results. (Web/Mobile/Desktop/SDK)",
            "2. Peer Nodes — Maintain ledger copies, validate and commit transactions.",
            "3. Endorsing Peers — Execute chaincode, approve transactions with endorsement signatures.",
            "4. Ordering Service — Orders transactions, creates blocks, ensures all peers get same sequence.",
            "5. Ledger — Permanent transaction store. Has Blockchain + World State database.",
            "6. Chaincode (Smart Contract) — Business logic. Automatically executes rules.",
            "7. Membership Service Provider (MSP) — Manages identities. Authentication and authorization.",
            "8. Channels — Private sub-networks within Fabric for confidential transactions among selected members."
          ]
        },
        {
          name: "Contents of a Hyperledger Block",
          marks: "6",
          exams: "Nov 24",
          idk: "IDK — What's inside each block in Hyperledger Fabric?",
          answer: `Each block in Hyperledger has 3 main sections: Block Header, Block Data, Block Metadata.`,
          points: [
            "1. Block Header — Block Number (position in chain) + Previous Block Hash (links to prior block) + Data Hash (hash of all transactions). Ensures security and immutability.",
            "2. Block Data — Actual transactions: sender/receiver details, chaincode execution results, transaction inputs/outputs. Main content of block.",
            "3. Block Metadata — Timestamp, validation status of transactions, creator signature (orderer), read/write set details. Used for verification and auditing."
          ]
        },
        {
          name: "Use of Hyperledger in Blockchain",
          marks: "6",
          exams: "Nov 25",
          idk: "IDK — Why does Hyperledger exist and what role does it play?",
          answer: `Hyperledger is an open-source blockchain framework by Linux Foundation, mainly for private and permissioned enterprise blockchains.`,
          points: [
            "1. Business Blockchain Development — For banking, supply chain, healthcare, insurance.",
            "2. Permissioned Network Support — Only authorized users participate. Better privacy and control.",
            "3. Secure Transaction Processing — All transactions are secure, verified, tamper-proof.",
            "4. Smart Contract Execution — Chaincode automates business rules, reduces manual work.",
            "5. High Performance & Scalability — Fast transactions, efficient resource usage.",
            "6. Data Privacy & Confidentiality — Data shared only between selected participants."
          ]
        },
        {
          name: "Main Goal of Hyperledger Project",
          marks: "6",
          exams: "Nov 24",
          idk: "IDK — What was Hyperledger created to achieve?",
          answer: `Main goal: develop a collaborative open-source framework for enterprise blockchain solutions that are secure, scalable, and business-ready.`,
          points: [
            "1. Develop Enterprise Blockchain Frameworks — For banking, supply chain, healthcare, finance.",
            "2. Support Permissioned Networks — Private networks where only authorized users can join.",
            "3. Improve Security & Privacy — Secure data sharing, confidential transactions, controlled access.",
            "4. Provide Modular Architecture — Customizable components, integrate with existing systems.",
            "5. Support Smart Contracts — Enable chaincode to automate business processes.",
            "6. Promote Collaboration & Standardization — Global community building common blockchain standards and interoperability."
          ]
        },
        {
          name: "Hyperledger Features",
          marks: "8–9",
          exams: "May 25, May 24",
          idk: "IDK — What features does Hyperledger offer that make it enterprise-ready?",
          answer: `Hyperledger is a permissioned blockchain used to build enterprise-level applications. Only authorized participants can join.`,
          points: [
            "1. Permissioned Network — Only verified users can join, unauthorized blocked.",
            "2. High Security — Strong identity verification + encryption.",
            "3. No Cryptocurrency Required — No tokens/coins, suitable for enterprise.",
            "4. Modular Architecture — Independent components, easily customizable.",
            "5. High Performance & Scalability — Faster than public blockchains, handles large load.",
            "6. Privacy & Confidentiality — Data shared only with selected participants via private channels.",
            "7. Smart Contracts (Chaincode) — Business logic automated without third party.",
            "8. Open Source — Free for developers, improved by global community.",
            "9. Pluggable Consensus — Different consensus methods (Raft, PBFT) based on business needs."
          ]
        },
        {
          name: "Type of Blockchain Hyperledger Is",
          marks: "5",
          exams: "Nov 24",
          idk: "IDK — Is Hyperledger public, private, or something else?",
          answer: `Hyperledger is a Permissioned (Private) Blockchain designed for enterprise use.`,
          points: [
            "1. Permissioned — Not open to everyone like Bitcoin. Only trusted, registered users.",
            "2. Controlled Access — Central authority controls who joins. Identity verification required.",
            "3. Privacy & Security — Transactions visible only to selected participants.",
            "4. Enterprise-Suitable — Used in banks, supply chain, healthcare, government.",
            "5. Efficient & Fast — Limited participants → faster processing. No complex mining."
          ]
        },
        {
          name: "Blockchain vs Hyperledger",
          marks: "5",
          exams: "Nov 25",
          idk: "IDK — What's the difference between regular blockchain and Hyperledger?",
          answer: `Public blockchain vs Hyperledger (permissioned) differ on access, control, privacy, and use case.`,
          points: [
            "Access: Public blockchain = open to everyone | Hyperledger = authorized users only.",
            "Control: Public = no central control | Hyperledger = controlled by organization/consortium.",
            "Decentralization: Public = fully decentralized | Hyperledger = partially decentralized.",
            "Identity: Public = anonymous users | Hyperledger = known and verified identities.",
            "Cryptocurrency: Public = uses crypto (BTC, ETH) | Hyperledger = no crypto required.",
            "Speed: Public = slower | Hyperledger = faster transaction processing.",
            "Privacy: Public = low | Hyperledger = high privacy and confidentiality.",
            "Consensus: Public = PoW/PoS | Hyperledger = pluggable (PBFT, Raft).",
            "Use case: Public = general use | Hyperledger = enterprise/business.",
            "Examples: Public = Bitcoin, Ethereum | Hyperledger = Fabric, Sawtooth."
          ]
        },
        {
          name: "Ethereum vs Hyperledger",
          marks: "6–9",
          exams: "May 25, Nov 24, May 24",
          idk: "IDK — How do Ethereum and Hyperledger compare?",
          answer: `Ethereum is public, Hyperledger is permissioned. Both are blockchains but serve different purposes.`,
          points: [
            "Type: Ethereum = Public blockchain | Hyperledger = Permissioned (private/consortium).",
            "Access: Ethereum = open to anyone | Hyperledger = authorized users only.",
            "Identity: Ethereum = no verification needed | Hyperledger = strong identity management.",
            "Cryptocurrency: Ethereum = Ether (ETH) | Hyperledger = no cryptocurrency.",
            "Consensus: Ethereum = Mining (PoW/PoS) | Hyperledger = pluggable (PBFT, Raft).",
            "Transaction Speed: Ethereum = slower | Hyperledger = faster.",
            "Cost: Ethereum = gas fees (can be high) | Hyperledger = low or no cost.",
            "Privacy: Ethereum = transparent/public | Hyperledger = private data sharing.",
            "Energy: Ethereum = higher consumption | Hyperledger = low energy.",
            "Smart Contracts: Ethereum = Solidity | Hyperledger = Chaincode (Go, Java, Node.js).",
            "Primary Use: Ethereum = crypto, NFTs, DeFi | Hyperledger = enterprise/business solutions.",
            "Governance: Ethereum = no central governance | Hyperledger = business consortium/organizations."
          ]
        }
      ]
    },
    {
      id: "u5",
      title: "Unit 5 — Consensus & Tokenization",
      color: "c-coral",
      topics: [
        {
          name: "Consensus Mechanism",
          marks: "5–9",
          exams: "Nov 25, May 25, May 24",
          idk: "IDK — What is a consensus mechanism and why does blockchain need it?",
          answer: `A Consensus Mechanism is a process ensuring all nodes (participants) agree on the validity of transactions and maintain a single consistent blockchain.`,
          points: [
            "Need: Prevents fraud/double-spending. Maintains trust. Ensures all nodes have same copy. Provides security.",
            "Working Step 1: Transaction Initiation — User creates and broadcasts a transaction.",
            "Working Step 2: Transaction Verification — Nodes check validity.",
            "Working Step 3: Agreement — Nodes follow consensus algorithm to agree.",
            "Working Step 4: Block Creation — Verified transactions grouped into a block.",
            "Working Step 5: Adding Block — After consensus, block added to blockchain.",
            "Working Step 6: Update — All nodes update their blockchain copies."
          ]
        },
        {
          name: "Types of Consensus Algorithms",
          marks: "6",
          exams: "Nov 25, May 25",
          idk: "IDK — What are the different types of consensus mechanisms?",
          answer: `There are several types of consensus mechanisms, each with different trade-offs.`,
          points: [
            "1. Proof of Work (PoW) — Miners solve complex math puzzles. First solver adds the block. Example: Bitcoin. High energy consumption.",
            "2. Proof of Stake (PoS) — Validators selected based on cryptocurrency they stake. Less energy than PoW. Example: Ethereum.",
            "3. Delegated Proof of Stake (DPoS) — Token holders vote for delegates who validate. Faster transaction processing.",
            "4. Proof of Activity (PoA) — Combines PoW + PoS. Miners create blocks, validators approve them.",
            "5. Proof of Authority — Transactions validated by trusted, authorized nodes. Used in private/permissioned blockchains.",
            "6. Practical Byzantine Fault Tolerance (PBFT) — Nodes communicate and vote. Works even if some nodes act maliciously.",
            "Advantages: Security, prevents double spending, data consistency, decentralized operation."
          ]
        },
        {
          name: "Proof of Activity",
          marks: "5–6",
          exams: "Nov 25, May 25",
          idk: "IDK — What exactly is Proof of Activity and how does it work?",
          answer: `Proof of Activity (PoA) combines features of Proof of Work (PoW) and Proof of Stake (PoS) to improve security while reducing disadvantages of each.`,
          points: [
            "Step 1: Mining Begins — Miners use PoW to solve a puzzle and create a new block header.",
            "Step 2: Validator Selection — After block header is created, validators are selected based on their stake (coins held).",
            "Step 3: Block Verification — Selected validators verify and sign the block.",
            "Step 4: Block Addition — Once enough validators approve, block is added to blockchain.",
            "Step 5: Reward Distribution — Block reward shared between miners and validators.",
            "Advantages: Higher security, combines PoW+PoS benefits, reduces attack chances, encourages both mining and staking participation."
          ]
        },
        {
          name: "Tokenization — What it is & Technology",
          marks: "5–6",
          exams: "May 25",
          idk: "IDK — What is tokenization and how does the technology behind it work?",
          answer: `Tokenization is the process of converting a real-world or digital asset into a digital token on a blockchain. Examples: real estate, gold, artwork, stocks.`,
          points: [
            "Technology Step 1: Asset Identification — Select asset, verify value and ownership.",
            "Technology Step 2: Creation of Digital Tokens — Create tokens on blockchain storing ownership and value info.",
            "Technology Step 3: Smart Contracts — Define rules for creating, transferring, managing tokens. Automate transactions.",
            "Technology Step 4: Blockchain Storage — Token info stored on blockchain. Provides transparency, security, immutability.",
            "Technology Step 5: Transfer & Trading — Tokens transferred/traded between users. Ownership records updated automatically."
          ]
        },
        {
          name: "Tokenization vs Blockchain Relationship",
          marks: "5",
          exams: "Nov 25",
          idk: "IDK — How are tokenization and blockchain connected to each other?",
          answer: `Tokenization converts an asset to a digital token; blockchain provides the secure platform to create, store, and manage these tokens.`,
          points: [
            "1. Blockchain Enables Token Creation — Tokens are issued on a blockchain network.",
            "2. Secure Storage — Blockchain stores token info using cryptography.",
            "3. Ownership Tracking — Transparent, immutable record of token ownership and transactions.",
            "4. Smart Contract Support — Automates creation, transfer, management of tokens.",
            "5. Transparency & Trust — All transactions recorded on blockchain, verifiable by anyone."
          ]
        },
        {
          name: "Benefits of Tokenization",
          marks: "5",
          exams: "May 25",
          idk: "IDK — What are the advantages of tokenizing assets?",
          answer: `Tokenization brings several benefits to asset ownership and management.`,
          points: [
            "1. Enhanced Security — Sensitive info protected as tokens replace actual data.",
            "2. Increased Liquidity — Assets like real estate divided into smaller tokens and traded easily.",
            "3. Transparency — All transactions on blockchain, easy to track and verify.",
            "4. Faster & Cost-Effective Transactions — Direct transfers, no intermediaries, less time and cost.",
            "5. Fractional Ownership — Multiple people own portions of high-value assets through tokens."
          ]
        },
        {
          name: "Functions of Tokenization",
          marks: "9",
          exams: "May 24",
          idk: "IDK — What does tokenization actually do in detail?",
          answer: `Tokenization performs several key functions in asset management and transfer.`,
          points: [
            "1. Asset Representation — Converts physical/digital assets to blockchain tokens. Each token = specific asset or share.",
            "2. Ownership Management — Records and verifies ownership. Tamper-proof ownership history.",
            "3. Secure Transactions — Blockchain + cryptography ensures secure transfers. Reduces fraud risk.",
            "4. Fractional Ownership — Divides high-value assets into smaller units. Multiple investors own portions.",
            "5. Easy Transfer — Tokens transferred quickly without intermediaries. Simplifies buying, selling, trading.",
            "6. Smart Contract Automation — Automatically executes predefined rules. Reduces manual work.",
            "7. Transparency & Traceability — Every transaction recorded. Easy tracking and auditing.",
            "8. Increased Liquidity — Makes illiquid assets (real estate, artwork) easier to buy/sell."
          ]
        },
        {
          name: "Limitations/Challenges of Tokens",
          marks: "6–9",
          exams: "May 24, May 25 (challenges)",
          idk: "IDK — What are the problems and limitations with tokens?",
          answer: `Despite benefits, tokens and tokenization face several challenges and limitations.`,
          points: [
            "1. Regulatory Uncertainty — Laws differ by country. Government regulations may restrict use/trading. Example: some countries ban certain crypto tokens.",
            "2. Security Risks — Tokens stolen if private keys/wallets compromised. Smart contract vulnerabilities. Example: hacker steals wallet tokens.",
            "3. Price Volatility — Token prices change rapidly. Example: token worth ₹100 may fall to ₹50 quickly.",
            "4. Lack of Awareness — Many users don't understand blockchain/tokens, leading to mistakes or fraud.",
            "5. Scalability Issues — Slow processing during high traffic. Example: peak usage delays transfers.",
            "6. Dependence on Technology — Requires internet, blockchain, digital wallets. Technical failures affect transactions.",
            "7. Smart Contract Errors — Bugs cause financial losses. Example: error locks users' funds permanently.",
            "8. Limited Acceptance — Not all businesses accept token payments. Example: store accepts cash/cards but not tokens.",
            "Challenges also include: Lack of standardization (no universal standards), Asset valuation/verification difficulties."
          ]
        },
        {
          name: "Tokenizing Shares & Fund Raising",
          marks: "3–6",
          exams: "Nov 25, May 25",
          idk: "IDK — How can shares and fundraising use tokenization?",
          answer: `Tokenizing shares converts company ownership into digital tokens. Token-based fundraising helps raise capital efficiently on blockchain.`,
          points: [
            "Tokenizing Shares 1: Digital Representation — Company shares converted into digital tokens on blockchain.",
            "Tokenizing Shares 2: Proof of Ownership — Each token = ownership in the company, like traditional shares.",
            "Tokenizing Shares 3: Easy Transfer — Share tokens transferred quickly and securely between investors.",
            "Tokenizing Shares 4: Fractional Ownership — Investors buy small portions of shares through tokens.",
            "Tokenizing Shares 5: Transparency & Security — Blockchain records all ownership and transfer details.",
            "Fund Raising 1: Token Issuance — Organizations create and issue tokens to raise capital.",
            "Fund Raising 2: Global Access — Investors from different countries can participate.",
            "Fund Raising 3: Lower Costs — Reduces need for banks and brokers.",
            "Fund Raising 4: Faster Fund Collection — Funds raised quickly through blockchain platforms.",
            "Fund Raising 5: Transparent Process — All transactions recorded and verifiable."
          ]
        },
        {
          name: "Token Backed by Physical Asset",
          marks: "5",
          exams: "Nov 25",
          idk: "IDK — How can a digital token be backed by something physical like gold?",
          answer: `An asset-backed token's value is linked to a physical asset (gold, real estate, diamonds, artwork). The token represents ownership or claim on that asset.`,
          points: [
            "Step 1: Asset Selection — Choose a physical asset (gold, property, etc.) for tokenization.",
            "Step 2: Asset Verification — Verify ownership and value of the asset.",
            "Step 3: Token Creation — Create digital tokens on blockchain. Each token = full or partial ownership.",
            "Step 4: Secure Storage — Physical asset stored by a trusted custodian/organization.",
            "Step 5: Ownership & Trading — Investors buy/sell/transfer tokens. Blockchain records all changes.",
            "Example: 1 kg gold stored in vault → 1000 tokens issued → each token = 1 gram of gold."
          ]
        },
        {
          name: "Blockchain Tokenization in Enterprise Systems",
          marks: "7–9",
          exams: "Nov 25, May 25, May 24",
          idk: "IDK — How does tokenization help businesses and enterprise systems?",
          answer: `Blockchain tokenization converts assets/rights/data into digital tokens on blockchain. In enterprise systems, it improves security, transparency, and efficiency.`,
          points: [
            "1. Improved Security — Sensitive data/assets represented by tokens. Cryptography protects from unauthorized access.",
            "2. Better Transparency — All transactions on blockchain. Easy to track and audit.",
            "3. Faster Transactions — Tokenized assets transferred directly. No intermediary delays.",
            "4. Reduced Operational Costs — Smart contract automation lowers admin costs. Less paperwork.",
            "5. Efficient Asset Management — Physical/digital assets tracked as tokens. Easier management and transfer.",
            "6. Fractional Ownership — High-value assets divided into tokens for multiple stakeholders.",
            "7. Automated Business Processes — Smart contracts execute agreements automatically. Reduces human errors."
          ]
        }
      ]
    }
  ]
};
