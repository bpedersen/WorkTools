var express = require('express');

var notes = express.Router();

notes.get('/', function(req, res, next){
  res.render('notes/index', {title: 'Notes Index'});
});

module.exports = notes;