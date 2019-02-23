/* https://www.codewars.com/kata/5a29a0898f27f2d9c9000058 */

function solve(s) {
	const upper = s.match(/[A-Z]/g, ''),
		lower = s.match(/[a-z]/g, ''),
		number = s.match(/\d/g, ''),
		symbol = s.match(/(?=\W)(?=\D)/g, '');

	return [
		upper ? upper.length : 0,
		lower ? lower.length : 0,
		number ? number.length : 0,
		symbol ? symbol.length : 0,
	];
}
