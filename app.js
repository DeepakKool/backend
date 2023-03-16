const express = require('express')
const bodyParser = require('body-parser')
const UserRoutes = require('./routes/UserRoutes')
const app = express()
const dotenv = require('dotenv')
//Config
dotenv.config({ path: "config/config.env" })

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