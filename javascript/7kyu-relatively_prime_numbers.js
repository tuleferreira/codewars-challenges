/* https://www.codewars.com/kata/56b0f5f84de0afafce00004e */

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};

function relativelyPrime(n, l) {
	var result = [];
	for (var i = 0; i < l.length; i++) {
		if (gcd(n, l[i]) === 1) result.push(l[i]);
	}

	return result;
}