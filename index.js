const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000;

const database = require("./config/database");
database.connect();



const routeClinet = require("./routes/client/index.route");
routeClinet(app);


app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});