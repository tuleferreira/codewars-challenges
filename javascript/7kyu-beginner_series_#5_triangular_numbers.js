/* https://www.codewars.com/kata/56d0a591c6c8b466ca00118b */

function isTriangular(t) {
	var sum = 0;
	for (var n = 0; sum < t; n++) {
		sum = n * (n + 1) / 2;
		if (sum === t) {
			return true;
		}
	}
	return false;
}