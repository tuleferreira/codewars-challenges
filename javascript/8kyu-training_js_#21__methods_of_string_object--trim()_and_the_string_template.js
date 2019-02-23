/* https://www.codewars.com/kata/5729b103dd8bac11a900119e */

function fiveLine(s) {
	s = s.trim();
	var r = [];
	for (var i = 1; i <= 5; i++) {
		r.push(s.repeat(i).trim());
	}
	return r.join('\n');
}