/* https://www.codewars.com/kata/59cfc000aeb2844d16000075 */

function capitalize(s) {
	return [
		s
			.split('')
			.map((x, i) => (i % 2 === 1 ? x.toLowerCase() : x.toUpperCase()))
			.join(''),
		s
			.split('')
			.map((x, i) => (i % 2 === 0 ? x.toLowerCase() : x.toUpperCase()))
			.join(''),
	];
}
