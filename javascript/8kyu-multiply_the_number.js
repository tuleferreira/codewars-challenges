/* https://www.codewars.com/kata/5708f682c69b48047b000e07 */

function multiply(number) {
	var count = Math.abs(number).toString().length;
	for (var i = 0; i < count; i++) {
		number = number * 5;
	}
	return number;
}