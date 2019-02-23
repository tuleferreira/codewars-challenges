/* https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39 */

function calc(n, op) {
	if (!op) {
		return n;
	} else {
		return op(n);
	}
}

function zero(op) {
	return calc(0, op);
}
function one(op) {
	return calc(1, op);
}
function two(op) {
	return calc(2, op);
}
function three(op) {
	return calc(3, op);
}
function four(op) {
	return calc(4, op);
}
function five(op) {
	return calc(5, op);
}
function six(op) {
	return calc(6, op);
}
function seven(op) {
	return calc(7, op);
}
function eight(op) {
	return calc(8, op);
}
function nine(op) {
	return calc(9, op);
}
function plus(a) {
	return function(b) {
		return Math.floor(b + a);
	};
}
function minus(a) {
	return function(b) {
		return Math.floor(b - a);
	};
}
function times(a, b) {
	return function(b) {
		return Math.floor(b * a);
	};
}
function dividedBy(a) {
	return function(b) {
		return Math.floor(b / a);
	};
}
