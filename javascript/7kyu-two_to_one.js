/* https://www.codewars.com/kata/5656b6906de340bd1b0000ac */

function longest(s1, s2) {
	var r = [];
	s1.concat(s2).split('').map(x => (r.indexOf(x) === -1 ? r.push(x) : x));
	return r.sort().join('');
}