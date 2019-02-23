/* https://www.codewars.com/kata/580878d5d27b84b64c000b51 */

function sumTriangularNumbers(n) {
	var x = 0,
		r = 0;

	if (n <= 0) {
		return 0;
	} else {
		for (var i = 1; i <= n; i++) {
			r += x = x + i;
		}

		return r;
	}
}
