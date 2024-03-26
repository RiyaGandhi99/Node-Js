const express = require("express");

const serviceRender = require("../services/render");
const apiController = require("../controller/controller");

const route = express.Router();

/*
*   GET - home
*/
route.get("/",serviceRender.homeRoute);

/*
*   GET - New User
*/
route.get("/new-user",serviceRender.newUserRoute);

/*
*   GET - Upadte User
*/
route.get("/update-user",serviceRender.updateUserhomeRoute);

/*
*   API - create user
*/
route.post("/api/user",apiController.create);

/*
*   API - retrive user
*/
route.get("/api/user",apiController.find);

/*
*   API - update user
*/
route.put("/api/user/:id",apiController.update);

/*
*   API - delete user
*/
route.delete("/api/user/:id",apiController.delete);


module.exports = route;