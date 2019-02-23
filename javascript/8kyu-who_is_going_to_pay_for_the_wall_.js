/* https://www.codewars.com/kata/58bf9bd943fadb2a980000a7 */

function whoIsPaying(name) {
  var a = [name];
  return 2 < name.length && a.push(name[0] + name[1]), a;
}
