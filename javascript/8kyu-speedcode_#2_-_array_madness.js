/* https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1 */

function arrayMadness(a, b) {
	return (
		a.map(x => Math.pow(x, 2)).reduce((a, b) => a + b) >
		b.map(x => Math.pow(x, 3)).reduce((a, b) => a + b)
	);
}