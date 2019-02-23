/* https://www.codewars.com/kata/572af273a3af3836660014a1 */

function infiniteLoop(arr, d, n) {
	var [a, b, c] = [...arr];
	//for (var i = 0; i < 3 ; i++) {
	//arr[i].push(arr[i][2]+1);
	// arr[i].shift();

	// }
	if (d === 'left') {
		while (n > 0) {
			a.push(arr[1][0]);
			b.push(arr[2][0]);
			c.push(arr[0][0]);
			arr[0].shift();
			arr[1].shift();
			arr[2].shift();
			n--;
		}
	} else {
		while (n > 0) {
			a.unshift(arr[2][c.length - 1]);
			b.unshift(arr[0][a.length - 1]);
			c.unshift(arr[1][b.length - 1]);
			arr[0].pop();
			arr[1].pop();
			arr[2].pop();
			n--;
		}
	}

	return arr;
}