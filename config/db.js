require('dotenv').config();
// 1 import mongoose
const mongoose = require("mongoose")

dbString = process.env.connectionString

// 2 connect to mongodb 
mongoose.connect(dbString).then(()=>{
    console.log(`Connected to MongoDB`);
    
}).catch((err)=>{
    console.log(`Error connecting to MongoDB`,err);
    
})