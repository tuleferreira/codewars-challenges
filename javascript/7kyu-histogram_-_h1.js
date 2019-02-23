/* https://www.codewars.com/kata/57d532d2164a67cded0001c7 */

function histogram(results) {
	let r = [];

	for (let i = 0; i < results.length; i++) {
		r.push(
			`${i + 1}|${'#'.repeat(results[i])}${results[i] !== 0 ? ' ' + results[i] : ''}\n`
		);
	}

	return r.reverse().join('');
}
