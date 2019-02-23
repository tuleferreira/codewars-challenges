/* https://www.codewars.com/kata/566efcfbf521a3cfd2000056 */

function flipNumber(n) {
	var res = n.slice();

	for (let i = 0; i < res.length; i++) {
		res =
			res.substring(0, i) +
			res.substring(i, res.length).split('').reverse().join('');
	}
	return res;
}
