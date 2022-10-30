const {MongoClient}=require('mongodb')

const url='mongodb://localhost:27017'

const database='youtube'     //mongodb databae
const fields='videos'         // mongodb collection

const client= new MongoClient(url);

async function dbConnect()
{   
    const connect=await client.connect();
   // console.log("Server with async let Connected Successfully")
        
    const db=connect.db(database)
    return db.collection(fields)    //return 

}


module.exports =dbConnect;