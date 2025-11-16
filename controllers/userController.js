const Users = require('../models/userModel')

// import jwt for token creation
const jwt = require('jsonwebtoken')

// register user - create - POST (username,email,password) Request Body
exports.registerUser = async (req, res) => {
    console.log("Inside Register User");
    console.log(req.body);//{username:'...',email:'...',password:'...'}
    const { username, email, password } = req.body;//destructuring
    // Check if user already excist
    const existingUser = await Users.findOne({ email })
    try {
        if (existingUser) {
            res.status(401).json({ message: "User alreadyec]xist in this email" })
        } else {
            const newUser = new Users({ username, email, password })
            await newUser.save()//save to database
            res.status(201).json(newUser)
        }
    } catch (err) {
        res.status(500).json({ message: "Error Registering User", error: err.message })
    }
}

// Login User
exports.loginUser = async (req, res) => {
    console.log("Inside Login User");
    console.log(req.body);
    const { email, password } = req.body;
    const existingUser = await Users.findOne({ email })
    try {
        if (existingUser) {
            if (existingUser.password == password) {
                // token generation
                const token = jwt.sign({userMail:existingUser.email,role:existingUser.role},process.env.jwtKey)
                res.status(200).json({ message: "Successfully Login",user:existingUser,token })
            } else {
                res.status(401).json({ message: "Invalid Password" })
            }
        } else {
            res.status(404).json({ message: "Email not Found" })
        }
    }catch(err){
        res.status(500).json({message:"Error Loging in",error:err.message})
    }
    
}

// Google Login
exports.googleAuth= async (req,res)=>{
    console.log("Inside Google Login User");
    const{email,password,username,profile} = req.body
    try{
        const existingUser = await Users.findOne({email});
        if(existingUser){
            // token generation
                const token = jwt.sign({userMail:existingUser.email,role:existingUser.role},process.env.jwtKey)
                console.log(token);
                
                res.status(200).json({ message: "Successfully Login",user:existingUser,token })

        } else {
            // create new user
            const newUser = new Users({ email, password, username, profile })
            await newUser.save()//save to database
            // token Generation
                const token = jwt.sign({userMail:newUser.email,role:newUser.role},process.env.jwtKey)
                console.log(token);
                
            res.status(201).json({message:"Login Succcessful" , user:newUser,token})
        }

    }catch(err){
        res.status(500).json({message:"Error Loging in",error:err.message})
    }  
}
