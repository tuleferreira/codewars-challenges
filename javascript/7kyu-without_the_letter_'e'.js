/* https://www.codewars.com/kata/594b8e182fa0a0d7fc000875 */

function findE(str) {
	let e = str.match(/e/gi);

	return str === '' ? str : e !== null ? String(e.length) : 'There is no "e".';
}
