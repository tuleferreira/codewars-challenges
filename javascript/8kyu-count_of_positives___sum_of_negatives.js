/* https://www.codewars.com/kata/576bb71bbbcf0951d5000044 */

function countPositivesSumNegatives(input) {
	if (input !== null && input.length > 1) {
		var sum = input.filter(x => x <= 0),
			count = input.length - sum.length;

		if (sum.length > 2) {
			return [count, sum.reduce((a, b) => a + b)];
		}

		return [count, 0];
	}
	return [];
}