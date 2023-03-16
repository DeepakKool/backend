const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSER, process.env.DBPASSWORD, {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
})
try {
    sequelize.authenticate()
    console.log('Connection has been established successfully')
}   catch(error) {
    console.error('Unable to connect to the database', error)
}




module.exports = connectDatabase