// const express=require('express')
// const path=require('path')
// const app=express();

// const dirpath=path.join(__dirname,'public')
// app.get('',(req, resp)=>{
    
    
//     resp.send(`
    
//     <h1>This is Home Page</h1>
//     <a href="/about">Go to about</a>
//     `)
// })
// app.get('/about',(req, resp)=>{
//     resp.send(`
//     <h1>THis is about page</h1>
//     <input type='text' placeholder='enter name' value='${req.query.name}'/>
//     <a href="/contact">got to contact</a>
//     <a href='/'>Go to Home</a>
//     `)
// })
// app.get('/contact',(req, resp)=>{
//     resp.send(`
//     <h1>THis is contact page</h1>
//     <a href='/'>Go to Home</a>
//     `)
// })
// app.get("/",(_,resp)=>{
//     resp.sendFile(`${dirpath}/index.html`)
// })
// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${dirpath}/about.html`)
// })
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${dirpath}/error.html`)
// })
// app.listen(5000);
