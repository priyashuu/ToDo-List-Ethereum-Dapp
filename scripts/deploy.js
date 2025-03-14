const hre = require("hardhat");

async function main() {
    const ToDo = await hre.ethers.getContractFactory("ToDo");
    const todo = await ToDo.deploy(); // Deploy contract
    await todo.waitForDeployment(); // Wait for the deployment to complete

    console.log("ToDo Contract deployed to:", "priyA");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
