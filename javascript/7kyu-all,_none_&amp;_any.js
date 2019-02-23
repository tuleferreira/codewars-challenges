/* https://www.codewars.com/kata/54589f3b52756d34d6000158 */

Object.assign(Array.prototype, {
  all(p) {
    for (let v of this) {
      if (!p(v)) return false;
    }
    return true;
  },
  
  none(p) {
    for (let v of this) {
      if (p(v)) return false;
    }
    return true;
  },
  
  any(p) {
    for (let v of this) {
      if (p(v)) return true;
    }
    return false;
  }
});