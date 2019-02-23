/* https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7 */

function isOpposite(s1, s2) {
	if (s1.length !== s2.length || s1.length === 0) {
		return false;
	}

	for (var i = 0; i < s1.length; i++) {
		if (
			s1[i] === s1[i].toUpperCase() &&
			s1[i] !== String.fromCharCode(s2[i].charCodeAt(0) - 32)
		) {
			return false;
		} else if (
			s1[i] === s1[i].toLowerCase() &&
			s1[i] !== String.fromCharCode(s2[i].charCodeAt(0) + 32)
		) {
			return false;
		}
	}
	return true;
}