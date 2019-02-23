/* https://www.codewars.com/kata/5721a78c283129e416000999 */

function pickIt(arr) {
	var odd = [], even = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			odd.push(arr[i]);
		} else {
			even.push(arr[i]);
		}
	}
	return [odd, even];
}