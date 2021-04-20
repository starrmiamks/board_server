const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('subscription', {
    userId: {
        type: DataTypes.INTEGER,
    },
    subscriptionStart: {
        type: DataTypes.DATE,
    },
    subscriptionType: {
        type: DataTypes.ENUM,
    }
})
