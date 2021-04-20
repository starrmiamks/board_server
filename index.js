require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let user = require('./controllers/usercontroller');
let profile = require('./controllers/profilecontroller');
let sub = require('./controllers/subscriptioncontroller');

sequelize.sync();
app.use(express.json());

app.use('/user', user)

app.use(require('./middleware/validate-session'));
app.use('/profile', profile);
app.use('/subscription', subscription);


app.listen(3000, function (){
    console.log('App is listening on port 3000');
})

