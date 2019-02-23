/* https://www.codewars.com/kata/556deca17c58da83c00002db */

function tribonacci(signature,n){
  if (n <= 3) return signature.slice(0, n);
  
  let newNumber = 0;
  
  while (n > 3) {    
    for (let i = signature.length - 1; i > signature.length - 4; i--) {
      newNumber += signature[i];
    }
  
    signature.push(newNumber);
    newNumber = 0;
    n--;
  }
  
  return signature;
}