/* https://www.codewars.com/kata/544aed4c4a30184e960010f4 */

function divisors(integer) {
	var r = [];
	for (var i = 2; i < integer; i++) {
		integer % i === 0 ? r.push(i) : i;
	}

	return r.length === 0 ? `${integer} is prime` : r;
}