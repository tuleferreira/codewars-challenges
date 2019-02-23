/* https://www.codewars.com/kata/5a523566b3bfa84c2e00010b */

function minSum(arr) {
	let r = 0;
  arr = arr.sort((a, b) => a - b);

	for (let i = 0, j = arr.length-1; i < j; i++, j--) {  
		r += arr[i] * arr[j];
	}

	return r;
}
