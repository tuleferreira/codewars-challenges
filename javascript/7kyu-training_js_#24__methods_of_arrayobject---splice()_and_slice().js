/* https://www.codewars.com/kata/572cb264362806af46000793 */

function threeInOne(arr) {
	var new1 = arr.slice();
	var r = [];

	while (new1.length > 0) {
		r.push(new1.splice(0, 3));
	}

	return r.map(a => a.reduce((x, y) => x + y));
}