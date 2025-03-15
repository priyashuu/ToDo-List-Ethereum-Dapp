const { expect } = require("chai");
const { ethers } = require("hardhat"); // Yaha pe sahi import karo

describe("TodoList contract", function () {
    let TodoList, todoList, owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners(); // Yaha error aa raha tha
        TodoList = await ethers.getContractFactory("TodoList");
        todoList = await TodoList.deploy();
        await todoList.deployed();

        console.log("Deployed Contract Address:", todoList.address);
    });

    it("should create a new task", async function () {
        const text = "Learn Solidity";
        await todoList.create(text);

        const [taskText, completed] = await todoList.get(0);
        expect(taskText).to.equal(text);
        expect(completed).to.be.false;
    });

    it("should update the text of an existing task", async function () {
        const initialText = "Learn Solidity";
        const updatedText = "Learn Hardhat";

        await todoList.create(initialText);
        await todoList.updateText(0, updatedText);

        const [taskText] = await todoList.get(0);
        expect(taskText).to.equal(updatedText);
    });

    it("should toggle the completion status of a task", async function () {
        const text = "Learn Solidity";
        await todoList.create(text);

        await todoList.toggleCompleted(0);
        const [, completedAfterToggle] = await todoList.get(0);
        expect(completedAfterToggle).to.be.true;

        await todoList.toggleCompleted(0);
        const [, completedAfterToggle2] = await todoList.get(0);
        expect(completedAfterToggle2).to.be.false;
    });
});
