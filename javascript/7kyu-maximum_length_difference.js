/* https://www.codewars.com/kata/5663f5305102699bad000056 */

function mxdiflg(a1, a2) {
	const sortLength = function(arr) {
		return arr.sort((a, b) => b.length - a.length);
	};

	if (a1.length === 0 || a2.length === 0) {
		return -1;
	} else {
		sortLength(a1);
		sortLength(a2);

		var r1 = a1[0].length - a2[a2.length - 1].length;
		var r2 = a2[0].length - a1[a1.length - 1].length;

		return r1 > r2 ? r1 : r2;
	}
}
