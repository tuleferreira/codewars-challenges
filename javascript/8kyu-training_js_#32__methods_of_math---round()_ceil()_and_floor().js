/* https://www.codewars.com/kata/5732d3c9791aafb0e4001236 */

const roundIt = n => { return n.toString().indexOf('.') < (n.toString().length -1) /2 ? Math.ceil(n) : n.toString().indexOf('.') === (n.toString().length -1) /2 ? Math.round(n) : Math.floor(n) }