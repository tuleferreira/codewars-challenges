/* https://www.codewars.com/kata/5720a1cb65a504fdff0003e2 */

function differenceInAges(ages) {
	ages = ages.sort((a, b) => a - b);
	return [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]];
}