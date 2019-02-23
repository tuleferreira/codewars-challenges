/* https://www.codewars.com/kata/57f222ce69e09c3630000212 */

function well(x) {
	let count = 0;
	x.map(a => (a === 'good' ? count++ : a));
	return count === 0 ? 'Fail!' : count < 3 ? 'Publish!' : 'I smell a series!';
}