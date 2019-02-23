/* https://www.codewars.com/kata/57cff961eca260b71900008f */

function isVow(a){
  const vowels = ["a", "e", "i", "o", "u"];
  return a.map(e => vowels.includes(String.fromCharCode(e)) ? String.fromCharCode(e) : e); 
}