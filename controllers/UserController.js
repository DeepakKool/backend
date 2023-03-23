const User = require('../models/UserModel')
const ErrorHandler = require('../utils/errorHandler')
const UserLogin = require('../models/UserLoginModel')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Contact = require('../models/ContactModel')
const jwt = require('jsonwebtoken')

const backendTest = (req,res) => {
    res.json('Hello this is the backend')
}

// Fetch all users for admin
const getAllUsers = catchAsyncErrors(async(req,res,next) => {
    const users = await User.findAll()
    if(users.length === 0)
        return next(new ErrorHandler('No users found', 400))
    return res.status(200).json({data:users})
})

// Register User
const registerUser = catchAsyncErrors(async(req,res) => {
    let { firstName , middleName, lastName, permanent_address, current_address, mobileNo, age, email, username, password } = req.body
    await User.create({ firstName, middleName, lastName, age, username })
    await UserLogin.create({ username, password })
    await Contact.create({ username, permanent_address, current_address, mobileNo, email  })
    res.status(201).json({ message : "User created successfully." })
}) 


// Login User
const loginUser = catchAsyncErrors(async(req,res,next)=>{
    let {username, password} = req.body
    if(!username || !password) {
        return next(new ErrorHandler('Please enter username & password', 400))
    }
    const userLogin = await UserLogin.findByPk(username)
    if(!userLogin) {
        return next(new ErrorHandler('Incorrect username please try again', 401))

    }
    if(userLogin.password !== password)
        return res.json('Incorrect password please try again')
    const jwtToken = jwt.sign({id: userLogin.id, username: userLogin.username, userType: userLogin.userType}, process.env.JWT_SECRET)
    return res.status(201).json({message : 'Login successful, Hello '+userLogin.username+'.',
                     token: jwtToken})
})

const userProfile = (req,res) => {
    res.send('Welcome to the login page')
}

module.exports = { backendTest, getAllUsers, loginUser, registerUser, userProfile }