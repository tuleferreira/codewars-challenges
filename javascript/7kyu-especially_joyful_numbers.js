/* https://www.codewars.com/kata/570523c146edc287a50014b1 */

function numberJoy(n) {
	let r = n.toString().split('').reduce((a, b) => +a + +b);
	return r * r.toString().split('').reverse().join('') === n;
}
