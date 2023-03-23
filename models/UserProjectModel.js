const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const UserProject = sequelize.define('UserProject', {
    userId : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    projectId : {
        type : DataTypes.INTEGER,
        allowNull : false,
    }
    }, {
        timestamps: false,
        tableName: 'userProjects',
    },
)

module.exports = UserProject