const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const UserLogin = sequelize.define('UserLogin', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true,
            len: [5, 30]
        }
    },
    usertype: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: {
                args : [8, 20],
                msg : 'Password must be atleast 8 characters'
            } 
        }
    }, 
    }, {
        timestamps: false,
        tableName: 'userLogin',
    },
)

module.exports = UserLogin