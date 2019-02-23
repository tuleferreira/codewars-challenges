/* https://www.codewars.com/kata/598d91785d4ce3ec4f000018 */

function wordValue(a) {
	return a.map(
		(x, i) =>
			[...x.replace(/\s/g, '')]
				.map(e => e.charCodeAt(0) - 96)
				.reduce((a1, a2) => a1 + a2, 0) *
			(i + 1)
	);
}
