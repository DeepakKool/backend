const ErrorHandler = require("../utils/errorHandler")

 module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal server error'

    //mySQL duplicate key error
    if(err.code === 'ER_DUP_ENTRY')  {
        err = new ErrorHandler('E-mail already exists', 400)
    }

    //Wrong jwt Error
    if(err.name === 'JsonWebTokenError')    {
        err = new ErrorHandler('Reset link invalid, try again', 400)
    }

    //Expired jwt Error
    if(err.name === 'TokenExpiredError')    {
        err = new ErrorHandler('Reset link Expired, try again', 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}