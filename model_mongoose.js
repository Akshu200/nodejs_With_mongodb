const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:String,
    age:Number,
    job:String
})

module.exports= mongoose.model('videos',schema)