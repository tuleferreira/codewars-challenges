/* https://www.codewars.com/kata/5262119038c0985a5b00029f */

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}