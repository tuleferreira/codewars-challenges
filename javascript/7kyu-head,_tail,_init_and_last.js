/* https://www.codewars.com/kata/54592a5052756d5c5d0009c3 */

const head = arr => arr[0];

const tail = arr => {
	let res = arr.slice();
	res.shift();
	return res;
};

const init = arr => {
	let res = arr.slice();
	res.pop();
	return res;
};

const last = arr => arr[arr.length - 1];
