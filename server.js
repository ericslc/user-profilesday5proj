var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var app = express();
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var corsOptions = {
    origin: 'http://localhost:8005'
};
var port = 8005;


app.use(session({secret: config.sessionSecret}));
app.use()
app.use(bodyParser.json());
app.use(cors(corsOptions));


app.get('/api/profiles', profileCtrl.getFriends)



app.listen(port, function(){
  console.log('listening on port ', port);
})
