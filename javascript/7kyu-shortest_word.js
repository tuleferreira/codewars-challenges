/* https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9 */

function findShort(s) {
	var words = s.split(' ');
	var l = [];
	for (var i = 0, j = words.length; i < j; i++) {
		l.push(words[i].length);
	}

	var min = Math.min(...l);

	return min;
}