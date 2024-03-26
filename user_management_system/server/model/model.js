const mongoose = require("mongoose");

var Schema = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    gender: String,
    status: String
});

const Userdb = mongoose.model("userdb",Schema);

module.exports = Userdb; 