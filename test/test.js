const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TodoList contract", function () {
    let TodoList, todolist, owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners(); // Fetch the test accounts
        TodoList = await ethers.getContractFactory("TodoList"); // Get contract factory
        todolist = await TodoList.deploy(); // Deploy contract
        await todolist.deployed(); // Ensure deployment is complete

        console.log("Deployed Contract Address:", todolist.address);
    });

    it("should create a new task", async function () {
        const text = "Learn Solidity";
        await todolist.create(text); // Create a new task

        const task = await todolist.get(0); // Retrieve the task

        expect(task[0]).to.equal(text); // Check task text
        expect(task[1]).to.be.false; // Check task completion status
    });

    it("should update the text of an existing task", async function () {
        const initialText = "Learn Solidity";
        const updatedText = "Learn Hardhat";

        await todolist.create(initialText); // Create initial task
        await todolist.updateText(0, updatedText); // Update task text

        const task = await todolist.get(0);
        expect(task[0]).to.equal(updatedText); // Verify updated text
    });

    it("should toggle the completion status of a task", async function () {
        const text = "Learn Solidity";
        await todolist.create(text);

        await todolist.toggleCompleted(0); // Toggle completion status
        const task = await todolist.get(0);

        expect(task[1]).to.be.true; // Check if completion status changed to true
    });
});
