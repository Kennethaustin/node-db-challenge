const express = require('express')

 const ProjectRouter = require('../projects/projectsRouter.js');
 const ResourceRouter = require('../resources/resourcesRouter.js')
 const TaskRouter = require('../tasks/tasksRouter.js')


const server = express();

server.use(express.json());
 server.use('/api/projects', ProjectRouter);
 server.use('/api/resources', ResourceRouter)
 server.use('/api/tasks', TaskRouter)

server.get("/", (req, res) => {
    res.status(200).json({ message: "up" })
})

module.exports = server;