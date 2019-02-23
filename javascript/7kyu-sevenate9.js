/* https://www.codewars.com/kata/559f44187fa851efad000087 */

const sevenAte9 = str => {
	var arr = str.split('');

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] == 9 && arr[i -1] == 7 && arr[i +1] == 7) {
			arr.splice(i, 1);
		}
	}

	return arr.join('')
};