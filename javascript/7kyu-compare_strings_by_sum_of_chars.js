/* https://www.codewars.com/kata/576bb3c4b1abc497ec000065 */

function compare(s1, s2) {
	var sumCode = function(str) {
		return str
			.toUpperCase()
			.split('')
			.map(x => x.charCodeAt(0))
			.reduce((a, b) => a + b);
	};

	if (s1 === '' || s2 === '' || !/^[a-zA-Z]/.test(s1) || !/^[a-zA-Z]/.test(s2)) {
		return true;
	} else {
		return sumCode(s1) === sumCode(s2);
	}
}
