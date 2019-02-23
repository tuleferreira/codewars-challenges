/* https://www.codewars.com/kata/5453dce502949307cf000bff */

function nexus(users) {
  let res = [];
  
  for (let key in users) {
    let a = +key;
    let b = users[key];
  
    if (res.length === 0) {
      res.push(a);
      res.push(b);
    }
    
    if (Math.abs(res[0] - res[1]) > Math.abs(a - b)) {
      res[0] = a;
      res[1] = b;
    }
  }
  
  return res[0];
}