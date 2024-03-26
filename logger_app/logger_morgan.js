const express = require("express");
const morgan = require("morgan");
const {v4: uuidv4} = require("uuid");

const fs = require("node:fs");
const path = require("node:path");

const app = express();

const createStreamFile = fs.createWriteStream(path.join(__dirname,"logger.txt"),{flags: "a"});

morgan.token("id",function getId(req){
    return req.id;
});


app.use((req,res,next)=>{
    req.id = uuidv4();
    next();
});

app.use(morgan(":method :status :url"));
app.use(morgan(":id :method :status :url",{stream: createStreamFile }));

app.use("/",(req,res,next)=>{
    res.send("Morgan App");
});

app.listen(3001,()=>{
    console.log("Server intialized!");
});