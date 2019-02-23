/* https://www.codewars.com/kata/542ebbdb494db239f8000046 */

function nextItem(xs, item) {
  let found = false, 
      finalValue;

  for (let i of xs) {
    if (found) {
      finalValue = i;
      break;
    }

    if (i === item) {
      found = true;
    }
  }

  return finalValue;
}