/* https://www.codewars.com/kata/54d81488b981293527000c8f */

var sum_pairs = (ints, s) => {
	let last;

	for (let i = 0; i < ints.length; i++) {
		if (last === ints[i]) continue;
		last = ints[i];

		const slc = ints.slice(0, i);
		const sum = slc.indexOf(s - ints[i]);

		if (sum !== -1) return [slc[sum], ints[i]];
	}
};
