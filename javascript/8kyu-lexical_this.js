/* https://www.codewars.com/kata/55a13556ca4a6d0ab4000003 */

var Person = function() {
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { this._friends = f }
  }
  return person;
}