/* https://www.codewars.com/kata/5a00e05cc374cb34d100000d */

const reverseSeq = n => {
	var result = [];
	while (n > 0) {
		result.push(n);
		n--;
	}
	return result;
};