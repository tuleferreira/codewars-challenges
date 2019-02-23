/* https://www.codewars.com/kata/59c8b38423dacc7d95000008 */

function isValid(formula) {
	console.log(formula.indexOf(1));

	if (formula.indexOf(1) != -1 && formula.indexOf(2) != -1) {
		return false;
	} else if (formula.indexOf(3) != -1 && formula.indexOf(4) != -1) {
		return false;
	} else if (formula.indexOf(5) != -1 && formula.indexOf(6) === -1) {
		return false;
	} else if (formula.indexOf(6) != -1 && formula.indexOf(5) === -1) {
		return false;
	} else if (formula.indexOf(7) === -1 && formula.indexOf(8) === -1) {
		return false;
	} else {
		return true;
	}
}