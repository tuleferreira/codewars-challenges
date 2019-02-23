/* https://www.codewars.com/kata/583f158ea20cfcbeb400000a */

function arithmetic(a, b, operator) {
	var op = {
		add: '+',
		subtract: '-',
		multiply: '*',
		divide: '/',
	};

	return eval(a + op[operator] + b);
}