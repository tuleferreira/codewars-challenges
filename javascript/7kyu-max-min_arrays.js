/* https://www.codewars.com/kata/5a090c4e697598d0b9000004 */

const solve = arr => {
	let arrRev = arr.sort((a, b) => a - b),
		arrReg = arr.sort((a, b) => b - a),
		r = [];

	for (let i = 0; i < arr.length / 2; i++) {
		r.push(arrReg[i]);
		r.push(arrRev[arr.length - 1 - i]);
	}

	if (arr.length % 2 === 1) r.pop();

	return r;
};
