const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 3000;

const database = require("./config/database");
database.connect();

app.use(cors()) // cho phép tất cả tên miền truy cập vào api
// cho 1 tên miền cụ thể truy ccap65 vào api
// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// cors(corsOptions)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const routeClinet = require("./routes/client/index.route");
routeClinet(app);



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});