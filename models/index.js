const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('timesheet', 'root', 'password', {
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

sequelize.sync()

module.exports = sequelize