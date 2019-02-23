/* https://www.codewars.com/kata/54df2067ecaa226eca000229 */

function f(n) {
	return Number.isInteger(n / 2 + n * (n / 2)) && n > 1
		? n / 2 + n * (n / 2)
		: false;
}
