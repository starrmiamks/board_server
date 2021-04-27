const Sequelize = require('sequelize');
const sequelize = new Sequelize('board-server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('connected to board postgres database');
    },
    function(err){
        console.log(err);
    }
);

User = sequelize.import('./models/user');
Profile = sequelize.import('./models/profile');
Subscription = sequelize.import('./models/subscription');

User.hasOne(Subscription);
Subscription.belongsTo(User);

Profile.belongsTo(User);
User.hasMany(Profile);

module.exports = sequelize;