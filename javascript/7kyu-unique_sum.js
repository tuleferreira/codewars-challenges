/* https://www.codewars.com/kata/56b1eb19247c01493a000065 */

const uniqueSum = lst => [...new Set(lst)].reduce((a, b) => a + b, null);
