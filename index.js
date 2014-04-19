var express = require('express');
var app = express();

app.get('/', function(req, res) {
  // body...
  res.send('Hello World');
});

app.listen(8000);
console.log('Express started on port 8000');