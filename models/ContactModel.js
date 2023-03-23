const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Contact = sequelize.define('UserContact', {
    username : {
        type : DataTypes.STRING,
    },
    permanent_address : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    current_address : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    mobileNo: {
        type : DataTypes.STRING,
        validate: {
            len: {
                args : [10, 10],
                msg : 'Mobile no. should be 10 digits'
            } 
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {msg : 'Please enter a valid email address.'}
        }
    },
    }, {
        timestamps: false,
        tableName: 'contacts',
    },
)

module.exports = Contact