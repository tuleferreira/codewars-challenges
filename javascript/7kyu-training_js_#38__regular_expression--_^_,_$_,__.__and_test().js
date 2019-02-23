/* https://www.codewars.com/kata/573975d3ac3eec695b0013e0 */

function findSimilarity(str, word) {
	var r = [];
	str.split(' ').map(a => {
		if (a[0] === word[0] && a[a.length - 1] === word[word.length - 1] && a.length === word.length) {
			r.push(a);
		}
	});

	return r.join(' ');
}