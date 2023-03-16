const User = require('../models/UserModel')

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
    let user = User.build({ 
        firstName : firstName ,
        middleName : middleName, 
        lastName : lastName, 
        address : address, 
        age : age, 
        email : email, 
        password : password, 
        title : title })
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
    return res.json('Login successful, Hello '+user.firstName+'.')
}

module.exports = { backendTest, getAllUsers, loginUser, registerUser }