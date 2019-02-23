/* https://www.codewars.com/kata/559760bae64c31556c00006b */

function climb(n) {
	let r = [n];
	while (r[0] !== 1) {
		r.unshift(Math.floor(r[0] / 2));
	}
	return r;
}
