const jwt = require('jsonwebtoken')

const adminJwtMiddleware = (req,res,next)=>{
  console.log("Inside JWT Middleware");
  //find token
  const token =req.headers.authorization.slice(7)
  console.log(token);
 try {
   // verify token
  const jwtVerification = jwt.verify(token,process.env.jwtkey)
  console.log(jwtVerification);
  req.payload = jwtVerification.usermail
  req.role=jwtVerification.role
  if(jwtVerification.role== "Bookstore Admin"){
    next()
  }
  else{
    res.status(401).json("Unautherised User",err)
  }
 } catch (err) {
  res.status(402).json("Authentification Error",err)
 }
  
  
  
}
module.exports = adminJwtMiddleware