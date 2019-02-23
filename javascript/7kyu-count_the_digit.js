/* https://www.codewars.com/kata/566fc12495810954b1000030 */

function nbDig(n, d) {
	const r = [];
	for (let i = 0; i <= n; i++) {
		r.push(String(Math.pow(i, 2)));
	}

	return r.reduce(
		(a, b) =>
			a + b.split('').reduce((x, y) => (Number(y) === d ? x + 1 : x), 0),
		0
	);
}
