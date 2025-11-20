exports.addBook = async (req, res) => { 
    console.log("Inside Add Book"); 
    console.log(req.files);
    const {title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category} = req.body
    const userMail = req.payload
    var uploadImg = []
    req.files.map(item=>uploadImg.push(item.filename))
    console.log(title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImg,userMail);
    try{
        const existingBook = await Books.findOne({title,userMail})
        if(existingBook){
            res.status(401).json("You have already added the book")
        }else{
            const newBook = new Books({
                title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImg,userMail
            })
            await newBook.save()
            res.status(200).json({messge:"Book Added",newBook})
        }
    }catch(err){
        res.status(500).json(err)
    }
    
}