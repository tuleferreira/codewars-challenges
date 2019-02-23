/* https://www.codewars.com/kata/546e2562b03326a88e000020 */

const squareDigits = num => parseInt(String(num).split('').map(x => Math.pow(x, 2)).join(''));