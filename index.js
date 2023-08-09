
const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const index=fs.readFileSync("index.html","utf-8");
const products=data;
const express=require('express');
const server=express();
const morgan =require('morgan');

server.use(express.json());
server.use(morgan('default'));



server.get('/product',(req,res)=>{
 // res.end('<h1>Hello</h1>')
 
 res.json(products)
})




server.listen(8080,()=>{
  console.log("server started");
});