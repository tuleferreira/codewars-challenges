/* https://www.codewars.com/kata/57b68bc7b69bfc8209000307 */

function average(scores) {
	return Math.round(scores.reduce((a, b) => a + b) / scores.length);
}
