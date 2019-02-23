/* https://www.codewars.com/kata/574c5075d27783851800169e */

function animals(heads, legs){
    var a = ((4 * heads) - legs) / 2,
    b = [a, heads - a] 

  if (heads === 0 && legs === 0) {
    return [0, 0]
  } else if (heads <= 0 || legs <= 0 || b.toString().indexOf(".") !== -1 || b.toString().indexOf("-") !== -1) {
    return "No solutions";
  } else {
    return [a, heads - a]
  }
}