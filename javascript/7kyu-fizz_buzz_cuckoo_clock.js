/* https://www.codewars.com/kata/58485a43d750d23bad0000e6 */

function fizzBuzzCuckooClock(time) {
	let sp = time.split(':');

	if (sp[0] > 12) {
		sp[0] = sp[0] - 12;
	} else if (sp[0] == 00) {
		sp[0] = 12;
	}

	return sp[1] == 00
		? 'Cuckoo '.repeat(sp[0]).trim()
		: sp[1] == 30
			? 'Cuckoo'
			: sp[1] % 3 == 0 && sp[1] % 5 == 0
				? 'Fizz Buzz'
				: sp[1] % 3 == 0 ? 'Fizz' : sp[1] % 5 == 0 ? 'Buzz' : 'tick';
}
