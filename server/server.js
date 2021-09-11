import express from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'

import dbConnect from "./services/mongoose.js";
import User from "./models/userModel.js"


import productsRoutes from "./routes/productsRoutes.js"


dotenv.config()

const port = process.env.PORT || 8080
const server = express()
dbConnect()


server.use(cors())

const  user = new User({
    email:'test@gmail.com',
    password:'123456'
})

user.save()

server.use('/api/v1/',productsRoutes)


if(process.env.NODE_ENV === 'production') {
    server.use(express.static(path.resolve('client/build')))
    server.get('/*',(req,res)=>{
        res.sendFile(path.resolve('client/build/index.html'))
    })
}

server.listen(port,()=> {
    console.log(`server has been started on http://localhost:${port}`)
})