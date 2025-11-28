const Books = require('../models/bookModels')
exports.addBook = async (req, res) => { 
    console.log("Inside Add Book"); 
    console.log(req.files);
    const {title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category} = req.body
    const userMail = req.payload
    var uploadImage = []
    req.files.map(item=>uploadImage.push(item.filename))
    console.log(title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImage,userMail);
    try{
        const existingBook = await Books.findOne({title,userMail})
        if(existingBook){
            res.status(401).json("You have already added the book")
        }else{
            
            const newBook = new Books({
                title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImage,userMail
            })
            await newBook.save()
            res.status(200).json({messge:"Book Added",newBook})
        }
    }catch(err){
        res.status(500).json(err)
    }
    
}

//get all book
exports.getBook = async(req,res)=>{
    console.log("Inside All Books");
    
try {
    const books = await Books.find()
    res.status(200).json(books)
} catch (error) {
    res.status(500).json(error)
}
}

exports.getHomeBooks = async(req,res)=>{
    try {
        const homeBooks = await Books.find().sort({_id:-1}).limit(4)
        res.status(200).json(homeBooks)
    } catch (error) {
        res.status(500).json("err"+error)
    }
}