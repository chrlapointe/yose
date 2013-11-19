var express = require("express");
var app = express();
var port = 3700;
 
var json_result = {"alive" : true };

app.get("/ping" , function(req, res){
     res.send(JSON.stringify(json_result));
     });
      
app.listen(port);
console.log("Listening on port " + port);
