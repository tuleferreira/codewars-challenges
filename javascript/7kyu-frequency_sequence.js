/* https://www.codewars.com/kata/585a033e3a36cdc50a00011c */

function freqSeq(str, sep) {
	let count = {};
	  str
		.split('')
		.forEach(x => (count[x] === undefined ? (count[x] = 1) : count[x]++));
	return str.split('').map(e => count[e]).join(sep);
}
