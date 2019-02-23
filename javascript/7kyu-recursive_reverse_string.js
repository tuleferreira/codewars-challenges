/* https://www.codewars.com/kata/536a9f94021a76ef0f00052f */

function reverse(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}