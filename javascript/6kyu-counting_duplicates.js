/* https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1 */

const duplicateCount = text => [...new Set(text.toLowerCase().split('').filter((letter, i, arr) => arr.indexOf(letter) !== arr.lastIndexOf(letter)))].length;