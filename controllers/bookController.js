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

//get all book and search
exports.getBook = async(req,res)=>{
    console.log(req.query);//{search:book}
    
    const searchKey = req.query.search

    console.log("Inside All Jobs");
try {

    const query={
        title:{
            $regex:searchKey,
            $options:"i"
        }
    }

    const books = await Books.find(query)//search
    res.status(200).json(books)
} catch (error) {
    res.status(500).json(error)
}
}

//get home book
exports.getHomeBooks = async(req,res)=>{
    try {
        const homeBooks = await Books.find().sort({_id:-1}).limit(4)
        res.status(200).json(homeBooks)
    } catch (error) {
        res.status(500).json("err"+error)
    }
}

//get particular book details
exports.viewBooks=async(req,res)=>{
    console.log('inside viewbooks');
    const {id}=req.params
    console.log(id);
    try {
        const Book = await Books.findOne({_id:id})
        res.status(200).json(Book)
    } catch (error) {
        res.status(500).json("Err"+error)
    }
    
}

//get all books to adminside
exports.getAdminHomeBooks = async(req,res)=>{
    console.log("inside admin book");
    
    try {
        const adminBooks = await Books.find()
        res.status(200).json(adminBooks)
    } catch (error) {
        res.status(500).json("err"+error)
    }
}