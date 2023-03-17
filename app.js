//Config- should always be imported first
const dotenv = require('dotenv')
dotenv.config({ path: "config/config.env" })

const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const UserRoutes = require('./routes/UserRoutes')
var cors = require('cors')
const app = express()




require('./auth/passport')

process.on('uncaughtException', (err)=> {
    console.log("Error :"+err.message)
    console.log("Shutting down the server due to unhandled promise rejection")
})

app.use(bodyParser.json())
app.use(cors())
router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
});

app.use('/', UserRoutes)

app.listen(8800, ()=> {
    console.log('Connected to backend!')
})