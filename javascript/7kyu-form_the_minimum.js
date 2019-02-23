/* https://www.codewars.com/kata/5ac6932b2f317b96980000ca */

function minValue(values) {
	return parseInt(
		values
			.sort((a, b) => a - b)
			.filter((cur, i, ar) => ar.indexOf(cur) === i)
			.join('')
	);
}
