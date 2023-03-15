const express = require('express')
const router = express.Router()
const { backendTest, getAllUsers, registerUser, loginUser } = require('../controllers/User')

router.route('').get(backendTest)

router.route('/allUsers').get(getAllUsers)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

module.exports = router