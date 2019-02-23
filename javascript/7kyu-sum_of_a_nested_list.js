/* https://www.codewars.com/kata/5a15a4db06d5b6d33c000018 */

const sumNested = arr => {
	let sum = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			sum += sumNested(item);
		} else {
			sum += item;
		}
	});
	return sum;
};
