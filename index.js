var express = require("express");
var app = express();
var port = 3700;
 
var ping_result = {"alive" : true };
var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937];

function write_json(res, json) {
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.write(JSON.stringify(json));
	res.end();
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function decompositions(number) {
    var results = [];
	var maxPrime = Math.sqrt(number);
    var i = 0;

    while (number > 1 && primes[i] <= maxPrime) {
        while ((number % primes[i]) == 0) {
            number = number / primes[i];
			results.push(primes[i]);
        }
        i++;
    }

    if (number != 1) {
        results.push(number);
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

function allPrimeFactors(number) {
	if (Array.isArray(number)) {
		var results = [];
		for (var i=0; i < number.length; i++) {
			results.push(primeFactors(number[i]));
		}
		return results;
	}
	else {
		return primeFactors(number);
	}
}

app.get("/" , function(req, res){
	res.sendfile('public/index.html');
	});
      
app.get("/ping" , function(req, res){
	write_json(res, ping_result);
	});

app.get("/primeFactors", function(req, res){
	write_json(res, allPrimeFactors(req.query.number));
	});

app.listen(process.env.PORT || port);
console.log("Listening on port " + process.env.PORT || port);
