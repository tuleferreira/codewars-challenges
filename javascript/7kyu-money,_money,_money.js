/* https://www.codewars.com/kata/563f037412e5ada593000114 */

function calculateYears(principal, interest, tax, desired) {
	let r = principal,
		count = 0;

	while (r < desired) {
		r += r * interest - r * interest * tax;
		count++;
	}

	return count;
}
