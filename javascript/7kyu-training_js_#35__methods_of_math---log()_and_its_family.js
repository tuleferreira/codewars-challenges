/* https://www.codewars.com/kata/57353de879ccaeb9f8000564 */

function thinkingAndTesting(number,base){
  return number - (Math.pow(base, Math.floor(Math.log(number) / Math.log(base))));
}