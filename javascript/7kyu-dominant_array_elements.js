/* https://www.codewars.com/kata/5a04133e32b8b998dc000089 */

function solve(arr) {
	let r = [],
		check = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0 + i; j < arr.length; j++) {
			if (arr[i] < arr[j]) check.push(false);
		}
		if (!check.includes(false) && !r.includes(arr[i])) r.push(arr[i]);
		check = [];
	}

	return r;
}
