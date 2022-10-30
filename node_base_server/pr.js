const a=10;
const b=0;

const final=new Promise((res, rej)=>{
    setTimeout(()=>{
        res(30)
    },2000)  
})

final.then((data)=>{
        b=data;
    console.log(a+b)
})