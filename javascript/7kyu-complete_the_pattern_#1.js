/* https://www.codewars.com/kata/5572f7c346eb58ae9c000047 */

function pattern(n) {
	var output = [];
	for (let i = 1; i <= n; i++) {
		output.push((i + '').repeat(i));
	}
	return output.join('\n');
}
