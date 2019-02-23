/* https://www.codewars.com/kata/580dda86c40fa6c45f00028a */

function cubeOdd(arr) {
	return arr.some(r => /^[a-zA-Z]*$/.test(r))
		? undefined
		: arr.filter(x => x & 1).map(a => Math.pow(a, 3)).reduce((a, b) => a + b, 0);
}
