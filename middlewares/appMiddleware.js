const appMidlleware = (req,res,next)=>{
    console.log("Inside application level middleware");
     next()
}
module.exports =appMidlleware