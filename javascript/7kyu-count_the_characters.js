/* https://www.codewars.com/kata/577ad961ae2807182f000c29 */

function countChar(string, char) {
	const count = string.match(new RegExp(char, 'gi'));

	return count ? count.length : 0;
}
