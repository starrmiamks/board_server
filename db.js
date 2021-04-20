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
module.exports = sequelize;