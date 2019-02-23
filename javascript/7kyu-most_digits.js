/* https://www.codewars.com/kata/58daa7617332e59593000006 */

function findLongest(array) {
	var target = array.slice().sort((a, b) => b - a)[0].toString().length;

	return array.find(x => x.toString().length === target);
}
