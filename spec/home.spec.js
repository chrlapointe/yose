var request = require('request');
var http    = require('http');
var zombie = require('zombie');
var server  = require('../libs/server');

describe('Passing the world 1 challenge', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answsers with a html page', function(done) {
        request('http://localhost:7000/', function(error, response, body) {
            expect(response.headers['content-type']).toMatch('text/html');
            done(); 
        });
    });
   
    it('landing page contains a contact information link with a specific id', function(done) {
        zombie.visit('http://localhost:7000/', function(error, browser, status) {
            expect(browser.querySelector("a#contact-me-link")).not.toBe(null);
            done(); 
        });
    });
});
