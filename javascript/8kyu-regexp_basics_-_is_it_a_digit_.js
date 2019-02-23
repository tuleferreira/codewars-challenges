/* https://www.codewars.com/kata/567bf4f7ee34510f69000032 */

String.prototype.digit = function() {
  return this.match(/^[0-9]$/g) !== null
};