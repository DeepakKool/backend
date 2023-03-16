const express = require('express')
const bodyParser = require('body-parser')
const UserRoutes = require('./routes/UserRoutes')
const app = express()

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" })
}

app.use(bodyParser.json())

app.use('/', UserRoutes)

app.listen(8800, ()=> {
    console.log('Connected to backend!')
})