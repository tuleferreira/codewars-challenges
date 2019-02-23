/* https://www.codewars.com/kata/570597e258b58f6edc00230d */

function array(arr){
  var t = arr.split(',');
  return t.length < 3 ? null : arr.split(',').slice(1, t.length-1).join(' ');
}
