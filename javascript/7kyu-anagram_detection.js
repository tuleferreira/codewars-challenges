/* https://www.codewars.com/kata/529eef7a9194e0cbc1000255 */

const isAnagram = (test, original) => {
  const eq = (str) => str.toLowerCase().split('').sort().join('')
  return eq(test) === eq(original) 
};
