const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        const date= new Date().toDateString()
        cb(null,`IMG-${file.originalname}-${date}`)
    }
})
const filefilter =(req,file,cb)=>{
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
const multerConfig = multer({
    storage,
    filefilter
})

module.exports = multerConfig