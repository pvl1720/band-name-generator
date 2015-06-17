'use strict'

var express = require('express');
var bodyparser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

var Adjective = function() {
 this.sleepy = true;
 this.fuzzy = true;
 this.cranky = true;
 this.soporific = true;
 this.eloquent = true;
};
var adjective = new Adjective();

var Verb = function(){
this.walking = true;
this.sleeping = true;
this.watching = true;
this.running = true;
this.swimming = true;
};
var verb = new Verb();

var Noun =function(){
this.dog = true;
this.house = true;
this.moon = true;
this.job = true;
this.copper = true;
};
var noun = new Noun();

function postRandomWord (word, object) {
//check if the word exists
if (object.hasOwnProperty(word)) {
  //if the word exists, then send a msg back
  return {msg: "thanks for trying but we have this word already"}
  } else {
  //if the word doesn't exist, add it as a property to that object
    object[word] = true;
  // and send a msg thanking for the word
   return {msg: "thanks for submitting your word"}
  }
}


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

app.get('/verb', function(req, res) {
 res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
 res.json(getRandomWord(noun));
});

app.post('/adjective', function(req, res) {
  var word = postRandomWord(req.body.word, adjective);
  //console.log(req.body);
  res.json({word: 'hi'});
});

app.listen(port, function() {
 console.log('server available at http://localhost: ' + port);
});
