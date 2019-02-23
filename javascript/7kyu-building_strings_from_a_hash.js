/* https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2 */

function solution(p) {
	var r = [];

	for (var key in p) {
		if (p.hasOwnProperty(key)) {
			r.push(`${key} = ${p[key]}`);
		}
	}

	return r + '';
}