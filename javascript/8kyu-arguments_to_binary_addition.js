/* https://www.codewars.com/kata/57642a90dee2da8dd3000161 */

function arr2bin(arr) {
	return arr
		.filter(char => typeof char === 'number')
		.reduce((a, b) => a + b, 0)
		.toString(2);
}