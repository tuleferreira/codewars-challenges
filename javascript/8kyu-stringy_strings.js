/* https://www.codewars.com/kata/563b74ddd19a3ad462000054 */

function stringy(size) {
	var str = '';
	for (var i = 1; i <= size; i++) str += i % 2;
	return str;
}