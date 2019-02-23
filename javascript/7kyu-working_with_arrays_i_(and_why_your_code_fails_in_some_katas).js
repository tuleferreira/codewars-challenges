/* https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e */

function withoutLast(arr) {
	// Fix it
	let r = arr.slice(); // removes the last element
	r.pop();
	return r;
}
