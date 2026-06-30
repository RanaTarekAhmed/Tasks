let tasks = require("../data/tasks.js");

function updateTask(id, status) {
    id = Number(id);
    let task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with id ${id} not found.`);
        return;
    }
    if(!status){
        console.log("Invalid task status.");
        return;
    }
    task.status = status;
    console.log(`Task with id ${id} updated successfully.`);
}

module.exports = updateTask;