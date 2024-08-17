
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/loginsignup", {
    serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
})
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.error("Not connected to database", err);
});



const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const collection=new mongoose.model(`'Collection1'`,LogInSchema)

module.exports=collection