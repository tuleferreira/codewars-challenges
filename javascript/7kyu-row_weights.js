/* https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9 */

function rowWeights(array) {
	let r1 = 0,
		r2 = 0;
	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			r1 += array[i];
		} else {
			r2 += array[i];
		}
	}
	return [r1, r2];
}
