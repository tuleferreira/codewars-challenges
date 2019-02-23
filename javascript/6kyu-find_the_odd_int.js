/* https://www.codewars.com/kata/54da5a58ea159efa38000836 */

function findOdd(A) {
	let x = [],
		y = [];

	A.map(function(z) {
		x.indexOf(z) === -1 ? x.push(z) && y.push(1) : y[x.indexOf(z)]++;
	});

	return x[y.indexOf(Number(y.filter(r => r % 2 === 1)))];
}