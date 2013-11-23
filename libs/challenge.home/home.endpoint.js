var endpoint = function(req, res) {
	res.sendfile('./libs/challenge.home/home.html');
}

module.exports = endpoint;
