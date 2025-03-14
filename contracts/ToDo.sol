
pragma solidity ^0.8.0;

contract ToDo {
    struct Task {
        uint id;
        uint date;
        string content;
        string author;
        bool done;
    }

    Task[] public tasks;

    function createTask(string memory _content, string memory _author) public {
        tasks.push(Task(tasks.length, block.timestamp, _content, _author, false));
    }

    function getTask(uint id) public view returns (
        uint, 
        uint,
        string memory,
        string memory,
        bool
    ) {
        require(id < tasks.length, "Task ID out of bounds");
        return (
            id,
            tasks[id].date,
            tasks[id].content,
            tasks[id].author,
            tasks[id].done
        );
    }

    function getTaskCount() public view returns (uint) {
        return tasks.length;
    }
}
