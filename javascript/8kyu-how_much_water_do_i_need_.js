/* https://www.codewars.com/kata/575fa9afee048b293e000287 */

function howMuchWater(W,L,C){
  var A = C - L;
  while (A > 0) {
    W += W / 10;
    A--;
  }
  return L < C /2 ? 'Too much clothes' : C < L ? 'Not enough clothes' : Math.round(W * 100) / 100
}