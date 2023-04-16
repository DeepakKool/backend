const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Contact = require('./ContactModel')
const User = require('./UserModel')

const UserContacts = sequelize.define('UserContact', {
    username : {
        type : DataTypes.STRING,
        references: {
            model : User,
            key : 'id'
        }
    },
    contactId: {
        type: DataTypes.STRING,
        references : {
            model : Contact,
            key : 'id'
        }
    },
    }, {
        timestamps: false,
        tableName: 'userContacts',
    },
)

module.exports = UserContacts