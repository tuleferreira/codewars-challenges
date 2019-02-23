/* https://www.codewars.com/kata/57277a31e5e51450a4000010 */

function firstToLast(str, c) {
	if (str.indexOf(c) !== str.lastIndexOf(c)) {
		return str.lastIndexOf(c) - str.indexOf(c);
	} else if (str.indexOf(c) === -1) {
		return -1;
	} else {
		return 0;
	}
}