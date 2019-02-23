/* https://www.codewars.com/kata/5679aa472b8f57fb8c000047 */

function findEvenIndex(arr) {
  let left, right;
  
  for (let i = 0; i < arr.length; i++) {
    left = arr.slice(0, i).reduce((a, b) => a + b, 0);
    right = arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0);
  
    if(left === right) return i;
  }
  
  return -1;
}