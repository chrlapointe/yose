var express = require('express');

var server = express();
server.use(express.static(__dirname  + '/../public'));

server.get("/", function(req, res){
	require('./challenge.home/home.endpoint')(req, res);
	});
      
server.get("/ping", function(req, res){
	require('./challenge.ping/ping.endpoint')(req, res);
	});

server.get("/primeFactors", function(req, res){
	require('./challenge.prime/prime.endpoint').prime(req, res);
	});

server.get("/primeFactors/ui", function(req, res){
	require('./challenge.prime/prime.endpoint').ui(req, res);
	});

server.get("/minesweeper", function(req, res){
	require('./challenge.minesweeper/minesweeper.endpoint')(req, res);
	});
	
module.exports = server;
