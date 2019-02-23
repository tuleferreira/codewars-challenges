/* https://www.codewars.com/kata/56b7f2f3f18876033f000307 */

const inAscOrder = arr => JSON.stringify(arr) == JSON.stringify(arr.sort((a, b) => a - b));
