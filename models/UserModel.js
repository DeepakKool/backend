const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [5, 20]
        }
    },
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [8, 20]
        }
    },    
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    }, {
        timestamps: false,
        tableName: 'users',
    },
)

module.exports = User