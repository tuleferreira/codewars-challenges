/* https://www.codewars.com/kata/58ba6fece3614ba7c200017f */

function palindrome(num) {
	let check = typeof num === 'number' && num > 0;

	if (check) {
		if (+String(num).split('').reverse().join('') === num) {
			return true;
		} else {
			return false;
		}
	}

	return 'Not valid';
}
