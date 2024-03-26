const UserModel = require("../model/model");

//Create and save user data
exports.create = (req, res, next) => {
    if (!req.body) {
        res.status(400).send({ "msg": "data is added from client side" });
    }

    const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });


    user
        .save(user)
        .then(data => {
            res.redirect("/");
            //res.send(data);
            // console.log(data);
            //res.status(200).json({ "Userdata": data });
        })
        .catch(err => {
            res.status(400).send({ "msg": "This is error msg: " + err });
        });
};

//retrive all user or single user data
exports.find = (req, res, next) => {

    var userid = req.query.id;

    UserModel
        .find()
        .then(allUser => {
            if (!userid) {
               
                //res.status(200).json({ userData: allUser });

                res.send(allUser);
            } else {
                UserModel.findById(userid)
                    .then(user => {
                        res.send(user);
                        //res.status(200).json({ "Single Userdata": user });
                    })
            }

        })
        .catch(err => {
            res.status(400).send({ "msg": "This is error msg: " + err });
        });

};

//Update user data
exports.update = (req, res, next) => {

    var userId = req.params.id;
    
    if (!req.body) {
        res.status(400).send({ "msg": "data is added from client side" });
        return ;
    }
    console.log(req.body);
    console.log(userId);

    UserModel
        .findByIdAndUpdate(userId,req.body)
        .then(data => {
            if(!data){
                res.send("data is added from client side");
                //res.status(400).send({ "msg": "data is added from client side" });
            }else{
                console.log("In update api");
                res.send(data);
                //res.status(200).json({ "Updated Userdata": data });
            }
            
        })
        .catch(err => {
            res.status(400).send({ "msg": "This is error msg: " + err });
        });
};

//delete user data
exports.delete = (req, res, next) => {

    var userId = req.params.id;

    UserModel
            .findByIdAndDelete(userId)
            .then(data => {
                if(!data){
                    res.status(400).send({ "msg": "data is added from client side" });
                }else{
                    res.status(200).json({ "User Deleted": data });
                }  
            })
            .catch(err => {
                res.status(400).send({ "msg": "This is error msg: " + err });
            });

};