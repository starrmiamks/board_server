module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('profile', {
        userId: {
            type: DataTypes.INTEGER,
        },
        picture: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        details: {
            type: DataTypes.STRING,
        }
    })
    return Profile;
};
