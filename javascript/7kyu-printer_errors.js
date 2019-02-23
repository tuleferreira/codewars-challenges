/* https://www.codewars.com/kata/56541980fa08ab47a0000040 */

function printerError(s) {
	let count = 0;
	s.split('').map(x => (x.charCodeAt(0) > 109 ? count++ : x));
	return `${count}/${s.length}`;
}