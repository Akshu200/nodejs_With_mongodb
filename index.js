const dbConnect=require('./mongodb_connection')

// getdata().then((resp)=>{
//     resp.find().toArray().then((d)=>{
      
//         console.log(d)
//     })
// })

const finalResult = async () =>{                //read function
    let file=await dbConnect();
    let data=await file.find().toArray();
    console.log(data)

}
finalResult();         //calling read              
console.log("working after name change")