'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

var Adjective = function() {
 this.sleepy = true;
 this.fuzzy = true;
 this.cranky = true;
 this.soporific = true;
 this.eloquent = true;
};

var adjective = new Adjective();

function getRandomWord (object) {
 var propArray = Object.keys(object);
 var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
 return {word: randomProp};}

app.get('/', function(req, res) {
 res.send('Helloooooo!');
});

app.get('/adjective', function(req, res) {
 res.json(getRandomWord(adjective));
});

app.listen(port, function() {
 console.log('server available at http://localhost: ' + port);
});
