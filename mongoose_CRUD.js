const mongoose=require('mongoose')

const saveInDb= async()=>
{
    await mongoose.connect('mongodb://localhost:27017/youtube')

    const schemas = new mongoose.Schema({ 
    name:String,
    age:Number,
    job:String
    })

   const Modelss= new mongoose.model('videos',schemas);
   let result= new Modelss({
        name:"save",
        age:00,
        job:"aasc"
    })
    let data=await result.save()
    console.log(data)
}
//saveInDb();

const readInDb=async()=>{

    await mongoose.connect('mongodb://localhost:27017/youtube')

    const schemas = new mongoose.Schema({ 
    name:String,
    age:Number,
    job:String
    })
    const Modelss=new mongoose.model('videos',schemas)

    let data=await Modelss.find({name:'Akshay'})
    console.log(data)
}
//readInDb();

const update=async()=>{
    await mongoose.connect('mongodb://localhost:27017/youtube')

    const schemas = new mongoose.Schema({ 
    name:String,
    age:Number,
    job:String
    })
    const Modelss=new mongoose.model('videos',schemas)

    const data=await Modelss.updateOne(
        {name:"Akshay"},
        {
            $set:{age:26}
        })
        
        console.log(data)
}
//update();

const deleteInDb=async()=>{

    await mongoose.connect('mongodb://localhost:27017/youtube')

    const schemas = new mongoose.Schema({ 
    name:String,
    age:Number,
    job:String
    })
    const Modelss=new mongoose.model('videos',schemas)

    let data=await Modelss.deleteOne({name:"abhi"})
    console.log(data)
}
//deleteInDb();