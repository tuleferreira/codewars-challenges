/* https://www.codewars.com/kata/572ab0cfa3af384df7000ff8 */

function shuffleIt(arr, ...d) {
	for (var i = 0; i < d.length; i++) {
		if (d[i] === undefined) {
			break;
		}

		arr[d[i][1]] = arr.splice(d[i][0], 1, arr[d[i][1]])[0];
	}
	return arr;
}