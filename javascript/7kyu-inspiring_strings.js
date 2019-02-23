/* https://www.codewars.com/kata/5939ab6eed348a945f0007b2 */

const longestWord = str => str.split(' ').sort((a, b) => a.length > b.length)[str.split(' ').length - 1];
