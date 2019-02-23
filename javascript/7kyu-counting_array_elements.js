/* https://www.codewars.com/kata/5569b10074fe4a6715000054 */

function count(array) {
	var obj = {};

	array.map(a => (obj[a] === undefined ? (obj[a] = 1) : obj[a]++));

	return obj;
}
