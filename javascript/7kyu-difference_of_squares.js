/* https://www.codewars.com/kata/558f9f51e85b46e9fa000025 */

function differenceOfSquares(n) {
	var r = [];
  
	for (let i = 1; i <= n; i++) {
		r.push(i);
	}

	return (
		Math.pow(r.reduce((a, b) => a + b), 2) -
		r.map(e => Math.pow(e, 2)).reduce((a, b) => a + b)
	);
}
