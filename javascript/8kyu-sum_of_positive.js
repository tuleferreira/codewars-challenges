/* https://www.codewars.com/kata/5715eaedb436cf5606000381 */

function positiveSum(arr) {
	return arr.filter(x => x > -1).reduce((a, b) => a + b, 0);
}