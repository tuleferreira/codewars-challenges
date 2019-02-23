/* https://www.codewars.com/kata/597d75744f4190857a00008d */

var paintLetterboxes = function(start, end) {
  let arr = [0,0,0,0,0,0,0,0,0,0];
  
  for(let i = start; i <= end; i++) {
    (i + '').split('').map(x=> arr[x]++)
  }

  return arr
}
