/* https://www.codewars.com/kata/514b92a657cdc65150000006 */

function solution(number) {
	let r = [],
		i = 3,
		j = 5;

	while (i < number) {
		r.push(i);
		i += 3;
	}

	while (j < number) {
		r.push(j);
		j += 5;
	}

	return r
		.sort((a, b) => a - b)
		.filter((a, b) => r.indexOf(a) == b)
		.reduce((a, b) => a + b, 0);
}
