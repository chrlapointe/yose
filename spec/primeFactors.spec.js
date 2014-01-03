var request = require('request');
var http    = require('http');
var zombie  = require('zombie');
var server  = require('../libs/server');

describe('Passing the primeFactors UI level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
   
    it('respond with a form', function(done) {
        zombie.visit('http://localhost:7000/primeFactors/ui', function(error, browser, status) {
            expect(browser.querySelector("form")).not.toBeNull();
            expect(browser.querySelector("#title")).not.toBeNull();
            expect(browser.querySelector("#invitation")).not.toBeNull();
            done();
        });
    });

    it('form contains an input field named number and a go button', function(done) {
        zombie.visit('http://localhost:7000/primeFactors/ui', function(error, browser, status) {
            expect(browser.querySelector("input#number")).not.toBeNull();
            expect(browser.querySelector("button#go")).not.toBeNull();
            done();
        });
    });
});
