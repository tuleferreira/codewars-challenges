/* https://www.codewars.com/kata/56a946cd7bd95ccab2000055 */

function lowercaseCount(str) {
	var count = 0;
	str.split('').map(x => (x.search(/[a-z]/g) === 0 ? count++ : x));
	return count;
}