var express = require('express');

var server = express();

server.get("/", function(req, res){
	require('./challenge.home/home.endpoint')(req, res);
	});
      
server.get("/ping", function(req, res){
	require('./challenge.ping/ping.endpoint')(req, res);
	});

server.get("/primeFactors", function(req, res){
	require('./challenge.prime/prime.endpoint')(req, res);
	});

module.exports = server;
