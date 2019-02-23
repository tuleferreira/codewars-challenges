/* https://www.codewars.com/kata/57c1ab3949324c321600013f */

function toLeetSpeak(str) {
	const leetSpeak = {
		A: '@',
		B: '8',
		C: '(',
		D: 'D',
		E: '3',
		F: 'F',
		G: '6',
		H: '#',
		I: '!',
		J: 'J',
		K: 'K',
		L: '1',
		M: 'M',
		N: 'N',
		O: '0',
		P: 'P',
		Q: 'Q',
		R: 'R',
		S: '$',
		T: '7',
		U: 'U',
		V: 'V',
		W: 'W',
		X: 'X',
		Y: 'Y',
		Z: '2',
	};

	return str
		.split(' ')
		.map(a => a.split('').map(b => leetSpeak[b]).join(''))
		.join(' ');
}
