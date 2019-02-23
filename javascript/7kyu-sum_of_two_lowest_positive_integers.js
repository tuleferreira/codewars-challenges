/* https://www.codewars.com/kata/558fc85d8fd1938afb000014 */

function sumTwoSmallestNumbers(n) {
	n = n.sort((a, b) => a > b);
	return n[0] + n[1];
}