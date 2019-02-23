/* https://www.codewars.com/kata/5390bac347d09b7da40006f6 */

String.prototype.toJadenCase = function (str) {
    return this.split(' ').map(function (item) {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  }).join(' ');
};
