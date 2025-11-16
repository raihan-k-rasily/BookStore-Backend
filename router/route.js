// 1 import express
const express = require('express')
// 6 import controller
const bookController = require(`../controllers/bookControllers`);
const userController = require(`../controllers/userController`)
const jwtMiddleware = require('../middlewares/jwtMiddleware')

// 2 create router 
const router = express.Router();
// 3 define routes

// Register USer
router.post('/api/register',userController.registerUser)
// Login USer
router.post('/api/login',userController.loginUser)

// Google Login 
router.post('/api/google-login',userController.googleAuth)

router.post('/api/addBook',jwtMiddleware,bookController.addBook)

// 5 export router
module.exports = router;