/* https://www.codewars.com/kata/54e6533c92449cc251001667 */

function uniqueInOrder(iterable) {
  var result = []
  var last
  
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i])
    }
  }
  return result
}