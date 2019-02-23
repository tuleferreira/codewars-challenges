/* https://www.codewars.com/kata/5a97387e5ee396e70a00016d */

function pofi(n) {
	if (n % 2 === 0) {
		if (n / 2 % 2 === 0) {
			return '1';
		} else {
			return '-1';
		}
	} else {
		if ((n + 1) / 2 % 2 === 0) {
			return '-i';
		} else {
			return 'i';
		}
	}
}
