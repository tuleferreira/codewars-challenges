/* https://www.codewars.com/kata/59a1cdde9f922b83ee00003b */

const stantonMeasure = arr => {
  let n = arr.filter(a => a === 1).length;
  return arr.filter(b => b === n).length;
};
