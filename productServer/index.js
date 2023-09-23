const express=require('express')
const mongoose=require('mongoose')
const server=express();

const cors=require('cors')
const productRouter=require('./Router/product.router')
const subcategoryRouter=require('./Router/subcategory.router')


server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json())

server.listen(8000,()=>{
    console.log('server running...');
})  

server.use("/product",productRouter)
server.use("/subcategory",subcategoryRouter)

