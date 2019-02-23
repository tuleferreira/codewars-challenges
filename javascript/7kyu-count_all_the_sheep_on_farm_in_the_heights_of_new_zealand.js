/* https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010 */

function lostSheep(friday, saturday, total) {
	const red = arr => arr.reduce((a, b) => a + b, 0);
	return total - (red(friday) + red(saturday));
}
