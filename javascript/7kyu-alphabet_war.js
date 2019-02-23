/* https://www.codewars.com/kata/59377c53e66267c8f6000027 */

function alphabetWar(fight) {
	let power = { w: 4, m: 4, p: 3, q: 3, b: 2, d: 2, s: 1, z: 1 },
		right = 0,
		left = 0;

	fight
		.split('')
		.filter(a => a.match(/w|m|p|q|b|d|s|z/))
		.map(x => (/w|p|b|s/.test(x) ? (left += power[x]) : (right += power[x])));

	return right === left
		? "Let's fight again!"
		: `${right > left ? 'Right' : 'Left'} side wins!`;
}
