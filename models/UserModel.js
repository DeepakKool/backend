const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
        timestamps: false,
        tableName: 'users',
    },
)

module.exports = User