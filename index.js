var express = require("express");
var app = express();
var port = 3700;
 
var ping_result = {"alive" : true };

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function write_json(res, json) {
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.write(JSON.stringify(json));
	res.end();
}

function getPrimes(max) {
	var sieve = [], i, j, primes = [];
	for (i = 2; i <= max; ++i) {
		if (!sieve[i]) {
			// i has not been marked -- it is prime
			primes.push(i);
			for (j = i << 1; j <= max; j += i) {
				sieve[j] = true;
			}
		}
	}
	console.log("primes up to " + max + " are: " + primes);
	return primes;
}

function decompositions(number) {
	var primes = getPrimes(Math.sqrt(number));
    var results = [];
    var reste = number;
    var i = 0;

    while (reste > 1 && i < primes.length) {
        while ((reste % primes[i]) == 0) {
            reste = reste / primes[i];
			results.push(primes[i]);
        }
        i++;
    }

    if (reste != 1) {
        results.push(reste);
    }

    return results;
}


function primeFactors(number) {
	var result = {};
	result.number = number;

	if(!isNumber(number)) {
		result.error = "not a number";
	}
	else if (number > 1e6) {
		result.error = "too big number (>1e6)";
	}
	else {
		result.decomposition = decompositions(number);
	}

	return result;
}

app.get("/" , function(req, res){
	res.sendfile('public/index.html');
	});
      
app.get("/ping" , function(req, res){
	write_json(res, ping_result);
	});

app.get("/primeFactors", function(req, res){
	write_json(res, primeFactors(req.query.number));
	});

app.listen(process.env.PORT || port);
console.log("Listening on port " + process.env.PORT || port);
