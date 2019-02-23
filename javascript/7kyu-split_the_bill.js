/* https://www.codewars.com/kata/5641275f07335295f10000d0 */

function splitTheBill(x) {
	let arr = Object.keys(x).map(i => x[i]);
	const avg = arr.reduce((a, b) => a + b) / arr.length;

	arr = arr.map(x => parseFloat((x - avg).toFixed(2)));

	let key = Object.keys(x);
	let r = {};

	for (let i = 0; i < arr.length; i++) {
		r[key[i]] = arr[i];
	}

	return r;
}
