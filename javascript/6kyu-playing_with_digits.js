/* https://www.codewars.com/kata/5552101f47fc5178b1000050 */

function digPow(n, p){
  let temp = n.toString().split("");
  let count = 1;
  
  for (let i = 0; i < temp.length; i++) {
    temp[i] = Math.pow(temp[i], p + i);
  }
  
  temp = temp.reduce((acc, d) => acc + +d);

  while (count * n <= temp) {
    if (count * n === temp) {
      return count;
    }
    
    count++;
  }
  
  return -1;
}