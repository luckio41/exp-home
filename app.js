var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Luckio Home Page");
});

app.listen(80);
console.log("Escuchando en el puerto 80");
