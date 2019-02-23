/* https://www.codewars.com/kata/5512e5662b34d88e44000060 */

function findMissingNumber(sequence) {
	const arr = sequence.split(' ').map(a => parseInt(a)).sort();

	if (sequence === '' || arr.length == arr[arr.length - 1]) {
		return 0;
	} else if (arr.includes(NaN)) {
		return 1;
	} else {
		for (var i = 1; i < arr[arr.length - 1]; i++) {
			if (!arr.includes(i)) return i;
		}
	}
}
