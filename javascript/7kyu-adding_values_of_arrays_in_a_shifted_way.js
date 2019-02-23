/* https://www.codewars.com/kata/57c7231c484cf9e6ac000090 */

function addingShifted(arrayOfArrays, shift) {
	let arr = arrayOfArrays.slice();
	let res = Array(shift * (arr.length - 1) + arr[0].length).fill(0);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			res[j + shift * i] += arr[i][j];
		}
	}

	return res;
}
