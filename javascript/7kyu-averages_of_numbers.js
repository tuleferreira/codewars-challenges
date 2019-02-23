/* https://www.codewars.com/kata/57d2807295497e652b000139 */

function averages(numbers) {
	var r = [];

	if (numbers === null) {
		return r;
	} else {
		for (var i = 0; i < numbers.length - 1; i++) {
			r.push((numbers[i] + numbers[i + 1]) / 2);
		}
	}

	return r;
}
