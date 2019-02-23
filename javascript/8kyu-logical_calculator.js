/* https://www.codewars.com/kata/57096af70dad013aa200007b */

const operations = {
	AND: (a, b) => a && b,
	OR: (a, b) => a || b,
	XOR: (a, b) => a !== b,
};

const logicalCalc = (array, op) => array.reduce(operations[op]);