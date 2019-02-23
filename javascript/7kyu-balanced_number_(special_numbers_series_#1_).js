/* https://www.codewars.com/kata/5a4e3782880385ba68000018 */

function balancedNum(number) {
	let left = 0,
		right = 0,
		str = String(number).split(''),
		minus = str.length % 2 === 1 ? 1 : 2;

	for (let i = 0; i < (str.length - minus) / 2; i++) {
		left += +str[i];
		right += +str[str.length - 1 - i];
	}

	return `${left - right === 0 ? '' : 'Not '}Balanced`;
}
