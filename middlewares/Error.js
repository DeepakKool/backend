const errorMiddleware = (err,req,res,next) => {
    err.message = err.message || 'Internal server error'
    err.statusCode = err.statusCode || 500
    if(err.name === 'SequelizeUniqueConstraintError')
        err.message = req.body.username +' already exists. Please choose a different Username.'
    console.log(err.path)
    res.status(err.statusCode).json({
        success : false,
        message : err.message,
    })
}

module.exports =  errorMiddleware