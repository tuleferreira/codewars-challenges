/* https://www.codewars.com/kata/57280481e8118511f7000ffa */

function splitAndMerge(str, sp) {
	str = str.split(' ').map(x => x.split('').join(sp)).join(' ');
	return str;
}
