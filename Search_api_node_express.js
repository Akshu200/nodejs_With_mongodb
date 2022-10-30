const express=require('express')
require('./congifMongoose_with_express')
const product=require('./model_mongoose')

const app=express();

app.use(express.json())

app.get('/search/:name',async(req,resp)=>{
    console.log(req.params.name)
    let final=await product.find({
        
         $or:[
            {name:{$regex:req.params.name}}, 
            {job:{$regex:req.params.name}}
         ]  
        
    })
    resp.send(final)
})
app.listen(8080)