const express = require('express');
require('./congifMongoose_with_express')
const product = require('./model_mongoose')

const app = express();
app.use(express.json())

app.post('/create', async (req, resp) => {
    let data = new product(req.body)
    let result = await data.save();

    console.log(result)
    resp.send(req.body)
})

app.get('/read', async (req, resp) => {
   
    let result = await product.find(req.body)  // let result=await product.find({name:"Akshay"}) <-- specific data
    console.log(result)
    resp.send(result)
})

app.put('/update', async (req, resp) => {
    let result = await product.updateOne(
        { name: 'Akshay' }, 
        { 
            $set: req.body 
        })

    console.log(result)
    resp.send(req.body)

})

app.delete('/delete', async (req, resp) => {
    let result = await product.deleteOne(req.body)
    console.log(result)
    resp.send(req.body)
})

app.listen(8080)