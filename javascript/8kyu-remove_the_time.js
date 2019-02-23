/* https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e */

function shortenToDate(longDate) {
	return longDate.split(' ').slice(0, -1).join(' ').slice(0, -1);
}