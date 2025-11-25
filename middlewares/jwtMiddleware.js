const jwt = require('jsonwebtoken')

const jwtMiddleware =(req,res,next)=>{
    console.log("Inside JWT Middlewares");
    const token = req.headers.authorization.slice(7)
    console.log(token);
    try{
    const jwtVerification = jwt.verify(token,process.env.jwtKey)
    console.log(jwtVerification);
    req.payload = jwtVerification.userMail
    next()
    }catch(err){
        res.status(401).json("Authentification Error",err)
    }

    
    next()
    
}
module.exports = jwtMiddleware