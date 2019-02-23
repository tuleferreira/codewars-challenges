/* https://www.codewars.com/kata/563b662a59afc2b5120000c6 */

function nbYear(p0, percent, aug, p) {
	var percentNew = percent / 100;
	var year = 0;
	while (p0 < p) {
		p0 = p0 + p0 * percentNew + aug;
		year++;
	}
	return year;
}
