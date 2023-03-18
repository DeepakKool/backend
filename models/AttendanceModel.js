const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const AttendanceModel = sequelize.define('Attendance', {
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    team: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    workingHours: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    break: {
        type: DataTypes.TIME,
        validate: {
            notEmpty: true,
        }
    },
    status: {
        type: DataTypes.INTEGER
    },
    }, {
        timestamps: false,
        tableName: 'attendance',
    },
)

module.exports = AttendanceModel