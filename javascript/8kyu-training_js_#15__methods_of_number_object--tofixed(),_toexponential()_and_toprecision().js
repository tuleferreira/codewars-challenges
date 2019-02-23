/* https://www.codewars.com/kata/57256064856584bc47000611 */

function howManySmaller(arr, n) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		arr[i] = parseFloat(arr[i]).toFixed(2);
		if (arr[i] < n) {
			count++;
		}
	}
	return count;
}