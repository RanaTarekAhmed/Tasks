let tasks = require("../data/tasks.js");

function removeTask(id) {
    id = Number(id);

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        console.log(`Task with id ${id} not found.`);
        return;
    }

    const removedTask = tasks.splice(taskIndex, 1)[0];

    console.log(`Task "${removedTask.title}" removed successfully.`);
}

module.exports = removeTask;