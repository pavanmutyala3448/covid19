const express=require('express')
const ejs=require('ejs')
const covid = require('novelcovid');
const bodyParser=require('body-parser')
const app=express();
let country;
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/',function(req,res){
 
 
  res.render('Home')


})
app.get('/covid',function(req,res){
 covid.countries().then((response)=>{
  
  res.render('covid',{info:response,country:country})
 })

})
app.post('/covid',function(req,res){
 country=req.body.country;
 
 res.redirect('/covid')

})

app.listen('3000',()=>console.log('Port started at 3000'))