/* https://www.codewars.com/kata/541c8630095125aba6000c00 */

function digital_root(n) {
  if(n <= 9) return n;
  
  return digital_root(n.toString().split("").reduce((a, b) => +a + +b));
}