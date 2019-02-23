/* https://www.codewars.com/kata/59f061773e532d0c87000d16 */

function elevatorDistance(array) {
	let r = 0;

	array.map((x, i) => {
		if (array[i + 1] !== undefined) {
			if (x > array[i + 1]) {
				r += x - array[i + 1];
			} else {
				r += array[i + 1] - x;
			}
		}
	});

	return r;
}
