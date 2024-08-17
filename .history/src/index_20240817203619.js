const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const tempelatePath=path.join(__dirname,'../tempelates')
const collection=require('./mongodb')
app.use(express.json())
app.set('view engine','hbs')
app.set('views',tempelatePath)
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/signup',async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render('home')
})

app.post('/login',async(req,res)=>{
    try{
    const check=collection.findOne({name:req.body.name})
    if (check.password===req.body.password){
        res.render('home')
    }
    else{
        res.send('wrong password')
    }
    }
    catch{
        res.send('wrong name')
    }
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})