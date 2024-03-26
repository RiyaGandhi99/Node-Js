const mongoose = require("mongoose");

const ConnectDB = async () =>{
    try{
        const c = await mongoose.connect(process.env.MongoConnectionString);
    
        console.log(`mongodb connected ${c.connection.host}`);
    }catch(err){
        console.log(err);
    }
    
}

module.exports = ConnectDB;


/*
{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            usefindandmodify :false
        }
*/