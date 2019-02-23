/* https://www.codewars.com/kata/57a62154cf1fa5b25200031e */

function alternateCase(s) {
  return [...s].map(a=>a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase()).join('');
}