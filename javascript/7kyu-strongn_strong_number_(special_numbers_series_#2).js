/* https://www.codewars.com/kata/5a4d303f880385399b000001 */

const strong = n => {
	const factorial = x => {
		if (x == 0) return 1;
		return x * factorial(x - 1);
	};

	return [...String(n)].reduce((a, b) => +a + +factorial(b), 0) === n ? 'STRONG!!!!' : 'Not Strong !!';
};
