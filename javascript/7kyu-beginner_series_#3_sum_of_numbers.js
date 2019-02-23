/* https://www.codewars.com/kata/55f2b110f61eb01779000053 */

function GetSum(a, b) {
	var lower = Math.min(a, b);
	var upper = Math.max(a, b);

	var total = 0;

	for (var i = lower; i <= upper; i++) {
		total += i;
	}

	return total;
}