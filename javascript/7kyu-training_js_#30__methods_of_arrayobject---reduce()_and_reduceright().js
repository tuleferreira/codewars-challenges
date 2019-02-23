/* https://www.codewars.com/kata/573156709a231dcec9000ee8 */

function tailAndHead(arr) {
	var head = [],
		tail = [];

	arr
		.slice()
		.reduce((a, b) => head.push(parseInt([b.toString().split('')])), 0);
	head = head.slice(1, head.length);

	arr
		.slice()
		.map(c => c.toString().split('').reverse().join(''))
		.reduce((a, b) => tail.push(parseInt([b.toString().split('')])), 0);
	tail = tail.slice(0, tail.length - 1);

	var result = tail.reduce(function(arr, v, i) {
		return arr.concat(parseInt(v + head[i]));
	}, []);

	return result.reduce((a, b) => a * b);
}