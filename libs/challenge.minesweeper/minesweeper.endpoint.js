
var endpoint = function(req, res) {
	res.sendfile('./libs/challenge.minesweeper/minesweeper.html');
}

module.exports = endpoint;
