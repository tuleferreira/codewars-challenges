/* https://www.codewars.com/kata/52f3149496de55aded000410 */

function sumDigits(number) {
	return (Math.abs(number) + '')
		.split('')
		.map(x => parseInt(x))
		.reduce((a, b) => a + b);
}
