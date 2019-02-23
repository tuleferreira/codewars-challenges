/* https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e */

function maxNumber(n) {
	return +[...String(n)].sort((a, b) => b - a).join('');
}
