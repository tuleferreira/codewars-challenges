/* https://www.codewars.com/kata/55e6125ad777b540d9000042 */

const getCount = words => {
	let count = { vowels: 0, consonants: 0 };

	if (typeof words === 'string') {
		words
			.replace(/\W|_/g, '')
			.split('')
			.map(a => (/a|e|i|o|u|y/i.test(a) ? count.vowels++ : count.consonants++));
	}

	return count;
};
