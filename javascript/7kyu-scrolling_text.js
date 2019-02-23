/* https://www.codewars.com/kata/5a995c2aba1bb57f660001fd */

function scrollingText(text) {
	let res = [];

	text = text.toUpperCase();

	for (let i = 0; i < text.length; i++) {
		res.push(text.slice(i) + text.slice(0, i));
	}

	return res;
}
