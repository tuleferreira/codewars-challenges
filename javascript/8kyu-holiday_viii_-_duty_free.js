/* https://www.codewars.com/kata/57e92e91b63b6cbac20001e5 */

function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / (normPrice / 100 * discount))
}