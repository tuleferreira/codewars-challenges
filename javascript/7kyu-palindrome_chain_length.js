/* https://www.codewars.com/kata/525f039017c7cd0e1a000a26 */

const palindromeChainLength = n => {
	let count = 0;

	while (n !== parseInt(n.toString().split('').reverse().join(''))) {
		const y = n + parseInt(n.toString().split('').reverse().join(''));
		n = y;
		count++;
	}

	return count;
};