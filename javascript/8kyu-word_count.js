/* https://www.codewars.com/kata/570cc83df616a85944001315 */

function countWords(str) {
	var words = str.match(/[a-zA-Z0-9\-'`]+/g);
	return str === '' || !words ? 0 : words.length;
}