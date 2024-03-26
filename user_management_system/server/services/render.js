const axios = require("axios");


exports.homeRoute = (req,res,next)=>{
    //make http request of /api/user to get all users

    axios.get('http://localhost:3005/api/user')
    .then((response)=>{
        console.log(response.data);
        res.render("index",{userData: response.data});
    })
    .catch((err) =>{
        res.send(err);
    });

};

exports.newUserRoute = (req,res,next)=>{
    res.render("add-user");
};

exports.updateUserhomeRoute = (req,res,next)=>{

   
    axios.get('http://localhost:3005/api/user',{params : {id: req.query.id }})
    .then((response)=>{
        console.log(response.data);
        res.render("update-user",{userData: response.data});
    })
    .catch((err) =>{
        res.send(err);
    });

    //res.render("update-user");
};