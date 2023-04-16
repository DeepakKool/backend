const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Project = sequelize.define('Project', {
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    projectCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    team: DataTypes.INTEGER,
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lastModifiedDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    modifiedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
    }, {
        timestamps: false,
        tableName: 'projects',
    },
)

module.exports = Project