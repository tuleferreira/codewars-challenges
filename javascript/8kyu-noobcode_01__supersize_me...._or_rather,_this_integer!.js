/* https://www.codewars.com/kata/5709bdd2f088096786000008 */

function superSize(num){
  return parseInt(num.toString().split('').sort().reverse().join(''))
}