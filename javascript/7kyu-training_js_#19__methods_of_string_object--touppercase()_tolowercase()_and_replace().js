/* https://www.codewars.com/kata/5728203b7fc662a4c4000ef3 */

function alienLanguage(str) {
	str = str
		.split(' ')
		.map(x => x.toUpperCase().slice(0, -1) + x[x.length - 1].toLowerCase())
		.join(' ');
	return str;
}