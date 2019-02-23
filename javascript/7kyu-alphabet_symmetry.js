/* https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0 */

function solve(arr) {
	return arr.map(a =>
		[...a]
			.map((x, i) => (x.toLowerCase().charCodeAt(0) - 97 === i ? 1 : 0))
			.filter(y => y > 0)
			.reduce((n, m) => n + m, 0)
	);
}
