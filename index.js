var express = require('express')
  , fs = require('fs')
  , config = require('./config')
  , passport = require('passport')
  , logger = require('morgan')
  , app = express();

//Configure express server

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');
app.use(logger('dev'));


//Bootstrap mongoose models
var models_path = __dirname + '/app/models';
fs.readdirSync(models_path)
  .forEach(function(file){
    if(~file.indexOf('.js')) require(models_path + '/' + file);
  });

//Bootstrap routes
require('./app/routes')(app, passport);

// app.get('/', function(req, res){
//   res.send('Hello');
// });

//Start the app
app.listen(config.port);
console.log('Express started on port 8000');