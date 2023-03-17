//Config- should always be imported first
const dotenv = require('dotenv')
dotenv.config({ path: "config/config.env" })


const express = require('express')
const bodyParser = require('body-parser')
const UserRoutes = require('./routes/UserRoutes')
const app = express()

require('./auth/passport')

process.on('uncaughtException', (err)=> {
    console.log("Error :"+err.message)
    console.log("Shutting down the server due to unhandled promise rejection")
})

app.use(bodyParser.json())

app.use('/', UserRoutes)

app.listen(8800, ()=> {
    console.log('Connected to backend!')
})