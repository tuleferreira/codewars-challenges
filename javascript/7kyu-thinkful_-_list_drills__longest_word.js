/* https://www.codewars.com/kata/58670300f04e7449290000e5 */

function longest(words) {
	return words.sort((a, b) => b.length - a.length)[0].length;
}
