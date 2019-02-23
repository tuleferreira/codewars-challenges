/* https://www.codewars.com/kata/572b77262bedd351e9000076 */

const first = (arr, n) => isNaN(n) ? arr.slice(0, 1) : arr.slice(0, n)