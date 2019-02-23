/* https://www.codewars.com/kata/57241e0f440cd279b5000829 */

function sumMul(n, m) {
	var sum = 0;
	for (var i = 0; i < m; i++) {
		if (i % n === 0) {
			sum += i;
		}
	}
	return sum === 0 ? 'INVALID' : sum;
}