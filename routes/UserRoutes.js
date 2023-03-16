const express = require('express')
const passport = require('passport')
const router = express.Router()
const { backendTest, loginUser, getAllUsers, registerUser, userProfile } = require('../controllers/UserController')

router.route('').get(backendTest)

router.route('/login').post(loginUser)

router.route('/allUsers').get(passport.authenticate('jwt', {session: false}) ,getAllUsers)

router.route('/register').post(registerUser)

router.route('/myProfile').get(passport.authenticate('jwt', {session: false}) , userProfile)

module.exports = router