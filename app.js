var server = require('./libs/server');

var port = process.env.PORT || 7000;

server.listen(port);

console.log("Listening on port " + port);
