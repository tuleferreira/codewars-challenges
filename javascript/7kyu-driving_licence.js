/* https://www.codewars.com/kata/586a1af1c66d18ad81000134 */

function driver(data) {
	let date = new Date(Date.parse(data[3]));
	let month = ('0' + (date.getMonth() + 1)).slice(-2);
	let sur = String(data[2].match(/^[a-z]{1,5}/gi)).toUpperCase();

	sur += '9'.repeat(5 - sur.length);

	return `${sur}${String(date.getFullYear())[2]}${data[4] === 'F'
		? +month[0] + 5 + month[1]
		: month}${data[3].split('-')[0]}${String(
		date.getFullYear()
	)[3]}${data[0][0]}${data[1] === '' ? 9 : data[1][0]}9AA`;
}
