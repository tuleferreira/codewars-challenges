/* https://www.codewars.com/kata/562926c855ca9fdc4800005b */

function numberToPower(number, power) {
	let r = 1;
	while (power > 0) {
		r *= number;
		power--;
	}
	return r;
}