const express= require('express')
const multer=require('multer')

///-->multer is a middle ware to upload file from CLIENT  to SERVER

const app=express();
const Multer=multer({
    
    storage:multer.diskStorage({
        destination:function(req,file, callback)
        {
            callback(null, "multer_upload")
        },
        filename:function(req, file, callback)
        {   
            callback(null,file.filename+"_" +".png")
        }
    })
}).single("test_multer")              //}).single("file_name") client to send 

app.post('/multer',Multer,(req, resp)=>{
    resp.send("Working multer")
})

app.listen(4040)