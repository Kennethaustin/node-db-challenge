const db = require("../data/db-config.js")

module.exports= {
    findTasks,
    addTasks
}

function findTasks(){
    return db("tasks as T")
    .join("projects as P","P.id",'=',"T.project_id")
    .select(
        "T.id",
        "T.project_id",
        "T.description",
        "T.notes",
        "T.completed as task_completed",
        "p.name as project_name",
        "p.description as project_description"
    )
};

function addTasks(task) {
    return db("tasks")
        .insert(task)

    
}