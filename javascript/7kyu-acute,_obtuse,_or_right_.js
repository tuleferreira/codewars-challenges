/* https://www.codewars.com/kata/5a2ef8b7b6486a7f2e00001c */

function obtRhtAct(s) {
	s = s.sort((a, b) => a > b);
	var p1 = Math.pow(s[0], 2) + Math.pow(s[1], 2),
		p2 = Math.pow(s[2], 2);
	return s[0] + s[1] <= s[2] ? -1 : p1 < p2 ? 0 : p1 === p2 ? 1 : 2;
}
