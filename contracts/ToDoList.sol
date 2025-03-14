// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract TodoList {
    struct ToDoTask {
        string text;
        bool completed;
    }

    ToDoTask[] public todoList; 

    function create(string calldata _text) public {
        todoList.push(ToDoTask({
            text: _text,
            completed: false
        }));
    }

    function get(uint256 _index) public view returns (string memory text, bool completed) {
        require(_index < todoList.length, "Index out of bounds");
        ToDoTask storage todo = todoList[_index];
        return (todo.text, todo.completed);
    }

    function updateText(uint256 _index, string calldata _text) public {
        require(_index < todoList.length, "Index out of bounds");
        ToDoTask storage todo = todoList[_index];
        todo.text = _text;
    }

    function toggleCompleted(uint256 _index) public {
        require(_index < todoList.length, "Index out of bounds");
        ToDoTask storage todo = todoList[_index];
        todo.completed = !todo.completed;
    }

    function getTotalTasks() public view returns (uint256) {
        return todoList.length;
    }
}
