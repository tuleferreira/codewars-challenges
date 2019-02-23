/* https://www.codewars.com/kata/596fba44963025c878000039 */

function contamination(text, char){
  return text.split('').map(x => x = char).join('')
}