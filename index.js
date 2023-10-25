require('dotenv').config()

const express=require('express')

const router = require('./routes/router')

const cors=require('cors')


const server=express()

server.use(cors())

require('./db/connection')


const port=5000 || process.env.port

server.use(express.json())

server.use(router)

server.listen(port,()=>{
    console.log(`______________server started at port number ${port}_______________`);
})