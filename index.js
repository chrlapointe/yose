var express = require("express");
var app = express();
var port = 3700;
 
var ping_result = {"alive" : true };

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function write_json(res, json) {
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.write(JSON.stringify(json));
	res.end();
}

function buildArraysOfTwos(number) {
	var result = [];
	var twos = Math.log(number) / Math.LN2;

	for (var i=0; i < twos; i++) {
		result.push(2);
	}
	return result;
}

function primeFactors(number) {
	var result = {};
	result.number = number;
	if(isNumber(number)) {
		result.decomposition = buildArraysOfTwos(number);
	} else {
		result.error = "not a number";
	}
	return result;
}

app.get("/" , function(req, res){
	res.sendfile('public/index.html');
	});
      
app.get("/ping" , function(req, res){
	write_json(res, ping_result);
	});

app.get("/primeFactors", function(req, res){
	write_json(res, primeFactors(req.query.number));
	});

app.listen(process.env.PORT || port);
console.log("Listening on port " + process.env.PORT || port);
