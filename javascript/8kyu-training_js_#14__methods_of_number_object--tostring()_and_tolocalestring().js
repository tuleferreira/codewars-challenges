/* https://www.codewars.com/kata/57238ceaef9008adc7000603 */

function colorOf(r, g, b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);

	return `#${r.length == 1 ? '0' + r : r}${g.length == 1 ? '0' + g : g}${b.length == 1 ? '0' + b : b}`;
}
