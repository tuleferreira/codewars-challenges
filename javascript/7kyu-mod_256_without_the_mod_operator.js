/* https://www.codewars.com/kata/581e1d083a4820eb4f00004f */

function mod256WithoutMod(n) {
	return n < 0
		? n - -256 * Math.floor(n / -256)
		: n - 256 * Math.floor(n / 256);
}
