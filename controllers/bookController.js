const Books = require("../models/bookModels")

//add book - create()
exports.addBook = async(req,res)=>{
    console.log('Inside ADD Book');    
    res.json("Accepted requested")
}
//get all books - find()