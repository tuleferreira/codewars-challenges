/* https://www.codewars.com/kata/5436f26c4e3d6c40e5000282 */

function sumOfN(n) {
	let r = [],
		c = 0;

	if (n < 0) {
		for (let i = 0; i >= n; i--) {
			c += i;
			r.push(c);
		}
	} else {
		for (let i = 0; i <= n; i++) {
			c += i;
			r.push(c);
		}
	}

	return r;
}
