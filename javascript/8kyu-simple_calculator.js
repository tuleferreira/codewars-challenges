/* https://www.codewars.com/kata/5810085c533d69f4980001cf */

function calculator(a,b,sign){
  return (/[\+\-\*\/]/).test(sign) && Number.isInteger(a) && Number.isInteger(b) ? eval(a + sign + b) : 'unknown value'
}