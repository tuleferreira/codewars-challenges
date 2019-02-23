/* https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce */

function multiTable(number) {
var result = [];
  for (var i = 1; i <= 10; i++) {
    result.push(`${i} * ${number} = ${number * i}`)
  }
return result.join('\n').toString();
}