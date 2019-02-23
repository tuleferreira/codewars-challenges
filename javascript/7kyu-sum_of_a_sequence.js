/* https://www.codewars.com/kata/586f6741c66d18c22800010a */

const sequenceSum = (begin, end, step) => {
	var r = [];
	while (begin <= end) {
		r.push(begin);
		begin += step;
	}

	return r.reduce((a, b) => a + b, 0);
};
