/* https://www.codewars.com/kata/55ccdf1512938ce3ac000056 */

function isLockNessMonster(s) {
  return /3\.50|th?ree fi(?:ft|dd)y/g.test(s);
}