var express = require("express");
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', function(req, res){
  res.render('layout');
});

app.listen(80);
console.log("Escuchando en el puerto 80");
