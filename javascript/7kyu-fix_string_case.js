/* https://www.codewars.com/kata/5b180e9fedaa564a7000009a */

function solve(s) {
	let [upper, lower] = [0, 0];

	s.split('').map(a => (a === a.toLowerCase() ? lower++ : upper++));

	return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
