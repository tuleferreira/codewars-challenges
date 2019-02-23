/* https://www.codewars.com/kata/55eca815d0d20962e1000106 */

function generateRange(min, max, step) {
	var r = [min];
	while (min <= max - step) {
		min += step;
		r.push(min);
	}
	return r;
}