/* https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150 */

const makeParts = (arr, chunkSize) => {
	let r = [];

	for (let i = 0; i < arr.length; i += chunkSize) {
		r.push(arr.slice(i, i + chunkSize));
	}

	return r;
};
