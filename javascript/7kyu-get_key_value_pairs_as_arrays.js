/* https://www.codewars.com/kata/515dfd2f1db09667a0000003 */

const keysAndValues = data => [
	Object.keys(data),
	Object.keys(data).map(key => data[key]),
];
