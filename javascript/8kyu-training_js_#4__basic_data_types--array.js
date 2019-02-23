/* https://www.codewars.com/kata/571effabb625ed9b0600107a */

const getLength = arr => arr.length;
const getFirst = arr => arr[0];
const getLast = arr => arr[arr.length - 1];

function pushElement(arr) {
	var el = 1;
	arr.push(el);
	return arr;
}
function popElement(arr) {
	arr.pop();
	return arr;
}