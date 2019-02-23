/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039 */

function accum(s) {
	s = s.toLowerCase();
	var r = [];
	for (var i = 0; i < s.length; i++) {
		r.push(s[i].repeat(i + 1));
	}
	return r.map(x => x[0].toUpperCase() + x.slice(1)).join('-');
}