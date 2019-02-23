/* https://www.codewars.com/kata/55da6c52a94744b379000036 */

function sumFromString(str) {
	const reg = /\d+/g;
	return reg.test(str) ? eval(str.match(reg).join('+')) : 0;
}
