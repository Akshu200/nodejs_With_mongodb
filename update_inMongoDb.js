const dbConnect=require('./mongodb_connection')

const update=async()=>{
    const db= await dbConnect();
    const file= await db.updateOne(
    {name:"roy"},{$set:{age:'24'}}
        )

        console.log(file)
}

update();

// const delete=async()=>{
//     const db= await dbConnect();
//     const file= await db.deleteOne(
//     {name:"roy"}
//         )

//         console.log(file)
// }

// delete();