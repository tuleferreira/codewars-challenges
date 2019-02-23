/* https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa */

function openOrSenior(data) {
	let r = [];
	data.map(x => (x[0] > 54 && x[1] > 7 ? r.push('Senior') : r.push('Open')));
	return r;
}