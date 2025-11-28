//1 import express
const express = require('express')
//4 import controller
const bookController = require('../controllers/bookController')

const userController = require('../controllers/userController')
const jwtmiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')


//2 create router
const router = express.Router()

//3 define routes
// router.post('/api/addBook',bookController.addBook)

//Register user
router.post('/api/register',userController.registerUser)

//login user
router.post('/api/login',userController.loginUser)

//Googlelogin user
router.post('/api/google-login',userController.googleAuth)

//get book
router.get('/api/getBook',jwtmiddleware,bookController.getBook)

//get homebook
router.get('/api/homeBooks',bookController.getHomeBooks)


//jwtmiddleware
// add book
router.post('/api/addBook',jwtmiddleware,multerMiddleware.array('uploadImage',3),bookController.addBook)

//5 export router
module.exports = router