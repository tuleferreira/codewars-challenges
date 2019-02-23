/* https://www.codewars.com/kata/5434283682b0fdb0420000e6 */

function caffeineBuzz(n) {
	var r = '';

	if (n % 3 === 0 && n % 4 === 0) {
		r += 'Coffee';
		if (n % 2 === 0) {
			r += 'Script';
		}
	} else if (n % 3 === 0) {
		r += 'Java';
		if (n % 2 === 0) {
			r += 'Script';
		}
	} else {
		r += 'mocha_missing!';
	}

	return r;
}
