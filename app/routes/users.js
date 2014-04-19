var express = require('express');

var users = express.Router();

users.get('/', function(req, res, next){
  res.send('Users Index');
});

module.exports = users;