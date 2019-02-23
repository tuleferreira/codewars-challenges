/* https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e */

const stairsIn20 = s => s.map(x => x.reduce((a, b) => a + b)).reduce((a, b) => a + b) * 20;