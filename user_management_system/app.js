const express = require("express");
const DotEnv = require("dotenv");
const Morgan = require("morgan");
const BodyParse = require("body-parser");

const path = require("node:path");

const routes = require("./server/routes/route");  
const ConnectDB = require("./server/database/connection");

const app = express();

//ENV settings
DotEnv.config({
    path: "config.env"
});
const PORT = process.env.PORT || 3004

//Log request data
app.use(Morgan("tiny"));

//connect to mongoDB
ConnectDB();

//body-parser for form
app.use(BodyParse.urlencoded({extended: false}));

//template engine 
app.set("view engine","ejs");
app.set("views","views");

//static files
app.use("/css",express.static(path.resolve(__dirname,"asserts/css")));
app.use("/js",express.static(path.resolve(__dirname,"asserts/js")));
app.use("/img",express.static(path.resolve(__dirname,"asserts/img")));


app.use("/",routes);
 
app.listen(PORT,()=>{
    console.log(`Server initialized at http://localhost:${PORT}`);
});

