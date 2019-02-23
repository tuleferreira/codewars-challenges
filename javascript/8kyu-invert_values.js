/* https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad */

function invert(array) {
	return array.map(x => (x < 0 ? x + Math.abs(x) * 2 : x - x * 2));
}