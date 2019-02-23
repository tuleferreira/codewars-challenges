/* https://www.codewars.com/kata/56c6a67ed3702be0fc0017d8 */

Array.prototype.toDictionary = function(keyFn, valueFn) {
	return this.reduce(function(obj, ele) {
		obj[keyFn(ele)] = valueFn ? valueFn(ele) : ele;
		return obj;
	}, {});
};