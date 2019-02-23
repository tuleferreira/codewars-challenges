/* https://www.codewars.com/kata/5733d6c2d780e20173000baa */

function maxMin(arr1, arr2) {
	var r = arr1.map((a, i) => Math.abs(a - arr2[i]));
	
  return [Math.max(...r), Math.min(...r)];
}