/* https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039 */

function numbersWithDigitInside(x, d) {
	var count = 0,
		numbers = [];

	for (let i = 1; i <= x; i++) {
		if ((i + '').includes(d + '')) {
			count++;
			numbers.push(i);
		}
	}

	return numbers.length === 0
		? [0, 0, 0]
		: [count, numbers.reduce((a, b) => a + b, 0), numbers.reduce((a, b) => a * b, 1),];
}
