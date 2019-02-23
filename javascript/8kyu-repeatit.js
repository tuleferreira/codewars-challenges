/* https://www.codewars.com/kata/557af9418895e44de7000053 */

var repeatIt = function(str, n) {
  return (typeof str !== "string") ? "Not a string" : str.repeat(n);
}