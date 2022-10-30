const dbConnect=require('./mongodb_connection')

const insert = async () => 
{

    const db=await dbConnect();
   
    const file = await db.insertMany([
        {
            name:"aksha",
            age:'20',
            job:"fresher"
        },
        {
            name:"pam",
            age:'25',
            job:"Senior SDE"
        },
        {
            name:"jam",
            age:'62',
            job:"team lead"
        },
        {
            name:"roy",
            age:'30',
            job:"manager"
        }
       
    ]);
    
    if(file.acknowledged)
        {
         console.log("data inserted successfully")
        }    

}
insert();