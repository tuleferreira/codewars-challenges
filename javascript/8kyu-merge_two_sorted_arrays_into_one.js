/* https://www.codewars.com/kata/5899642f6e1b25935d000161 */

const sortBy = require('lodash/sortBy')
const union = require('lodash/union')

function mergeArrays(arr1, arr2) {
  return sortBy(union(arr1, arr2));
}