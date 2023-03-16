const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const backendTest = (req,res) => {
    res.json('Hello this is the backend')
}

// Fetch all users for admin
const getAllUsers = async(req,res) => {
    const users = await User.findAll()
    return res.status(200).json({data:users})
}

// Register User
const registerUser = async(req,res) => {
    let { firstName , middleName, lastName, address, age, email, password, title } = req.body
    let user = User.build({ firstName , middleName, lastName, address, age, email, password, title })
    await user.save().catch(err=> {
        return res.json(err)
    })
    return res.json(user)
}

// Login User
const loginUser = async(req,res)=>{
    let {email, password} = req.body
    if(!email || !password){
        return res.json('Please enter email & password')
    }
    const user = await User.findOne({
        where: { email : email }
    })
    if(!user)
        return res.json('Incorrect email please try again')
    if(user.password !== password)
        return res.json('Incorrect password please try again')
    const jwtToken = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET)
    return res.json({message : 'Login successful, Hello '+user.firstName+'.',
                     token: jwtToken})
}

const userProfile = (req,res) => {
    res.send('Welcome to the login page')
}

module.exports = { backendTest, getAllUsers, loginUser, registerUser, userProfile }