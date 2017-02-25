//requiring NPM modeles
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var db = mongoose.connection;
var app = express();

db.on('error',console.error);

//requiring local modeles
var configs = require('./config');
var routes = require('./routes/routes');
var userModel = require('./models/users');
var videoModel = require('./models/videos');
var helperFunctions = require('./helpers/helperFunctions');


// Uncomment the following lines to start logging requests to consoles.
// app.use(morgan('combined'));
// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());

app.set('views',__dirname+'/client');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.engine('html', require('ejs').renderFile)


//connedting to mongoDB
mongoose.connect('mongodb://'+configs.dbHost+'/'+configs.dbName);
//populating data if DB is not already populated.
helperFunctions.populateDb();

//Initilizing routes.
routes(app,express);
// require('./routes/api')(app);
// require('./routes/routes')(app);
//


// serve video files.
app.use('videos',express.static('videos'));
app.use('/bower',express.static(__dirname + '/bower_components'));
// serve client side code.
// app.use('/client',express.static('client'));


app.get('*',function(req,res){
  res.render('/client/index.html');
});

//Finally starting the listener
app.listen(configs.applicationPort, function () {
  console.log('Example app listening on port '+configs.applicationPort+'!');
});
