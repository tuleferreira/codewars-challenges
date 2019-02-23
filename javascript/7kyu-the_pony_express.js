/* https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9 */

const riders = stations => {
	let count = 1,
		horseLife = 100;

	for (let i = 0; i < stations.length; i++) {
		if (horseLife - stations[i] < stations[i + 1]) {
			horseLife = 100;
			count++;
		} else {
			horseLife -= stations[i];
		}
	}

	return count;
}
