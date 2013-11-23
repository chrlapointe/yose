var ping_result = {"alive" : true };

var endpoint = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(ping_result);
}

module.exports = endpoint;
