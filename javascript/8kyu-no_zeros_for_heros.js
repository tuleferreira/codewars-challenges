/* https://www.codewars.com/kata/570a6a46455d08ff8d001002 */

function noBoringZeros(n) {
  return n !== 0 ? parseInt(n.toString().replace(/0+$/g, '')) : 0
}