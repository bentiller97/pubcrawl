var express = require('express');
var mongo = require('mongodb');
var app = express();

app.listen(3000, function(){
    console.log("Running on Port 3000");
})

app.use(express.static('public'));