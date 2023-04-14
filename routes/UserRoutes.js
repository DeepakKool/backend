const express = require('express')
const passport = require('passport')
const router = express.Router()
const { backendTest, loginUser, getAllUsers, registerUser, userProfile, forgotPassword, uploadFile, deleteFile } = require('../controllers/UserController')

router.route('/').get(backendTest)

router.route('/upload').post(uploadFile).delete(deleteFile)

router.route('/login').post(loginUser)

router.route('/allUsers').get(passport.authenticate('jwt', {session: false}) ,getAllUsers)

router.route('/register').post(registerUser)

router.route('/forgotpassword').post(forgotPassword)

router.route('/myProfile').get(passport.authenticate('jwt', {session: false}) , userProfile)

module.exports = router