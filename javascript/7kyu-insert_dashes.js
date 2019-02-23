/* https://www.codewars.com/kata/55960bbb182094bc4800007b */

function insertDash(num) {
	num = (num + '').split('');

	for (let i = 0; i < num.length; i++) {
		if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
			num[i] = num[i] + '-';
		}
	}

	return num.join('');
}
