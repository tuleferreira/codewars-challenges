/* https://www.codewars.com/kata/5700c9acc1555755be00027e */

function containAllRots(s, arr) {
	for (let i = 0; i < s.length; i++)
		if (arr.indexOf(s.slice(i) + s.slice(0, i)) === -1) {
			return false;
		}
	return true;
}
