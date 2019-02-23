/* https://www.codewars.com/kata/5ae62fcf252e66d44d00008e */

function expressionMatter(a, b, c) {
  var r = [];
  r.push(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)
  
  return  r.sort((a,b)=> a < b)[0]
}