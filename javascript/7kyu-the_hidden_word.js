/* https://www.codewars.com/kata/5906a218dfeb0dbb52000005 */

function hiddenWord(num) {
	const translate = {
		'6': 'a',
		'1': 'b',
		'7': 'd',
		'4': 'e',
		'3': 'i',
		'2': 'l',
		'9': 'm',
		'8': 'n',
		'0': 'o',
		'5': 't',
	};

	return [...String(num)].map(x => translate[x]).join('');
}
