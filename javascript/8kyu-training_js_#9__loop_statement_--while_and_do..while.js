/* https://www.codewars.com/kata/57216d4bcdd71175d6000560 */

function padIt(str, n) {
	var result = [str];
	while (n > 0) {
		if (n % 2 === 0) {
			result.push('*');
			n--;
		} else {
			result.unshift('*');
			n--;
		}
	}
	return result.join('');
}