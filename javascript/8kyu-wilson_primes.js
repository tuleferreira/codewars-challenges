/* https://www.codewars.com/kata/55dc4520094bbaf50e0000cb */

function fact(num){
	return (num <= 1 ? num : num*fact(num - 1));
}

function amIWilson(p){
  var f = fact(p - 1);
  return ((f + 1) % (p * p)) == 0;
}