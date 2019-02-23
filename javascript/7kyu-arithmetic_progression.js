/* https://www.codewars.com/kata/55caf1fd8063ddfa8e000018 */

function arithmeticSequenceElements(a, r, n) {
	let res = [a];
	for (let i = 0; i < n - 1; i++) {
		res.push(a + r);
		a += r;
	}
	return res.join(', ');
}
