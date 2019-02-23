/* https://www.codewars.com/kata/55fd2d567d94ac3bc9000064 */

function rowSumOddNumbers(n) {
	let r = [],
		  start = n * n - (n - 1);
      
	for (var i = 0; i < n; i++) {
		r.push(start);
		start = start + 2;
	}
  
	return r.reduce((a, b) => a + b);
}