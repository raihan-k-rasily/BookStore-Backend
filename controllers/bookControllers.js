const Books = require('../models/bookModel')

// add book - create - create()

exports.addBook = async (req,res) =>{
    console.log("Inside Add Book");
    res.send("Book Added Successfully")
}

// get all books - find()