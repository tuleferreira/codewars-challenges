/* https://www.codewars.com/kata/55d410c492e6ed767000004f */

function vowel2index(str) {
	let res = '';

	for (let i = 0; i < str.length; i++) {
		if (/a|e|o|i|u/gi.test(str[i])) {
			res += i + 1;
		} else {
			res += str[i];
		}
	}

	return res;
}
