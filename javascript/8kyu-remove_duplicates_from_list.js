/* https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118 */

var sortedUniq = require('lodash/sortedUniq');


function distinct(a) {
  return sortedUniq(a);
}