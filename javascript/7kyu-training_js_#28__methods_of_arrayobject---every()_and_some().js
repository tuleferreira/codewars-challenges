/* https://www.codewars.com/kata/57308546bd9f0987c2000d07 */

function mirrorImage(arr) {
	var a = 0,
		b = 0;

	arr.slice().some((x, i) => {
		a = arr[i];
		b = arr[i + 1];
		console.log([a, b]);

		return a + parseInt((b + '').split('').reverse().join('')) == a * 2;
	});

	return b !== undefined ? [a, b] : [-1, -1];
}