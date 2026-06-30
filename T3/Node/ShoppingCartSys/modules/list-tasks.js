let tasks=(require("../data/tasks.js"));

function listTasks() {
    console.log("===Tasks===");
    if (tasks.length === 0) {
        console.log("===No tasks found===");
        return;
    }
    tasks.forEach(task => {
        console.log(`Task id: ${task.id}. Task Title: ${task.title}. Task Status: ${task.status}`);
    });
}

module.exports = listTasks;