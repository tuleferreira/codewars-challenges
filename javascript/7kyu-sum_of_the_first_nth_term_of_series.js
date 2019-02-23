/* https://www.codewars.com/kata/555eded1ad94b00403000071 */

function SeriesSum(n) {
	if (n > 1) {
		let r = 1;

		for (var i = 1; i < n; i++) {
			r += 1 / (1 + i * 3);
		}
		return r.toFixed(2);
	} else {
		return n == 1 ? '1.00' : '0.00';
	}
}
