/* https://www.codewars.com/kata/56f7493f5d7c12d1690000b6 */

function mean(lst) {
	let numbers = lst.filter(x => /\d/g.test(x));
	let letters = lst.filter(x => /\D/g.test(x)).join('');
	return [numbers.reduce((a, b) => +a + +b) / numbers.length, letters];
}
