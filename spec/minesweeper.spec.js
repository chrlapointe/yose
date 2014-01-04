var request = require('request');
var http    = require('http');
var zombie = require('zombie');
var server  = require('../libs/server');

describe('Passing the minesweeper (world 3) challenge', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answsers with a html page containing a minesweeper title and a grid named cell-nxp', function(done) {
        zombie.visit('http://localhost:7000/minesweeper', function(error, browser, status) {
			expect(browser.text("#title")).toEqual("Minesweeper");
            expect(browser.querySelector("#cell-nxp")).not.toBeNull();
            done(); 
        });
    });
});
