const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const UserSchedule = sequelize.define('UserSchedule', {
    emdId: DataTypes.STRING,
    name: DataTypes.STRING,
    inTime: DataTypes.STRING,
    outTime: DataTypes.STRING,
    team: DataTypes.STRING,
    status: DataTypes.INTEGER
    }, {
        tableName: 'userSchedule'
    },
)

module.exports = UserSchedule