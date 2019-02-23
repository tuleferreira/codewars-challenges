/* https://www.codewars.com/kata/57f6ad55cca6e045d2000627 */

const squareOrSquareRoot = a => a.map(x => (Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x));