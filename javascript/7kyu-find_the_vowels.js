/* https://www.codewars.com/kata/5680781b6b7c2be860000036 */

function vowelIndices(word) {
	var r = [];

	word
		.split('')
		.map((a, index) =>
				['a', 'e', 'i', 'o', 'u', 'y'].indexOf(a.toLowerCase()) !== -1
					? r.push(index + 1)
					: a
		);

	return r;
}
