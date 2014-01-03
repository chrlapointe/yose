var request = require('request');
var http    = require('http');
//var DomJS   = require("dom-js").DomJS;
var server  = require('../libs/server');

describe('Passing the primeFactors UI level:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('answsers with an html file', function(done) {
        request('http://localhost:7000/primeFactors/ui', function(error, response, body) {
            expect(response.statusCode).toEqual(200);

            //var domjs = new DomJS();
            //domjs.parse(body, function(err, dom) {
                // console.log("dom is :" + dom.toXml());
            //    console.log("dom get element" + dom.firstChild()); //getElementById("title").innerHTML);
            //    expect(dom.getElementById('title').innerHTML).toEqual("un titre");
                done(); 
            // });
            //expect(body).toContain('id="title"');
            //console.log("body.id : " + body.id);
            //expect($('#title').length).toBeGreaterThan(0);
        });
    });
   
});
