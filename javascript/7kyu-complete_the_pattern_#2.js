/* https://www.codewars.com/kata/55733d3ef7c43f8b0700007c */

function pattern(n) {
	let output = '';
  
	for (let i = 0; i < n; i++) {
		for (let j = n; j > i; j--) {
			output += j;
		}
		if (i !== n - 1) output += '\n';
	}
  
	return output;
}