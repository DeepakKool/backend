const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const StrategyJwt = passportJWT.Strategy
const User = require('../models/UserModel')


passport.use(new StrategyJwt({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
    secretOrKey: process.env.JWT_SECRET
    }, (jwtPayload, done) => {
    return User.findOne({where: {id : jwtPayload.id}}).then(user=> {
        return done(null, user)
    }).catch(err=> {
        return done(null, err)
    })    
    })
)
