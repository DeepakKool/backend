const fs = require('fs')
const User = require('../models/UserModel')
const ErrorHandler = require('../utils/errorHandler')
const formidable = require('formidable')
const crypto = require('crypto')
const UserLogin = require('../models/UserLoginModel')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Contact = require('../models/ContactModel')
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/sendEmail')
const { join } = require('path')


const backendTest = (req,res) => {
    res.send(`Hello world!`)
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

// Returns true if successful or false otherwise
async function checkCreateUploadsFolder (uploadsFolder) {
	try {
		fs.statAsync(uploadsFolder)
	} catch (e) {
		if (e && e.code == 'ENOENT') {
			console.log('The uploads folder doesn\'t exist, creating a new one...')
			try {
				fs.mkdirSync(uploadsFolder)
			} catch (err) {
				console.log('Error creating the uploads folder 1', err)
				return false
			}
		} else {
			console.log('Error reading the folder')
			return false
		}
	}
	return true
}

// Returns true or false depending on whether the file is an accepted type
const isFileValid = (file) => {
    const type = file.type.split("/").pop();
    const validTypes = ["jpg", "jpeg", "png", "pdf"];
    if (validTypes.indexOf(type) === -1) {
      return false;
    }
    return true;
};

// Upload file
const uploadFile = catchAsyncErrors(async(req,res) => {
    console.log('Function started')
    
    const form = formidable({ multiples: true, uploadDir: __dirname });
    res.json('File uploaded and moved!');
    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
            res.end(String(err));
            return;
        }
        const { filepath, originalFilename, newFilename, size, mimetype } = files.files;
        console.log(filepath);
        var oldPath = filepath;
        var newPath = __dirname + '/' + originalFilename //change path then it will work
        // const fileName = encodeURIComponent(originalFilename.replace(/&. *;+/g, '-'))
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    })
})

const deleteFile = catchAsyncErrors(async(req,res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
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

const forgotPassword = catchAsyncErrors(async(req,res,next) => {
    const user = await Contact.findOne( { where: {email: req.body.email}} )
    if(!user)
    return next(new ErrorHandler('User not found', 404))
    const message = 'Hello this is me Deepak Karnadhar'
    try {
        await sendEmail({
            email : user.email,
            subject : 'Deepak Karnadhar',
            message,
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })
    } catch(error) {
        console.log(error)
    }
})

const userProfile = (req,res) => {
    res.send('Welcome to the login page')
}

module.exports = { backendTest, getAllUsers, loginUser, registerUser, userProfile, forgotPassword, uploadFile, deleteFile }