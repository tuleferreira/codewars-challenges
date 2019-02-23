/* https://www.codewars.com/kata/5a4138acf28b82aa43000117 */

function adjacentElementsProduct(array) {
	let r = array[0] * array[1];

	for (let i = 0; i < array.length; i++) {
		if (array[i] * array[i + 1] > r) r = array[i] * array[i + 1];
	}

	return r;
}
