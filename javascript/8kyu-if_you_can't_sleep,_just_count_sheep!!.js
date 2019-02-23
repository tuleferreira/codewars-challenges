/* https://www.codewars.com/kata/5b077ebdaf15be5c7f000077 */

var countSheep = function (num){
  let r = []
  
  for (var i = 1; i <= num; i++) {
    r.push(`${i} sheep...`)
  }
  
  return r.join('')
}