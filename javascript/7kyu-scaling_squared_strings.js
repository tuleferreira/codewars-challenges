/* https://www.codewars.com/kata/56ed20a2c4e5d69155000301 */

function scale(strng, k, n) {
	return strng
		.split('\n')
		.map(x =>
			([...x].map(y => y.repeat(k)).join('') + ' ')
				.repeat(n)
				.trim()
				.split(' ')
				.join('\n')
		)
		.join('\n');
}
