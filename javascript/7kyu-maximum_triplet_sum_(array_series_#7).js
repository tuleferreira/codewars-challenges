/* https://www.codewars.com/kata/5aa1bcda373c2eb596000112 */

const maxTriSum = numbers => [...new Set(numbers.sort((a, b) => b - a))].slice(0, 3).reduce((a, b) => a + b);
