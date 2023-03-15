const express = require('express')
const app = express()

const User = require('./routes/UserRoutes')

app.use(express.json())
app.use('/', User)

app.listen(8800, ()=> {
    console.log('Connected to backend!')
})