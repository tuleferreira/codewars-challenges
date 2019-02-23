/* https://www.codewars.com/kata/548ef5b7f33a646ea50000b2 */

function charFreq(message) {
  let obj = {};
  for(let i = 0; i < message.length; i++)
    (obj.hasOwnProperty(message[i])) ? obj[message[i]] += 1 : obj[message[i]] = 1;
  return obj;
}