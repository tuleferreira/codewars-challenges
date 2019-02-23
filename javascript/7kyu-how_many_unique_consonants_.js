/* https://www.codewars.com/kata/5a19226646d843de9000007d */

const countConsonants = str => new Set([...str.toLowerCase().replace(/a|e|i|o|u|\d|\W/g, '')]).size;
