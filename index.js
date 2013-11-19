var express = require("express");
var app = express();
var port = 3700;
 
var json_result = {"alive" : true };

app.get("/ping" , function(req, res){
	res.writeHead(200, { 'Content Type': 'application/json'});
	res.end(JSON.stringify(json_result));
	});
      
app.listen(process.env.PORT || port);
console.log("Listening on port " + process.env.PORT || port);
