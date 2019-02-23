/* https://www.codewars.com/kata/567d609f1c16d7369c000008 */

const generate = length => {
	return Array(length)
		.fill(0)
		.map(x => (x = Math.floor(Math.random() * 2) + 0))
		.join('');
};
