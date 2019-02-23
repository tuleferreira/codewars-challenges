/* https://www.codewars.com/kata/598f76a44f613e0e0b000026 */

const sumOfIntegersInString = s => s.replace(/\D/gi, ' ').split(' ').reduce((a, b) => +a + +b);
