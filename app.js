var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var app = express();

app.listen(3000, function(){
    console.log("Running on Port 3000");
})

app.use(express.static('public'));


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin123@ds241065.mlab.com:41065/pubcrawl";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    db.collection('pubs').find().toArray(function(err, res){
        if (err) throw err;
        var json = JSON.stringify(res);
        fs.writeFile('public/myData.json', json, 'utf8');
        db.close();
    })
});