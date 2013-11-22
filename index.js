var express = require("express");
var app = express();
var port = 3700;
 
var json_result = {"alive" : true };

app.get("/" , function(req, res){
	res.sendfile('public/index.html');
	});
      
app.get("/ping" , function(req, res){
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.write(JSON.stringify(json_result));
	res.end();
	});
app.listen(process.env.PORT || port);
console.log("Listening on port " + process.env.PORT || port);
