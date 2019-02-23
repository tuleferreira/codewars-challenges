/* https://www.codewars.com/kata/56453a12fcee9a6c4700009c */

function closeCompare(a, b, margin) {
	var c = Math.abs(a - b);
	return c <= margin || c === 0 ? 0 : a < b ? -1 : 1;
}