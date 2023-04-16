const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args : [2, 20],
                msg : "Please enter a valid name." ,
            }
        }
    },
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {msg : 'Please enter a valid age.'}
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: {
                args : [5, 30],
                msg : 'The username must be atleast 5 characters.'
            } 
        }
    },   
    }, {
        tableName: 'users',
    },
)

module.exports = User