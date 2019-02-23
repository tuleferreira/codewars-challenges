/* https://www.codewars.com/kata/586566b773bd9cbe2b000013 */

function noRepeat(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i];
	}
	return '';
}
