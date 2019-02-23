/* https://www.codewars.com/kata/5865918c6b569962950002a1 */

function strCount(str, letter){  
  var r = 0;
  str.split('').map(a => a === letter ? r++ : a)
  return r
}