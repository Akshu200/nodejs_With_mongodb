
// const fs=require('fs')
// const path=require('path')
/*



for(i=0; i<5; i++)
{
    fs.writeFileSync(dirPath+'/sample'+i+'.txt',"hi this is "+i+"sample")
}

fs.writeFileSync(dirPath+'/saaample.txt',"hi this is ajkaha")
fs.readdir(dirPath,(err,files)=>{

    files.forEach((item)=>{
        console.log('file name is -> ',item)
    })

})


*/

//fs.mkdirSync(dir)

// const dirPath=path.join(__dirname,'Mainfiles')
// const filepath=`${dirPath}/mainFiles.txt`;

/*CREATE File
fs.writeFileSync(filepath,"this is created by Akshay V S mainFiles directory")
*/

/* READ File
fs.readFile(filepath,"utf8",(err,item)=>{
    console.log(item)
})*/

// UPDATE File
//fs.appendFile(filepath,'|| this is now updated using fsappendfile',(err)=>{
//     if(!err)
//     {
//         console.log("file is updated successfully")
//     }
// })

//RENAME File
// fs.rename(filepath,`${dirPath}/banana.txt`,(err)=>{
//     if(!err)
//     {
//         console.log("File rename Successfully")
//     }
// })

// DELETED File
// fs.unlink(`${dirPath}/banana.txt`,(err)=>{
//     if(!err)
//     {
//        console.log("file deleted successfully")
        
//     }
// })

//Asynchronous programing 
// const a=10;
// const b=0;

// const final=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res(300)
//     },200)  
// })

// final.then((c)=>{
       
//     console.log(a+c)
// })
