/* https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0 */

function removeChar(str) {
	const result = [];
	for (let i = 1; i < str.length - 1; i++) {
		result.push(str[i]);
	}
	return result.join('');
}