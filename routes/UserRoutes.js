const express = require('express')
const router = express.Router()
const { backendTest, loginUser, getAllUsers, registerUser } = require('../controllers/UserController')

router.route('').get(backendTest)

router.route('/login').post(loginUser)

router.route('/allUsers').get(getAllUsers)

router.route('/register').post(registerUser)

module.exports = router