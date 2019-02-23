/* https://www.codewars.com/kata/57238766214e4b04b8000011 */

function changeMe(a) {
	let b = parseInt(a.replace(/£/gi, '')) * 100 / 20,
	    c = parseInt(a.replace(/p/gi, '')) / 10,
	    r = [];

	if (a[0] === '£') {
		return '20p '.repeat(b - 1) + '20p';
	} else if (isNaN(b)) {
		return a;
	} else if (c > 2) {
		while (c > 0) {
			if (c === 1) {
				r.push('10p');
				c--;
			} else {
				r.push('20p');
				c -= 2;
			}
		}
		return r.join(' ');
	} else {
		while (c > 0) {
			r.push('10p');
			c--;
		}
		return r.join(' ');
	}
}