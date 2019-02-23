/* https://www.codewars.com/kata/57f36495c0bb25ecf50000e7 */

function findSum(n) {
	var r = [];

	for (var i = 3; i <= n; i += 3) {
		r.push(i);
	}

	for (var j = 5; j <= n; j += 5) {
		if (r.indexOf(j) === -1) r.push(j);
	}

	return r.reduce((a, b) => a + b);
}
