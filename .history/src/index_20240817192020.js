const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const tempelatePath=path.join(__dirname,'../tempelates')
app.use(express.json())
app.set('view engine','hbs')
app.set('views',tempelatePath)
app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})