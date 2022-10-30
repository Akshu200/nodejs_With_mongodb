module.exports=filterMiddle=(req,resp, next)=>{
    if(!req.query.age)
    {
        resp.send('Please Provide AGE first at Query')
    }
    else if(req.query.age<18)
    {
        resp.send('your are under age')
    }
    else{
        next();
    }
}