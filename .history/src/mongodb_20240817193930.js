const mongoose=require('mangoose')
mongoose.connect("mongodb://localhost:27017/loginsignup")
.then(()=>{
    console.log("connected to database")
})
.catch(()=>{
    console.log("not connected to database")
})