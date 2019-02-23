/* https://www.codewars.com/kata/55c5b03f8c28da9a51000045 */

function findSum(...n) {
	return n.filter(x => x < 0).length > 0 ? -1 : n.reduce((a, b) => a + b, 0);
}
