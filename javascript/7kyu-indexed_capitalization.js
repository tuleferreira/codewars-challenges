/* https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1 */

function capitalize(s, arr) {
	s = s.split('');
	arr.map(x => (s[x] ? (s[x] = s[x].toUpperCase()) : x));

	return s.join('');
}
