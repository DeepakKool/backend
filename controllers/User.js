const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'timesheet'
})

const backendTest = (req,res) => {
    res.json('Hello this is the backend')
}

const getAllUsers = (req,res) => {
    let query = "SELECT * from users"
    db.query(query, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
}

const registerUser = (req,res) => {
    let query = "INSERT INTO users (`emailId`, `name`, `title`) VALUES (?)"
    let { email, name, title } = req.body
    let VALUES = [email, name, title]
    db.query(query, [VALUES], (err, data)=> {
        if(err) return res.json(err)
        return res.json("User created successfully")
    })
}

const loginUser = (req,res)=>{
    let {email,password} = req.body
    if(!email || !password){
        return res.json('Please enter email & password')
    }
    let query = 'SELECT * FROM users WHERE emailId = ? AND password = ?'
    db.query(query, [email, password], (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
}

module.exports = { backendTest, getAllUsers, registerUser, loginUser }