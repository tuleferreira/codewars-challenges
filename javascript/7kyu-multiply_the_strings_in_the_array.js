/* https://www.codewars.com/kata/59b2963132779166d2001018 */

function arrMultiply(arr) {
	return String(arr.reduce((a, b) => +a * +b));
}
