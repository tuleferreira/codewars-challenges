/* https://www.codewars.com/kata/557dd2a061f099504a000088 */

function listToArray(list) {
	let res = [];
	do {
		res.push(list.value);
	} while ((list = list.next));
	return res;
}
