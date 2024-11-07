const taskRoute = require("./task.route");
const userRoute = require("./user.route");

const userMiddleware = require("../../middlewares/client/auth.middleware");

module.exports = (app) =>{

    app.use("/tasks", 
        userMiddleware.requireAuth,
        taskRoute)
    app.use("/users", userRoute)
}