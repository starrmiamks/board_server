module.exports = (sequelize, DataTypes) => {
    const sub = sequelize.define('subscription', {
        userId: {
            type: DataTypes.INTEGER,
        },
        subscriptionStart: {
            type: DataTypes.DATE
        },
        subscriptionType: {
            type: DataTypes.ENUM('M', 'Y')
        },
        streetAddress1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        streetAddress2: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }),
    return sub;
};
