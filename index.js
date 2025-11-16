// 1 import express
const express = require('express');

// 6 import db connnection
const db = require('./config/db')

// 7 import cors
const cors = require('cors')

// 8 import routes
const router = require('./router/route')

// 12 import application level Middleware
// const appMiddleware = require('./middlewares/appMiddleware')

// 2 app creation
const bookstoreServer = express();

// 9 use cors
bookstoreServer.use(cors());
// 10 use join middleware
bookstoreServer.use(express.json())

// 12 implementing middleware
// bookstoreServer.use(appMiddleware)

// 11 use routes
bookstoreServer.use(router)


// 3 port define
const PORT = 3000;

// 4 server start
bookstoreServer.listen(PORT,()=>{
    console.log(`BookStore Server Started on PORT ${PORT}`);
    
});