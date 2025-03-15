# Todo List Ethereum DApp

## 📌 Overview
This is a **To-Do List DApp** built using **Solidity** and **Hardhat**, which allows users to create, update, and manage tasks on the Ethereum blockchain.

## 🚀 Features
- Create new to-do tasks
- Update task text
- Toggle task completion
- Retrieve task details
- Get total number of tasks

## 🛠 Tech Stack
- **Solidity** (Smart Contracts)
- **Hardhat** (Development & Testing Framework)
- **Ethers.js** (Ethereum Interaction)
- **Chai** (Testing Assertions)
- **Node.js & npm** (Package Management)

## 📂 Project Structure
```
📦 ToDo-List-Ethereum-Dapp
 ┣ 📂 contracts      # Solidity Smart Contracts
 ┃ ┗ 📜 TodoList.sol
 ┣ 📂 Test       # Deployment Scripts
 ┃ ┗ 📜 test.js
 ┣ 📜 hardhat.config.js  # Hardhat Configuration
 ┣ 📜 package.json   # Dependencies & Scripts
 ┣ 📜 README.md      # Project Documentation
```

## 📦 Dependencies
Ensure you have **Node.js v18+** installed, then install dependencies:
```sh
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox ethers chai
```

## 🔧 Setup & Installation
1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/ToDo-List-Ethereum-Dapp.git
cd ToDo-List-Ethereum-Dapp
```

2️⃣ **Install Dependencies**
```sh
npm install
```

3️⃣ **Compile Smart Contract**
```sh
npx hardhat compile
```

4️⃣ **Run Tests**
```sh
npx hardhat test
```

5️⃣ **Run Local Blockchain**
```sh
npx hardhat node
```

6️⃣ **Deploy the Contract**
```sh
npx hardhat run scripts/deploy.js --network localhost
```

## 🧪 Testing
Make sure your Hardhat node is running before running tests:
```sh
npx hardhat node
npx hardhat test --network localhost
```

## 🛠 Hardhat Configuration (`hardhat.config.js`)
```javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.26",
    networks: {
        hardhat: {},
        localhost: {
            url: "http://127.0.0.1:8545",
        },
    },
};
```

## 📝 License
This project is **MIT licensed**.

---
### 💡 Need Help?
If you encounter any issues, feel free to open an **issue** on the repository or ask for help in blockchain development communities. 🚀

