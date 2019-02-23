/* https://www.codewars.com/kata/5a84d485742ba347b90006b7 */

function howManyGifts(maxBudget, gifts) {
	let count = 0;
	for (let n of gifts.sort((a, b) => a - b)) {
		if (maxBudget - n < 0) {
			return count;
		}
		maxBudget -= n;
		count++;
	}
	return gifts.length;
}
