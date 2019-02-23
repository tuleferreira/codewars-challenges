/* https://www.codewars.com/kata/5526fc09a1bbd946250002dc */

function findOutlier(integers) {
	var even = [];
	var odd = [];

	for (var i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) {
			even.push(integers[i]);
		} else {
			odd.push(integers[i]);
		}
	}

	if (even.length === 1) {
		return parseInt(even);
	} else {
		return parseInt(odd);
	}
}