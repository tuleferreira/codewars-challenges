/* https://www.codewars.com/kata/56f695399400f5d9ef000af5 */

function correctTail(body, tail) {
	let sub = body.substr(body.length - tail.length);

	if (sub === tail) {
		return true;
	} else {
		return false;
	}
}