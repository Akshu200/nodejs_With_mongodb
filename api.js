const express=require('express')
const dbConnect=require('./mongodb_connection')
const mongodb=require('mongodb')
const app=express();

app.use(express.json());   //body parse

app.get('/',async(req, resp)=>{

    let data= await dbConnect();
    let alldata=await data.find().toArray();
        console.log(alldata)
   resp.send(alldata)
})

app.post('/',async(req, resp)=>{
    let data=await dbConnect();
    let final=data.insertMany(req.body)
    console.log(req.body)
    resp.send(final)
})

app.put('/:name',async(req, resp)=>{

    let data= await dbConnect();
   let final=await data.updateOne({name:req.params.name},
    {$set:req.body})
        
    resp.send(final)
})

app.delete("/:id",async(req, resp)=>{

        let data=await dbConnect();
        let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)}) //instance of object
        console.log(result)
        resp.send(result)
})

app.listen(8070,()=>{
    console.log("Live at port 8070.")
})