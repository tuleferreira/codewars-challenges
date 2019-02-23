/* https://www.codewars.com/kata/570bcd9715944a2c8e000009 */

function sc(floor) {
	var r = [];
	for (var i = 0; i < floor - 1; i++) {
		r.push('Aa~');
	}

	if (floor <= 6) {
		r.push('Pa! Aa!');
	} else {
		r.push('Pa!');
	}

	return floor > 1 ? r.join(' ') : '';
}