const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Timesheet = sequelize.define('Timesheet', {
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    workhour: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
        timestamps: false,
        tableName: 'timesheet',
    },
)

module.exports = Timesheet