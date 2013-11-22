var express = require("express");
var app = express();
var port = 3700;
 
var ping_result = {"alive" : true };

var write_json = function(res, json) {
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.write(JSON.stringify(json));
	res.end();
}

var buildArraysOfTwos = function(number) {
	var result = [];
	var twos = Math.log(number) / Math.LN2;

	for (var i=0; i < twos; i++) {
		result.push(2);
	}
	return result;
}

var primeFactors = function(number) {
	var result = {};
	result.number = number;
	result.decomposition = buildArraysOfTwos(number);

	return result;
}

app.get("/" , function(req, res){
	res.sendfile('public/index.html');
	});
      
app.get("/ping" , function(req, res){
	write_json(res, ping_result);
	});

app.get("/primeFactors", function(req, res){
	if(req.query.number) {
		write_json(res, primeFactors(req.query.number));
	} else {
		res.send("primeFactor needs number parameter");
	}
	});

app.listen(process.env.PORT || port);
console.log("Listening on port " + process.env.PORT || port);
