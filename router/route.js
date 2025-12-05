//1 import express
const express = require('express')
//4 import controller
const bookController = require('../controllers/bookController')

const userController = require('../controllers/userController')
const jobController = require('../controllers/jobController')

const jwtmiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const adminJwtMiddleware = require('../middlewares/adminJwtMiddleware')


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

//get particular book details
router.get('/api/viewBooks/:id',jwtmiddleware,bookController.viewBooks)

//jwtmiddleware
// add book
router.post('/api/addBook',jwtmiddleware,multerMiddleware.array('uploadImage',3),bookController.addBook)

//get all books to adminside(adminbook)
router.get('/api/adminBooks',adminJwtMiddleware,bookController.getAdminHomeBooks)

//get user
router.get('/api/getUser',adminJwtMiddleware,userController.getUser)


// add jobs
router.post('/api/admin/addJob',adminJwtMiddleware,jobController.addJob)

//5 export router
module.exports = router