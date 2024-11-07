const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const database = require("./config/database");
database.connect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const routeClinet = require("./routes/client/index.route");
routeClinet(app);



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});