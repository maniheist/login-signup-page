const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')


app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})