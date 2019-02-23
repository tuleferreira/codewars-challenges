/* https://www.codewars.com/kata/54fdadc8762e2e51e400032c */

const myParseInt = str => (/\D/.test(str.trim()) ? NaN : parseInt(str));
