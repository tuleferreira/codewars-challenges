/* https://www.codewars.com/kata/552c028c030765286c00007d */

const iqTest = numbers => {
  numbers = numbers.split(" ");
  
  const evens = numbers.filter(n => n % 2 === 0).join('');
  const odds = numbers.filter(n => n % 2 !== 0).join('');
  
  return evens.length < odds.length ? numbers.indexOf(evens) + 1 : numbers.indexOf(odds) + 1;
}