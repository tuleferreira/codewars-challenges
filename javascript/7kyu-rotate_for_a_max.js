/* https://www.codewars.com/kata/56a4872cbb65f3a610000026 */

function maxRot(n) {
	let strn = n.toString();

	for (let i = 0; i < strn.length; i++) {
		strn = strn.substring(0, i) + rotate(strn.substring(i, strn.length));
		let temp = parseInt(strn);
		if (n < temp) n = temp;
	}
	return n;
}

function rotate(s) {
	return s.substring(1, s.length) + s[0];
}
