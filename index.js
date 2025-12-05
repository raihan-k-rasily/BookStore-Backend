//1 import express
const express = require('express')

//6import db connection
const db = require('./config/db')

//7 import cors
const cors = require('cors')

//8 import routes
const router = require('./router/route')
//
 const appMidlleware = require('./middlewares/appMiddleware')

//2 app creation
const bookstoreServer = express()

//9 use cors
bookstoreServer.use(cors())

//10 use json middleware
bookstoreServer.use(express.json())

//12 implementing middleware
bookstoreServer.use(appMidlleware)

//11 use routes
bookstoreServer.use(router)

bookstoreServer.use('/uploads',express.static('./uploads'))

//3 port define
const PORT = 3000

//4 server start
bookstoreServer.listen(PORT,()=>{
    console.log(`Bookstore server started on port ${PORT}`);
})

