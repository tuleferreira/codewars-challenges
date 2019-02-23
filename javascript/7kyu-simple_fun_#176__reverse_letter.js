/* https://www.codewars.com/kata/58b8c94b7df3f116eb00005b */

const reverseLetter = str => str.replace(/[^a-z]/gi, '').split('').reverse().join('');
