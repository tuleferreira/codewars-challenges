/* https://www.codewars.com/kata/5a9e86705ee396d6be000091 */

function checkThreeAndTwo(array) {
	let obj = {
		a: 0,
		b: 0,
		c: 0,
	};

	array.map(e => obj[e]++);
	array = Object.values(obj);

	return array.indexOf(3) !== -1 && array.indexOf(2) !== -1;
}
