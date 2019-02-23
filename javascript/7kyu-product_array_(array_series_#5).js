/* https://www.codewars.com/kata/5a905c2157c562994900009d */

function productArray(numbers) {
	let r = [],
		prod = 1;
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (i === j) continue;
			prod *= numbers[j];
		}
		r.push(prod);
		prod = 1;
	}

	return r;
}
